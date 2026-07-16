import { motion } from 'framer-motion'
import { TrendingUp, FileCheck, Rocket, Building2, ArrowUpRight, Check } from 'lucide-react'

const services = [
  {
    id: 'finance',
    icon: TrendingUp,
    title: 'Finance & Accounting',
    tagline: 'Clarity in every number',
    description: 'From day-to-day bookkeeping to strategic financial planning, our certified finance team gives you complete visibility and control over your business finances.',
    features: ['Bookkeeping & Reconciliation', 'Monthly Financial Reporting', 'Virtual CFO Services', 'Financial Modelling & Forecasting', 'Vessel Accounting', 'Management Information Systems'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  },
  {
    id: 'compliance',
    icon: FileCheck,
    title: 'Compliance',
    tagline: 'Always ahead of regulations',
    description: 'India\'s regulatory landscape is complex. Our compliance experts keep your business fully aligned with every legal requirement — proactively, not reactively.',
    features: ['Company Registration (PVT/LLP/OPC)', 'GST Registration & Filing', 'ROC Annual Compliance', 'ITR Filing', 'FSSAI & TAN Registration', 'Government Notice Replies'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
  },
  {
    id: 'growth',
    icon: Rocket,
    title: 'Business Growth',
    tagline: 'Scale with strategy',
    description: 'Beyond compliance — we\'re your growth partner. From digital marketing to brand strategy, we build the engine that drives sustainable business growth.',
    features: ['Digital Marketing & SEO', 'Lead Generation Campaigns', 'Brand Strategy & Identity', 'Website Development', 'Business Consulting', 'Market Entry Strategy'],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80',
  },
  {
    id: 'realestate',
    icon: Building2,
    title: 'Real Estate Advisory',
    tagline: 'Your gateway to Indian real estate',
    description: 'Whether you\'re an investor, developer, or NRI looking to enter Indian real estate, we provide end-to-end advisory with deep market connections.',
    features: ['Land Sourcing & Identification', 'Title Due Diligence', 'Land Aggregation', 'Developer Introductions', 'Investment Advisory', 'RERA Compliance'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  },
]

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      <section className="py-20 px-6 md:px-12 bg-avora-cream">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-avora-gold" />
              <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">What We Offer</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl text-avora-navy leading-tight mb-6">
              All Your Business Needs,<br />
              <em className="not-italic text-avora-gold">One Partner</em>
            </h1>
            <p className="text-avora-muted text-lg leading-relaxed max-w-xl">
              We don't believe in partial solutions. Avora & Co brings together every service a growing business needs — under one roof, with one relationship.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="divide-y divide-avora-cream-dark">
        {services.map((service, i) => {
          const Icon = service.icon
          const isEven = i % 2 === 0
          return (
            <section key={service.id} id={service.id} className="py-20 md:py-28 px-6 md:px-12 bg-white odd:bg-avora-cream">
              <div className="max-w-screen-xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven && 'lg:grid-flow-dense'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.8 }}
                    className={isEven ? '' : 'lg:col-start-2'}
                  >
                    <div className="w-12 h-12 rounded-xl bg-avora-navy flex items-center justify-center mb-8">
                      <Icon className="w-6 h-6 text-avora-gold" />
                    </div>
                    <p className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">{service.tagline}</p>
                    <h2 className="font-display text-4xl md:text-5xl text-avora-navy leading-tight mb-6">{service.title}</h2>
                    <p className="text-avora-muted leading-relaxed mb-8">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-avora-navy">
                          <Check className="w-4 h-4 text-avora-gold shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className="btn-fill btn-fill-gold inline-flex items-center gap-2 px-8 py-4 bg-avora-navy text-white rounded-full font-semibold text-sm hover:bg-avora-gold transition-colors duration-300 group"
                    >
                      Get Started
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className={`rounded-2xl overflow-hidden aspect-[4/3] ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </motion.div>
  )
}
