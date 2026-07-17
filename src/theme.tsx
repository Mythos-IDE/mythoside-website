import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Theme = 'light' | 'dark'

type ThemeCtx = { theme: Theme; toggle: () => void }
const Ctx = createContext<ThemeCtx>({ theme: 'dark', toggle: () => {} })

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // `undefined` means "follow the system preference" (no data-theme attribute set).
  const [theme, setTheme] = useState<Theme | undefined>(undefined)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mythos-theme')
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
      }
    } catch { /* ignore */ }
  }, [])

  const toggle = () => {
    const current = theme ?? systemTheme()
    const next: Theme = current === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('mythos-theme', next) } catch { /* ignore */ }
  }

  return <Ctx.Provider value={{ theme: theme ?? 'dark', toggle }}>{children}</Ctx.Provider>
}

export function useTheme() {
  return useContext(Ctx)
}

const Moon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
)
const Sun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2.4M12 19.6V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.4M19.6 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
  </svg>
)

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  // Read the live attribute so the icon matches even when following the system preference.
  const [effective, setEffective] = useState<Theme>('dark')
  useEffect(() => {
    const attr = document.documentElement.getAttribute('data-theme')
    setEffective(attr === 'light' || attr === 'dark' ? attr : systemTheme())
  }, [theme])

  return (
    <button type="button" className="theme-toggle" aria-label="Toggle theme" onClick={toggle}>
      {effective === 'light' ? <Sun /> : <Moon />}
    </button>
  )
}
