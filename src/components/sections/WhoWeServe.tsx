import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const segments = [
  {
    title: 'Startups & Entrepreneurs',
    description:
      'From your first idea to first revenue — we guide new ventures through every legal, financial, and operational milestone.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80',
    tags: ['Company Registration', 'GST Setup', 'Banking', 'Brand Strategy'],
  },
  {
    title: 'Small & Medium Businesses',
    description:
      'Supporting growing companies with compliance, financial management, and marketing strategies that scale with your ambitions.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80',
    tags: ['Virtual CFO', 'ROC Compliance', 'Digital Marketing', 'Consulting'],
  },
  {
    title: 'NRIs & International Clients',
    description:
      "Helping global clients navigate India's complex regulatory and business landscape with local expertise and international standards.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
    tags: ['FDI Advisory', 'Cross-border Tax', 'Land Acquisition', 'Entity Setup'],
  },
]

export default function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-avora-gold" />
            <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">Who We Serve</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl text-avora-navy leading-tight max-w-lg">
              Built for Every<br />
              <em className="not-italic text-avora-gold">Business Stage</em>
            </h2>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-avora-navy font-semibold text-sm hover:text-avora-gold transition-colors duration-200 group self-start md:self-auto"
            >
              Find Your Solution
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[480px]"
            >
              <div className="absolute inset-0">
                <img
                  src={seg.image}
                  alt={seg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-avora-navy via-avora-navy/50 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-400">
                  <h3 className="font-display text-2xl text-white mb-3 leading-tight">{seg.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                    {seg.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {seg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6 text-avora-gold text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
