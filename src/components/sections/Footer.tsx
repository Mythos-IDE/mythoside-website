const links = [
  { label: 'GitHub', href: '#' },
  { label: 'License', href: '#' },
  { label: 'Discussions', href: '#' },
  { label: 'Issues', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-secondary">© 2025 Mythos</p>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-6">
            {links.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
                {index < links.length - 1 && (
                  <span className="ml-6 hidden text-text-secondary/30 sm:inline" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
