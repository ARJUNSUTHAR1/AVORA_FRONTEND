import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, FileCheck, Rocket, Building2, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const services = [
  {
    id: 'finance',
    label: 'Finance & Accounting',
    icon: TrendingUp,
    description: 'End-to-end financial management for businesses at every stage of growth.',
    items: ['Bookkeeping & Accounting', 'Virtual CFO Services', 'Financial Reporting', 'Vessel Accounting', 'Financial Modelling'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    className: 'lg:col-span-2 lg:row-span-1',
    dark: true,
  },
  {
    id: 'compliance',
    label: 'Compliance',
    icon: FileCheck,
    description: "Navigate India's regulatory landscape with expert guidance and proactive management.",
    items: ['Company Registration', 'GST Filing & Compliance', 'ITR Filing', 'ROC Compliance', 'FSSAI & TAN'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80',
    className: 'lg:col-span-1',
    dark: false,
  },
  {
    id: 'growth',
    label: 'Business Growth',
    icon: Rocket,
    description: 'Strategic marketing, digital presence, and consulting to accelerate your business.',
    items: ['Digital Marketing & SEO', 'Lead Generation', 'Brand Strategy', 'Web Development', 'Business Consulting'],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&q=80',
    className: 'lg:col-span-1',
    dark: true,
  },
  {
    id: 'realestate',
    label: 'Real Estate Advisory',
    icon: Building2,
    description: 'Connect with premier land sourcing, acquisition, and developer networks across India.',
    items: ['Land Sourcing', 'Acquisition Support', 'Aggregation Services', 'Developer Connections', 'Investment Advisory'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
    className: 'lg:col-span-2',
    dark: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-avora-cream">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-avora-gold" />
            <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">What We Offer</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl text-avora-navy leading-tight max-w-xl">
              All Your Business Needs,<br />
              <em className="not-italic text-avora-gold">Under One Roof</em>
            </h2>
            <Link
              to="/services"
              className="btn-fill btn-fill-navy inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-avora-navy text-avora-navy font-semibold text-sm hover:text-white transition-colors duration-300 self-start md:self-auto"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={cn(
                  'group relative rounded-2xl overflow-hidden bento-shadow cursor-pointer',
                  'transition-all duration-500 hover:-translate-y-1 hover:shadow-xl',
                  service.className,
                  service.dark ? 'bg-avora-navy' : 'bg-white border border-avora-cream-dark'
                )}
              >
                {/* Background image — all cards now have one */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.label}
                    className={cn(
                      'w-full h-full object-cover transition-all duration-700 group-hover:scale-105',
                      service.dark
                        ? 'opacity-20 group-hover:opacity-30'
                        : 'opacity-[0.08] group-hover:opacity-[0.14]'
                    )}
                  />
                  <div className={cn(
                    'absolute inset-0',
                    service.dark
                      ? 'bg-gradient-to-br from-avora-navy via-avora-navy/95 to-avora-navy/80'
                      : 'bg-gradient-to-br from-white via-white/98 to-white/90'
                  )} />
                </div>

                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-[260px]">
                  <div>
                    {/* Icon */}
                    <div className={cn(
                      'w-11 h-11 rounded-xl flex items-center justify-center mb-6',
                      service.dark ? 'bg-avora-gold/15 border border-avora-gold/20' : 'bg-avora-navy/8 border border-avora-navy/10'
                    )}>
                      <Icon className={cn('w-5 h-5', service.dark ? 'text-avora-gold' : 'text-avora-navy')} />
                    </div>

                    <h3 className={cn(
                      'font-display text-2xl md:text-3xl mb-3 leading-tight',
                      service.dark ? 'text-white' : 'text-avora-navy'
                    )}>
                      {service.label}
                    </h3>

                    <p className={cn(
                      'text-sm leading-relaxed mb-6',
                      service.dark ? 'text-white/55' : 'text-avora-muted'
                    )}>
                      {service.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            'text-xs px-3 py-1.5 rounded-full font-medium transition-colors duration-300',
                            service.dark
                              ? 'bg-white/8 text-white/60 border border-white/10 group-hover:bg-white/12'
                              : 'bg-avora-cream text-avora-navy/70 border border-avora-cream-dark group-hover:bg-avora-gold-pale'
                          )}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={cn(
                    'flex items-center gap-2 mt-8 text-sm font-semibold group-hover:gap-3 transition-all duration-300',
                    service.dark ? 'text-avora-gold' : 'text-avora-navy'
                  )}>
                    Explore
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Gold accent line on hover */}
                <div className={cn(
                  'absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500',
                  service.dark ? 'bg-avora-gold/40' : 'bg-avora-navy/20'
                )} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
