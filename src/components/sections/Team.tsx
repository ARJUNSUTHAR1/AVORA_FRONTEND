import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { TrendingUp, Cpu, Users, Shield, Award } from 'lucide-react'

export interface TeamMember {
  name: string
  role: string
  category: 'leadership' | 'legal' | 'accounts' | 'it' | 'sales'
  categoryLabel: string
  pillar: 'Leadership' | 'Legal' | 'Finance' | 'Digital' | 'Sales'
  Icon: any
  color: string
  image: string
  expertise: string[]
  quote: string
}

const teamMembers: TeamMember[] = [
  // 1. Leadership & Partners (First)
  {
    name: 'Neha Rathor',
    role: 'Partner',
    category: 'leadership',
    categoryLabel: 'Partners & Leadership',
    pillar: 'Leadership',
    Icon: Award,
    color: '#B8A996',
    image: '/neha.jpeg',
    expertise: ['Executive Leadership', 'Strategic Growth', 'Business Operations'],
    quote: 'Empowering enterprise growth with absolute integrity and clear direction.',
  },
  {
    name: 'Ganesh Gupta',
    role: 'Partner',
    category: 'leadership',
    categoryLabel: 'Partners & Leadership',
    pillar: 'Leadership',
    Icon: Award,
    color: '#B8A996',
    image: '/ganesh.jpeg',
    expertise: ['Partner', 'Business Development', 'Global Partnerships'],
    quote: 'Building long-term client trust through transparent, scalable solutions.',
  },

  // 2. Legal Advisory & Land Facilitation
  {
    name: 'Mr. Giriraj Kumar Rathor',
    role: 'Legal Advisor',
    category: 'legal',
    categoryLabel: 'Legal & Land Advisory',
    pillar: 'Legal',
    Icon: Shield,
    color: '#D97706',
    image: '/giriraj.jpeg',
    expertise: ['Corporate Law', 'Statutory Compliance', 'Legal Advisory'],
    quote: 'Proactive legal guidance ensures sustainable, risk-free enterprise scaling.',
  },
  {
    name: 'Vaibhav Mishra',
    role: 'Land Facilitator',
    category: 'legal',
    categoryLabel: 'Legal & Land Advisory',
    pillar: 'Legal',
    Icon: Shield,
    color: '#D97706',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
    expertise: ['Land Facilitation', 'Property Due Diligence', 'Regulatory Liaison'],
    quote: 'Seamless land and property facilitation navigating regulatory frameworks with precision.',
  },

  // 3. Accounts & Tax Team
  {
    name: 'CA Kala Maheshwari',
    role: 'Lead CA & Financial Advisor',
    category: 'accounts',
    categoryLabel: 'Accounts & Tax Team',
    pillar: 'Finance',
    Icon: TrendingUp,
    color: '#B8A996',
    image: '/kala.png',
    expertise: ['Chartered Accountant', 'Tax Strategy', 'Audit & Compliance'],
    quote: 'Financial clarity and compliance are non-negotiable pillars of business health.',
  },
  {
    name: 'Yash Sawant',
    role: 'Accounting Executive',
    category: 'accounts',
    categoryLabel: 'Accounts & Tax Team',
    pillar: 'Finance',
    Icon: TrendingUp,
    color: '#B8A996',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=85',
    expertise: ['Bookkeeping', 'GST Filing', 'MIS Reporting'],
    quote: 'Precision in every ledger entry powers sound executive decisions.',
  },
  {
    name: 'Shruti',
    role: 'Accounts Executive',
    category: 'accounts',
    categoryLabel: 'Accounts & Tax Team',
    pillar: 'Finance',
    Icon: TrendingUp,
    color: '#B8A996',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=85',
    expertise: ['Payroll Processing', 'Compliance Filing', 'Accounts Receivable'],
    quote: 'Flawless financial maintenance builds institutional trust.',
  },

  // 4. IT Team
  {
    name: 'Arjun Suthar',
    role: 'Technology Lead',
    category: 'it',
    categoryLabel: 'IT & Digital Team',
    pillar: 'Digital',
    Icon: Cpu,
    color: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&q=85',
    expertise: ['Web Engineering', 'Mobile Apps', 'ERP & CRM'],
    quote: 'Tech should eliminate operational friction and accelerate growth.',
  },
  {
    name: 'Pranav',
    role: 'Full-Stack Engineer',
    category: 'it',
    categoryLabel: 'IT & Digital Team',
    pillar: 'Digital',
    Icon: Cpu,
    color: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85',
    expertise: ['Frontend & Backend', 'API Development', 'Database Architecture'],
    quote: 'Robust software architectures scale businesses effortlessly.',
  },
  {
    name: 'Shiv Saini',
    role: 'Software Engineer',
    category: 'it',
    categoryLabel: 'IT & Digital Team',
    pillar: 'Digital',
    Icon: Cpu,
    color: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85',
    expertise: ['UI/UX Development', 'Software Architecture', 'Cloud Services'],
    quote: 'Clean code and intuitive design create superior user experiences.',
  },

  // 5. Sales & Growth Team
  {
    name: 'Indrajeet',
    role: 'Sales & Growth Lead',
    category: 'sales',
    categoryLabel: 'Sales & Growth Team',
    pillar: 'Sales',
    Icon: Users,
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=85',
    expertise: ['Growth Strategy', 'Lead Generation', 'Client Relations'],
    quote: 'Sustainable sales growth stems from understanding true customer value.',
  },
  {
    name: 'Manali',
    role: 'Sales Executive',
    category: 'sales',
    categoryLabel: 'Sales & Growth Team',
    pillar: 'Sales',
    Icon: Users,
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=85',
    expertise: ['Client Acquisition', 'Sales Operations', 'Market Outreach'],
    quote: 'Connecting businesses with the exact solutions they need.',
  },
  {
    name: 'Sheetal',
    role: 'Sales Executive',
    category: 'sales',
    categoryLabel: 'Sales & Growth Team',
    pillar: 'Sales',
    Icon: Users,
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=85',
    expertise: ['Key Account Mgmt', 'Consultative Sales', 'Partnerships'],
    quote: 'Building long-term client relationships through trusted solutions.',
  },
]

