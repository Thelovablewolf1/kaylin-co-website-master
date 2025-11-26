'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check system preference or stored theme
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    localStorage.setItem('theme', !isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('light', !isDark)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-3 glass-effect rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-cyan-400" />
        )}
      </motion.div>
    </motion.button>
  )
}