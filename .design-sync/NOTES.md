# Design-sync notes — @leolin/ui

## Repo facts
- Package lives at `packages/ui/` inside the Astro portfolio site repo (`D:\Projects\leolin`)
- Source shape: `package` (no Storybook)
- Build entry: `packages/ui/dist/index.js` (tsup ESM output)
- CSS entry: auto-detected as `packages/ui/dist/styles.css` (8 KB) — no `cssEntry` override needed
- Node modules: `packages/ui/node_modules/`
- Converter: run from repo root, `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules packages/ui/node_modules --entry packages/ui/dist/index.js --out ./ds-bundle`

## Build command
```
cd packages/ui && npm run build
```
(tsup ESM, copies `src/styles.css` → `dist/styles.css`)

## Fonts
Served at runtime from Google Fonts CDN (DM Sans, Instrument Serif, Noto Sans TC, Noto Serif TC). Suppressed via `runtimeFontPrefixes` — no font files shipped with the bundle. Preview screenshots show fonts loading correctly.

## Navbar fixed-position quirk
`Navbar` uses `position: fixed` CSS, which escapes card grid cells. Workaround applied:
- `cfg.overrides.Navbar: {"cardMode": "single", "primaryStory": "WithLogo"}`
- Preview TSX wraps Navbar in `<div style="transform: translateZ(0); height: 80px; overflow: hidden">` — this creates a containing block for the fixed descendant.
- Graded `good` in all 3 stories.

## Known render warns
- `[GRID_OVERFLOW] Navbar` — fixed/portal (expected, resolved via `cardMode: single`)

## Re-sync checklist
Before re-syncing:
1. `cd packages/ui && npm run build` (if source changed)
2. Re-copy scripts: `cp -r <skill-base-dir>/{package-build.mjs,package-validate.mjs,package-capture.mjs,resync.mjs,lib,storybook} .ds-sync/`
3. Fetch remote anchor: `DesignSync(get_file, "_ds_sync.json")` → `.design-sync/.cache/remote-sync.json`
4. Run: `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules packages/ui/node_modules --entry packages/ui/dist/index.js --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json`

## Re-sync risks
- **Navbar preview**: if the Navbar CSS `position: fixed` is changed to `sticky`/`relative`, the `transform: translateZ(0)` wrapper in `previews/Navbar.tsx` becomes irrelevant but harmless. If it's removed entirely (e.g. positioning left to the app), the preview wrapper should be updated too.
- **Google Fonts URL**: the `@import url(https://fonts.googleapis.com/...)` in `src/styles.css` loads at runtime. If fonts change (family names, weights), update `runtimeFontPrefixes` in config to match the new family names.
- **Component CSS classes**: components use plain CSS class names (no CSS modules). If class names change in source, they must also be updated in `src/styles.css` — there's no automatic coupling between component TSX and CSS.
- **Previews tied to content**: `previews/ProjectCard.tsx` uses example content (project titles, descriptions) that won't automatically update when the site content changes — previews are composition examples, not live data.
