import React from 'react'

export interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={['section-label', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
