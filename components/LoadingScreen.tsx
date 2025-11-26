'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    // Simulate loading progress with consistent increments
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Use consistent increment instead of random
        const increment = prev < 50 ? 15 : 8
        return Math.min(prev + increment, 100)
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [isClient])

  // Don't render anything during SSR
  if (!isClient) {
    return null
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                type: "spring",
                bounce: 0.4
              }}
              className="flex items-center justify-center space-x-3 mb-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full"
              />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold text-gradient font-playfair"
              >
                Kaylin Co.
              </motion.span>
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </motion.div>
            </motion.div>
            
            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "min(400px, 80vw)" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="mx-auto bg-white/10 rounded-full h-2 overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full"
              />
            </motion.div>
            
            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="space-y-4"
            >
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 text-lg font-light"
              >
                Bringing dreams to life...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-sm text-gray-500"
              >
                Crafting digital experiences
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}