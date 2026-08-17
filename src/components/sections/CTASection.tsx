import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section ref={ref} className="relative py-32 md:py-40 overflow-hidden bg-[#04070F]">
      <div className="absolute inset-0 bg-gradient-to-br from-avora-navy/[0.4] via-transparent to-avora-gold/[0.04] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-avora-gold animate-pulse" />
          <span className="text-white/60 text-xs tracking-[0.15em] uppercase">One Partner. Every Solution.</span>
        </div>

        <h2 className="font-display text-6xl md:text-8xl text-white leading-[1.02] tracking-tight mb-8">
          Ready to Build<br />
          <em className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-avora-gold via-amber-300 to-avora-gold">
            Your Business?
          </em>
        </h2>

        <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12">
          Join 500+ businesses that trust International Finance & Accounting Advisory Firm for their finance, compliance, growth, and advisory needs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-fill btn-fill-white group flex items-center gap-2 px-10 py-5 bg-avora-gold text-avora-navy rounded-full font-bold text-base hover:text-avora-navy transition-colors duration-300 shadow-xl shadow-avora-gold/20"
          >
            Start a Conversation
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="btn-fill btn-fill-white flex items-center gap-2 px-10 py-5 border-2 border-white/20 text-white rounded-full font-semibold text-base hover:text-avora-navy transition-colors duration-300"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
