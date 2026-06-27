import { defineConfig } from 'tsup'
import { copyFileSync, mkdirSync } from 'fs'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  outExtension: () => ({ js: '.js' }),
  onSuccess: async () => {
    mkdirSync('dist', { recursive: true })
    copyFileSync('src/styles.css', 'dist/styles.css')
    console.log('Copied styles.css → dist/styles.css')
  },
})
