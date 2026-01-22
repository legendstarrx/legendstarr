'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  external?: boolean
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  external = false
}: ButtonProps) {
  const baseClasses = 'relative inline-block px-10 py-5 font-bold text-center transition-all duration-300 rounded-lg overflow-hidden group'
  
  const variantClasses = variant === 'primary' 
    ? 'bg-gradient-to-r from-gold via-gold-400 to-gold text-black shadow-lg shadow-gold/50 hover:shadow-xl hover:shadow-gold/70' 
    : 'border-2 border-gold text-gold bg-black/50 backdrop-blur-sm hover:bg-gold/10'
  
  const classes = `${baseClasses} ${variantClasses} ${className}`

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      )}
    </>
  )

  if (href) {
    if (external) {
      return (
        <motion.a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={classes}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {buttonContent}
        </motion.a>
      )
    }
    return (
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} className={classes}>
          {buttonContent}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button 
      onClick={onClick} 
      className={classes}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  )
}
