import { motion } from 'framer-motion'
import { Globe2, MapPin } from 'lucide-react'

const globalMarkets = [
  { country: 'USA', flag: '🇺🇸' },
  { country: 'Canada', flag: '🇨🇦' },
  { country: 'UK', flag: '🇬🇧' },
  { country: 'Germany', flag: '🇩🇪' },
  { country: 'France', flag: '🇫🇷' },
  { country: 'Italy', flag: '🇮🇹' },
  { country: 'Netherlands', flag: '🇳🇱' },
  { country: 'Switzerland', flag: '🇨🇭' },
  { country: 'UAE', flag: '🇦🇪' },
  { country: 'Saudi Arabia', flag: '🇸🇦' },
  { country: 'South Africa', flag: '🇿🇦' },
  { country: 'Singapore', flag: '🇸🇬' },
  { country: 'Japan', flag: '🇯🇵' },
  { country: 'Australia', flag: '🇦🇺' },
  { country: 'New Zealand', flag: '🇳🇿' },
]

const indiaHubs = [
  { state: 'Rajasthan', city: 'Chittorgarh' },
  { state: 'Maharashtra', city: 'Mumbai' },
]

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-aw-navy text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 modern-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aw-tan/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aw-tan/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="aw-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-aw-tan" />
            <span className="text-aw-tan text-xs font-semibold tracking-[0.2em] uppercase">Global Reach</span>
            <span className="w-10 h-px bg-aw-tan" />
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl mb-6">
            Worldwide <span className="font-semibold italic text-gradient-tan">Services</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed font-normal">
            Awooraa operates across 15 Global Markets and 2 India Hubs, providing unified Finance, Digital, and People solutions to growing businesses anywhere in the world.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Global Markets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <Globe2 className="w-5 h-5 text-aw-tan" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white">15 Global Markets</h3>
                <p className="text-xs text-white/50 font-medium">International Presence</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {globalMarkets.map((market, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-aw-tan/30 hover:bg-white/[0.06] transition-all group flex items-center gap-2"
                >
                  <span className="text-lg leading-none filter drop-shadow-md">{market.flag}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-aw-tan transition-colors">
                    {market.country}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* India Hubs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <MapPin className="w-5 h-5 text-aw-tan" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white">2 India Hubs</h3>
                <p className="text-xs text-white/50 font-medium">Domestic Operations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {indiaHubs.map((hub, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-aw-tan/30 hover:bg-white/[0.06] transition-all group flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-aw-tan" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-white group-hover:text-aw-tan transition-colors">
                      {hub.city}
                    </span>
                    {hub.state && (
                      <span className="block text-xs text-white/50 font-medium mt-0.5">
                        {hub.state}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
