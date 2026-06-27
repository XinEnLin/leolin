import React from 'react'

export interface SkillTagProps {
  children: React.ReactNode
  href?: string
  className?: string
}

export function SkillTag({ children, href, className = '' }: SkillTagProps) {
  const cls = ['skill-tag', className].filter(Boolean).join(' ')
  if (href) {
    return <a href={href} className={cls}>{children}</a>
  }
  return <span className={cls}>{children}</span>
}
