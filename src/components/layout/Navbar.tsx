import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, ChevronDown, TrendingUp, Cpu, Users, ChevronRight, Shield, BarChart3, PieChart, Globe } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useAuth } from '@/context/AuthContext'
import Logo from '@/components/ui/Logo'

// Simplified pillars for cleaner Mega Menu
const pillars = [
  {
    id: 'finance',
    icon: TrendingUp,
    name: 'Finance',
    sub: 'Comprehensive Finance & Accounting Solutions',
    href: '/finance',
    color: '#B8A996',
  },
  {
    id: 'digital',
    icon: Cpu,
    name: 'Digital',
    sub: 'End-to-End Digital & IT Solutions',
    href: '/digital',
    color: '#334155',
  },
  {
    id: 'people',
    icon: Users,
    name: 'People',
    sub: 'Strategic HR, Hiring & Payroll',
    href: '/people',
    color: '#64748B',
  },
  {
    id: 'rera',
    icon: Shield,
    name: 'RERA Compliance & Advisory',
    sub: 'Navigate RERA regulations with absolute certainty',
    href: '/rera',
    color: '#0F766E', // Professional Teal
  },
  {
    id: 'financial-modelling',
    icon: BarChart3,
    name: 'Financial Modelling',
    sub: 'Robust financial models for strategic decision making',
    href: '/financial-modelling',
    color: '#0369A1', // Professional Blue
  },
  {
    id: 'project-finance',
    icon: PieChart,
    name: 'Project Finance',
    sub: 'Structuring and securing optimal project funding',
    href: '/project-finance',
    color: '#4338CA', // Professional Indigo
  },
  {
    id: 'import-export',
    icon: Globe,
    name: 'Import & Export',
    sub: 'Seamless international trade & customs clearance',
    href: '/import-export',
    color: '#0284C7', // Professional Blue
  },
]

