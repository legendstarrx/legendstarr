'use client'

import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import { getProductById } from '@/lib/products'
import Button from '@/components/Button'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

export default function ProductPage() {
  const params = useParams()
  const productId = params?.id as string | undefined
  
  if (!productId) {
    notFound()
  }

  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              {product.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gold mb-6 font-medium">
              {product.subtitle}
            </p>
            <motion.div 
              className="mb-10 inline-block"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border-2 border-gold/40 rounded-2xl px-8 py-4 backdrop-blur-sm">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gold via-gold-300 to-gold bg-clip-text text-transparent">
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                href={product.paymentLink} 
                variant="primary"
                external
                className="text-xl px-12 py-6"
              >
                Buy Now
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gold mb-6">Stop Burning Money on Ads</h2>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Most advertisers are throwing money at platforms hoping something sticks. They're guessing at creatives, 
                overspending on audiences, and watching their budgets disappear with nothing to show for it.
              </p>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">What You'll Master</h2>
            <div className="space-y-6">
              {product.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-black/50 border border-gold/20 rounded-lg hover:border-gold/40 transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{highlight}</h3>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">Course Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Gallery Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gold mb-12 text-center">Real Results from Real Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Student Results */}
              {[
                '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.34_d67972a8.jpg',
                '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.35_084eb34b.jpg',
                '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.35_a908fa25.jpg',
                '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.36_4dca6e7d.jpg',
                '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.36_c1fcc506.jpg',
                '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.36_cafa3592.jpg',
                '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.37_034dc443.jpg',
                '/images/results/adx results/WhatsApp Image 2026-01-22 at 14.15.17.jpeg',
                '/images/results/adx results/Screenshot 2026-01-22 144816.png',
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={image}
                      alt={`Student result ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="p-4 text-sm text-gray-400 text-center bg-black/50">Student Success Story</p>
                </motion.div>
              ))}
            </div>

            {/* Platform-Specific Results */}
            {product.id === 'meta-ads' && (
              <div>
                <h3 className="text-2xl font-bold text-gold mb-8 text-center">Meta Ads Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    '/images/results/facebook result/Screenshot 2026-01-22 143356.png',
                    '/images/results/facebook result/Screenshot 2026-01-22 143513.png',
                    '/images/results/facebook result/Screenshot 2026-01-22 143716.png',
                    '/images/results/facebook result/Screenshot 2026-01-22 143821.png',
                    '/images/results/facebook result/Screenshot 2026-01-22 144114.png',
                    '/images/results/facebook result/Screenshot 2026-01-22 144529.png',
                  ].map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all group"
                    >
                      <div className="aspect-video relative overflow-hidden bg-gray-900">
                        <Image
                          src={image}
                          alt={`Meta ads result ${index + 1}`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {product.id === 'tiktok-ads' && (
              <div>
                <h3 className="text-2xl font-bold text-gold mb-8 text-center">TikTok Ads Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    '/images/results/tiktok results/Screenshot 2026-01-22 142841.png',
                    '/images/results/tiktok results/WhatsApp Image 2026-01-22 at 14.15.13.jpeg',
                    '/images/results/tiktok results/WhatsApp Image 2026-01-22 at 14.15.17.jpeg',
                    '/images/results/tiktok results/WhatsApp Image 2026-01-22 at 14.15.21.jpeg',
                  ].map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all group"
                    >
                      <div className="aspect-video relative overflow-hidden bg-gray-900">
                        <Image
                          src={image}
                          alt={`TikTok ads result ${index + 1}`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gold mb-12 text-center">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Anybody who had doubt, you na mumu. I hit 233 eCPM yesterday. When I say I will be forever grateful to you. I'm not joking.",
                  author: "Course Student"
                },
                {
                  quote: "I'm now even afraid of the earnings, like it's too much. Imagine I have only spent 18k naira for this.",
                  author: "Course Student"
                },
                {
                  quote: "My 2025 won't be complete if I don't recognize the role you played in my life. Heaven bless the day I met you, brother. Thank you for being humble, honest, and hardworking.",
                  author: "Course Student"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all"
                >
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-gold text-sm font-semibold">— {testimonial.author}</p>
                </motion.div>
              ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Master Paid Advertising?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop guessing. Start executing with proven systems.
            </p>
            <motion.div 
              className="mb-10 inline-block"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border-2 border-gold/40 rounded-2xl px-8 py-4 backdrop-blur-sm">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gold via-gold-300 to-gold bg-clip-text text-transparent">
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href={product.paymentLink} 
                variant="primary"
                external
                className="text-xl px-12 py-6"
              >
                Buy Now
              </Button>
              <Button 
                href="/shop" 
                variant="secondary"
                className="text-xl px-12 py-6"
              >
                Back to Shop
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
