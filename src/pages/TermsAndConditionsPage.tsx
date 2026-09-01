import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function TermsAndConditionsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-aw-slate text-sm sm:text-base leading-relaxed">
            Please read these terms and conditions carefully before using Our Service.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-screen-md mx-auto prose prose-slate">
          <div className="mb-10 text-sm text-aw-slate">
            Last updated: September 2026
          </div>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">1. Introduction</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            Welcome to Awooraa Global Professional Services. These Terms and Conditions outline the rules and regulations for the use of our Website and Services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Awooraa's website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">2. Intellectual Property Rights</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            Other than the content you own, under these Terms, Awooraa and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">3. Restrictions</h2>
          <p className="text-aw-slate mb-4 leading-relaxed text-sm">You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-5 mb-6 text-aw-slate text-sm space-y-2">
            <li>Publishing any Website material in any other media without prior consent;</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>Using this Website in any way that is or may be damaging to this Website;</li>
            <li>Using this Website in any way that impacts user access to this Website;</li>
            <li>Using this Website contrary to applicable laws and regulations, including Indian IT Act 2000 and GDPR.</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">4. Governing Law & Jurisdiction</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            These Terms will be governed by and interpreted in accordance with the laws of India, specifically in the jurisdiction of Maharashtra. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Mumbai.
          </p>

          <h2 className="text-2xl font-display font-semibold text-aw-navy mb-4">5. Disclaimer</h2>
          <p className="text-aw-slate mb-6 leading-relaxed text-sm">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. The information provided on this website is for general informational purposes only and does not constitute professional advice (including legal, financial, or tax advice).
          </p>

          <div className="mt-12 p-6 bg-aw-cream rounded-xl border border-aw-light">
            <h3 className="flex items-center gap-2 text-lg font-display font-semibold text-aw-navy mb-3">
              <FileText className="w-5 h-5 text-aw-tan" />
              Contact Us
            </h3>
            <p className="text-aw-slate text-sm mb-0">
              If you have any questions about these Terms, please contact us at <a href="mailto:info@awooraa.com" className="text-aw-tan hover:underline">info@awooraa.com</a>.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
