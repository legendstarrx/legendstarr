'use client'

import Link from 'next/link'
import Image from 'next/image'
// Products are hidden but preserved - uncomment below to restore
// import { products } from '@/lib/products'
// import ProductCard from '@/components/ProductCard'
import AnimatedSection from '@/components/AnimatedSection'
import Newsletter from '@/components/Newsletter'
import Button from '@/components/Button'
import { motion } from 'framer-motion'

export default function Shop() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background - pointer-events-none to not block scrolling */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm22 4c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-32-12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Premium <span className="text-gold">Courses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Real execution. Real systems. No recycled theory.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              {/* Coming Soon Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-gold via-gold-400 to-gold-500 text-black px-8 py-3 rounded-full text-xl font-bold shadow-lg shadow-gold/50 border-2 border-gold-300">
                    Coming Soon
                  </div>
                </div>
              </motion.div>

              {/* Main Message */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Something <span className="text-gold">Big</span> is Coming
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                We're working on premium courses that will transform how you approach paid advertising. 
                Stay tuned for game-changing content.
              </motion.p>

              {/* Decorative Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12"
              />

              {/* Work With Me Card - Still Available */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="max-w-md mx-auto"
              >
                <p className="text-gray-400 mb-6">In the meantime, you can still work with me directly:</p>
                <div className="group">
                  <div className="relative bg-black border border-gold/20 rounded-lg overflow-hidden hover:border-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20">
                    {/* Image Container */}
                    <div className="relative aspect-video overflow-hidden bg-gray-900">
                      <div className="relative w-full h-full">
                        <Image
                          src="/images/results/adx results/Screenshot 2026-01-22 144816.png"
                          alt="Work with me - AdX Results"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gold/30 blur-md rounded-full"></div>
                          <div className="relative bg-gradient-to-br from-gold via-gold-400 to-gold-500 text-black px-5 py-2.5 rounded-full text-lg font-bold shadow-lg shadow-gold/50 border-2 border-gold-300">
                            Available Now
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                        Work With Me
                      </h3>
                      <p className="text-gold mb-4 font-medium">Profit Share Partnership</p>
                      <p className="text-gray-400 mb-6">
                        Let me handle your advertising while you focus on growth. No upfront costs—profit share negotiable based on scale.
                      </p>
                      
                      <Link href="/work-with-me">
                        <Button variant="primary" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}
