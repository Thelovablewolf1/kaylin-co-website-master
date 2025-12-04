'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, Send, Loader2, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm as useFormspree, ValidationError } from '@formspree/react'

interface ContactForm {
  name: string
  email: string
  company: string
  budget: string
  timeline: string
  message: string
}

export default function Contact() {
  const [state, handleFormspreeSubmit] = useFormspree("mdkvavbw")
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Combined submit handler
  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    try {
      // Create FormData for Formspree
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('company', data.company || 'Not provided')
      formData.append('budget', data.budget || 'Not specified')
      formData.append('timeline', data.timeline || 'Not specified')
      formData.append('message', data.message)

      // Submit to Formspree
      await handleFormspreeSubmit(formData)
      
      // Reset form if submission was successful
      if (state.succeeded) {
        reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@kaylinco.com',
      href: 'mailto:info@kaylinco.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+263 775 775 244 / 774 898 583',
      href: 'tel:+263775775244 / 774898583'
    }
  ]

  // Success State
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 relative">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gradient leading-tight"
            >
              Message Sent!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Thank you for reaching out! We&apos;ve received your message and will get back to you within 24-48 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/'}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full font-semibold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Back to Home
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="px-8 py-4 glass-effect rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Main Form State
  return (
    <section id="contact" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Fixed Header with proper line height */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair leading-[1.2]">
            <span className="text-white block">Start Your</span>
            <span className="text-gradient block pt-2">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your dreams to life? Let&apos;s create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Let&apos;s Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 glass-effect rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-xl mr-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    <div className="text-white font-semibold group-hover:text-gradient transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect rounded-2xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-bold text-white mb-3">Why Work With Us?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Free initial consultation</li>
                <li>• Transparent pricing</li>
                <li>• Agile development process</li>
                <li>• Ongoing support &amp; maintenance</li>
                <li>• 24-48 hour response time</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 border border-white/10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="Your name"
                    disabled={isSubmitting || state.submitting}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="your.email@company.com"
                    disabled={isSubmitting || state.submitting}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  {...register('company')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                  placeholder="Your company (optional)"
                  disabled={isSubmitting || state.submitting}
                />
                <ValidationError 
                  prefix="Company" 
                  field="company"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Budget Range ($)
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 [&>option]:bg-gray-900 [&>option]:text-white"
                    disabled={isSubmitting || state.submitting}
                  >
                    <option value="">Select budget</option>
                    <option value="200-500">$200 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-3000">$1,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                  </select>
                  <ValidationError 
                    prefix="Budget" 
                    field="budget"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 [&>option]:bg-gray-900 [&>option]:text-white"
                    disabled={isSubmitting || state.submitting}
                  >
                    <option value="">Select timeline</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="12+ months">12+ months</option>
                  </select>
                  <ValidationError 
                    prefix="Timeline" 
                    field="timeline"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                  placeholder="Describe your vision, goals, and any specific requirements..."
                  disabled={isSubmitting || state.submitting}
                />
                {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={!(isSubmitting || state.submitting) ? { scale: 1.02 } : {}}
                whileTap={!(isSubmitting || state.submitting) ? { scale: 0.98 } : {}}
                disabled={isSubmitting || state.submitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-cyan-300 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {(isSubmitting || state.submitting) ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Formspree Status Messages */}
              {state.errors && (
                <div className="text-center">
                  <p className="text-red-400 text-sm">
                    There was an error submitting the form. Please try again.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
          }
