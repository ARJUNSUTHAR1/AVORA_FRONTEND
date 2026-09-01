import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

export default function CookiePolicyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      <section className="py-20 px-6 md:px-12 bg-aw-cream border-b border-aw-light/60">
        <div className="max-w-screen-md mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-aw-tan" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Legal Information</span>
            <span className="w-10 h-px bg-aw-tan" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-aw-navy leading-tight mb-6">
            Cookie Policy
          </h1>
          <p className="text-aw-slate text-sm sm:text-base leading-relaxed">
            Information about how we use cookies on our website.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-screen-md mx-auto prose prose-slate">
          <div className="mb-10 text-sm text-aw-slate">
            Last updated: September 2026
          </div>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">1. What Are Cookies</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third party to recognize you and make your next visit easier and the Service more useful to you.
          </p>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">2. How Awooraa Uses Cookies</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, and to store your preferences.
          </p>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">3. Third-Party Cookies</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service and deliver advertisements on and through the Service.
          </p>

          <div className="mt-12 p-6 bg-aw-cream rounded-xl border border-aw-light">
            <h3 className="flex items-center gap-2 text-lg font-display font-semibold text-aw-navy mb-3">
              <Info className="w-5 h-5 text-aw-tan" />
              Contact Us
            </h3>
            <p className="text-aw-slate text-sm mb-0">
              If you have any questions about this Cookie Policy, please contact us at <a href="mailto:info@awooraa.com" className="text-aw-tan hover:underline">info@awooraa.com</a>.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
