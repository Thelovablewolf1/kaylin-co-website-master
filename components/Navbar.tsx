'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'portfolio', 'about', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect-dark py-3 backdrop-blur-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-xl font-bold text-gradient font-playfair tracking-tight">
              Kaylin Co.
            </span>
            <Sparkles className="w-4 h-4 text-cyan-400 animate-glow" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-purple-500/10'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/20 rounded-lg border border-purple-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border border-purple-500/30"
            >
              Start Project
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 glass-effect rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 glass-effect-dark rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-purple-500/10 border border-purple-500/20'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => scrollToSection('#contact')}
                  className="mt-4 px-4 py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-lg font-semibold text-white text-center shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}