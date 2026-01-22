import { products } from '@/lib/products'

// Generate static params for all products at build time
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
