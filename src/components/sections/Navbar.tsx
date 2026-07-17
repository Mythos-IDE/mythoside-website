import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'

function StarIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ExternalLinkIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function LogoMark() {
  return (
    <img src="/logo.png" alt="Mythos Logo" className="w-7 h-7 object-contain" />
  )
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Philosophy', href: '#philosophy' },
  {
    label: 'GitHub',
    href: '#',
    external: true,
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 border-b border-border/50'
          : 'bg-bg/40 border-b border-transparent'
      }`}
    >
      <div className="w-full mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 text-text-primary">
          <LogoMark />
          <span className="font-medium text-base">Mythos</span>
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center gap-1.5"
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
              {link.external && <ExternalLinkIcon className="opacity-50" />}
            </a>
          ))}
        </div>

        {/* CTA */}
        <Button variant="secondary" size="sm" href="#">
          <StarIcon />
          Star on GitHub
        </Button>
      </div>
    </nav>
  )
}
