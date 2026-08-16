import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight, Send, MessageCircle, Building2, Globe } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../api/auth'

const services = [
  'Awooraa Finance — Accounting & Bookkeeping',
  'Awooraa Finance — GST & Tax Filing',
  'Awooraa Finance — Virtual CFO Services',
  'Awooraa Finance — MIS Reporting & Financial Planning',
  'Awooraa Finance — ROC & Corporate Compliance',
  'Awooraa Digital — Full-Stack Web Development',
  'Awooraa Digital — Software & Mobile Apps',
  'Awooraa Digital — SEO & Growth Management',
  'Awooraa Digital — ERP & CRM Implementation',
  'Awooraa People — Recruitment & Talent Acquisition',
  'Awooraa People — Payroll & Employee Management',
  'Awooraa People — HR Compliance & Policies',
  'Awooraa People — Performance & Growth Strategy',
  'Integrated Solutions / Not Sure Yet',
]

const countryCodes = [
  { code: '+1', country: 'US/CA' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'IN' },
  { code: '+61', country: 'AU' },
  { code: '+971', country: 'AE' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', city: '', message: '' })
  const [loading, setLoading] = useState(false)
  
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  const handleSendOtp = async () => {
    if (!form.email) {
      toast.error('Please enter your email first');
      return;
    }
    setOtpLoading(true);
    try {
      await api.post('/contact/send-otp', { email: form.email });
      setOtpSent(true);
      toast.success('OTP sent to your email!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send OTP. Please try again.');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }
    setOtpLoading(true);
    try {
      await api.post('/contact/verify-otp', { email: form.email, otp });
      setOtpVerified(true);
      toast.success('Email verified successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Invalid or expired OTP');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!otpVerified) {
      toast.error('Please verify your email first')
      return
    }
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields')
      return
    }
    setLoading(true)
    try {
      const payload = { ...form, phone: form.phone ? `${countryCode} ${form.phone}` : '' };
      await api.post('/contact', payload)
      toast.success('Message sent! Our team will respond within 2–4 hours.')
      setForm({ name: '', email: '', phone: '', company: '', service: '', city: '', message: '' })
      setOtpSent(false)
      setOtpVerified(false)
      setOtp('')
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-aw-cream border-b border-aw-light">
        <div className="aw-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-aw-tan" />
              <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Talk to Us</span>
            </div>
            <h1 className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-aw-navy leading-tight mb-5">
              Let's Have a<br />
              <span className="font-semibold italic text-gradient-tan">Real Conversation.</span>
            </h1>
            <p className="text-aw-slate text-base md:text-lg max-w-lg leading-relaxed font-normal">
              Direct answers. No automated bots. Reach out to our team for clear solutions tailored to your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Offices Info */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="aw-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-aw-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full border border-aw-light rounded-xl px-4 py-3.5 text-aw-navy placeholder:text-aw-slate/40 focus:outline-none focus:border-aw-tan/50 focus:ring-2 focus:ring-aw-tan/10 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-aw-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Work Email *</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setOtpSent(false); setOtpVerified(false); }}
                      placeholder="you@company.com"
                      disabled={otpVerified}
                      className="flex-1 border border-aw-light rounded-xl px-4 py-3.5 text-aw-navy placeholder:text-aw-slate/40 focus:outline-none focus:border-aw-tan/50 focus:ring-2 focus:ring-aw-tan/10 transition-all text-sm disabled:bg-gray-100 disabled:text-gray-500"
                    />
                    {!otpVerified && (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={otpLoading || !form.email}
                        className="px-6 py-3.5 bg-aw-navy text-white rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-aw-tan transition-colors disabled:opacity-50"
                      >
                        {otpLoading && !otpSent ? 'Sending...' : (otpSent ? 'Resend OTP' : 'Send OTP')}
                      </button>
                    )}
                  </div>
                </div>

                {otpSent && !otpVerified && (
                  <div className="bg-aw-cream/50 p-4 rounded-xl border border-aw-light/50 transition-all">
                    <label className="block text-aw-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Enter Verification Code</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder="6-digit code"
                        className="w-full sm:w-1/2 border border-aw-light rounded-xl px-4 py-3.5 text-aw-navy text-center tracking-widest font-mono focus:outline-none focus:border-aw-tan/50 focus:ring-2 focus:ring-aw-tan/10 transition-all text-sm"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otpLoading || otp.length !== 6}
                        className="px-6 py-3.5 bg-aw-tan text-white rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-aw-navy transition-colors disabled:opacity-50"
                      >
                        {otpLoading ? 'Verifying...' : 'Verify OTP'}
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-aw-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Phone / WhatsApp</label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-24 border border-aw-light rounded-xl px-2 py-3.5 text-aw-navy focus:outline-none focus:border-aw-tan/50 focus:ring-2 focus:ring-aw-tan/10 transition-all text-sm bg-white"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>{c.code} {c.country}</option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, ''); // strict numeric validation
                          setForm({ ...form, phone: val });
                        }}
                        placeholder="XXXXX XXXXX"
                        className="flex-1 border border-aw-light rounded-xl px-4 py-3.5 text-aw-navy placeholder:text-aw-slate/40 focus:outline-none focus:border-aw-tan/50 focus:ring-2 focus:ring-aw-tan/10 transition-all text-sm min-w-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-aw-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Company Name</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full border border-aw-light rounded-xl px-4 py-3.5 text-aw-navy placeholder:text-aw-slate/40 focus:outline-none focus:border-aw-tan/50 focus:ring-2 focus:ring-aw-tan/10 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-aw-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">Service Requirement</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-aw-light rounded-xl px-4 py-3.5 text-aw-navy focus:outline-none focus:border-aw-tan/50 focus:ring-2 focus:ring-aw-tan/10 transition-all text-sm bg-white appearance-none"
                  >
                    <option value="">Select a service practice</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-aw-navy text-xs font-semibold tracking-[0.1em] uppercase mb-2">How can we help? *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business goals or challenges..."
                    rows={5}
                    className="w-full border border-aw-light rounded-xl px-4 py-3.5 text-aw-navy placeholder:text-aw-slate/40 focus:outline-none focus:border-aw-tan/50 focus:ring-2 focus:ring-aw-tan/10 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !otpVerified}
                  className="btn-aw btn-aw-tan w-full flex items-center justify-center gap-2 py-4 bg-aw-navy text-white rounded-xl font-bold text-xs tracking-wider uppercase hover:text-aw-navy disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 shadow-premium"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send className="w-4 h-4" /> {otpVerified ? 'Send Message' : 'Verify Email to Send'}</>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Physical Company Offices Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="font-display font-semibold text-2xl text-aw-navy mb-2">Company Offices</h2>
                <p className="text-aw-slate text-xs leading-relaxed font-normal">
                  Our core operations are managed from our Head Office in Mumbai and Regional Office in Rajasthan.
                </p>
              </div>

              {/* Worldwide (USA, UK, Europe, Australia) */}
              <div className="p-5 bg-aw-cream/60 rounded-xl border border-aw-light space-y-1">
                <div className="flex items-center gap-2 text-aw-navy font-semibold text-sm">
                  <Globe className="w-4 h-4 text-aw-tan shrink-0" />
                  <span>Worldwide (USA, Canada, UK, Europe, Australia, Dubai)</span>
                </div>
                <p className="text-aw-slate text-xs pl-6 font-normal">Serving Clients Internationally (USA, Canada, UK, Europe, Australia, Dubai)</p>
              </div>

              {/* Head Office Mumbai */}
              <div className="p-5 bg-aw-cream/60 rounded-xl border border-aw-light space-y-1">
                <div className="flex items-center gap-2 text-aw-navy font-semibold text-sm">
                  <Building2 className="w-4 h-4 text-aw-tan shrink-0" />
                  <span>Head Office (Mumbai)</span>
                </div>
                <p className="text-aw-slate text-xs pl-6 font-normal">Mumbai, Maharashtra, India</p>
              </div>

              {/* Branch Office Chittorgarh */}
              <div className="p-5 bg-aw-cream/60 rounded-xl border border-aw-light space-y-1">
                <div className="flex items-center gap-2 text-aw-navy font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-aw-tan shrink-0" />
                  <span>Rajasthan Office (Chittorgarh)</span>
                </div>
                <p className="text-aw-slate text-xs pl-6 font-normal">Chittorgarh, Rajasthan, India</p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:info@awooraa.com"
                  className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-aw-light hover:border-aw-tan/30 transition-all text-xs font-medium text-aw-navy group"
                >
                  <Mail className="w-4 h-4 text-aw-tan shrink-0" />
                  <span>info@awooraa.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-aw-slate/50 group-hover:text-aw-tan" />
                </a>

                <a
                  href="tel:+916376837461"
                  className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-aw-light hover:border-aw-tan/30 transition-all text-xs font-medium text-aw-navy group"
                >
                  <Phone className="w-4 h-4 text-aw-tan shrink-0" />
                  <span>+91 63768 37461</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-aw-slate/50 group-hover:text-aw-tan" />
                </a>

                <a
                  href="https://wa.me/916376837461"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-aw-light hover:border-aw-tan/30 transition-all text-xs font-medium text-aw-navy group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp Advisory</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-aw-slate/50 group-hover:text-aw-tan" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
