import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function IndustryPage() {
  const { id } = useParams()
  
  // Format the ID to a readable title
  const title = id 
    ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Industry'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 min-h-screen bg-aw-cream flex flex-col"
    >
      <section className="relative py-20 md:py-32 bg-aw-navy flex-1">
        <div className="absolute inset-0 modern-grid-dark opacity-30 pointer-events-none" />
        <div className="aw-container relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-aw-tan" />
              <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Industry Specialization</span>
              <span className="w-10 h-px bg-aw-tan" />
            </div>
            
            <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Solutions for <br />
              <span className="font-semibold italic text-gradient-tan">{title}</span>
            </h1>
            
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-2xl font-normal">
              We provide tailored Finance, Digital, and People solutions specifically designed for the unique challenges of the {title.toLowerCase()} sector. Let's engineer your growth together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-aw-tan/30 transition-colors flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-aw-tan/10 flex items-center justify-center mb-6">
                  <span className="text-aw-tan font-bold text-lg">01</span>
                </div>
                <h3 className="text-white text-xl font-display font-medium mb-3">Domain Expertise</h3>
                <p className="text-white/60 leading-relaxed font-light">Deep understanding of {title.toLowerCase()} market dynamics and regulatory frameworks, ensuring compliance and strategic foresight.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-aw-tan/30 transition-colors flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-aw-tan/10 flex items-center justify-center mb-6">
                  <span className="text-aw-tan font-bold text-lg">02</span>
                </div>
                <h3 className="text-white text-xl font-display font-medium mb-3">Tailored Strategies</h3>
                <p className="text-white/60 leading-relaxed font-light">Customized solutions that align perfectly with the specific operational constraints and opportunities of your business.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-aw-tan/30 transition-colors flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-aw-tan/10 flex items-center justify-center mb-6">
                  <span className="text-aw-tan font-bold text-lg">03</span>
                </div>
                <h3 className="text-white text-xl font-display font-medium mb-3">Scalable Frameworks</h3>
                <p className="text-white/60 leading-relaxed font-light">Adaptive architectures designed to expand organically as your enterprise grows within the competitive {title.toLowerCase()} space.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-aw-tan/30 transition-colors flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-aw-tan/10 flex items-center justify-center mb-6">
                  <span className="text-aw-tan font-bold text-lg">04</span>
                </div>
                <h3 className="text-white text-xl font-display font-medium mb-3">Dedicated Partnership</h3>
                <p className="text-white/60 leading-relaxed font-light">A specialized advisory team unequivocally committed to driving your sustained operational success and measurable growth.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link to="/contact" className="btn-aw btn-aw-tan px-8 py-4 rounded-full font-semibold text-xs tracking-wider uppercase flex items-center gap-2">
                Talk to an Expert <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-white/5 transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
