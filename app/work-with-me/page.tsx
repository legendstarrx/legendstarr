'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import ResultsCarousel, { partnerTestimonials } from '@/components/ResultsCarousel'

export default function WorkWithMe() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % partnerTestimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section - Enhanced */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm22 4c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-32-12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
          {/* Gradient Orbs */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.1, 0.15]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gold text-sm font-medium">Limited Spots Available</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Work <span className="text-gold">With Me</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's scale your business together. I handle the advertising, you focus on growth.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold">$1M+</div>
                <div className="text-sm text-gray-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold">3+</div>
                <div className="text-sm text-gray-400">Ad Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold">100%</div>
                <div className="text-sm text-gray-400">Results Focused</div>
              </div>
            </motion.div>

            {/* Scroll CTA */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex flex-col items-center text-gray-400"
              >
                <span className="text-sm mb-2">See the Results</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-8 pb-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
                Monetize Your Business with Proven Advertising Systems
              </h2>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Whether you run an AdSense website, an Ad Manager platform, an e-commerce store, 
                or any business that needs advertising—I'll use my proven strategies to scale your 
                revenue while you focus on what you do best.
              </p>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                I'll handle your advertising campaigns using the same proven systems I use for 
                my own businesses. You get results-driven advertising without the hassle.
              </p>

              <div className="mt-8 p-6 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-l-4 border-gold rounded-lg">
                <p className="text-gold font-semibold text-lg mb-2">⚡ The Problem Most Businesses Face:</p>
                <p className="text-gray-300 leading-relaxed">
                  You're either burning money on ads that don't convert, or you're leaving revenue on the table 
                  because you don't have the time or expertise to run effective campaigns. <strong className="text-gold">I solve both.</strong>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Gallery - Social Proof */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Real Results from <span className="text-gold">Real Partners</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                These aren't promises—these are actual results from businesses I'm currently working with.
              </p>
            </div>
          </AnimatedSection>

          {/* Results Carousel */}
          <ResultsCarousel />
        </div>
      </section>

      {/* Partner Testimonials / Success Stories */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner <span className="text-gold">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real conversations, real results. See what partners are saying.
              </p>
            </div>
          </AnimatedSection>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-gold/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={partnerTestimonials[testimonialIndex].image}
                    alt="Partner Success"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {partnerTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === testimonialIndex ? 'bg-gold w-8' : 'bg-gray-600 hover:bg-gray-500 w-2'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <motion.button
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + partnerTestimonials.length) % partnerTestimonials.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-gold hover:text-black border border-gold/30 rounded-full flex items-center justify-center text-gold transition-all z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % partnerTestimonials.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-gold hover:text-black border border-gold/30 rounded-full flex items-center justify-center text-gold transition-all z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
              {partnerTestimonials.map((testimonial, index) => (
                <motion.button
                  key={testimonial.id}
                  onClick={() => setTestimonialIndex(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                    index === testimonialIndex 
                      ? 'ring-2 ring-gold shadow-lg shadow-gold/30' 
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={testimonial.image}
                    alt="Partner"
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              How It <span className="text-gold">Works</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
              A simple 3-step process to get your advertising running at full capacity
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-gold/50 via-gold to-gold/50"></div>

            <AnimatedSection delay={0.1}>
              <motion.div 
                className="text-center p-8 bg-black/70 border border-gold/30 rounded-2xl hover:border-gold/60 transition-all relative backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold/50 flex items-center justify-center shadow-lg shadow-gold/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-4xl font-bold text-black">1</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gold mb-4">You Reach Out</h3>
                <p className="text-gray-400">
                  Contact me via WhatsApp to discuss your business and advertising goals. No commitment required.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div 
                className="text-center p-8 bg-black/70 border border-gold/30 rounded-2xl hover:border-gold/60 transition-all relative backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold/50 flex items-center justify-center shadow-lg shadow-gold/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-4xl font-bold text-black">2</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gold mb-4">We Strategize</h3>
                <p className="text-gray-400">
                  I analyze your business, understand your brand, and create a custom advertising strategy tailored to you.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div 
                className="text-center p-8 bg-black/70 border border-gold/30 rounded-2xl hover:border-gold/60 transition-all relative backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold/50 flex items-center justify-center shadow-lg shadow-gold/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-4xl font-bold text-black">3</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gold mb-4">We Scale Together</h3>
                <p className="text-gray-400">
                  I run your campaigns using proven systems, and we both profit from the results. It's that simple.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border border-gold/30 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
                Profit Share Model
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <strong className="text-gold">Profit Share — Negotiable Based on Scale</strong>
                </p>
                
                <p>
                  The exact percentage is determined based on:
                </p>
                
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>The scale and nature of your business</li>
                  <li>Your current revenue and growth potential</li>
                  <li>Team size and operational complexity</li>
                  <li>Long-term partnership potential</li>
                </ul>

                <p className="pt-4 border-t border-gold/20">
                  <strong className="text-gold">No upfront costs.</strong> I only get paid when you make money. 
                  This aligns our interests—I succeed when you succeed.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof & Urgency */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-transparent border border-gold/30 rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
                Limited Partnership Slots Available
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I only work with a select number of partners at a time to ensure each business gets 
                the attention and results they deserve. <strong className="text-gold">Spots fill fast.</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No Upfront Costs
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Proven Systems
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Results Guaranteed
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Why Partners <span className="text-gold">Choose Me</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💰', title: 'No Upfront Costs', desc: 'Zero risk. I only profit when you profit.' },
              { icon: '📊', title: 'Proven Systems', desc: 'The same strategies I use for my own businesses.' },
              { icon: '🎯', title: 'Multi-Platform', desc: 'Meta, TikTok, AdX - wherever your audience is.' },
              { icon: '🤝', title: 'True Partnership', desc: 'We succeed together, or not at all.' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center p-6 bg-gray-900/50 border border-gold/20 rounded-xl hover:border-gold/50 transition-all"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm22 4c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-32-12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
          {/* Glow Effects */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-red-400 text-sm font-medium">Only accepting 3 new partners this month</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to <span className="text-gold">Scale</span> Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
                Stop leaving money on the table. Let's have a conversation about your goals.
              </p>
              <p className="text-lg text-gold mb-10 font-semibold">
                ⚡ Free strategy call — No commitment required
              </p>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="https://wa.me/2349064538679?text=Hi%20Legendstarr%2C%20I%20found%20you%20on%20your%20website%20and%20I%27d%20like%20to%20work%20with%20you%20to%20scale%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gold via-gold to-yellow-500 text-black font-bold text-xl px-10 py-5 rounded-full shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Let's Talk on WhatsApp
                </a>
              </motion.div>

              <p className="text-sm text-gray-500 mt-8">
                Just a quick chat. No pressure. No obligations.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No upfront payment
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Results-based partnership
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast response time
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
