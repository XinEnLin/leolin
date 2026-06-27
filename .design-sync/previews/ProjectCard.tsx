import React from 'react'
import { ProjectCard } from '@leolin/ui'

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '360px' }}>
    <ProjectCard
      title="Brand Identity"
      description="A comprehensive identity system including logo, typography, and visual language for a Tokyo-based studio."
      tags={['Branding', 'Identity']}
      icon="✦"
      colorClass="default"
    />
  </div>
)

export const Blue = () => (
  <div style={{ padding: '2rem', maxWidth: '360px' }}>
    <ProjectCard
      title="Design System"
      description="A scalable React component library with accessible foundations and a comprehensive token system."
      tags={['UI/UX', 'React', 'Tokens']}
      icon="◈"
      colorClass="blue"
    />
  </div>
)

export const Purple = () => (
  <div style={{ padding: '2rem', maxWidth: '360px' }}>
    <ProjectCard
      title="Art Direction"
      description="Visual storytelling across digital and print — editorial layouts, cover art, and campaign imagery."
      tags={['Art Direction', 'Print']}
      icon="✧"
      colorClass="purple"
    />
  </div>
)

export const AllColors = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', padding: '2rem', maxWidth: '760px' }}>
    <ProjectCard title="Mobile App" description="End-to-end UX for a wellness tracking app." tags={['UX', 'Mobile']} icon="○" colorClass="green" />
    <ProjectCard title="E-commerce" description="Conversion-focused redesign of a fashion retailer." tags={['UI', 'Web']} icon="□" colorClass="orange" />
    <ProjectCard title="3D Explore" description="Immersive spatial UI for an architecture firm." tags={['3D', 'Web']} icon="△" colorClass="red" />
    <ProjectCard title="Typography" description="Custom typeface design for a publishing house." tags={['Type', 'Print']} icon="Aa" colorClass="blue" />
  </div>
)
