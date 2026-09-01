import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import GlobalPresence from '@/components/sections/GlobalPresence'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Stats from '@/components/sections/Stats'
import WhoWeServe from '@/components/sections/WhoWeServe'
import Insights from '@/components/sections/Insights'
import Founder from '@/components/sections/Founder'
import Team from '@/components/sections/Team'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <Marquee />
      <GlobalPresence />
      <ServicesGrid />
      <Stats />
      <WhoWeServe />
      <Insights />
      <Founder />
      <Team />
      <CTASection />
    </motion.div>
  )
}
