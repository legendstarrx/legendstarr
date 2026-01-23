'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import Button from '@/components/Button'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

// Products are hidden - this page now shows Coming Soon for all product URLs
export default function ProductPage() {
  const params = useParams()
  const productId = params?.id as string | undefined

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Coming Soon Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm22 4c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-32-12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
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

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              This Course is <span className="text-gold">Coming Soon</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We're working hard to bring you premium content that will transform your advertising game. 
              Stay tuned for the launch.
            </motion.p>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/shop">
                <Button variant="primary" className="text-xl px-12 py-6">
                  Back to Shop
                </Button>
              </Link>
              <Link href="/work-with-me">
                <Button variant="secondary" className="text-xl px-12 py-6">
                  Work With Me Instead
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Work With Me CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Wait? <span className="text-gold">Work With Me Directly</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Skip the courses and let me handle your advertising while you focus on growth. 
              No upfront costs—just a 40% profit share model.
            </p>
            <Link href="/work-with-me">
              <Button variant="primary" className="text-xl px-12 py-6">
                Learn About Partnership
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
