import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gold mb-4">Legendstarr</h3>
            <p className="text-gray-400 text-sm mb-4">
              Build Skills. Build Income. Build Legacy.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-gold font-semibold">Business Phone:</span>{' '}
                <a href="tel:+2349162923389" className="hover:text-gold transition-colors">
                  +234 916 292 3389
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-gold font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Legendstarr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