const categories = [
  { id: 'all', label: 'All Team Members' },
  { id: 'leadership', label: 'Partners & Leadership' },
  { id: 'legal', label: 'Legal & Land Advisory' },
  { id: 'accounts', label: 'Accounts & Tax Team' },
  { id: 'it', label: 'IT Team' },
  { id: 'sales', label: 'Sales & Growth' },
]

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

  const filteredMembers = activeCategory === 'all'
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeCategory)

  // Group by category when 'all' is selected for partitioned layout
  const groupedSections = [
    { title: 'Partners & Leadership', items: teamMembers.filter(m => m.category === 'leadership') },
    { title: 'Legal & Land Advisory', items: teamMembers.filter(m => m.category === 'legal') },
    { title: 'Accounts & Tax Advisory Team', items: teamMembers.filter(m => m.category === 'accounts') },
    { title: 'IT & Digital Technology Team', items: teamMembers.filter(m => m.category === 'it') },
    { title: 'Sales & Growth Team', items: teamMembers.filter(m => m.category === 'sales') },
  ]

  return (
    <section ref={ref} id="team" className="py-20 md:py-32 bg-[#050A11] relative">
      {/* Isolated background ambient lighting to prevent horizontal scroll WITHOUT clipping card shadows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="aw-container relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-aw-tan" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Our Organization & Talent</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white leading-tight max-w-xl">
              Leadership & Specialist Teams<br />
              <span className="font-semibold italic text-gradient-tan">Dedicated to Your Growth</span>
            </h2>
            <p className="text-white/40 text-sm font-normal max-w-xs leading-relaxed">
              Structured teams in Leadership, Legal Advisory, Accounts, IT, and Sales delivering direct accountability.
            </p>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-aw-tan text-aw-navy font-semibold shadow-md'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Partitioned Team Rendering */}
        {activeCategory === 'all' ? (
          <div className="space-y-16">
            {groupedSections.map((sec, idx) => (
              <div key={sec.title} className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                  <span className="w-2 h-2 rounded-full bg-aw-tan" />
                  <h3 className="text-white font-display font-semibold text-xl sm:text-2xl">{sec.title}</h3>
                  <span className="text-white/40 text-xs font-medium ml-auto">{sec.items.length} members</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {sec.items.map((member, i) => (
                    <MemberCard
                      key={member.name}
                      member={member}
                      index={i + idx * 2}
                      inView={inView}
                      isHovered={hoveredMember === member.name}
                      onHover={() => setHoveredMember(member.name)}
                      onLeave={() => setHoveredMember(null)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredMembers.map((member, i) => (
              <MemberCard
                key={member.name}
                member={member}
                index={i}
                inView={inView}
                isHovered={hoveredMember === member.name}
                onHover={() => setHoveredMember(member.name)}
                onLeave={() => setHoveredMember(null)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function MemberCard({
  member,
  index,
  inView,
  isHovered,
  onHover,
  onLeave,
}: {
  member: TeamMember
  index: number
  inView: boolean
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const PillarIcon = member.Icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.04 + index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl cursor-pointer bg-[#0A111A] border border-white/[0.04] hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
      style={{ aspectRatio: '3/4', minHeight: '320px' }}
    >
      {/* Inner wrapper for image & gradient to contain them within rounded corners, allowing outer div to be overflow-visible for shadows */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'brightness(0.85) saturate(0.9)' }}
        />
        {/* Shading Gradient Overlay - Darker at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A11] via-[#050A11]/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Top Department Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold backdrop-blur-md"
          style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)' }}
        >
          <PillarIcon className="w-3 h-3" style={{ color: member.color }} />
          {member.pillar}
        </div>
      </div>

      {/* Member Details */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-5">
        <div className="text-white/95 font-display font-medium text-base sm:text-lg leading-tight mb-1">{member.name}</div>
        <div className="text-white/50 text-xs font-medium tracking-wide mb-2">{member.role}</div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {member.expertise.map((e) => (
                  <span
                    key={e}
                    className="text-[9px] px-2 py-1 rounded-md font-medium tracking-wide"
                    style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {e}
                  </span>
                ))}
              </div>
              <p className="text-white/40 text-[11px] leading-relaxed font-light">"{member.quote}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

