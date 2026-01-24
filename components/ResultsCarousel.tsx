'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// Real client results from actual screenshots
const clientResults = [
  {
    id: 1,
    image: '/images/results/adx results/WhatsApp Image 2026-01-22 at 14.15.17.jpeg',
    title: 'AdX Revenue Success',
    metric: '$92.1K Revenue',
    description: 'Generated $92,100 in revenue with 92% growth in just 90 days',
    timeframe: '90 Days',
    platform: 'AdX'
  },
  {
    id: 2,
    image: '/images/results/facebook result/Screenshot 2026-01-22 143356.png',
    title: 'Meta Ads Campaign',
    metric: 'Low CPC Results',
    description: 'Dramatically reduced cost per click while maintaining high conversion rates',
    timeframe: 'Meta Ads',
    platform: 'Meta'
  },
  {
    id: 3,
    image: '/images/results/tiktok results/Screenshot 2026-01-22 142841.png',
    title: 'TikTok Ads Performance',
    metric: 'Optimized Spending',
    description: 'Scaled TikTok campaigns with minimal ad spend and maximum reach',
    timeframe: 'TikTok Ads',
    platform: 'TikTok'
  },
  {
    id: 4,
    image: '/images/results/facebook result/Screenshot 2026-01-22 143513.png',
    title: 'Facebook Ad Manager',
    metric: 'Efficient Spending',
    description: 'Optimized Facebook ad campaigns for maximum ROI',
    timeframe: 'Facebook Ads',
    platform: 'Meta'
  },
  {
    id: 5,
    image: '/images/results/tiktok results/WhatsApp Image 2026-01-22 at 14.15.13.jpeg',
    title: 'TikTok Campaign Results',
    metric: 'Low Cost Scaling',
    description: 'Achieved massive reach on TikTok with minimal budget',
    timeframe: 'TikTok Performance',
    platform: 'TikTok'
  },
  {
    id: 6,
    image: '/images/results/adx results/Screenshot 2026-01-22 144841.png',
    title: 'AdX Optimization',
    metric: 'Revenue Maximization',
    description: 'Strategic AdX setup delivering consistent revenue growth',
    timeframe: 'AdX Performance',
    platform: 'AdX'
  },
  {
    id: 7,
    image: '/images/results/facebook result/Screenshot 2026-01-22 143716.png',
    title: 'Meta Campaign Success',
    metric: 'High ROAS',
    description: 'Achieved exceptional return on ad spend with optimized targeting',
    timeframe: 'Meta Results',
    platform: 'Meta'
  },
  {
    id: 8,
    image: '/images/results/facebook result/Screenshot 2026-01-22 143821.png',
    title: 'Facebook Audience Scaling',
    metric: 'Expanded Reach',
    description: 'Successfully scaled audience targeting for better campaign performance',
    timeframe: 'Facebook Growth',
    platform: 'Meta'
  },
  {
    id: 9,
    image: '/images/results/tiktok results/WhatsApp Image 2026-01-22 at 14.15.17.jpeg',
    title: 'TikTok Viral Performance',
    metric: 'Viral Growth',
    description: 'Created viral ad campaigns driving massive engagement',
    timeframe: 'TikTok Viral',
    platform: 'TikTok'
  },
  {
    id: 10,
    image: '/images/results/adx results/WhatsApp Image 2026-01-22 at 14.15.19.jpeg',
    title: 'AdX Revenue Streams',
    metric: 'Multiple Revenue',
    description: 'Diversified revenue streams through strategic ad placement',
    timeframe: 'AdX Revenue',
    platform: 'AdX'
  },
  {
    id: 11,
    image: '/images/results/facebook result/Screenshot 2026-01-22 144114.png',
    title: 'Meta Conversion Campaign',
    metric: 'Higher Conversions',
    description: 'Optimized conversion funnels for maximum lead generation',
    timeframe: 'Meta Conversions',
    platform: 'Meta'
  },
  {
    id: 12,
    image: '/images/results/tiktok results/WhatsApp Image 2026-01-22 at 14.15.21.jpeg',
    title: 'TikTok Scale Strategy',
    metric: 'Rapid Scaling',
    description: 'Implemented aggressive scaling strategies with profitable ROAS',
    timeframe: 'TikTok Scale',
    platform: 'TikTok'
  },
]

