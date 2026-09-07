import { motion } from 'framer-motion'
import { Globe, ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  'Customs Clearance & Brokerage',
  'International Trade Compliance',
  'Freight Forwarding & Logistics',
  'Import & Export Documentation',
  'Supply Chain Strategy',
  'Cross-Border Tax Advisory',
  'Trade Finance Facilitation',
  'Global Market Entry Support',
]

export default function ImportExportPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      <section className="py-20 px-6 md:px-12 bg-aw-cream">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#0284C7]" />
              <span className="text-[#0284C7] text-xs font-semibold tracking-[0.2em] uppercase">International Trade</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-aw-navy leading-tight mb-6">
              Global trade,<br />
              <em className="not-italic" style={{ color: '#0284C7' }}>simplified.</em>
            </h1>
            <p className="text-aw-slate text-lg leading-relaxed max-w-xl">
              Seamless import and export solutions. We handle customs clearance, freight forwarding, and international trade compliance so you can expand your market globally without the friction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-12 rounded-xl bg-aw-navy flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#0284C7]" />
              </div>
              <p className="text-[#0284C7] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Customs & Logistics</p>
              <h2 className="font-display text-4xl md:text-5xl text-aw-navy leading-tight mb-6">Comprehensive Trade Management</h2>
              <p className="text-aw-slate leading-relaxed mb-8">
                Navigating international trade regulations can be complex. Because border delays and compliance penalties should not dictate your international growth, our team manages the entire process from documentation to delivery.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-aw-navy font-medium">
                    <Check className="w-4 h-4 text-[#0284C7] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="btn-aw inline-flex items-center gap-2 px-8 py-4 bg-aw-navy text-white rounded-full font-semibold text-sm hover:text-aw-navy transition-colors duration-300 group"
              >
                Start Trading Globally
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?w=1200&q=80" alt="Import and Export Services" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
