import React from 'react'

export interface NavLink {
  label: string
  href: string
}

export interface NavbarProps {
  logo?: React.ReactNode
  logoHref?: string
  links?: NavLink[]
  className?: string
}

export function Navbar({ logo, logoHref = '/', links = [], className = '' }: NavbarProps) {
  return (
    <nav className={['navbar', className].filter(Boolean).join(' ')}>
      {logo && (
        <a href={logoHref} className="nav-logo">
          {logo}
        </a>
      )}
      {links.length > 0 && (
        <div className="nav-links">
          {links.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
