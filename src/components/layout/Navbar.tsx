import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, ChevronRight } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useAuth } from '@/context/AuthContext'

interface NavPanel {
  badge: string
  heading: string
  text: string
  cta: string
  ctaHref: string
  image: string
  stats?: { num: string; label: string }[]
}

const navLinks = [
  {
    label: 'About',
    href: '/about',
    desc: 'Our story and team',
    panel: {
      badge: 'WHO WE ARE',
      heading: 'Built on trust,\ndriven by expertise.',
      text: 'A team of seasoned professionals helping Indian businesses start, manage, and scale — from a single trusted partner.',
      cta: 'Meet Our Team',
      ctaHref: '/about',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80',
      stats: [{ num: '15+', label: 'Years combined expertise' }, { num: '4', label: 'Core service domains' }],
    } as NavPanel,
  },
  {
    label: 'Services',
    href: '/services',
    desc: 'What we offer',
    panel: {
      badge: 'WHAT WE OFFER',
      heading: 'Every service\nyour business needs.',
      text: 'Finance, compliance, growth strategy, and real estate advisory — all under one roof with a single point of contact.',
      cta: 'Explore Services',
      ctaHref: '/services',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
      stats: [{ num: '500+', label: 'Businesses empowered' }, { num: '20+', label: 'Countries served' }],
    } as NavPanel,
  },
  {
    label: 'Insights',
    href: '/insights',
    desc: 'Thought leadership',
    panel: {
      badge: 'THOUGHT LEADERSHIP',
      heading: 'Expert perspectives\non Indian business.',
      text: 'In-depth guides, analysis, and perspectives on finance, compliance, and growth from our senior practitioners.',
      cta: 'Read Insights',
      ctaHref: '/insights',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&q=80',
      stats: [],
    } as NavPanel,
  },
  {
    label: 'Contact',
    href: '/contact',
    desc: 'Get in touch',
    panel: {
      badge: 'GET IN TOUCH',
      heading: 'Start a conversation\ntoday.',
      text: 'Our team responds within 2–4 business hours. Free 30-minute discovery call — no commitment, no charge.',
      cta: 'Start a Conversation',
      ctaHref: '/contact',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80',
      stats: [{ num: '< 4h', label: 'Average response time' }, { num: 'Free', label: 'Initial consultation' }],
    } as NavPanel,
  },
]

const menuVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.25 } },
}

