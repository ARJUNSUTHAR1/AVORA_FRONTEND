import { motion } from 'framer-motion'
import Team from '@/components/sections/Team'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { title: 'Professional Excellence', description: 'Delivering high-quality, reliable services across every domain with zero compromise on standards.' },
  { title: 'Entrepreneur Empowerment', description: 'Removing barriers so founders can focus on building their businesses, not navigating complexity.' },
  { title: 'Trust-Based Relationships', description: 'Every client relationship is built on transparency, integrity, and long-term value — not short-term transactions.' },
  { title: 'Scalable Partnership', description: 'A platform designed to grow with our clients, from their first GST registration to their tenth country expansion.' },
]

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=85"
            alt="Avora team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-avora-navy" style={{ opacity: 0.85 }} />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-avora-gold" />
              <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">Our Story</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl xl:text-8xl text-white leading-tight max-w-4xl mb-8">
              Building India's Next<br />
              <em className="not-italic text-avora-gold">Professional Services Company</em>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              We are not building another accounting firm. We are building a company that helps businesses grow — combining finance, compliance, marketing, technology, and real estate into one professional ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-avora-cream">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-avora-gold" />
                <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">Our Vision</span>
              </div>
              <h2 className="font-display text-5xl text-avora-navy leading-tight mb-6">
                A Modern Consulting Company for Every Entrepreneur
              </h2>
              <p className="text-avora-muted leading-relaxed mb-6">
                Every entrepreneur asks the same questions: Where do I register my company? How do I manage accounting? Who will file my GST and ITR? How do I expand internationally?
              </p>
              <p className="text-avora-muted leading-relaxed mb-6">
                Most businesses work with 5–10 different service providers to answer these questions. We believe there's a better way — one trusted partner who knows your business inside out, across every domain.
              </p>
              <p className="text-avora-muted leading-relaxed">
                That's Avora & Co. We help businesses start, manage, grow, and scale — all under one roof.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-4"
            >
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-avora-cream-dark"
                >
                  <h3 className="font-display text-xl text-avora-navy mb-2">{value.title}</h3>
                  <p className="text-avora-muted text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Team />

      <section className="py-24 px-6 md:px-12 bg-avora-cream">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-5xl text-avora-navy mb-6">Ready to Start?</h2>
            <p className="text-avora-muted text-lg max-w-lg mx-auto mb-10">
              Join hundreds of businesses that have chosen Avora & Co as their trusted partner.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-avora-navy text-white rounded-full font-bold text-sm hover:bg-avora-navy-light transition-colors duration-200 group"
            >
              Get in Touch <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
