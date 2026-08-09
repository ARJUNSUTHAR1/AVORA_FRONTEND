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
    name: 'CA Prasant Inani',
    role: 'Tax Advisor',
    category: 'accounts',
    categoryLabel: 'Accounts & Tax Team',
    pillar: 'Finance',
    Icon: TrendingUp,
    color: '#B8A996',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=85',
    expertise: ['Direct & Indirect Tax', 'Tax Advisory', 'Statutory Compliance'],
    quote: 'Strategic tax planning and robust advisory to optimize corporate growth.',
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
    <section ref={ref} id="team" className="py-20 md:py-32 bg-[#060F1A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-aw-tan/[0.03] rounded-full blur-[140px] pointer-events-none" />

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

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
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
      transition={{ duration: 0.5, delay: 0.04 + index * 0.05 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-aw-navy border border-white/10 hover:border-aw-tan/40 transition-all duration-300 shadow-card"
      style={{ aspectRatio: '3/4' }}
    >
      {/* Photo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'brightness(0.9) saturate(0.95)' }}
        />
      </div>

      {/* Shading Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060F1A] via-[#060F1A]/50 to-transparent opacity-90" />

      {/* Top Department Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold backdrop-blur-md"
          style={{ background: `${member.color}25`, border: `1px solid ${member.color}40`, color: member.color }}
        >
          <PillarIcon className="w-3 h-3" />
          {member.pillar}
        </div>
      </div>

      {/* Member Details */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
        <div className="text-white font-display font-semibold text-base sm:text-lg leading-tight mb-0.5">{member.name}</div>
        <div className="text-aw-tan text-xs font-medium">{member.role}</div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-1 mt-2.5 mb-2">
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
              <p className="text-white/60 text-[10px] italic leading-relaxed">"{member.quote}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

