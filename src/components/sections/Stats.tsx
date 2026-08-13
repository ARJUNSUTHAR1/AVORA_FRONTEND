import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { Globe2 } from 'lucide-react'

const stats = [
  { number: 500, suffix: '+', label: 'Businesses Empowered', sub: 'Worldwide clients & growth' },
  { number: 20, suffix: '+', label: 'Countries Served', sub: 'Global operations & NRI clients' },
  { number: 98, suffix: '%', label: 'Client Retention', sub: 'Long-term trusted partnerships' },
  { number: 15, suffix: '+', label: 'Years Combined Expertise', sub: 'Finance, Digital & People' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const inView = useInView(ref, { once: true, margin: '-15%' })

  useEffect(() => {
    if (!inView) return
    stats.forEach((s, i) => {
      const el = counterRefs.current[i]
      if (!el) return
      const obj = { v: 0 }
      gsap.to(obj, {
        v: s.number, duration: 2.0, delay: i * 0.12, ease: 'power3.out',
        onUpdate: () => { el.textContent = Math.round(obj.v).toString() },
      })
    })
  }, [inView])

  return (
    <section ref={ref} className="py-20 md:py-32 bg-aw-navy relative overflow-hidden">
      {/* 21stdev Modern Dark Grid Background */}
      <div className="absolute inset-0 modern-grid-dark opacity-30 pointer-events-none" />
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-aw-tan/[0.04] rounded-full blur-[110px] pointer-events-none" />

      <div className="aw-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-aw-tan" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">By The Numbers</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white max-w-sm leading-tight">
              Results That Build<br />
              <span className="font-semibold italic text-gradient-tan">Long-Term Trust</span>
            </h2>
            <p className="text-white/40 text-sm font-normal max-w-xs leading-relaxed">
              Measurable outcomes speak louder than words. Here is the global scale of our impact.
            </p>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 mb-10 pb-10 border-b border-white/[0.08]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="lg:border-r border-white/[0.08] last:border-r-0 lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-none text-white mb-2">
                <span ref={(el) => { counterRefs.current[i] = el }}>0</span>
                <span className="text-gradient-tan">{s.suffix}</span>
              </div>
              <div className="text-white font-medium text-sm mb-1">{s.label}</div>
              <div className="text-white/40 text-xs font-normal">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Clean Global Footprint Banner (City pills list removed completely) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-2 text-white/50 text-xs font-medium"
        >
          <Globe2 className="w-4 h-4 text-aw-tan shrink-0" />
          <span>Worldwide Service Operations · Serving Clients Across India, North America,Dubai,Canada, Europe & Global Markets</span>
        </motion.div>
      </div>
    </section>
  )
}
