import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const services = ['Finance & Accounting', 'Compliance', 'Business Growth', 'Real Estate Advisory', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    toast.success('Message sent! We\'ll get back to you within 24 hours.')
    setForm({ name: '', email: '', company: '', service: '', message: '' })
    setLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      <section className="py-20 px-6 md:px-12 bg-avora-cream">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-avora-gold" />
              <span className="text-avora-gold text-xs font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl text-avora-navy leading-tight mb-6">
              Start a<br />
              <em className="not-italic text-avora-gold">Conversation</em>
            </h1>
            <p className="text-avora-muted text-lg max-w-lg">
              Tell us about your business. We'll match you with the right expertise and show you exactly how Avora can help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-avora-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full border border-avora-cream-dark rounded-xl px-4 py-3.5 text-avora-navy placeholder:text-avora-muted/40 focus:outline-none focus:border-avora-navy/40 focus:ring-2 focus:ring-avora-navy/10 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-avora-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full border border-avora-cream-dark rounded-xl px-4 py-3.5 text-avora-navy placeholder:text-avora-muted/40 focus:outline-none focus:border-avora-navy/40 focus:ring-2 focus:ring-avora-navy/10 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-avora-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Company Name</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company"
                    className="w-full border border-avora-cream-dark rounded-xl px-4 py-3.5 text-avora-navy placeholder:text-avora-muted/40 focus:outline-none focus:border-avora-navy/40 focus:ring-2 focus:ring-avora-navy/10 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-avora-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Service Interested In</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-avora-cream-dark rounded-xl px-4 py-3.5 text-avora-navy focus:outline-none focus:border-avora-navy/40 focus:ring-2 focus:ring-avora-navy/10 transition-all text-sm bg-white appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-avora-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business and what you need..."
                    rows={5}
                    className="w-full border border-avora-cream-dark rounded-xl px-4 py-3.5 text-avora-navy placeholder:text-avora-muted/40 focus:outline-none focus:border-avora-navy/40 focus:ring-2 focus:ring-avora-navy/10 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-fill btn-fill-gold w-full flex items-center justify-center gap-2 py-4 bg-avora-navy text-white rounded-xl font-bold text-sm hover:bg-avora-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl text-avora-navy mb-4">We're Here to Help</h2>
                <p className="text-avora-muted leading-relaxed">
                  Our team typically responds within 2–4 business hours. For urgent queries, call us directly.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@avoraandco.com' },
                  { icon: Phone, label: 'Phone', value: '+91 12345 67890' },
                  { icon: MapPin, label: 'Office', value: 'Mumbai, Maharashtra, India' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-avora-cream rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-avora-navy flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-avora-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-avora-muted font-semibold tracking-wide uppercase mb-1">{label}</div>
                      <div className="text-avora-navy font-medium text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-avora-navy rounded-2xl">
                <h3 className="font-display text-xl text-white mb-2">Free Initial Consultation</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  Schedule a 30-minute discovery call. No commitment, no charge — just honest advice.
                </p>
                <button className="flex items-center gap-2 text-avora-gold font-semibold text-sm hover:gap-3 transition-all">
                  Book a Call <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
