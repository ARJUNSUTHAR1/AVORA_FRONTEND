import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Finance & Accounting', href: '/services#finance' },
    { label: 'Compliance', href: '/services#compliance' },
    { label: 'Business Growth', href: '/services#growth' },
    { label: 'Real Estate Advisory', href: '/services#realestate' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
}

// Per-character parallax amplitudes for "AVORA & CO"
// Positive = moves right when cursor right, negative = moves left
const CHARS = ['A', 'V', 'O', 'R', 'A', ' ', '&', ' ', 'C', 'O']
const AMPLITUDES = [28, -18, 22, -30, 16, 0, -38, 0, 24, -20]

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const mouse = useRef({ x: 0.5 })
  const current = useRef({ x: 0.5 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const tick = () => {
      // Smooth lerp toward mouse target
      current.current.x += (mouse.current.x - current.current.x) * 0.06
      const delta = current.current.x - 0.5

      letterRefs.current.forEach((el, i) => {
        if (!el || AMPLITUDES[i] === 0) return
        const tx = delta * AMPLITUDES[i]
        const ty = Math.abs(delta) * AMPLITUDES[i] * 0.15
        el.style.transform = `translate(${tx}px, ${ty}px)`
      })
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!footerRef.current) return
    const rect = footerRef.current.getBoundingClientRect()
    mouse.current.x = (e.clientX - rect.left) / rect.width
  }

  const handleMouseLeave = () => {
    mouse.current.x = 0.5
  }

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-avora-900 text-white"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl text-white mb-4">Avora & Co</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              India's premier professional services company. We help businesses start, manage, grow and scale — all under one roof.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@avoraandco.com"
                className="flex items-center gap-3 text-white/40 hover:text-avora-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@avoraandco.com</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-white/40 hover:text-avora-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 12345 67890</span>
              </a>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Nav link groups */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white/30 text-xs tracking-[0.15em] uppercase font-semibold mb-6">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/55 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + legal */}
        <div className="border-t border-white/10 pt-10 mb-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-4">
            <div className="flex items-center gap-6">
              {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <span
                  key={social}
                  className="text-white/30 text-sm hover:text-avora-gold cursor-pointer transition-colors duration-200"
                >
                  {social}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-6 text-white/30 text-xs">
              <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Use</span>
              <span className="hover:text-white/60 cursor-pointer transition-colors">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Per-letter animated AVORA & CO */}
      <div className="overflow-hidden border-t border-white/5 select-none cursor-none">
        <div className="py-4 md:py-8 flex items-center justify-center">
          <div className="flex items-center" aria-hidden="true">
            {CHARS.map((char, i) => (
              <span
                key={i}
                ref={(el) => { letterRefs.current[i] = el }}
                className="inline-block text-[11vw] md:text-[9vw] font-display font-bold text-white/[0.05] leading-none tracking-[0.04em] will-change-transform"
                style={{ transition: 'none' }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5 px-6 md:px-12 py-6">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2024 Avora & Co. All rights reserved. One Partner. Every Solution.
          </p>
          <p className="text-white/20 text-xs">
            Building India's Next Professional Services Company
          </p>
        </div>
      </div>
    </footer>
  )
}
