import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoProps {
  dark?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Logo({ dark = false, className, size = 'md' }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link
      to="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('relative flex items-center gap-2.5 group select-none shrink-0', className)}
    >
      {/* Brand Logo Image */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Global Professional Services Logo"
          className={cn(
            "transition-transform duration-300 group-hover:scale-105 object-contain",
            size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : size === 'xl' ? 'w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24' : 'w-10 h-10'
          )}
        />
      </div>

      {/* Logo Text - Fixed width container preventing flex shift */}
      <div className="relative flex flex-col justify-center leading-none">
        <span
          className={cn(
            'font-display font-semibold tracking-[0.26em] uppercase transition-colors duration-200 whitespace-nowrap pr-[0.26em]',
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-base sm:text-lg',
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
                    size === 'sm' ? 'text-[6px]' : size === 'md' ? 'text-[7.5px]' : size === 'lg' ? 'text-[9.5px]' : 'text-[9px] sm:text-[11px] md:text-[13px]'
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