const linkVariants = {
  closed: { opacity: 0, x: -40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const lockedIndex = useRef<number>(1)
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const panelIndex = hoveredIndex ?? lockedIndex.current
  const activePanel = navLinks[panelIndex].panel

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-5 py-4 transition-all duration-500',
          scrolled && 'py-3'
        )}
      >
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              'flex items-center gap-0 rounded-full overflow-hidden',
              'transition-all duration-300',
              scrolled
                ? 'bg-avora-navy shadow-lg shadow-avora-navy/20'
                : 'bg-avora-navy/90 backdrop-blur-sm'
            )}
          >
            {/* Hamburger icon — opens menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center justify-center px-4 py-3 group"
              aria-label="Open menu"
            >
              <span className="w-5 h-5 flex flex-col justify-center gap-[5px] group-hover:gap-[7px] transition-all duration-300">
                <span className="block h-[1.5px] w-5 bg-white rounded-full" />
                <span className="block h-[1.5px] w-3.5 bg-white/70 rounded-full group-hover:w-5 transition-all duration-300" />
              </span>
            </button>
            {/* Brand link — navigates home */}
            <Link
              to="/"
              className="pr-5 py-3 text-white text-xs font-semibold tracking-[0.15em] uppercase hover:text-avora-gold transition-colors duration-200"
            >
              Avora & Co
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {isAuthenticated ? (
              <>
                <span className="text-avora-navy text-sm font-medium hidden sm:block">
                  {user?.name || user?.email?.split('@')[0]}
                </span>
                <button
                  onClick={() => { logout(); navigate('/') }}
                  className="btn-fill btn-fill-navy flex items-center gap-2 px-5 py-3 rounded-full border-2 border-avora-navy text-avora-navy text-sm font-semibold hover:text-white transition-colors duration-300"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className={cn(
                  'btn-fill btn-fill-navy flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold',
                  'transition-colors duration-300',
                  scrolled
                    ? 'border-2 border-avora-navy text-avora-navy hover:text-white'
                    : 'border-2 border-avora-navy/80 text-avora-navy hover:text-white'
                )}
              >
                Client Login
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[200] bg-avora-900 flex overflow-hidden"
          >
            {/* Left nav panel */}
            <div className="flex-1 flex flex-col justify-between px-8 md:px-16 py-8 md:py-12 min-h-screen">
              <div className="flex items-center justify-between">
                <Link to="/" className="font-display text-white text-xl tracking-[0.15em] uppercase">
                  Avora & Co
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-avora-gold hover:text-avora-gold transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-0 py-8">
                {navLinks.map((link, i) => {
                  const isHovered = hoveredIndex === i
                  return (
                    <motion.div
                      key={link.label}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit={{ opacity: 0, x: -30, transition: { duration: 0.15, delay: i * 0.02 } }}
                    >
                      <Link
                        to={link.href}
                        onMouseEnter={() => { setHoveredIndex(i); lockedIndex.current = i }}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-avora-gold/40 transition-all duration-300"
                      >
                        <div className="flex items-center gap-6">
                          <span className={cn(
                            'text-sm font-mono transition-colors duration-300',
                            isHovered ? 'text-avora-gold' : 'text-avora-gold/50'
                          )}>
                            0{i + 1}
                          </span>
                          <div>
                            <span className={cn(
                              'block text-4xl md:text-5xl font-display leading-none transition-all duration-300',
                              isHovered ? 'text-white translate-x-2' : 'text-white/20'
                            )}>
                              {link.label}
                            </span>
                            <span className={cn(
                              'text-sm mt-1 block transition-colors duration-300',
                              isHovered ? 'text-white/60' : 'text-white/25'
                            )}>
                              {link.desc}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className={cn(
                          'w-6 h-6 transition-all duration-300',
                          isHovered ? 'text-avora-gold translate-x-1' : 'text-white/15'
                        )} />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <span
                      key={social}
                      className="text-white/30 text-sm hover:text-avora-gold cursor-pointer transition-colors duration-200"
                    >
                      {social}
                    </span>
                  ))}
                </div>
                <span className="text-white/20 text-xs">© 2024 Avora & Co</span>
              </div>
            </div>

            {/* Right dynamic panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ delay: 0.2, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden lg:flex w-[40%] relative overflow-hidden flex-col justify-end"
            >
              {/* Background image — fades between panels */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={panelIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activePanel.image}
                    alt=""
                    className="w-full h-full object-cover opacity-25"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-avora-900/60 to-avora-900" />
                  <div className="absolute inset-0 bg-gradient-to-t from-avora-900 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Panel content — slides between panels */}
              <div className="relative z-10 p-12 pb-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={panelIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-avora-gold/30 bg-avora-gold/10 mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-avora-gold animate-pulse" />
                      <span className="text-avora-gold text-xs tracking-widest uppercase">{activePanel.badge}</span>
                    </div>
                    <p className="text-white text-2xl font-display leading-relaxed mb-3 whitespace-pre-line">
                      {activePanel.heading}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">{activePanel.text}</p>
                    {activePanel.stats && activePanel.stats.length > 0 && (
                      <div className="flex gap-6 mb-6">
                        {activePanel.stats.map((s) => (
                          <div key={s.label}>
                            <div className="text-2xl font-display font-bold text-avora-gold">{s.num}</div>
                            <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    <button
                      onClick={() => { setIsMenuOpen(false); navigate(activePanel.ctaHref) }}
                      className="flex items-center gap-2 text-avora-gold font-medium text-sm hover:gap-3 transition-all duration-300"
                    >
                      {activePanel.cta} <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
