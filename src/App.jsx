import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Moon, Sun, Menu, X } from 'lucide-react'
import './App.css'
import { useDarkMode } from './hooks/useDarkMode'

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
  const [darkMode, toggleDarkMode] = useDarkMode()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <Router>
      <div className="bg-background text-foreground min-h-screen">
        {/* Navigation */}
        <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border sticky top-0 z-50 border-b backdrop-blur">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
                  <span className="text-xl font-bold text-white">TH</span>
                </div>
                <span className="text-xl font-bold">Tech Hilfe Pro</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center space-x-8 md:flex">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                  Über uns
                </Link>
                <Link
                  to="/contact"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </Link>
                <Button onClick={toggleDarkMode} variant="ghost" size="icon">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center space-x-2 md:hidden">
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
                className="space-y-4 py-4 md:hidden"
              >
                <Link
                  to="/"
                  onClick={toggleMobileMenu}
                  className="text-foreground hover:text-primary block transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={toggleMobileMenu}
                  className="text-foreground hover:text-primary block transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/blog"
                  onClick={toggleMobileMenu}
                  className="text-foreground hover:text-primary block transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/about"
                  onClick={toggleMobileMenu}
                  className="text-foreground hover:text-primary block transition-colors"
                >
                  Über uns
                </Link>
                <Link
                  to="/contact"
                  onClick={toggleMobileMenu}
                  className="text-foreground hover:text-primary block transition-colors"
                >
                  Kontakt
                </Link>
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {/* Company Info */}
              <div>
                <div className="mb-4 flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
                    <span className="text-xl font-bold text-white">TH</span>
                  </div>
                  <span className="text-lg font-bold">Tech Hilfe Pro</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Professioneller IT-Support in Köln und Neuss
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-4 font-semibold">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="mb-4 font-semibold">Rechtliches</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/impressum"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/datenschutz"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/agb"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      AGB
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 font-semibold">Kontakt</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/4915565029989"
                      className="hover:text-primary transition-colors"
                    >
                      +49 155 65029989
                    </a>
                  </li>
                  <li>
                    E-Mail:{' '}
                    <a
                      href="mailto:info@techhilfepro.de"
                      className="hover:text-primary transition-colors"
                    >
                      info@techhilfepro.de
                    </a>
                  </li>
                  <li>Köln & Neuss, NRW</li>
                </ul>
              </div>
            </div>

            <div className="border-border text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Tech Hilfe Pro. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
