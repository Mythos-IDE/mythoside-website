import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-card border border-border rounded-xl p-6 ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-0.5 hover:border-text-secondary/30'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
