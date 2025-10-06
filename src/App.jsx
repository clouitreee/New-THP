import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Moon, Sun, Menu, X } from 'lucide-react'
import './App.css'

// Import pages
import Home from './pages/Home'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import About from './pages/About'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import AGB from './pages/AGB'
import FAQ from './pages/FAQ'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TH</span>
                </div>
                <span className="font-bold text-xl">Tech Hilfe Pro</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
                <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">Über uns</Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Kontakt</Link>
                <Button onClick={toggleDarkMode} variant="ghost" size="icon">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <Button onClick={toggleDarkMode} variant="ghost" size="icon">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden py-4 space-y-4"
              >
                <Link to="/" onClick={toggleMobileMenu} className="block text-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/services" onClick={toggleMobileMenu} className="block text-foreground hover:text-primary transition-colors">Services</Link>
                <Link to="/blog" onClick={toggleMobileMenu} className="block text-foreground hover:text-primary transition-colors">Blog</Link>
                <Link to="/about" onClick={toggleMobileMenu} className="block text-foreground hover:text-primary transition-colors">Über uns</Link>
                <Link to="/contact" onClick={toggleMobileMenu} className="block text-foreground hover:text-primary transition-colors">Kontakt</Link>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-muted mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">TH</span>
                  </div>
                  <span className="font-bold text-lg">Tech Hilfe Pro</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Professioneller IT-Support in Köln und Neuss
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                  <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Über uns</Link></li>
                  <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold mb-4">Rechtliches</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
                  <li><Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link></li>
                  <li><Link to="/agb" className="text-muted-foreground hover:text-primary transition-colors">AGB</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-4">Kontakt</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>WhatsApp: <a href="https://wa.me/4915565029989" className="hover:text-primary transition-colors">+49 155 65029989</a></li>
                  <li>E-Mail: <a href="mailto:info@techhilfepro.de" className="hover:text-primary transition-colors">info@techhilfepro.de</a></li>
                  <li>Köln & Neuss, NRW</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Tech Hilfe Pro. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
