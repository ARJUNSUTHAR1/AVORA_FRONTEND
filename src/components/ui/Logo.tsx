import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoProps {
  dark?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ dark = false, className, size = 'md' }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const primaryColor = dark ? '#FFFFFF' : '#0D1B2A'
  const tanColor = '#B8A996'

  return (
    <Link
      to="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('relative flex items-center gap-2.5 group select-none shrink-0', className)}
    >
      {/* Monogram Icon */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={size === 'sm' ? '20' : size === 'lg' ? '32' : '26'}
          height={size === 'sm' ? '20' : size === 'lg' ? '32' : '26'}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Left leg (Navy / White) */}
          <path d="M8 32L21 8H26L13 32H8Z" fill={primaryColor} />
          {/* Right leg (Tan) */}
          <path d="M23 16L31 32H26L20 20L23 16Z" fill={tanColor} />
        </svg>
      </div>

      {/* Logo Text - Fixed width container preventing flex shift */}
      <div className="relative flex flex-col justify-center leading-none">
        <span
          className={cn(
            'font-display font-semibold tracking-[0.26em] uppercase transition-colors duration-200 whitespace-nowrap',
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-base sm:text-lg',
            dark ? 'text-white' : 'text-aw-navy'
          )}
        >
          AWOORAA
        </span>

        {/* Subtitle reveal on hover positioned absolutely beneath text so no layout shift occurs */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute left-0 top-full pt-1 pointer-events-none z-30 whitespace-nowrap"
            >
              <div className="flex items-center gap-1 opacity-95 bg-white/95 dark:bg-aw-navy/95 backdrop-blur-xs px-1.5 py-0.5 rounded shadow-sm border border-aw-light/40 dark:border-white/10">
                <span className="h-[0.5px] w-1.5 bg-aw-tan" />
                <span
                  className={cn(
                    'font-display font-semibold tracking-[0.14em] uppercase text-aw-tan whitespace-nowrap',
                    size === 'sm' ? 'text-[6px]' : size === 'lg' ? 'text-[9.5px]' : 'text-[7.5px]'
                  )}
                >
                  GLOBAL — PROFESSIONAL SERVICES
                </span>
                <span className="h-[0.5px] w-1.5 bg-aw-tan" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  )
}

