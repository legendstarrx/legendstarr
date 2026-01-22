'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { products } from '@/lib/products'
import Button from './Button'

// Lifestyle images from results folder
const lifestyleImages = [
  {
    id: 1,
    src: '/images/results/my lifestyle resultd/WhatsApp Image 2026-01-22 at 14.15.22.jpeg',
    alt: 'Lifestyle',
    category: 'lifestyle'
  },
  {
    id: 2,
    src: '/images/results/adx results/Screenshot 2026-01-22 144816.png',
    alt: 'AdX Results - $90K',
    category: 'results'
  },
  {
    id: 3,
    src: '/images/results/my lifestyle resultd/WhatsApp Image 2026-01-22 at 14.15.23.jpeg',
    alt: 'Lifestyle',
    category: 'lifestyle'
  },
  {
    id: 4,
    src: '/images/results/my lifestyle resultd/WhatsApp Image 2026-01-22 at 14.15.235.jpeg',
    alt: 'Lifestyle',
    category: 'lifestyle'
  },
  {
    id: 5,
    src: '/images/results/my lifestyle resultd/WhatsApp Image 2026-01-22 at 14.15.24.jpeg',
    alt: 'Lifestyle',
    category: 'lifestyle'
  },
]

export default function LifestyleGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lifestyleImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The <span className="text-gold">Lifestyle</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building wealth isn't just about knowledge—it's about execution, mindset, and the results that follow.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Carousel */}
        <AnimatedSection delay={0.3}>
          <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-gold/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={lifestyleImages[currentIndex].src}
                  alt={lifestyleImages[currentIndex].alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Real Results. Real Lifestyle.
                  </h3>
                  <p className="text-lg text-gray-300 max-w-2xl">
                    This isn't about showing off—it's about proving that the systems work. 
                    When you execute correctly, the results speak for themselves.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {lifestyleImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gold w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + lifestyleImages.length) % lifestyleImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 border border-gold/30 rounded-full flex items-center justify-center text-gold transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % lifestyleImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 border border-gold/30 rounded-full flex items-center justify-center text-gold transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </AnimatedSection>

        {/* Work With Me Showcase */}
        <AnimatedSection delay={0.5}>
          <div className="mt-20 pt-20 border-t border-gold/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Scale Your Business <span className="text-gold">With Me</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Let me handle your advertising while you focus on growth. Revenue share model—no upfront costs.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-black/50 border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative aspect-video md:aspect-auto md:h-full min-h-[300px]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/results/adx results/Screenshot 2026-01-22 144816.png"
                        alt="Work with me - AdX Results"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gold/30 blur-md rounded-full"></div>
                        <div className="relative bg-gradient-to-br from-gold via-gold-400 to-gold-500 text-black px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-sm md:text-lg font-bold shadow-lg shadow-gold/50 border-2 border-gold-300 whitespace-nowrap">
                          40% Profit Share
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                    {/* Mobile Badge - Show on mobile only */}
                    <div className="md:hidden mb-4">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gold/30 blur-md rounded-full"></div>
                        <div className="relative bg-gradient-to-br from-gold via-gold-400 to-gold-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-gold/50 border-2 border-gold-300 whitespace-nowrap">
                          40% Profit Share
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                      Work With Me
                    </h3>
                    <p className="text-gold text-lg md:text-xl mb-4 font-medium">Partnership Program</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      I'll handle your advertising campaigns using proven systems. Whether you run an AdSense website, 
                      e-commerce store, or any business—let's scale together. No upfront costs, profit share model.
                    </p>
                    
                    {/* Key Benefits */}
                    <ul className="space-y-3 mb-8">
                      {[
                        'No upfront costs—I only get paid when you make money',
                        'Proven advertising systems that actually work',
                        '40% profit share (negotiable based on scale)',
                        'Focus on growth while I handle your ads'
                      ].map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/work-with-me" className="flex-1">
                        <Button variant="primary" className="w-full text-lg py-4">
                          Learn More
                        </Button>
                      </Link>
                      <Button 
                        href="https://wa.me/2349162923389" 
                        variant="secondary"
                        external
                        className="flex-1 text-lg py-4"
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lifestyleImages.find(img => img.id === selectedImage)?.src || ''}
                alt="Full size"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/80 hover:bg-black border border-gold/30 rounded-full flex items-center justify-center text-gold"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
