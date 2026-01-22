'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/lib/products'
import Button from './Button'

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-black border border-gold/20 rounded-lg overflow-hidden hover:border-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden bg-gray-900">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/30 blur-md rounded-full"></div>
              <div className="relative bg-gradient-to-br from-gold via-gold-400 to-gold-500 text-black px-5 py-2.5 rounded-full text-lg font-bold shadow-lg shadow-gold/50 border-2 border-gold-300">
                {product.price}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
            {product.title}
          </h3>
          <p className="text-gold mb-4 font-medium">{product.subtitle}</p>
          <p className="text-gray-400 mb-6 line-clamp-3">{product.description}</p>
          
          {/* Features Preview */}
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-300">
                <svg className="w-4 h-4 text-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <Link href={`/shop/${product.id}`}>
            <Button variant="primary" className="w-full">
              View Course
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
