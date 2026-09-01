import { motion } from 'framer-motion'
import { Shield, BarChart3, PieChart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const featuredServices = [
  {
    title: 'RERA Compliance & Advisory',
    description: 'Navigate RERA regulations with absolute certainty. Seamless project registration and ongoing compliance.',
    icon: Shield,
    color: '#0F766E', // Teal
    href: '/rera'
  },
  {
    title: 'Financial Modelling',
    description: 'Robust financial models designed to forecast performance, assess risk, and guide your most critical business decisions.',
    icon: BarChart3,
    color: '#0369A1', // Blue
    href: '/financial-modelling'
  },
  {
    title: 'Project Finance',
    description: 'Structuring and securing optimal project funding. We guide you through the complexities of project finance.',
    icon: PieChart,
    color: '#4338CA', // Indigo
    href: '/project-finance'
  }
]

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-white border-b border-aw-light/60">
      <div className="aw-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-aw-tan" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Featured Services</span>
            <span className="w-10 h-px bg-aw-tan" />
          </div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-aw-navy mb-4">
            Specialized <span className="font-semibold italic text-gradient-tan">Advisory</span>
          </h2>
          <p className="text-aw-slate text-sm font-normal">
            Deep expertise in critical growth vectors for enterprise success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block h-full p-8 rounded-2xl bg-aw-cream border border-aw-light hover:border-aw-tan/40 hover:shadow-premium transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-aw-navy mb-3 group-hover:text-aw-tan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-aw-slate leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-aw-navy group-hover:text-aw-tan transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
