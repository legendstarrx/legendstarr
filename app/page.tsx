'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from '@/components/Button'
import AnimatedSection from '@/components/AnimatedSection'
import LifestyleGallery from '@/components/LifestyleGallery'
import Newsletter from '@/components/Newsletter'

// Generate particle positions on client side only
function useParticles(count: number) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number }>>([])
  
  useEffect(() => {
    const newParticles = [...Array(count)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [count])
  
  return particles
}

export default function Home() {
  const particles = useParticles(15) // Reduced from 20 to 15 for better performance

  return (
    <div className="touch-pan-y">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]"></div>
        </div>

        {/* Animated Particles Effect - Only render on client */}
        {particles.length > 0 && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold rounded-full"
                initial={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 0
                }}
                animate={{
                  y: [particle.y, particle.y - 100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Multi-Millionaire.{' '}
              <motion.span 
                className="text-gold inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(212,175,55,0.5)',
                    '0 0 40px rgba(212,175,55,0.8)',
                    '0 0 20px rgba(212,175,55,0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Entrepreneur.
              </motion.span>{' '}
              Builder.
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building businesses. Creating wealth. Delivering results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href="/work-with-me" variant="primary" className="text-lg px-10 py-5">
              Work With Me
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Brand Value Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              Why <span className="text-gold">Legendstarr</span>?
            </h2>
            <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
              I'm a multi-millionaire entrepreneur who's built and scaled multiple businesses across industries. 
              When you work with me, you get access to the same proven systems I use to generate revenue. 
              This is about building real wealth together.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <AnimatedSection delay={0.1}>
              <motion.div 
                className="text-center p-8 border border-gold/20 rounded-lg bg-black/50 backdrop-blur-sm hover:border-gold/60 hover:bg-black/70 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gold group-hover:text-gold-300 transition-colors">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    I've built and scaled multiple profitable businesses. When you partner with me, you leverage systems that actually work.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay={0.2}>
              <motion.div 
                className="text-center p-8 border border-gold/20 rounded-lg bg-black/50 backdrop-blur-sm hover:border-gold/60 hover:bg-black/70 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gold group-hover:text-gold-300 transition-colors">
                    Multiple Revenue Streams
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    I've scaled businesses across industries—advertising, software, e-commerce, and more. Diverse experience, real results.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay={0.3}>
              <motion.div 
                className="text-center p-8 border border-gold/20 rounded-lg bg-black/50 backdrop-blur-sm hover:border-gold/60 hover:bg-black/70 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gold group-hover:text-gold-300 transition-colors">
                    Partnership, Not Just Service
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    When we work together, our success is aligned. I only win when you win—that's the foundation of real partnership.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery Section */}
      <LifestyleGallery />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}
