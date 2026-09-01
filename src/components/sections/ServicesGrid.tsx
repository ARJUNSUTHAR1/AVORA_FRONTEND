import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Cpu, Users, ArrowUpRight, CheckCircle2, BarChart3, Globe, Smartphone, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const pillars = [
  {
    id: 'finance',
    href: '/finance',
    pillar: 'Awooraa Finance',
    Icon: TrendingUp,
    accentColor: '#B8A996',
    dark: true,
    headline: 'Stop guessing your financial health.',
    subline: 'Get absolute clarity & audit-ready books.',
    body: 'Most founders discover their cash crisis when it\'s already too late. Our Finance team delivers real-time bookkeeping, proactive GST & tax management, and Virtual CFO thinking — so every financial decision is grounded in truth, not guesswork.',
    painLine: 'Because "we\'ll figure out the books later" is how promising companies fail.',
    callout: { icon: BarChart3, value: '₹100Cr+', label: 'Managed annually' },
    services: [
      'Accounting & Bookkeeping',
      'GST & Tax Filing',
      'Income Tax Return (ITR) Filing',
      'Virtual CFO Services',
      'MIS Reporting & Financial Planning',
      'ROC & Corporate Compliance',
      'Company / LLP / Startup Registration',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80',
    team: { name: 'Yash Sawant', role: 'Accounting Executive', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&q=80' },
  },
  {
    id: 'digital',
    href: '/digital',
    pillar: 'Awooraa Digital',
    Icon: Cpu,
    accentColor: '#334155',
    dark: false,
    headline: 'Your competition is already online.',
    subline: 'Are you leading — or catching up?',
    body: 'A website that converts. Full-stack software engineered to scale. Native iOS & Android apps that users love. Integrated ERP & CRM systems that streamline operations. We build digital infrastructure that drives real revenue.',
    painLine: 'Because your digital presence is either an asset or a liability. There is no middle ground.',
    callout: { icon: Globe, value: '50+', label: 'Digital projects delivered' },
    services: [
      'Full-Stack Web Development',
      'Software & Mobile App Development',
      'SEO & Growth Management',
      'ERP & CRM Implementation',
      'AI Automation & Chatbot Development',
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80',
    team: { name: 'Arjun Suthar', role: 'Technology Lead', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80' },
  },
  {
    id: 'people',
    href: '/people',
    pillar: 'Awooraa People',
    Icon: Users,
    accentColor: '#64748B',
    dark: true,
    headline: 'Your team is your biggest asset.',
    subline: 'Treat it like one.',
    body: 'Wrong hires cost months of momentum. Payroll errors destroy employee trust. Statutory non-compliance triggers legal risk. Our People team manages recruitment, payroll, and labor law compliance end-to-end so you scale peacefully.',
    painLine: 'Because HR chaos at 20 employees becomes a crisis at 200.',
    callout: { icon: Smartphone, value: '200+', label: 'Professionals placed' },
    services: [
      'Recruitment & Talent Acquisition',
      'Payroll & Employee Management',
      'HR Compliance & Policies',
      'Performance & Growth Strategy',
      'Contract Staffing',
      'Executive Search',
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
    team: { name: 'Dr. Nidhi Saxena', role: 'Chief Human Resource Officer (CHRO)', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
  },
  {
    id: 'rera',
    href: '/rera',
    pillar: 'RERA Compliance & Advisory',
    Icon: Shield,
    accentColor: '#0F766E', // Changed from #D97706 to Professional Teal
    dark: false,
    headline: 'Real Estate Compliance, Perfected.',
    subline: 'Navigate RERA regulations with absolute certainty.',
    body: 'Real estate developers face immense regulatory scrutiny. From initial project registration to quarterly updates and final closure, non-compliance can halt your project. We manage the entire RERA lifecycle, ensuring you stay compliant and penalty-free.',
    painLine: 'Because a single regulatory misstep can stall your entire real estate project.',
    callout: { icon: Shield, value: '100+', label: 'Projects Registered' },
    services: [
      'RERA Project Registration Services',
      'RERA CA Certificate – Form 3 & Form 5',
      'RERA Project Extension Services',
      'RERA Project Correction / Rectification Services',
      'RERA Project & Profile Updation Services',
      'RERA Quarterly Compliance & QPR Services',
      'RERA Annual Compliance',
      'RERA Project Completion / Closure Update Services',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80', // Changed image
    team: { name: 'Shardha Yadav', role: 'RERA Compliance Specialist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
  },
]

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-aw-cream">
      <div className="aw-container">

        {/* Section Header with Refined Light Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-18"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-aw-tan" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Core Pillars. One Partner.</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-aw-navy leading-tight max-w-xl">
              We Don't Just Serve<br />
              <span className="font-semibold italic text-gradient-tan">Your Business — We Grow It.</span>
            </h2>
            <p className="text-aw-slate text-sm font-normal max-w-xs leading-relaxed">
              Every service is engineered around removing friction and driving measurable business performance.
            </p>
          </div>
        </motion.div>

        {/* Pillar Bento Cards */}
        <div className="flex flex-col gap-6">
          {pillars.map((p, i) => {
            const Icon = p.Icon
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={cn(
                  'group relative rounded-2xl overflow-hidden bento-card transition-all duration-300',
                  p.dark ? 'bg-aw-navy' : 'bg-white border border-aw-light shadow-card'
                )}
              >
                {/* Top subtle gold accent hover line */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: p.accentColor }}
                />

                <div className={cn(
                  'grid grid-cols-1 lg:grid-cols-12',
                  !isEven && 'lg:grid-flow-dense'
                )}>

                  {/* Image Panel */}
                  <div className={cn(
                    'lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] lg:min-h-auto overflow-hidden',
                    !isEven && 'lg:col-start-1 lg:row-start-1'
                  )}>
                    <img
                      src={p.image}
                      alt={p.pillar}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={cn(
                      'absolute inset-0',
                      p.dark
                        ? 'bg-gradient-to-t from-aw-navy via-aw-navy/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-aw-navy'
                        : 'bg-gradient-to-t from-white via-white/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white'
                    )} />
                    {/* Stat callout badge */}
                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                      <div className="text-white text-xl font-display font-semibold leading-none">{p.callout.value}</div>
                      <div className="text-white/70 text-[10px] mt-0.5 font-normal">{p.callout.label}</div>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className={cn(
                    'lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 md:p-10',
                    !isEven && 'lg:col-start-6'
                  )}>
                    <div>
                      {/* Pillar label */}
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: `${p.accentColor}18`, border: `1px solid ${p.accentColor}30` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: p.accentColor }} />
                        </div>
                        <span
                          className="text-xs font-semibold tracking-wider uppercase"
                          style={{ color: p.accentColor }}
                        >
                          {p.pillar}
                        </span>
                      </div>

                      {/* Headlines - Refined Weights */}
                      <h3 className={cn('font-display font-semibold text-2xl sm:text-3xl leading-snug mb-1', p.dark ? 'text-white' : 'text-aw-navy')}>
                        {p.headline}
                      </h3>
                      <p className={cn('font-display font-medium text-base md:text-lg mb-3', p.dark ? 'text-white/50' : 'text-aw-slate')}>
                        {p.subline}
                      </p>

                      {/* Body */}
                      <p className={cn('text-sm font-normal leading-relaxed mb-3 max-w-lg', p.dark ? 'text-white/60' : 'text-aw-slate')}>
                        {p.body}
                      </p>
                      <p className="text-xs italic mb-5" style={{ color: `${p.accentColor}dd` }}>
                        {p.painLine}
                      </p>

                      {/* Services list */}
                      <div className="flex flex-wrap gap-2 mb-7">
                        {p.services.map((s) => (
                          <span
                            key={s}
                            className={cn(
                              'flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium',
                              p.dark
                                ? 'bg-white/5 text-white/70 border border-white/10'
                                : 'bg-aw-cream text-aw-mid border border-aw-light'
                            )}
                          >
                            <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: p.accentColor }} />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer CTA & Team */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <Link
                        to={p.href}
                        className={cn(
                          'btn-aw flex items-center gap-2 px-6 py-3 rounded-full font-medium text-xs sm:text-sm transition-colors duration-300',
                          p.dark
                            ? 'btn-aw-white bg-aw-tan text-aw-navy hover:text-aw-navy shadow-sm'
                            : 'btn-aw-tan bg-aw-navy text-white hover:text-aw-navy shadow-premium'
                        )}
                      >
                        Explore {p.pillar.replace('Awooraa ', '')} <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* Associated Team Member */}
                      <div className="flex items-center gap-2.5">
                        <img
                          src={p.team.img}
                          alt={p.team.name}
                          className="w-8 h-8 rounded-full object-cover border"
                          style={{ borderColor: `${p.accentColor}60` }}
                        />
                        <div>
                          <div className={cn('text-xs font-semibold', p.dark ? 'text-white/85' : 'text-aw-navy')}>{p.team.name}</div>
                          <div className={cn('text-[10px]', p.dark ? 'text-white/40' : 'text-aw-slate')}>{p.team.role}</div>
                        </div>
                      </div>
                    </div>
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
