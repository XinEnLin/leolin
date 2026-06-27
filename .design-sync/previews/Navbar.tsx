import React from 'react'
import { Navbar } from '@leolin/ui'

// transform: translateZ(0) creates a containing block so position:fixed
// children are clipped to this ancestor instead of the viewport.
const NavWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ transform: 'translateZ(0)', height: '80px', overflow: 'hidden', position: 'relative' }}>
    {children}
  </div>
)

const links = [
  { label: '關於', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '經歷', href: '#experience' },
  { label: '聯繫', href: '#contact' },
]

const Logo = () => (
  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
    Leo Lin
  </span>
)

export const WithLogo = () => (
  <NavWrapper>
    <Navbar logo={<Logo />} logoHref="/" links={links} />
  </NavWrapper>
)

export const LinksOnly = () => (
  <NavWrapper>
    <Navbar links={links} />
  </NavWrapper>
)

export const LogoOnly = () => (
  <NavWrapper>
    <Navbar logo={<Logo />} logoHref="/" />
  </NavWrapper>
)
