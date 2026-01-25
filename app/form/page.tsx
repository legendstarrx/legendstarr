'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FormPage() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Header Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Background Effects - pointer-events-none to not block scrolling */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.1, 0.15]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link 
              href="/work-with-me"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-8"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work With Me
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Let's <span className="text-gold">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-2 max-w-2xl mx-auto">
              Fill out the form below and I'll get back to you within 24-48 hours.
            </p>
            <p className="text-sm text-gray-500">
              This is the first step towards scaling your business together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Typeform Embed Section */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/30 border border-gold/20 rounded-2xl p-2 md:p-4 min-h-[700px] md:min-h-[800px] relative overflow-hidden"
          >
            {/* Typeform Container - Full Size */}
            <div 
              data-tf-live="01KFTNMNTZR3ZVJB7X6DPSWEGC"
              style={{ width: '100%', height: '100%', minHeight: '680px' }}
            ></div>

            {/* Loading State */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center typeform-loading">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full mx-auto mb-4"
                />
                <p className="text-gray-400">Loading form...</p>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% Confidential
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Response within 48 hours
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No spam, ever
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hide loading state once Typeform loads */}
      <style jsx global>{`
        [data-tf-live] {
          width: 100% !important;
          height: 100% !important;
          min-height: 680px !important;
        }
        [data-tf-live] iframe {
          position: relative;
          z-index: 10;
          width: 100% !important;
          height: 100% !important;
          min-height: 680px !important;
          border-radius: 12px;
        }
        [data-tf-live]:not(:empty) ~ .typeform-loading,
        [data-tf-live] iframe ~ .typeform-loading {
          display: none;
        }
        /* Hide loading when Typeform is loaded */
        [data-tf-live]:has(iframe) + div .typeform-loading,
        .typeform-loading:has(~ [data-tf-live] iframe) {
          display: none;
        }
      `}</style>
    </div>
  )
}
