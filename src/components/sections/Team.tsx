import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const team = [
  { name: 'Yash', role: 'Head of Accounting', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80' },
  { name: 'Indrajeet', role: 'Growth & Outreach', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Neha', role: 'Sales Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
  { name: 'Ankit', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Ganesh', role: 'Business Development', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Manas', role: 'Real Estate Advisory', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
  { name: 'Arjun', role: 'Technology Lead', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80' },
]

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-avora-navy">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-avora-gold" />
            <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">Our Strength</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl text-white leading-tight max-w-xl">
              The Team Behind<br />
              <em className="not-italic text-avora-gold">Every Success</em>
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-xs leading-relaxed">
              Finance, compliance, marketing, technology, and real estate — combined under one professional ecosystem.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.08 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-avora-navy-light">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="text-white font-semibold text-sm">{member.name}</div>
              <div className="text-white/40 text-xs mt-0.5">{member.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
