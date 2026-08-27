import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import InsightsPage from './pages/InsightsPage'
import ContactPage from './pages/ContactPage'
import FinancePage from './pages/FinancePage'
import DigitalPage from './pages/DigitalPage'
import PeoplePage from './pages/PeoplePage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Disable smooth scroll temporarily for instant page top reset
    const originalScrollBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    document.documentElement.style.scrollBehavior = originalScrollBehavior
  }, [pathname])

  return null
}

function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div className="flex flex-col min-h-screen bg-aw-cream">
      <ScrollToTop />
      {!isLoginPage && <Navbar />}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/digital" element={<DigitalPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App
