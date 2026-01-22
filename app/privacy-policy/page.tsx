export default function PrivacyPolicy() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gold">Privacy Policy</h1>
          <p className="text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Legendstarr ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website legendstarr.com 
                and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Personal data such as name, email address, and payment information</li>
                <li>Usage data including how you interact with our website</li>
                <li>Device information such as IP address, browser type, and operating system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Process your transactions and deliver products and services</li>
                <li>Send you administrative information and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Payment Processors</h2>
              <p className="text-gray-300 leading-relaxed">
                We use FlutterWave as our payment processor. When you make a purchase, your payment information is 
                processed by FlutterWave in accordance with their privacy policy. We do not store your full payment 
                card details on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. 
                However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
