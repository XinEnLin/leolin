import React from 'react'

export interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function SectionTitle({ children, className = '', as: Tag = 'h2' }: SectionTitleProps) {
  return (
    <Tag className={['section-title', className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  )
}
