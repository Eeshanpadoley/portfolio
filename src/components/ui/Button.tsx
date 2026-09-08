import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  const base = 'px-5 py-2 rounded-full font-medium transition-all duration-200 inline-flex items-center justify-center'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-[1.02]'
      : 'bg-transparent border border-white/10 text-white hover:bg-white/5 theme-ghost-button'
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  )
}
