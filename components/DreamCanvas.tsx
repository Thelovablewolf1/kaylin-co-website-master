'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function DreamCanvas() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const floatingElements = [
    {
      id: 1,
      size: 'w-24 h-24',
      color: 'bg-gradient-to-r from-pink-400/60 to-blue-400/60',
      initialX: -60,
      initialY: -40,
      duration: 8
    },
    {
      id: 2,
      size: 'w-32 h-32',
      color: 'bg-gradient-to-r from-pink-500/60 to-blue-500/60',
      initialX: 50,
      initialY: -30,
      duration: 6
    },
    {
      id: 3,
      size: 'w-20 h-20',
      color: 'bg-gradient-to-r from-pink-300/60 to-blue-300/60',
      initialX: -40,
      initialY: 50,
      duration: 10
    },
    {
      id: 4,
      size: 'w-28 h-28',
      color: 'bg-gradient-to-r from-cyan-600/60 to-blue-600/60',
      initialX: 60,
      initialY: 40,
      duration: 7
    },
    {
      id: 5,
      size: 'w-16 h-16',
      color: 'bg-gradient-to-r from-cyan-200/50 to-blue-200/50',
      initialX: -80,
      initialY: 20,
      duration: 9
    },
    {
      id: 6,
      size: 'w-36 h-36',
      color: 'bg-gradient-to-r from-cyan-400/50 to-blue-400/50',
      initialX: 30,
      initialY: -60,
      duration: 11
    },
  ]

  if (!isClient) {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-70">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-cyan-500/15" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-80 overflow-hidden">
      {/* Main animated floating elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.color} rounded-full blur-lg`}
          initial={{
            x: element.initialX,
            y: element.initialY,
          }}
          animate={{
            x: [
              element.initialX, 
              element.initialX + 60, 
              element.initialX - 40, 
              element.initialX + 30, 
              element.initialX - 20,
              element.initialX
            ],
            y: [
              element.initialY, 
              element.initialY + 40, 
              element.initialY - 35, 
              element.initialY + 25, 
              element.initialY - 15,
              element.initialY
            ],
            rotate: [0, 90, 180, 270, 360, 0],
            scale: [1, 1.15, 1.3, 1.15, 1.05, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Large static background elements */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-400/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-1/3 w-44 h-44 bg-blue-400/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-52 h-52 bg-cyan-500/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}/>
      
      {/* Small floating particles */}
      <motion.div
        className="absolute top-1/5 right-1/5 w-8 h-8 bg-cyan-300/40 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0, -10, 0],
          x: [0, 15, -10, 20, 0],
          opacity: [0.4, 0.7, 0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/5 left-1/5 w-6 h-6 bg-blue-300/50 rounded-full blur-sm"
        animate={{
          y: [0, 15, -5, 10, 0],
          x: [0, -10, 15, -5, 0],
          opacity: [0.5, 0.8, 0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-2/3 right-2/3 w-10 h-10 bg-cyan-400/45 rounded-full blur-sm"
        animate={{
          y: [0, -15, 5, -10, 0],
          x: [0, 10, -15, 8, 0],
          opacity: [0.4, 0.6, 0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(34,211,238,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.6)_1px,transparent_1px)] bg-[size:64px_64px]"
        animate={{
          backgroundPosition: ['0px 0px', '64px 64px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-1/2 bg-gradient-to-b from-cyan-400/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-1 h-1/2 bg-gradient-to-t from-blue-400/30 to-transparent"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
