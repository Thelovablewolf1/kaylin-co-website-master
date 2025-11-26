'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Smartphone, Zap, Users, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for exceptional performance and user experience.',
    features: ['React/Next.js', 'TypeScript', 'Node.js', 'Real-time Features'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that captivate users and drive engagement through thoughtful design principles.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Interaction Design'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile experiences that feel native and deliver seamless performance across all devices.',
    features: ['React Native', 'iOS & Android', 'PWA', 'App Store Deployment'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications optimized for speed, SEO, and core web vitals to dominate search rankings.',
    features: ['Core Web Vitals', 'SEO Optimization', 'CDN Integration', 'Caching Strategies'],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Strategy & Consulting',
    description: 'Expert guidance to transform your vision into a successful digital product with measurable results.',
    features: ['Product Strategy', 'Technical Audits', 'Growth Planning', 'Market Analysis'],
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Rocket,
    title: 'Brand Launch',
    description: 'End-to-end solutions to launch your brand with impact, from concept to market dominance.',
    features: ['Brand Identity', 'Marketing Strategy', 'Launch Campaigns', 'Analytics Setup'],
    gradient: 'from-red-500 to-pink-500'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            <span className="text-white">Our Creative</span>
            <span className="text-gradient block">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions that blend artistic vision with technical excellence to bring your dreams to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative glass-effect rounded-2xl p-8 h-full border border-white/10 group-hover:border-white/20 transition-all duration-500">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-400">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}