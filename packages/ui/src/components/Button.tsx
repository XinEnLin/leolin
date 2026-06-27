import React from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: React.MouseEventHandler<HTMLElement>
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const cls = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} disabled={disabled}>
      {children}
    </button>
  )
}
