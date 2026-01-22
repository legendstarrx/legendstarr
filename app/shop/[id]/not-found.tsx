import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen bg-black flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-4">Product Not Found</h2>
        <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
        <Button href="/shop" variant="primary">
          Back to Shop
        </Button>
      </div>
    </div>
  )
}
