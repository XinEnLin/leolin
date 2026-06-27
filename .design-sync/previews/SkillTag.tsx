import React from 'react'
import { SkillTag } from '@leolin/ui'

export const Single = () => (
  <div style={{ padding: '2rem' }}>
    <SkillTag>UI Design</SkillTag>
  </div>
)

export const Cloud = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', padding: '2rem', maxWidth: '480px' }}>
    <SkillTag>Figma</SkillTag>
    <SkillTag>React</SkillTag>
    <SkillTag>TypeScript</SkillTag>
    <SkillTag>Motion Design</SkillTag>
    <SkillTag>Brand Identity</SkillTag>
    <SkillTag>CSS</SkillTag>
    <SkillTag>Illustration</SkillTag>
  </div>
)

export const AsLinks = () => (
  <div style={{ display: 'flex', gap: '0.75rem', padding: '2rem', flexWrap: 'wrap' }}>
    <SkillTag href="#">Photography</SkillTag>
    <SkillTag href="#">Typography</SkillTag>
    <SkillTag href="#">Art Direction</SkillTag>
  </div>
)
