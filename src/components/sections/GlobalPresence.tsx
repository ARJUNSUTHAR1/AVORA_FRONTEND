import { motion } from 'framer-motion'
import { Globe2, MapPin } from 'lucide-react'

const globalMarkets = [
  { country: 'USA', city: 'New York', flag: '🇺🇸' },
  { country: 'Canada', city: 'Toronto', flag: '🇨🇦' },
  { country: 'UK', city: 'London', flag: '🇬🇧' },
  { country: 'Germany', city: 'Frankfurt', flag: '🇩🇪' },
  { country: 'France', city: 'Paris', flag: '🇫🇷' },
  { country: 'Italy', city: 'Milan', flag: '🇮🇹' },
  { country: 'Netherlands', city: 'Amsterdam', flag: '🇳🇱' },
  { country: 'Switzerland', city: 'Zurich', flag: '🇨🇭' },
  { country: 'UAE', city: 'Dubai', flag: '🇦🇪' },
  { country: 'Saudi Arabia', city: 'Riyadh', flag: '🇸🇦' },
  { country: 'South Africa', city: 'Johannesburg', flag: '🇿🇦' },
  { country: 'Singapore', city: '', flag: '🇸🇬' },
  { country: 'Japan', city: 'Tokyo', flag: '🇯🇵' },
  { country: 'Australia', city: 'Sydney', flag: '🇦🇺' },
  { country: 'New Zealand', city: 'Auckland', flag: '🇳🇿' },
]

const indiaHubs = [
  { state: 'Rajasthan', city: 'Chittorgarh' },
  { state: 'Maharashtra', city: 'Mumbai' },
  { state: 'Maharashtra', city: 'Nagpur' },
  { state: 'Telangana', city: 'Hyderabad' },
  { state: 'Gujarat', city: 'Ahmedabad' },
  { state: 'Tamil Nadu', city: 'Chennai' },
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
            Awooraa operates across 15 Global Markets and 6 India Hubs, providing unified Finance, Digital, and People solutions to growing businesses anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Global Markets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {globalMarkets.map((market, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-aw-tan/30 hover:bg-white/[0.06] transition-all group flex items-center gap-3"
                >
                  <span className="text-xl leading-none filter drop-shadow-md">{market.flag}</span>
                  <div>
                    <span className="block text-sm font-semibold text-white group-hover:text-aw-tan transition-colors">
                      {market.country}
                    </span>
                    {market.city && (
                      <span className="block text-xs text-white/50 font-medium mt-0.5">
                        {market.city}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* India Hubs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <MapPin className="w-5 h-5 text-aw-tan" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white">6 India Hubs</h3>
                <p className="text-xs text-white/50 font-medium">Domestic Operations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
