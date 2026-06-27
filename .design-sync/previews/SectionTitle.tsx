import React from 'react'
import { SectionTitle } from '@leolin/ui'

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <SectionTitle>
      Design that<br />
      <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>speaks for itself.</em>
    </SectionTitle>
  </div>
)

export const Simple = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <SectionTitle>Selected Projects</SectionTitle>
  </div>
)

export const AsH3 = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <SectionTitle as="h3">Experience & Skills</SectionTitle>
  </div>
)
