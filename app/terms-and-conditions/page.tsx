export default function TermsAndConditions() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gold">Terms and Conditions</h1>
          <p className="text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using legendstarr.com, you accept and agree to be bound by the terms and provision of 
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Legendstarr's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and 
                under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Course Content</h2>
              <p className="text-gray-300 leading-relaxed">
                All course content, including but not limited to videos, text, graphics, and materials, is the exclusive 
                property of Legendstarr. Course content is for your personal use only and may not be shared, distributed, 
                or resold.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">No Guarantees Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                While we provide educational content and strategies based on real-world experience, we make no guarantees 
                about specific results. Your success depends on many factors, including your effort, dedication, market 
                conditions, and other variables beyond our control. Past performance does not guarantee future results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, and software, 
                is the property of Legendstarr and is protected by copyright, trademark, and other intellectual property 
                laws. You may not use, reproduce, or distribute any content from this website without prior written 
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Legendstarr or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on Legendstarr's website, even if Legendstarr or a Legendstarr authorized 
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Revisions</h2>
              <p className="text-gray-300 leading-relaxed">
                Legendstarr may revise these terms of service at any time without notice. By using this website you are 
                agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
