import React from 'react'
import { Button } from '@leolin/ui'

export const Primary = () => (
  <div style={{ display: 'flex', gap: '1rem', padding: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary">瀏覽作品</Button>
    <Button variant="primary">Browse Work</Button>
  </div>
)

export const Outline = () => (
  <div style={{ display: 'flex', gap: '1rem', padding: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="outline">聯繫我</Button>
    <Button variant="outline">Contact</Button>
  </div>
)

export const BothVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', padding: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary Action</Button>
    <Button variant="outline">Secondary</Button>
  </div>
)

export const AsLink = () => (
  <div style={{ display: 'flex', gap: '1rem', padding: '2rem', alignItems: 'center' }}>
    <Button href="#projects" variant="primary">View Projects ↗</Button>
    <Button href="#contact" variant="outline">Get in Touch</Button>
  </div>
)

export const Disabled = () => (
  <div style={{ display: 'flex', gap: '1rem', padding: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary" disabled>Sending…</Button>
    <Button variant="outline" disabled>Not available</Button>
  </div>
)
