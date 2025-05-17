export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">What’s included in the membership?</h3>
            <p className="text-gray-600">All calculators, blog sets, PDF downloads, and early access to new tools.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Is this for swimmers or coaches?</h3>
            <p className="text-gray-600">Both! Athletes use it for targets. Coaches use it for season planning.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What if I cancel?</h3>
            <p className="text-gray-600">You keep access through your billing period. Lifetime members never lose access.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Do you offer team pricing?</h3>
            <p className="text-gray-600">Yes! Email <a href="mailto:eric@ericandersonswim.com" className="text-indigo-600 underline">eric@ericandersonswim.com</a> for details.</p>
          </div>
        </div>
      </div>
    </section>
  )
}