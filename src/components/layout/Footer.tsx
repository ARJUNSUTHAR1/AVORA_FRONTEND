import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, MapPin, TrendingUp, Cpu, Users, Building2 } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const footerLinks = {
  'Awooraa Finance': [
    { label: 'Accounting & Bookkeeping', href: '/finance#accounting' },
    { label: 'GST & Tax Filing', href: '/finance#gst' },
    { label: 'Income Tax Return (ITR) Filing', href: '/finance#itr' },
    { label: 'Virtual CFO Services', href: '/finance#cfo' },
    { label: 'MIS Reporting & Financial Planning', href: '/finance#mis' },
    { label: 'ROC & Corporate Compliance', href: '/finance#compliance' },
    { label: 'Company / LLP / Startup Registration', href: '/finance#registration' },
  ],
  'Awooraa Digital': [
    { label: 'Full-Stack Web Development', href: '/digital#web' },
    { label: 'Software & Mobile App Development', href: '/digital#app' },
    { label: 'SEO & Growth Management', href: '/digital#seo' },
    { label: 'ERP & CRM Implementation', href: '/digital#erp' },
    { label: 'AI Automation & Chatbot Development', href: '/digital#ai' },
  ],
  'Awooraa People': [
    { label: 'Recruitment & Talent Acquisition', href: '/people#recruitment' },
    { label: 'Payroll & Employee Management', href: '/people#payroll' },
    { label: 'HR Compliance & Policies', href: '/people#compliance' },
    { label: 'Performance & Growth Strategy', href: '/people#performance' },
    { label: 'Contract Staffing', href: '/people#staffing' },
    { label: 'Executive Search', href: '/people#executive' },
  ],
  Company: [
    { label: 'Why We Exist', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

const pillarIcons = { 'Awooraa Finance': TrendingUp, 'Awooraa Digital': Cpu, 'Awooraa People': Users }

export default function Footer() {
  return (
    <footer className="bg-aw-navy text-white relative overflow-hidden pt-16 md:pt-20 pb-12 border-t border-white/10">
      {/* Modern subtle grid overlay */}
      <div className="absolute inset-0 modern-grid-dark opacity-30 pointer-events-none" />

      <div className="aw-container relative z-10">

        {/* Top Brand + Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-14">

          {/* Brand Block & 2 Physical Company Addresses */}
          <div className="lg:col-span-2 space-y-6">
            <Logo dark size="lg" />

            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-normal">
              Awooraa Global Professional Services provides integrated Finance, Digital, and People solutions that empower companies to operate and scale worldwide.
            </p>

            {/* Exactly TWO Physical Company Offices: Head Office Mumbai & Office Chittorgarh */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-white/70 text-xs font-medium">
                <Building2 className="w-4 h-4 text-aw-tan shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block mb-0.5">Head Office (Mumbai)</span>
                  <span className="text-white/50 font-normal">Mumbai, Maharashtra, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white/70 text-xs font-medium">
                <MapPin className="w-4 h-4 text-aw-tan shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block mb-0.5">Rajasthan Office (Chittorgarh)</span>
                  <span className="text-white/50 font-normal">Chittorgarh, Rajasthan, India</span>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-1 text-xs">
                <a href="mailto:hello@awooraa.com" className="flex items-center gap-2 text-white/60 hover:text-aw-tan transition-colors font-medium">
                  <Mail className="w-3.5 h-3.5 text-aw-tan" />
                  <span>hello@awooraa.com</span>
                </a>
                <a href="tel:+911234567890" className="flex items-center gap-2 text-white/60 hover:text-aw-tan transition-colors font-medium">
                  <Phone className="w-3.5 h-3.5 text-aw-tan" />
                  <span>+91 12345 67890</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service Category Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => {
            const Icon = pillarIcons[category as keyof typeof pillarIcons]
            return (
              <div key={category} className="space-y-3.5">
                <h4 className="text-aw-tan text-xs tracking-[0.18em] uppercase font-semibold flex items-center gap-2">
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {category}
                </h4>
                <div className="w-6 h-[1px] bg-aw-tan/30" />
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-white/50 hover:text-white text-xs transition-colors duration-200 flex items-center gap-1 group link-underline font-normal"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Global Footprint Banner */}
        <div className="pt-6 border-t border-white/10 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aw-tan animate-pulse" />
              <span className="text-white/50 text-xs font-medium">Serving Clients Globally · Pan-India & Worldwide Operations</span>
            </div>
            <div className="flex items-center gap-5 text-white/40 text-xs font-medium">
              <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
              <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 font-normal">
          <p>© 2025 Awooraa Global Professional Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
