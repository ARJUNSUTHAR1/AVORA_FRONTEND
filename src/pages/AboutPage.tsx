import { motion } from 'framer-motion'
import Team from '@/components/sections/Team'
import GlobalPresence from '@/components/sections/GlobalPresence'
import { ArrowUpRight, MapPin, Building2, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '@/components/ui/Logo'

const values = [
  { num: '01', title: 'Value Over Volume', description: 'We don\'t chase numbers. Every client relationship is built for the long term — your growth is our metric.' },
  { num: '02', title: 'Radical Transparency', description: 'No hidden fees. No vague timelines. You always know exactly what we\'re working on and what it costs.' },
  { num: '03', title: 'Expertise At Scale', description: 'From setup to global expansion — our Finance, Digital, and People expertise grows with you.' },
  { num: '04', title: 'Named Accountability', description: 'You don\'t get a faceless team. You get a named domain lead responsible for your outcomes.' },
]

const offices = [
  {
    city: 'Worldwide (USA, Canada, UK, Europe, Australia, Dubai)',
    label: 'Worldwide Services',
    sub: 'Serving Clients Internationally (USA, Canada, UK, Europe, Australia, Dubai)',
    icon: Globe,
    desc: 'Serving businesses across India, North America, Canada, Europe, Middle East, and Southeast Asia.',
  },
  {
    city: 'Mumbai',
    label: 'Head Office',
    sub: 'Mumbai, Maharashtra, India',
    icon: Building2,
    desc: 'Primary corporate headquarters overseeing global operations, finance, and enterprise strategy.',
  },
  {
    city: 'Chittorgarh',
    label: 'Branch Office',
    sub: 'Chittorgarh, Rajasthan, India',
    icon: MapPin,
    desc: 'Regional center supporting corporate compliance, operations, and North-West business solutions.',
  },
  {
    city: 'Nagpur',
    label: 'Branch Office',
    sub: 'Nagpur, Maharashtra, India',
    icon: MapPin,
    desc: 'Central India office focused on business consulting, strategy, and regional client support.',
  },
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
      {/* Hero Header: Why We Exist */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-aw-navy">
        <div className="absolute inset-0 modern-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 aw-container py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Logo dark size="lg" className="mb-6" />
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-aw-tan" />
              <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Why We Exist</span>
            </div>
            <h1 className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-white leading-tight max-w-3xl mb-6">
              Why We Exist.<br />
              <span className="font-semibold italic text-gradient-tan">Your Trusted Global Partner.</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-normal">
              Global Professional Services was founded on a simple conviction: growing companies deserve a single integrated partner across Finance, Digital, and People — not fragmented advisors.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/contact" className="flex items-center gap-2 px-7 py-3.5 bg-aw-tan text-aw-navy rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-aw-tan-light transition-colors shadow-sm">
                Start a Conversation <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-full font-semibold text-xs tracking-wider uppercase hover:border-white/50 transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-20 px-6 md:px-12 bg-aw-cream">
        <div className="aw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-aw-tan" />
                <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Our Mission</span>
              </div>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-aw-navy leading-tight mb-5">
                Integrated Business Excellence Across Globe
              </h2>
              <p className="text-aw-slate leading-relaxed mb-4 text-sm font-normal">
                Every business leader faces similar challenges: How do I maintain audit-ready bookkeeping and tax compliance? How do I build digital products that scale? How do I hire and manage payroll seamlessly?
              </p>
              <p className="text-aw-slate leading-relaxed mb-4 text-sm font-normal">
                Working with separate agencies leads to communication gaps and hidden costs. Awooraa brings all three pillars into one unified ecosystem.
              </p>
              <p className="text-aw-slate leading-relaxed text-sm font-normal">
                <strong className="text-aw-navy font-semibold">One partner. Full visibility. Direct accountability.</strong>
              </p>
            </motion.div>

            <div className="space-y-3">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-5 bg-white rounded-xl border border-aw-light shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-aw-tan font-display font-semibold text-lg">{v.num}</span>
                    <div>
                      <h3 className="font-display font-semibold text-aw-navy text-base mb-1">{v.title}</h3>
                      <p className="text-aw-slate text-xs leading-relaxed font-normal">{v.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Physical Offices + Global Network */}
      <section className="py-16 bg-white border-t border-aw-light">
        <div className="aw-container">
          <div className="mb-10">
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase block mb-2">Our Company Offices</span>
            <h2 className="font-display font-light text-3xl text-aw-navy">Serving Clients <span className="font-semibold italic text-gradient-tan">Globally</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map((off) => {
              const Icon = off.icon
              return (
                <div key={off.city} className="p-6 rounded-2xl border border-aw-light bg-aw-cream/40 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-aw-navy/5 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-aw-navy" />
                    </div>
                    <span className="text-aw-tan text-xs font-semibold uppercase tracking-wider block mb-1">{off.label}</span>
                    <h4 className="font-display font-semibold text-aw-navy text-xl mb-1">{off.city}</h4>
                    <p className="text-aw-slate text-xs font-medium mb-3">{off.sub}</p>
                    <p className="text-aw-slate text-xs leading-relaxed font-normal">{off.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <GlobalPresence />
      <Team />
    </motion.div>
  )
}
