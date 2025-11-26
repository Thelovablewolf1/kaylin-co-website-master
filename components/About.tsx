'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Globe, Heart } from 'lucide-react'

const stats = [
  { icon: Award, number: '150+', label: 'Projects Completed' },
  { icon: Users, number: '50+', label: 'Happy Clients' },
  { icon: Globe, number: '15+', label: 'Countries Served' },
  { icon: Heart, number: '98%', label: 'Client Satisfaction' }
]

const values = [
  {
    title: 'Innovation First',
    description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.'
  },
  {
    title: 'Artistic Excellence',
    description: 'Every pixel matters. We craft visually stunning experiences that tell your story.'
  },
  {
    title: 'Collaborative Spirit',
    description: 'We work with you as partners, ensuring your vision guides every decision.'
  },
  {
    title: 'Future-Proof Solutions',
    description: 'We build with scalability and longevity in mind, preparing you for tomorrow.'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            <span className="text-gradient">Dream Weavers</span>
            <span className="text-white block">Behind the Magic</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a collective of passionate creators, developers, and visionaries dedicated to transforming imaginative concepts into digital reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Kaylin Co. emerged from a simple belief: that technology should be as beautiful as it is functional. We bridge the gap between artistic vision and technical execution.
              </p>
              <p className="text-lg leading-relaxed">
                Our team of award-winning designers and engineers has spent years mastering the art of digital creation. We don't just build websites; we craft immersive experiences that resonate with your audience and drive real results.
              </p>
              <p className="text-lg leading-relaxed">
                From startups to Fortune 500 companies, we've helped brands of all sizes transform their digital presence and achieve their wildest dreams.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 glass-effect rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-300 mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group p-6 glass-effect rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}