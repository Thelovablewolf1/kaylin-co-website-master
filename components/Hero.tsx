'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

// Predefined positions to avoid random values during hydration
const predefinedPositions = [
  { x: -20, y: -15 },
  { x: 25, y: -10 },
  { x: -35, y: 20 },
  { x: 15, y: 25 }
]

const floatingShapes = [
  { delay: 0, duration: 6, size: 'w-4 h-4' },
  { delay: 1, duration: 8, size: 'w-6 h-6' },
  { delay: 2, duration: 10, size: 'w-3 h-3' },
  { delay: 3, duration: 7, size: 'w-5 h-5' },
]

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.size} bg-gradient-to-r from-cyan-500/20 to-cyan-300/20 rounded-full blur-xl`}
            initial={{
              x: predefinedPositions[index].x,
              y: predefinedPositions[index].y,
            }}
            animate={isClient ? {
              x: [predefinedPositions[index].x, predefinedPositions[index].x + 30, predefinedPositions[index].x - 20],
              y: [predefinedPositions[index].y, predefinedPositions[index].y + 20, predefinedPositions[index].y - 15],
            } : undefined}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-sm uppercase tracking-widest text-cyan-400">
              Creative Agency
            </span>
          </motion.div>

          {/* Fixed Heading with proper line height and sizing */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-none">
              <span className="text-gradient font-playfair block pb-2 md:pb-4">
                Bringing
              </span>
              <span className="text-white font-playfair block">
                Dreams to Life
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We transform visionary ideas into extraordinary digital experiences. 
            Where creativity meets technology, magic happens.
          </motion.p>

          {/* Single CTA Button - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full font-semibold text-white text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}