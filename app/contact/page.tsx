import Button from '@/components/Button'

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Have questions about the course or need support? Reach out to us directly via WhatsApp.
          </p>
          <Button 
            href="https://wa.me/2349162923389" 
            variant="primary"
            external
            className="text-lg"
          >
            Contact on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  )
}
