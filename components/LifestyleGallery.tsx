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
    src: '/images/results/lifestyle/WhatsApp Image 2026-01-22 at 14.15.22.jpeg',
    alt: 'Legendstarr'
  },
  {
    id: 2,
    src: '/images/results/lifestyle/WhatsApp Image 2026-01-22 at 14.15.23.jpeg',
    alt: 'Legendstarr'
  },
  {
    id: 3,
    src: '/images/results/lifestyle/WhatsApp Image 2026-01-22 at 14.15.235.jpeg',
    alt: 'Legendstarr'
  },
  {
    id: 4,
    src: '/images/results/lifestyle/WhatsApp Image 2026-01-22 at 14.15.17.jpeg',
    alt: 'Legendstarr'
  },
  {
    id: 5,
    src: '/images/results/lifestyle/WhatsApp Image 2026-01-24 at 12.08.41.jpeg',
    alt: 'Legendstarr'
  },
  {
    id: 6,
    src: '/images/results/lifestyle/WhatsApp Image 2026-01-24 at 12.18.28 (1).jpeg',
    alt: 'Legendstarr'
  },
  {
    id: 7,
    src: '/images/results/lifestyle/WhatsApp Image 2026-01-24 at 12.41.59.jpeg',
    alt: 'Legendstarr'
  },
  {
    id: 8,
    src: '/images/results/lifestyle/WhatsApp Image 2026-01-24 at 19.56.27.jpeg',
    alt: 'Legendstarr'
  },
  {
    id: 9,
    src: '/images/results/my lifestyle resultd/WhatsApp Image 2026-01-22 at 14.15.24.jpeg',
    alt: 'Legendstarr'
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

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get to <span className="text-gold">Know Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A glimpse into my journey. Follow me on social media to see more.
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
                    Behind the Scenes
                  </h3>
                  <p className="text-lg text-gray-300 max-w-2xl">
                    This is who I am—an entrepreneur building businesses and creating opportunities. 
                    Want to know more? Check out my socials.
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
        <AnimatedSection delay={0.7}>
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
                <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative aspect-video md:aspect-auto md:h-full min-h-[250px] sm:min-h-[300px] order-1">
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
                          Profit Share
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center min-h-0 overflow-visible order-2">
                    {/* Mobile Badge - Show on mobile only */}
                    <div className="md:hidden mb-4">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gold/30 blur-md rounded-full"></div>
                        <div className="relative bg-gradient-to-br from-gold via-gold-400 to-gold-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-gold/50 border-2 border-gold-300 whitespace-nowrap">
                          Profit Share
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 group-hover:text-gold transition-colors">
                      Work With Me
                    </h3>
                    <p className="text-gold text-base md:text-lg lg:text-xl mb-3 md:mb-4 font-medium">Partnership Program</p>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 md:mb-6 leading-relaxed break-words">
                      I'll handle your advertising campaigns using proven systems. Whether you run an AdSense website, 
                      e-commerce store, or any business—let's scale together. No upfront costs, profit share model.
                    </p>
                    
                    {/* Key Benefits */}
                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                      {[
                        'No upfront costs—I only get paid when you make money',
                        'Proven advertising systems that actually work',
                        'Profit share negotiable based on scale',
                        'Focus on growth while I handle your ads'
                      ].map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm sm:text-base break-words">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gold mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="flex-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/work-with-me" className="flex-1">
                        <Button variant="primary" className="w-full text-lg py-4">
                          Learn More
                        </Button>
                      </Link>
                      <Link href="/form" className="flex-1">
                        <Button 
                          variant="secondary"
                          className="w-full text-lg py-4"
                        >
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Social Media Section */}
        <AnimatedSection delay={0.9}>
          <div className="mt-20 pt-20 border-t border-gold/20">
            <div className="text-center mb-12">
              <motion.p 
                className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Follow the Journey
              </motion.p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Stay <span className="text-gold">Connected</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Behind the scenes, daily insights, and exclusive content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Instagram Card */}
              <motion.a
                href="https://instagram.com/legend_starr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/20 hover:border-gold/60 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/images/results/lifestyle/WhatsApp Image 2026-01-22 at 14.15.22.jpeg"
                  alt="Follow on Instagram"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 transition-all duration-500" />
                
                {/* Instagram Logo */}
                <div className="absolute top-6 left-6">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 10 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors">Daily updates & behind the scenes</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    Instagram
                  </h3>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </motion.a>

              {/* Twitter/X Card */}
              <motion.a
                href="https://twitter.com/legend_starr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/20 hover:border-gold/60 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/images/results/lifestyle/WhatsApp Image 2026-01-22 at 14.15j.23.jpeg"
                  alt="Follow on Twitter"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 transition-all duration-500" />
                
                {/* X Logo */}
                <div className="absolute top-6 left-6">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-black border-2 border-white flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: -10 }}
                  >
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors">Thoughts, insights & updates</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    Twitter / X
                  </h3>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Social Handles */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <motion.a
                href="https://instagram.com/legend_starr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-semibold">@legend_starr</span>
              </motion.a>
              <motion.a
                href="https://twitter.com/legend_starr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="font-semibold">@legend_starr</span>
              </motion.a>
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
