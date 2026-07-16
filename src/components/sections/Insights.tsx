import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const insights = [
  {
    category: 'Finance',
    title: 'Why Every Indian SME Needs a Virtual CFO in 2024',
    excerpt: 'As businesses scale, financial complexity grows exponentially. A virtual CFO provides enterprise-grade financial intelligence at startup costs.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    date: 'Dec 2024',
    readTime: '5 min read',
  },
  {
    category: 'Compliance',
    title: 'GST 2024 Updates: What Every Business Must Know',
    excerpt: 'The GST council has introduced significant changes this year. Here\'s what you need to stay compliant and avoid penalties.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    date: 'Nov 2024',
    readTime: '7 min read',
  },
  {
    category: 'Growth',
    title: 'Digital Marketing Strategies That Actually Work for Indian Businesses',
    excerpt: 'Beyond likes and shares — how to build a digital marketing engine that generates real leads and revenue for B2B services.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    date: 'Oct 2024',
    readTime: '6 min read',
  },
]

const categoryColors: Record<string, string> = {
  Finance: 'bg-blue-50 text-blue-700',
  Compliance: 'bg-amber-50 text-amber-700',
  Growth: 'bg-emerald-50 text-emerald-700',
}

export default function Insights() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-avora-cream">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-avora-gold" />
            <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">Thought Leadership</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl text-avora-navy leading-tight">
              What We Think
            </h2>
            <Link
              to="/insights"
              className="flex items-center gap-2 text-avora-navy font-semibold text-sm hover:text-avora-gold transition-colors duration-200 group self-start md:self-auto"
            >
              All Insights
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden bento-shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-400 cursor-pointer flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[insight.category]}`}>
                    {insight.category}
                  </span>
                  <span className="text-avora-muted/60 text-xs">{insight.readTime}</span>
                </div>
                <h3 className="font-display text-xl text-avora-navy leading-snug mb-3 group-hover:text-avora-navy-light transition-colors">
                  {insight.title}
                </h3>
                <p className="text-avora-muted text-sm leading-relaxed flex-1 mb-6">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-avora-muted/50 text-xs">{insight.date}</span>
                  <span className="flex items-center gap-1 text-avora-navy font-semibold text-sm group-hover:text-avora-gold transition-colors duration-200">
                    Read
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
