import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Cpu, Users, ShieldCheck, Globe2, Sparkles, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const showcaseItems = [
  {
    id: 'finance',
    icon: TrendingUp,
    badge: 'Awooraa Finance',
    title: 'Precision Accounting & Virtual CFO',
    desc: 'Audit-ready bookkeeping, GST filing, cash flow forecasts, and executive MIS reporting.',
    href: '/finance',
    accent: '#B8A996',
  },
  {
    id: 'digital',
    icon: Cpu,
    badge: 'Awooraa Digital',
    title: 'Full-Stack Web, Mobile Apps & ERP',
    desc: 'Custom web software, native mobile applications, SEO growth, and integrated CRM systems.',
    href: '/digital',
    accent: '#334155',
  },
  {
    id: 'people',
    icon: Users,
    badge: 'Awooraa People',
    title: 'Strategic Hiring, Payroll & HR',
    desc: 'Seamless recruitment, automated payroll, labor law compliance, and performance management.',
    href: '/people',
    accent: '#64748B',
  },
]

const locations = ['Worldwide (USA, Canada, UK, Europe, Australia, Dubai)', 'Chittorgarh (Rajasthan)', 'Mumbai', 'Ahmedabad', 'Delhi', 'Chennai', 'Hyderabad', 'Nagpur']

export default function Marquee() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-aw-navy py-12 border-y border-white/[0.08] relative overflow-hidden">
      {/* 21stdev / Aceternity Modern Dark Grid with Ambient Gradient Radial Glow */}
      <div className="absolute inset-0 modern-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-aw-tan/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="aw-container relative z-10">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-aw-tan animate-pulse" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.18em] uppercase">
              Unified Professional Ecosystem
            </span>
          </div>

          {/* Locations */}
          <div className="flex items-center gap-2 flex-wrap text-white/50 text-xs font-normal">
            <Globe2 className="w-3.5 h-3.5 text-aw-tan shrink-0" />
            <span>Serving Clients In:</span>
            {locations.map((loc) => (
              <span key={loc} className="px-2.5 py-0.5 rounded-full border border-white/10 text-white/70 text-[11px] font-medium">
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Pillar Interactive Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeTab === index
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${isActive
                    ? 'bg-white/[0.07] border-aw-tan/40 shadow-card'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/10 text-white/80">
                      {item.badge}
                    </span>
                    <Icon className="w-4 h-4 text-aw-tan" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1 text-aw-tan text-xs font-semibold hover:gap-1.5 transition-all"
                >
                  Explore Pillar <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Compliance Guarantee Note */}
        <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs text-white/40 font-normal">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-aw-tan shrink-0" />
            <span>Fully compliant with Indian statutory standards & global corporate requirements</span>
          </div>
          <Link to="/services" className="text-white/70 hover:text-aw-tan transition-colors font-medium">
            View complete service index →
          </Link>
        </div>
      </div>
    </section>
  )
}