const navLinks = [
  { label: 'Solutions', href: '/services', hasMega: true },
  { label: 'Why We Exist', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuth()
  const megaTimerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setMegaOpen(false)
  }, [location.pathname])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    setMegaOpen(false)
    navigate(href)
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
  }

  const openMega = () => { clearTimeout(megaTimerRef.current); setMegaOpen(true) }
  const closeMega = () => { megaTimerRef.current = setTimeout(() => setMegaOpen(false), 180) }

  return (
    <>
      {/* ─────── Desktop & Mobile Header ─────── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 mx-auto max-w-[1920px] transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-aw-light shadow-card'
            : 'bg-white/0'
        )}
      >
        <div className="aw-container flex items-center justify-between h-16 sm:h-18 md:h-20 gap-2">

          {/* Logo with compact responsive monogram */}
          <Logo size="md" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasMega && openMega()}
                onMouseLeave={() => link.hasMega && closeMega()}
              >
                <Link
                  to={link.href}
                  className={cn(
                    'flex items-center gap-1 px-3.5 py-2 text-sm font-medium tracking-normal transition-colors duration-200 rounded-lg whitespace-nowrap',
                    location.pathname === link.href || (link.hasMega && location.pathname.match(/^\/(finance|digital|people|services|rera|financial-modelling|project-finance|import-export)/))
                      ? 'text-aw-navy font-semibold'
                      : 'text-aw-mid hover:text-aw-navy',
                    link.hasMega && megaOpen ? 'text-aw-navy bg-aw-cream/80' : ''
                  )}
                >
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200 text-aw-slate',
                        megaOpen ? 'rotate-180 text-aw-tan' : ''
                      )}
                    />
                  )}
                </Link>

                {/* Active Underline */}
                {location.pathname === link.href && !link.hasMega && (
                  <motion.div layoutId="nav-active" className="absolute bottom-0 inset-x-3 h-[2px] bg-aw-tan rounded-full" />
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {isAuthenticated ? (
              <>
                <span className="text-aw-navy text-xs sm:text-sm font-medium hidden sm:block">
                  {user?.name || user?.email?.split('@')[0]}
                </span>
                <button
                  onClick={() => { logout(); navigate('/') }}
                  className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-aw-navy text-aw-navy text-[11px] sm:text-xs font-semibold hover:bg-aw-navy hover:text-white transition-all duration-200 whitespace-nowrap"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/contact"
                  className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 bg-aw-navy text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-aw-mid transition-colors duration-200 shadow-sm whitespace-nowrap shrink-0"
                >
                  <span>Talk to Us</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                </Link>
              </>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex flex-col justify-center items-center gap-[4px] w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-aw-cream transition-colors shrink-0"
              aria-label="Open menu"
            >
              <span className="block h-[1.5px] w-4 bg-aw-navy rounded-full" />
              <span className="block h-[1.5px] w-3 bg-aw-slate rounded-full" />
            </button>
          </div>
        </div>

        {/* ── Mega Dropdown ── */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute left-0 right-0 bg-white border-b border-aw-light shadow-premium overflow-hidden"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <div className="aw-container py-7">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-aw-light/60">
                  <span className="text-aw-tan text-xs font-semibold tracking-[0.18em] uppercase">Core Solutions & Practices</span>
                  <Link
                    to="/services"
                    className="text-aw-navy text-xs font-semibold tracking-wider uppercase hover:text-aw-tan transition-colors flex items-center gap-1"
                  >
                    View All Services <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon
                    return (
                      <Link
                        key={pillar.id}
                        to={pillar.href}
                        className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-aw-navy text-base leading-tight group-hover:text-aw-tan transition-colors">
                            {pillar.name}
                          </h4>
                          <p className="text-aw-slate text-xs font-normal mt-1 leading-relaxed">{pillar.sub}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                <div className="mt-8 pt-4 border-t border-aw-light/60 flex items-center justify-end text-xs text-aw-slate">
                  <Link
                    to="/contact"
                    className="text-aw-navy font-semibold hover:text-aw-tan transition-colors flex items-center gap-1"
                  >
                    Book a free 30-min discovery call <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─────── Mobile Full-Screen Scrollable Drawer — Guaranteed Smooth Touch Scroll ─────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[200] bg-aw-navy overflow-y-scroll max-h-[100dvh] h-[100dvh] w-full touch-pan-y"
            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
          >
            <div className="aw-container py-6 pb-40 min-h-full">
              {/* Header inside Drawer */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <Logo dark size="md" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white hover:border-aw-tan transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Solutions Accordion */}
              <div className="border-b border-white/10 pb-4 mb-3">
                <button
                  onClick={() => setMobileExpanded(!mobileExpanded)}
                  className="flex items-center justify-between w-full py-3 text-white text-base font-semibold"
                >
                  <span>Solutions</span>
                  <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', mobileExpanded && 'rotate-180 text-aw-tan')} />
                </button>

                <AnimatePresence>
                  {mobileExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden space-y-4 pt-3"
                    >
                      {pillars.map((pillar) => {
                        const Icon = pillar.icon
                        return (
                          <div key={pillar.id} className="pl-3 border-l border-white/15">
                            <button
                              onClick={() => handleNavClick(pillar.href)}
                              className="flex flex-col items-start gap-1 text-left w-full hover:opacity-80 transition-opacity"
                            >
                              <div className="flex items-center gap-2 text-aw-tan font-semibold text-sm">
                                <Icon className="w-4 h-4 shrink-0 text-aw-tan" />
                                <span>{pillar.name}</span>
                              </div>
                              <span className="text-white/50 text-[11px] leading-snug pl-6">{pillar.sub}</span>
                            </button>
                          </div>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Navigation Links */}
              {navLinks.filter(l => !l.hasMega).map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between w-full py-4 border-b border-white/10 text-white/85 text-base font-medium hover:text-white text-left"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-white/30" />
                </button>
              ))}

              {/* Discovery CTA Box */}
              <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/5">
                <span className="aw-pill mb-4">Discovery Call</span>
                <p className="text-white text-lg font-semibold mb-1">Not sure where to start?</p>
                <p className="text-white/40 text-xs mb-5">Talk to our senior advisory team directly.</p>
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="w-full flex items-center justify-center gap-2 bg-aw-tan text-aw-navy font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full hover:bg-aw-tan-light"
                >
                  Book a Call <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
