import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Founder() {
  return (
    <section className="py-20 md:py-32 bg-aw-navy relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 modern-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-aw-tan/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="aw-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left side: Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <img
                src="/neha.jpeg"
                alt="Neha Rathor - Founder & Managing Director"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A11] via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-display text-2xl font-semibold mb-1">Neha Rathor</h3>
                <p className="text-aw-tan text-sm font-medium tracking-wide">Founder & Managing Partner</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-white/10 rounded-full blur-[1px] pointer-events-none" />
          </motion.div>

          {/* Right side: Founder Letter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-aw-tan" />
              <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Letter from the Founder</span>
            </div>

            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-8">
              "We don't just advise on growth.<br />
              <span className="font-semibold italic text-gradient-tan">We engineer it.</span>"
            </h2>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/5 -rotate-12" />

              <div className="space-y-5 text-white/70 text-sm md:text-base leading-relaxed font-normal relative z-10">
                <p>
                  When we started Awooraa Global, the vision was clear: to eliminate the friction businesses face when scaling. Growing a company shouldn't mean managing a dozen fragmented agencies for finance, technology, legal, and people operations.
                </p>
                <p>
                  True enterprise value is created when strategy and execution align perfectly. That's why we've built a unified ecosystem of experts under one roof. We take accountability for your most critical operational pillars, allowing you to focus on what you do best — leading your industry.
                </p>
                <p>
                  Our commitment is absolute integrity, transparent communication, and relentless pursuit of your business objectives. Your success is our definitive metric.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
              <img src="/signature.png" alt="Signature" className="h-12 opacity-80 invert" onError={(e) => e.currentTarget.style.display = 'none'} />
              <div>
                <p className="text-white font-semibold text-sm">Neha Rathor</p>
                <p className="text-white/40 text-xs">Founder & Managing Partner</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
