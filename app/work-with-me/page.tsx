'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import ResultsCarousel from '@/components/ResultsCarousel'

export default function WorkWithMe() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm22 4c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-32-12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Work <span className="text-gold">With Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              Let's scale your business together. I handle the advertising, you focus on growth.
            </p>
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

      {/* How It Works */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              How It <span className="text-gold">Works</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center p-8 bg-black/50 border border-gold/20 rounded-lg hover:border-gold/40 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4">You Reach Out</h3>
                <p className="text-gray-400">
                  Contact me via WhatsApp to discuss your business and advertising goals.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center p-8 bg-black/50 border border-gold/20 rounded-lg hover:border-gold/40 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4">We Strategize</h3>
                <p className="text-gray-400">
                  I analyze your business, understand your brand, and create a custom advertising strategy.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center p-8 bg-black/50 border border-gold/20 rounded-lg hover:border-gold/40 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4">We Scale Together</h3>
                <p className="text-gray-400">
                  I run your campaigns using proven systems, and we both profit from the results.
                </p>
              </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm22 4c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-32-12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to 2x, 3x, or Even 5x Your Revenue?
            </h2>
            <p className="text-xl text-gray-300 mb-2 leading-relaxed">
              Stop leaving money on the table. Let's talk about how we can scale your business together.
            </p>
            <p className="text-lg text-gold mb-10 font-semibold">
              ⚡ Book a free strategy call now—limited spots available this month
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                href="https://wa.me/2349064538679?text=Hi%20Legendstarr%2C%20I%20found%20you%20on%20your%20website%20and%20I%27d%20like%20to%20work%20with%20you%20to%20scale%20my%20business." 
                variant="primary"
                external
                className="text-xl px-12 py-6"
              >
                🚀 Start the Conversation
              </Button>
            </motion.div>
            <p className="text-sm text-gray-500 mt-6">
              No commitment. Just a conversation about your business goals.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
