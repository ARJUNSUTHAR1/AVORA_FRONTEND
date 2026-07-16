import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: 500, suffix: '+', label: 'Businesses Empowered', sub: 'Across India and globally' },
  { number: 20, suffix: '+', label: 'Countries Served', sub: 'NRI and international clients' },
  { number: 95, suffix: '%', label: 'Client Satisfaction', sub: 'Consistently above industry' },
  { number: 15, suffix: '+', label: 'Years Combined Expertise', sub: 'Across all service domains' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const inView = useInView(sectionRef, { once: true, margin: '-15%' })

  useEffect(() => {
    if (!inView) return

    stats.forEach((stat, i) => {
      const el = counterRefs.current[i]
      if (!el) return

      const counter = { value: 0 }
      gsap.to(counter, {
        value: stat.number,
        duration: 2.2,
        delay: i * 0.15,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(counter.value).toString()
        },
      })
    })
  }, [inView])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-avora-navy relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C9973A 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-avora-gold" />
            <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">By The Numbers</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white max-w-lg leading-tight">
            Results That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="border-t border-white/10 pt-8"
            >
              <div className="text-6xl md:text-7xl font-display font-bold text-white leading-none mb-3">
                <span ref={(el) => { counterRefs.current[i] = el }}>0</span>
                <span className="text-avora-gold">{stat.suffix}</span>
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-white/40 text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
