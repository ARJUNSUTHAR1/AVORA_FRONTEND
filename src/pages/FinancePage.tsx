import { motion } from 'framer-motion'
import { TrendingUp, ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  'Accounting & Bookkeeping',
  'GST & Tax Filing',
  'Income Tax Return (ITR) Filing',
  'Virtual CFO Services',
  'MIS Reporting & Financial Planning',
  'ROC & Corporate Compliance',
  'Company / LLP / Startup Registration',
]

export default function FinancePage() {
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
              <span className="w-10 h-px bg-aw-tan" />
              <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Finance</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-aw-navy leading-tight mb-6">
              Precision Accounting &<br />
              <em className="not-italic text-gradient-tan">Virtual CFO</em>
            </h1>
            <p className="text-aw-slate text-lg leading-relaxed max-w-xl">
              From day-to-day bookkeeping to strategic financial planning, our certified finance team gives you complete visibility, audit-ready compliance, and control over your business growth.
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
                <TrendingUp className="w-6 h-6 text-aw-tan" />
              </div>
              <p className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase mb-3">Finance & Accounting Solutions</p>
              <h2 className="font-display text-4xl md:text-5xl text-aw-navy leading-tight mb-6">Comprehensive Financial Management</h2>
              <p className="text-aw-slate leading-relaxed mb-8">
                Empower your business with strategic financial insights. We manage everything from basic accounting to complex tax structures, ensuring your enterprise operates efficiently and remains fully compliant.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                {features.map((feature, idx) => (
                  <li key={idx} id={feature.split(' ')[0].toLowerCase()} className="flex items-center gap-3 text-sm text-aw-navy font-medium">
                    <Check className="w-4 h-4 text-aw-tan shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="btn-aw btn-aw-tan inline-flex items-center gap-2 px-8 py-4 bg-aw-navy text-white rounded-full font-semibold text-sm hover:bg-aw-tan hover:text-aw-navy transition-colors duration-300 group"
              >
                Get Started with Finance
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
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80" alt="Finance" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
