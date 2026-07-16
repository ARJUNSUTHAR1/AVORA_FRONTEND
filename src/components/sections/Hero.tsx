import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const floatVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-avora-cream flex flex-col overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-10"
        style={{
          backgroundImage:
            'linear-gradient(#0F2444 1px, transparent 1px), linear-gradient(90deg, #0F2444 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Mobile/tablet background image — full bleed at low opacity */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
      </div>

      {/* Desktop right-side image panel */}
      <div className="absolute top-0 right-0 w-[52%] h-full hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full relative"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85"
            alt="Professional skyline"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-avora-cream via-avora-cream/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-avora-cream/30 via-transparent to-avora-cream/20" />
        </motion.div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20"
      >
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="max-w-2xl">
            <motion.div
              custom={0.4}
              variants={floatVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-3 mb-8 md:mb-10"
            >
              <span className="w-8 md:w-10 h-px bg-avora-gold" />
              <span className="text-avora-gold text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                India's Premier Business Services
              </span>
            </motion.div>

            <motion.h1
              custom={0.55}
              variants={floatVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-[clamp(52px,10vw,96px)] leading-[1.0] tracking-[-0.02em] text-avora-navy mb-6 md:mb-8"
            >
              Where
              <br />
              <em className="not-italic text-avora-gold">Strategy</em>
              <br />
              Meets
              <br />
              Execution
            </motion.h1>

            <motion.p
              custom={0.7}
              variants={floatVariants}
              initial="hidden"
              animate="visible"
              className="text-avora-muted text-base md:text-xl leading-relaxed max-w-lg mb-8 md:mb-12"
            >
              One trusted partner for all your business needs — from company registration
              to global scaling. Finance, compliance, growth, and beyond.
            </motion.p>

            <motion.div
              custom={0.85}
              variants={floatVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3 md:gap-4"
            >
              <Link
                to="/services"
                className="btn-fill btn-fill-gold group flex items-center gap-2 px-5 md:px-8 py-3 md:py-4 bg-avora-navy text-white rounded-full font-semibold text-xs md:text-sm hover:bg-avora-gold transition-colors duration-300 shadow-lg shadow-avora-navy/20"
              >
                Explore Services
                <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link
                to="/about"
                className="btn-fill btn-fill-navy flex items-center gap-2 px-5 md:px-8 py-3 md:py-4 border-2 border-avora-navy text-avora-navy rounded-full font-semibold text-xs md:text-sm hover:text-white transition-colors duration-300"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-avora-navy/40 text-xs tracking-widest uppercase z-10"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Stat bubbles — desktop only */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-20 right-8 md:right-16 lg:right-[calc(52%-260px)] z-20 bg-white rounded-2xl shadow-2xl shadow-black/10 p-5 max-w-[180px] hidden lg:block"
      >
        <div className="text-4xl font-display font-bold text-avora-navy leading-none">500+</div>
        <div className="text-avora-muted text-xs mt-2 leading-snug">Businesses Empowered Globally</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-32 right-8 md:right-16 z-20 hidden lg:block bg-avora-gold rounded-2xl p-5 max-w-[150px]"
      >
        <div className="text-3xl font-display font-bold text-white leading-none">20+</div>
        <div className="text-white/80 text-xs mt-2 leading-snug">Countries Served</div>
      </motion.div>
    </section>
  )
}
