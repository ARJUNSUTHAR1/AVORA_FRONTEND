import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { TrendingUp, Cpu, Users, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Yash',
    role: 'Head of Accounting',
    pillar: 'Finance',
    Icon: TrendingUp,
    color: '#B8A996',
    quote: 'Every number tells a story. We make sure yours tells the right one.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=85',
    expertise: ['Bookkeeping', 'GST Filing', 'MIS Reports'],
  },
  {
    name: 'Neha',
    role: 'HR & People Lead',
    pillar: 'People',
    Icon: Users,
    color: '#64748B',
    quote: 'The right hire at the right time changes everything.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85',
    expertise: ['Recruitment', 'HR Policy', 'Compliance'],
  },
  {
    name: 'Arjun',
    role: 'Technology Lead',
    pillar: 'Digital',
    Icon: Cpu,
    color: '#334155',
    quote: 'Tech should solve problems, not create new ones.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&q=85',
    expertise: ['Web Dev', 'Mobile Apps', 'ERP / CRM'],
  },
  {
    name: 'Indrajeet',
    role: 'Growth & Outreach',
    pillar: 'Digital',
    Icon: Cpu,
    color: '#334155',
    quote: 'Growth isn\'t accidental. It\'s engineered.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
    expertise: ['Lead Gen', 'Business Dev', 'Market Entry'],
  },

  {
    name: 'Manas',
    role: 'Advisory & Planning',
    pillar: 'Finance',
    Icon: TrendingUp,
    color: '#B8A996',
    quote: 'The best investments start with knowing the market inside-out.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=85',
    expertise: ['Advisory', 'Due Diligence', 'Investment'],
  },
  {
    name: 'Ganesh',
    role: 'Business Development',
    pillar: 'Digital',
    Icon: Cpu,
    color: '#334155',
    quote: 'Your next growth lever is hiding in plain sight.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85',
    expertise: ['BD Strategy', 'Partnerships', 'Sales'],
  },
]

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#060F1A]">
      <div className="aw-container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-aw-tan" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">The Leadership & Practitioners</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white leading-tight max-w-md">
              Real Experts.<br />
              <span className="font-semibold italic text-gradient-tan">Direct Accountability.</span>
            </h2>
            <p className="text-white/40 text-sm font-normal max-w-xs leading-relaxed">
              You get experienced domain leads responsible for your outcomes by name.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {team.map((member, i) => {
            const PillarIcon = member.Icon
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.04 + i * 0.06 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative rounded-xl overflow-hidden cursor-pointer bg-aw-navy"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Photo */}
                <div className="absolute inset-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-105"
                    style={{ filter: 'brightness(0.85) saturate(0.9)' }}
                  />
                </div>

                {/* Shading Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F1A] via-[#060F1A]/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold backdrop-blur-sm"
                    style={{ background: `${member.color}25`, border: `1px solid ${member.color}40`, color: member.color }}
                  >
                    <PillarIcon className="w-3 h-3" />
                    {member.pillar}
                  </div>
                </div>

                {/* Member Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <div className="text-white font-semibold text-sm">{member.name}</div>
                  <div className="text-white/50 text-xs font-normal mt-0.5">{member.role}</div>

                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-1 mt-2.5 mb-1.5">
                          {member.expertise.map((e) => (
                            <span
                              key={e}
                              className="text-[9px] px-2 py-0.5 rounded-full font-medium"
                              style={{ background: `${member.color}20`, color: member.color, border: `1px solid ${member.color}35` }}
                            >
                              {e}
                            </span>
                          ))}
                        </div>
                        <p className="text-white/40 text-[10px] italic leading-relaxed">"{member.quote}"</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}

          {/* CTA Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ aspectRatio: '3/4' }}
          >
            <Link
              to="/about"
              className="flex flex-col items-center justify-center h-full rounded-xl border border-aw-tan/20 bg-aw-tan/5 hover:border-aw-tan/40 hover:bg-aw-tan/10 transition-all duration-300 group p-6 text-center"
            >
              <div className="w-10 h-10 rounded-full border border-aw-tan/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-aw-tan" />
              </div>
              <p className="text-white/60 text-xs font-medium">Meet full leadership</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
