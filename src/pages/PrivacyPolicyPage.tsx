import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-aw-slate text-sm sm:text-base leading-relaxed">
            How we handle and protect your personal information.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-screen-md mx-auto prose prose-slate">
          <div className="mb-10 text-sm text-aw-slate">
            Last updated: September 2026
          </div>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">1. Information We Collect</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            We collect information you provide directly to us, such as when you request information, use our services, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">2. How We Use Your Information</h2>
          <p className="text-aw-slate mb-4 leading-relaxed text-sm">We use the information we collect to:</p>
          <ul className="list-disc pl-5 mb-6 text-aw-slate text-sm space-y-2">
            <li>Provide, maintain, and improve our services;</li>
            <li>Respond to your requests, comments, or questions;</li>
            <li>Send you technical notices, updates, and administrative messages;</li>
            <li>Communicate with you about products, services, and events offered by Awooraa.</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">3. Information Sharing</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            We do not share your personal information with third parties except as described in this privacy policy, such as with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
          </p>

          <div className="mt-12 p-6 bg-aw-cream rounded-xl border border-aw-light">
            <h3 className="flex items-center gap-2 text-lg font-display font-semibold text-aw-navy mb-3">
              <Shield className="w-5 h-5 text-aw-tan" />
              Contact Us
            </h3>
            <p className="text-aw-slate text-sm mb-0">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@awooraa.com" className="text-aw-tan hover:underline">info@awooraa.com</a>.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
