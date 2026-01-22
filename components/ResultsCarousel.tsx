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
    timeframe: '90 Days'
  },
  {
    id: 2,
    image: '/images/results/facebook result/Screenshot 2026-01-22 143356.png',
    title: 'Meta Ads Campaign',
    metric: 'Low CPC Results',
    description: 'Dramatically reduced cost per click while maintaining high conversion rates',
    timeframe: 'Meta Ads'
  },
  {
    id: 3,
    image: '/images/results/tiktok results/Screenshot 2026-01-22 142841.png',
    title: 'TikTok Ads Performance',
    metric: 'Optimized Spending',
    description: 'Scaled TikTok campaigns with minimal ad spend and maximum reach',
    timeframe: 'TikTok Ads'
  },
  {
    id: 4,
    image: '/images/results/facebook result/Screenshot 2026-01-22 143513.png',
    title: 'Facebook Ad Manager',
    metric: 'Efficient Spending',
    description: 'Optimized Facebook ad campaigns for maximum ROI',
    timeframe: 'Facebook Ads'
  },
  {
    id: 5,
    image: '/images/results/tiktok results/WhatsApp Image 2026-01-22 at 14.15.13.jpeg',
    title: 'TikTok Campaign Results',
    metric: 'Low Cost Scaling',
    description: 'Achieved massive reach on TikTok with minimal budget',
    timeframe: 'TikTok Performance'
  },
  {
    id: 6,
    image: '/images/results/adx results/Screenshot 2026-01-22 144841.png',
    title: 'AdX Optimization',
    metric: 'Revenue Maximization',
    description: 'Strategic AdX setup delivering consistent revenue growth',
    timeframe: 'AdX Performance'
  },
  {
    id: 7,
    image: '/images/results/facebook result/Screenshot 2026-01-22 143716.png',
    title: 'Meta Campaign Success',
    metric: 'High ROAS',
    description: 'Achieved exceptional return on ad spend with optimized targeting',
    timeframe: 'Meta Results'
  },
]

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientResults.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Carousel Container */}
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
            <div className="relative w-full h-full">
              <Image
                src={clientResults[currentIndex].image}
                alt={clientResults[currentIndex].title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-3xl">
                  <div className="inline-block bg-gold text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {clientResults[currentIndex].timeframe}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {clientResults[currentIndex].title}
                  </h3>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="text-5xl md:text-6xl font-bold text-gold">
                      {clientResults[currentIndex].metric}
                    </div>
                  </div>
                  <p className="text-xl text-gray-300">
                    {clientResults[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {clientResults.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-gold w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + clientResults.length) % clientResults.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 border border-gold/30 rounded-full flex items-center justify-center text-gold transition-all z-10 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % clientResults.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 border border-gold/30 rounded-full flex items-center justify-center text-gold transition-all z-10 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Results Grid Below Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {clientResults.map((result, index) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-black/50 border rounded-lg p-6 cursor-pointer transition-all ${
              index === currentIndex 
                ? 'border-gold/60 bg-black/70 shadow-lg shadow-gold/20' 
                : 'border-gold/20 hover:border-gold/40'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="text-gold text-sm font-semibold mb-2">{result.timeframe}</div>
            <h4 className="text-xl font-bold text-white mb-2">{result.title}</h4>
            <div className="text-3xl font-bold text-gold mb-2">{result.metric}</div>
            <p className="text-gray-400">{result.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
