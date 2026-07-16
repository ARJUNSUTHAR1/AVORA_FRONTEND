import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const articles = [
  { category: 'Finance', title: 'Why Every Indian SME Needs a Virtual CFO in 2024', excerpt: 'As businesses scale, financial complexity grows exponentially. Here\'s why a Virtual CFO is no longer a luxury.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', date: 'Dec 15, 2024', readTime: '5 min' },
  { category: 'Compliance', title: 'GST 2024 Updates: Everything Your Business Needs to Know', excerpt: 'The GST council has introduced significant changes. Stay compliant with this comprehensive guide.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', date: 'Nov 28, 2024', readTime: '7 min' },
  { category: 'Growth', title: 'Digital Marketing Strategies That Work for Indian B2B', excerpt: 'Beyond likes and shares — how to build a marketing engine that generates real leads and revenue.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', date: 'Nov 10, 2024', readTime: '6 min' },
  { category: 'Real Estate', title: 'NRI Guide to Investing in Indian Real Estate in 2024', excerpt: 'Regulatory changes, tax implications, and the best markets for NRI property investment.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', date: 'Oct 22, 2024', readTime: '8 min' },
  { category: 'Finance', title: 'Cash Flow Management for Growing Startups', excerpt: 'The number one reason startups fail is running out of cash. Here are the frameworks that work.', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', date: 'Oct 5, 2024', readTime: '5 min' },
  { category: 'Compliance', title: 'Company Registration in India: Complete 2024 Guide', excerpt: 'Pvt Ltd, LLP, or OPC? A comprehensive comparison to help you choose the right structure.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', date: 'Sep 18, 2024', readTime: '9 min' },
]

const categoryColors: Record<string, string> = {
  Finance: 'bg-blue-50 text-blue-700',
  Compliance: 'bg-amber-50 text-amber-700',
  Growth: 'bg-emerald-50 text-emerald-700',
  'Real Estate': 'bg-purple-50 text-purple-700',
}

export default function InsightsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 bg-avora-cream min-h-screen"
    >
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-avora-gold" />
              <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">Thought Leadership</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl text-avora-navy leading-tight mb-6">
              What We Think
            </h1>
            <p className="text-avora-muted text-lg max-w-lg">
              Insights on finance, compliance, business growth, and real estate — straight from our experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden bento-shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-400 cursor-pointer flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                      {article.category}
                    </span>
                    <span className="text-avora-muted/60 text-xs">{article.readTime} read</span>
                  </div>
                  <h3 className="font-display text-xl text-avora-navy leading-snug mb-3 flex-1">{article.title}</h3>
                  <p className="text-avora-muted text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-avora-muted/50 text-xs">{article.date}</span>
                    <span className="flex items-center gap-1 text-avora-navy font-semibold text-sm group-hover:text-avora-gold transition-colors">
                      Read <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
