import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, TrendingUp, Cpu, Users, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const trustPoints = [
  'Empowering growth for clients worldwide',
  '500+ businesses served globally',
  'Free 30-min discovery call',
]

const pillars = [
  { icon: TrendingUp, label: 'Finance', color: '#B8A996', href: '/finance' },
  { icon: Cpu, label: 'Digital', color: '#334155', href: '/digital' },
  { icon: Users, label: 'People', color: '#64748B', href: '/people' },
]

const stats = [
  { value: '500+', label: 'Businesses' },
  { value: '20+', label: 'Countries' },
  { value: '98%', label: 'Retention' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen bg-aw-cream overflow-hidden flex flex-col justify-between"
    >
      {/* Modern Subtle Grid Background with Radial Glow Mask */}
      <div className="absolute inset-0 modern-grid radial-mask opacity-80 pointer-events-none" />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-aw-tan/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-aw-mid/[0.04] blur-[100px] pointer-events-none" />

      {/* Desktop Architectural Corporate Building Image Panel */}
      <div className="absolute top-0 right-0 w-[46%] h-full hidden lg:block pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="h-full relative"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85"
            alt="Global Professional Services Headquarters"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aw-cream via-aw-cream/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-aw-cream/40 via-transparent to-aw-cream/50" />
        </motion.div>
      </div>

      {/* Mobile Screen Background: Architectural Building with Low Opacity strictly matching request */}
      <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=75"
          alt=""
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-aw-cream/80 via-aw-cream/90 to-aw-cream" />
      </div>

      {/* Main Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex-1 flex items-center pt-24 sm:pt-28 pb-12"
      >
        <div className="aw-container w-full">
          <div className="max-w-[560px]">

            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="aw-pill font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-aw-tan animate-pulse" />
                Global Professional Services
              </span>
            </motion.div>

            {/* Refined Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display font-light text-[clamp(36px,6.5vw,72px)] leading-[1.06] tracking-[-0.02em] text-aw-navy mb-6"
            >
              Your Business,<br />
              <span className="font-semibold italic text-gradient-tan">Brilliantly</span><br />
              <span className="font-normal">Managed.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-aw-slate text-base md:text-lg font-normal leading-relaxed max-w-[460px] mb-6"
            >
              Finance, Digital & People — three essential pillars built to scale your business with absolute clarity and control.
            </motion.p>

            {/* Global Trust Points — City names completely removed */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-2.5 mb-8"
            >
              {trustPoints.map((pt) => (
                <div key={pt} className="flex items-center gap-2.5 text-sm font-medium text-aw-mid">
                  <CheckCircle2 className="w-4 h-4 text-aw-tan shrink-0" />
                  {pt}
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <Link
                to="/contact"
                className="btn-aw btn-aw-tan flex items-center gap-2 px-7 py-3.5 bg-aw-navy text-white rounded-full font-medium text-xs tracking-wider uppercase hover:text-aw-navy shadow-premium transition-colors duration-300"
              >
                Talk to an Expert
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="btn-aw btn-aw-navy flex items-center gap-2 px-7 py-3.5 border border-aw-navy/40 text-aw-navy rounded-full font-medium text-xs tracking-wider uppercase hover:text-white transition-colors duration-300"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Hero Stats Footer Bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 border-t border-aw-light/60 bg-white/80 backdrop-blur-md py-4 sm:py-5 overflow-hidden"
      >
        <div className="aw-container flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-2 sm:gap-6 md:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 text-center sm:text-left">
                <span className="font-display font-semibold text-lg sm:text-2xl md:text-3xl text-aw-navy">{s.value}</span>
                <span className="text-aw-slate text-[11px] sm:text-xs font-medium whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 w-full sm:w-auto">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <Link
                  key={p.label}
                  to={p.href}
                  className="flex items-center gap-1.5 bg-white border border-aw-light rounded-full px-3 sm:px-3.5 py-1.5 shadow-card hover:border-aw-tan/60 hover:shadow-md transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: p.color }} />
                  <span className="font-medium text-aw-navy text-xs whitespace-nowrap">{p.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </motion.div>

      <div className="hidden lg:flex absolute bottom-16 right-10 flex-col items-center gap-1 text-aw-slate/30 text-[9px] tracking-widest uppercase pointer-events-none">
        <span>Scroll</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </div>
    </section>
  )
}