// Student/Partner testimonials
export const partnerTestimonials = [
  {
    id: 1,
    image: '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.34_d67972a8.jpg',
  },
  {
    id: 2,
    image: '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.35_084eb34b.jpg',
  },
  {
    id: 3,
    image: '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.35_a908fa25.jpg',
  },
  {
    id: 4,
    image: '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.36_4dca6e7d.jpg',
  },
  {
    id: 5,
    image: '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.36_c1fcc506.jpg',
  },
  {
    id: 6,
    image: '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.36_cafa3592.jpg',
  },
  {
    id: 7,
    image: '/images/results/student results/WhatsApp Image 2025-06-28 at 17.03.37_034dc443.jpg',
  },
]

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState<'All' | 'Meta' | 'TikTok' | 'AdX'>('All')

  const filteredResults = filter === 'All' 
    ? clientResults 
    : clientResults.filter(r => r.platform === filter)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredResults.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [filteredResults.length])

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [filter])

  const platforms = ['All', 'Meta', 'TikTok', 'AdX'] as const

  return (
    <div className="relative">
      {/* Platform Filter Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {platforms.map((platform) => (
          <motion.button
            key={platform}
            onClick={() => setFilter(platform)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              filter === platform
                ? 'bg-gold text-black'
                : 'bg-black/50 text-gray-300 border border-gold/20 hover:border-gold/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {platform === 'All' ? 'All Platforms' : platform}
          </motion.button>
        ))}
      </div>

      {/* Stats Bar */}
      <motion.div 
        className="grid grid-cols-3 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center p-4 bg-black/50 border border-gold/20 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-gold">12+</div>
          <div className="text-sm text-gray-400">Campaigns Shown</div>
        </div>
        <div className="text-center p-4 bg-black/50 border border-gold/20 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-gold">3</div>
          <div className="text-sm text-gray-400">Ad Platforms</div>
        </div>
        <div className="text-center p-4 bg-black/50 border border-gold/20 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-gold">100%</div>
          <div className="text-sm text-gray-400">Real Results</div>
        </div>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${currentIndex}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={filteredResults[currentIndex]?.image || clientResults[0].image}
                alt={filteredResults[currentIndex]?.title || clientResults[0].title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              
              {/* Platform Badge */}
              <motion.div 
                className="absolute top-6 right-6 z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-gold/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {filteredResults[currentIndex]?.platform || 'Live Result'}
                </div>
              </motion.div>
              
              {/* Content Overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="max-w-3xl">
                  <div className="inline-block bg-gold text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {filteredResults[currentIndex]?.timeframe || ''}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {filteredResults[currentIndex]?.title || ''}
                  </h3>
                  <motion.div 
                    className="flex items-center gap-6 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-5xl md:text-6xl font-bold text-gold drop-shadow-lg">
                      {filteredResults[currentIndex]?.metric || ''}
                    </div>
                  </motion.div>
                  <p className="text-xl text-gray-300">
                    {filteredResults[currentIndex]?.description || ''}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/50 z-20">
          <motion.div
            key={currentIndex}
            className="h-full bg-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/80 hover:bg-gold hover:text-black border border-gold/30 rounded-full flex items-center justify-center text-gold transition-all z-10 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % filteredResults.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/80 hover:bg-gold hover:text-black border border-gold/30 rounded-full flex items-center justify-center text-gold transition-all z-10 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {filteredResults.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-gold w-8' : 'bg-gray-600 hover:bg-gray-500 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Results Grid Below Carousel */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {filteredResults.slice(0, 8).map((result, index) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`relative bg-black/50 border rounded-xl overflow-hidden cursor-pointer transition-all group ${
              index === currentIndex 
                ? 'border-gold/60 shadow-lg shadow-gold/20 ring-2 ring-gold/40' 
                : 'border-gold/20 hover:border-gold/40'
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-24 md:h-32">
              <Image
                src={result.image}
                alt={result.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="p-3">
              <div className="text-gold text-xs font-semibold mb-1">{result.platform}</div>
              <h4 className="text-sm font-bold text-white truncate">{result.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
