import React from 'react'
import { SectionLabel } from '@leolin/ui'

export const Chinese = () => (
  <div style={{ padding: '2rem' }}>
    <SectionLabel>作品集</SectionLabel>
  </div>
)

export const English = () => (
  <div style={{ padding: '2rem' }}>
    <SectionLabel>Selected Works</SectionLabel>
  </div>
)

export const InContext = () => (
  <div style={{ padding: '2rem' }}>
    <SectionLabel>關於我</SectionLabel>
    <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Paired with body content below the label</div>
  </div>
)
