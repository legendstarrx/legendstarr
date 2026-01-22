export default function RefundPolicy() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gold">Refund Policy</h1>
          <p className="text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Digital Product Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                All courses and digital products sold by Legendstarr are delivered immediately upon purchase. Due to the 
                digital nature of our products, we have a strict no-refund policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">No Refund Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Once you have purchased and accessed our digital course content, we do not offer refunds or exchanges. 
                This policy is in place because:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>Digital products cannot be returned</li>
                <li>Course content is immediately accessible upon purchase</li>
                <li>All sales are final</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Exceptions</h2>
              <p className="text-gray-300 leading-relaxed">
                In exceptional circumstances, such as technical issues preventing access to the course that cannot be 
                resolved, we may consider refund requests on a case-by-case basis. All refund requests must be submitted 
                within 7 days of purchase and must include detailed information about the issue encountered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Chargebacks</h2>
              <p className="text-gray-300 leading-relaxed">
                If you file a chargeback or dispute a charge with your bank or credit card company, we reserve the right 
                to terminate your access to the course immediately and permanently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Refund Policy or need to report a technical issue, please contact us 
                through our contact page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
