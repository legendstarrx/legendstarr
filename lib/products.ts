export interface Product {
  id: string
  title: string
  subtitle: string
  description: string
  price: string
  image: string
  video?: string
  features: string[]
  paymentLink: string
  highlights: string[]
  hidden?: boolean // Set to true to hide product without deleting
}

// Global flag to hide all products and show "Coming Soon"
export const PRODUCTS_COMING_SOON = true

export const products: Product[] = [
  {
    id: 'tiktok-ads',
    title: 'How to Run High-Converting TikTok Ads',
    subtitle: 'Low CPC, Scalable, AI-Powered',
    description: 'Master TikTok advertising systems that actually work—systems that cut your cost per click in half, find winning creatives before your competitors, and scale profitably using AI tools that most advertisers don\'t even know exist.',
    price: '$250',
    image: '/images/results/tiktok results/Screenshot 2026-01-22 142841.png',
    paymentLink: 'https://flutterwave.com/pay/YOUR_TIKTOK_PAYMENT_LINK',
    features: [
      'TikTok ad structure that converts',
      'Creative sourcing systems for TikTok',
      'TikTok campaign scaling strategies',
      'AI-assisted TikTok optimization',
      'Budget control & cost reduction',
      'TikTok audience targeting mastery',
      'TikTok ad psychology & copywriting',
      'Reducing CPC by 40-60% on TikTok'
    ],
    highlights: [
      'Get Cheaper Cost Per Click on TikTok',
      'Find Winning TikTok Creatives Systematically',
      'TikTok Ad Psychology & Copywriting Frameworks',
      'Scale TikTok Campaigns Using AI Tools',
      'Reduce TikTok Ad Costs While Increasing Conversions',
      'Avoid Beginner TikTok Mistakes That Burn Money',
      'Master TikTok Algorithm for Maximum Reach'
    ]
  },
  {
    id: 'meta-ads',
    title: 'How to Run High-Converting Meta Ads',
    subtitle: 'Facebook & Instagram Advertising Mastery',
    description: 'Master Meta (Facebook & Instagram) advertising systems that actually work—systems that cut your cost per click in half, find winning creatives before your competitors, and scale profitably using AI tools that most advertisers don\'t even know exist.',
    price: '$350',
    image: '/images/results/facebook result/Screenshot 2026-01-22 143356.png',
    paymentLink: 'https://flutterwave.com/pay/YOUR_META_PAYMENT_LINK',
    features: [
      'Meta (Facebook & Instagram) ad structure that converts',
      'Creative sourcing systems for Meta',
      'Meta campaign scaling strategies',
      'AI-assisted Meta optimization',
      'Budget control & cost reduction',
      'Multi-language Meta campaign execution',
      'Meta ad psychology & copywriting frameworks',
      'Reducing CPC by 40-60% on Meta'
    ],
    highlights: [
      'Get Cheaper Cost Per Click on Meta',
      'Find Winning Meta Creatives Systematically',
      'Meta Ad Psychology & Copywriting Frameworks',
      'Run Meta Ads in Multiple Languages',
      'Scale Meta Campaigns Using AI Tools',
      'Reduce Meta Ad Costs While Increasing Conversions',
      'Avoid Beginner Meta Mistakes That Burn Money'
    ]
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}
