import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', ...rest } = props

  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer'

  const variants = {
    primary:
      'bg-accent text-bg hover:bg-white/90 active:scale-[0.98]',
    secondary:
      'bg-transparent text-text-primary border border-border hover:border-text-secondary hover:bg-white/[0.03] active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2 gap-2',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink
    return (
      <a href={href} className={classes} {...anchorRest}>
        {rest.children}
      </a>
    )
  }

  const buttonRest = rest as ButtonAsButton
  return (
    <button className={classes} {...buttonRest}>
      {rest.children}
    </button>
  )
}
