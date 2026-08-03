import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Building2, Rocket, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const segments = [
  {
    icon: Rocket,
    title: 'Startups & Founders',
    headline: 'Build it right from day one.',
    body: 'Most startups spend their first year firefighting admin. We handle the foundation — company setup, GST, banking, accounting — so you focus on your product and customers, not paperwork.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
    tags: ['Company Registration', 'GST Setup', 'Startup CFO', 'Banking Support'],
    location: 'Early Stage & Growth Startups',
  },
  {
    icon: Building2,
    title: 'Small & Medium Enterprises',
    headline: 'Scale without the growing pains.',
    body: 'At 20 employees it\'s manageable. At 80 it\'s chaos — if you\'re not prepared. We grow with you: virtual CFO, ROC compliance, digital platforms, payroll, HR — all under one roof.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80',
    tags: ['Virtual CFO', 'ROC Compliance', 'Payroll', 'Digital Platforms'],
    location: 'Growing Businesses & SMEs',
  },
  {
    icon: Globe,
    title: 'NRIs & Global Clients',
    headline: 'Seamless global business execution.',
    body: 'Whether you\'re an NRI investing back home or an international company expanding into new markets — we bridge the gap with FDI advisory, entity setup, land acquisition, and cross-border tax.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
    tags: ['FDI Advisory', 'Cross-border Tax', 'Entity Setup', 'Land Acquisition'],
    location: 'International & NRI Clients',
  },
]

export default function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="aw-container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-aw-tan" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Who We Serve</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-aw-navy leading-tight max-w-md">
              Every Stage.<br />
              <span className="font-semibold italic text-gradient-tan">Every Business.</span>
            </h2>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 text-aw-navy text-sm font-medium hover:text-aw-tan transition-colors group self-start link-underline"
            >
              Find Your Solution <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {segments.map((seg, i) => {
            const Icon = seg.icon
            return (
              <motion.div
                key={seg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 + i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-[460px] sm:h-[500px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={seg.image}
                    alt={seg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'saturate(0.85) brightness(0.85)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-[#0D1B2A]/10" />
                </div>

                {/* Subtle Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-aw-tan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7 z-10">
                  <div className="flex items-center gap-2 mb-2 text-aw-tan text-xs font-medium">
                    <Icon className="w-3.5 h-3.5" />
                    <span className="tracking-wider uppercase text-[10px] font-semibold">{seg.location}</span>
                  </div>

                  <div className="group-hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="font-display font-semibold text-xl text-white mb-1">{seg.title}</h3>
                    <p className="font-display font-medium text-sm text-aw-tan mb-3">{seg.headline}</p>
                    <p className="text-white/60 text-xs leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-400 font-normal">
                      {seg.body}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {seg.tags.map((t) => (
                        <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/15 backdrop-blur-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mt-4 text-aw-tan text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Get Started <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
