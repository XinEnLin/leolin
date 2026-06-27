# @leolin/ui — Design Agent Conventions

## Setup

No provider or context wrapper needed. Components use CSS class names from the imported stylesheet. Every design must load the stylesheet or components render unstyled:

```tsx
import '@leolin/ui/styles.css';
// then use components directly:
import { Button, ProjectCard, SectionTitle } from '@leolin/ui';
```

`styles.css` imports `_ds_bundle.css` which carries all tokens and component styles. Google Fonts (DM Sans, Instrument Serif, Noto Sans TC) are served at runtime — no local font files.

## Styling idiom — CSS custom properties

This DS uses CSS custom properties (`var(--*)`) for all design values. **Never use raw hex colours, `px` literals, or Tailwind classes** — they won't match the brand. For your own layout glue between components, use token names from the table below.

**Colour tokens (semantic — use these):**

| Token | Role |
|---|---|
| `var(--bg)` | Page background (white) |
| `var(--surface-card)` | Card background (off-white) |
| `var(--text)` | Primary text |
| `var(--text-secondary)` | Muted / secondary text |
| `var(--accent)` | Brand accent (rose pink #ea98b1) |
| `var(--accent-wash)` | Light accent tint |
| `var(--border)` | Subtle divider / card border |

**Typography tokens:**

| Token | Size |
|---|---|
| `var(--text-hero)` | clamp(3rem, 8vw, 7rem) |
| `var(--text-display)` | clamp(2rem, 4vw, 3.5rem) |
| `var(--text-title)` | 1.5rem |
| `var(--text-lead)` | 1.15rem |
| `var(--text-body)` | 0.9rem |
| `var(--font-display)` | Instrument Serif, serif |
| `var(--font-body)` | DM Sans, sans-serif |

**Spacing tokens:** `var(--space-1)` (0.3rem) → `var(--space-12)` (6rem) in `--space-N` steps. Sections use `var(--section-pad-y)` / `var(--section-pad-x)`.

**Radius tokens:** `var(--radius-sm)` 12px · `var(--radius-md)` 16px · `var(--radius-lg)` 20px · `var(--radius-pill)` 100px

## Where the truth lives

- All tokens: `styles.css` → `_ds_bundle.css` (read these for the full vocabulary)
- Per-component API: each `components/general/<Name>/<Name>.d.ts` and `.prompt.md`

## Idiomatic example

```tsx
import { SectionLabel, SectionTitle, ProjectCard, Button, SkillTag } from '@leolin/ui';

function WorksSection() {
  return (
    <section style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--bg)' }}>
      <SectionLabel>Selected Works</SectionLabel>
      <SectionTitle>Design that speaks for itself.</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
        <ProjectCard title="Brand Identity" description="Full identity system for a Tokyo studio." icon="✦" colorClass="default" tags={['Branding', 'Identity']} />
        <ProjectCard title="Design System" description="Scalable React component library." icon="◈" colorClass="blue" tags={['UI/UX', 'React']} />
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
        <Button variant="primary">Browse All</Button>
        <Button variant="outline">Get in Touch</Button>
      </div>
    </section>
  );
}
```
