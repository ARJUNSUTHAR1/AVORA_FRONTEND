import { motion } from 'framer-motion'
import { TrendingUp, Cpu, Users, ArrowUpRight, Check } from 'lucide-react'

const services = [
  {
    id: 'finance',
    icon: TrendingUp,
    title: 'Awooraa Finance',
    tagline: 'Finance & Accounting Solutions',
    description: 'From day-to-day bookkeeping to strategic financial planning, our certified finance team gives you complete visibility, audit-ready compliance, and control over your business growth.',
    features: [
      'Accounting & Bookkeeping',
      'GST & Tax Filing',
      'Income Tax Return (ITR) Filing',
      'Virtual CFO Services',
      'MIS Reporting & Financial Planning',
      'ROC & Corporate Compliance',
      'Company / LLP / Startup Registration',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
  },
  {
    id: 'digital',
    icon: Cpu,
    title: 'Awooraa Digital',
    tagline: 'Digital & Technology Infrastructure',
    description: 'High-converting web design, custom mobile software, seamless ERP/CRM integrations, and cutting-edge AI automation engineered to give your brand a competitive edge.',
    features: [
      'Full-Stack Web Development',
      'Software & Mobile App Development',
      'SEO & Growth Management',
      'ERP & CRM Implementation',
      'AI Automation & Chatbot Development',
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
  },
  {
    id: 'people',
    icon: Users,
    title: 'Awooraa People',
    tagline: 'HR, Talent & Payroll Excellence',
    description: 'Hiring the right talent, managing complex payrolls, ensuring total statutory compliance, and crafting growth strategies so your team thrives at scale.',
    features: [
      'Recruitment & Talent Acquisition',
      'Payroll & Employee Management',
      'HR Compliance & Policies',
      'Performance & Growth Strategy',
      'Contract Staffing',
      'Executive Search',
    ],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80',
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
              <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">What We Offer</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-aw-navy leading-tight mb-6">
              All Your Business Needs,<br />
              <em className="not-italic text-gradient-tan">One Global Partner</em>
            </h1>
            <p className="text-aw-slate text-lg leading-relaxed max-w-xl">
              We don't believe in partial solutions. Global Professional Services brings together Finance, Digital, and People — under one roof, with one relationship.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="divide-y divide-aw-light">
        {services.map((service, i) => {
          const Icon = service.icon
          const isEven = i % 2 === 0
          return (
            <section key={service.id} id={service.id} className="py-20 md:py-28 px-6 md:px-12 bg-white odd:bg-aw-cream">
              <div className="max-w-screen-xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.8 }}
                    className={isEven ? '' : 'lg:col-start-2'}
                  >
                    <div className="w-12 h-12 rounded-xl bg-aw-navy flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-aw-tan" />
                    </div>
                    <p className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase mb-3">{service.tagline}</p>
                    <h2 className="font-display text-4xl md:text-5xl text-aw-navy leading-tight mb-6">{service.title}</h2>
                    <p className="text-aw-slate leading-relaxed mb-8">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-aw-navy font-medium">
                          <Check className="w-4 h-4 text-aw-tan shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className="btn-aw btn-aw-tan inline-flex items-center gap-2 px-8 py-4 bg-aw-navy text-white rounded-full font-semibold text-sm hover:bg-aw-tan hover:text-aw-navy transition-colors duration-300 group"
                    >
                      Get Started with {service.title}
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
