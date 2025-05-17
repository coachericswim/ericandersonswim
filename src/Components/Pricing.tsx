export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Your Membership</h2>
        <p className="text-gray-600 mb-12">Access calculators, curated swim sets, and exclusive tools.</p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Basic Plan */}
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="text-gray-600 mb-4">Ideal for developing swimmers</p>
            <p className="text-3xl font-bold mb-4">$5<span className="text-base font-normal">/month</span></p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✅ 100m calculators</li>
              <li>✅ 3 blog sets per month</li>
              <li>❌ No PDF exports</li>
            </ul>
            <a href="#" className="block bg-indigo-600 text-white text-center py-2 rounded font-bold hover:bg-indigo-700 transition">Choose Basic</a>
          </div>

          {/* Pro Plan */}
          <div className="border-4 border-indigo-600 rounded-lg p-6 shadow-xl hover:shadow-2xl transition bg-indigo-50">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-gray-600 mb-4">For competitive swimmers & coaches</p>
            <p className="text-3xl font-bold mb-4">$15<span className="text-base font-normal">/month</span></p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✅ All calculators unlocked</li>
              <li>✅ Unlimited PDF exports</li>
              <li>✅ Full workout blog access</li>
            </ul>
            <a href="#" className="block bg-indigo-600 text-white text-center py-2 rounded font-bold hover:bg-indigo-700 transition">Choose Pro</a>
          </div>

          {/* Lifetime Plan */}
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Lifetime</h3>
            <p className="text-gray-600 mb-4">One-time payment, forever access</p>
            <p className="text-3xl font-bold mb-4">$149</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✅ Everything in Pro</li>
              <li>✅ Priority support</li>
              <li>✅ Free future features</li>
            </ul>
            <a href="#" className="block bg-indigo-600 text-white text-center py-2 rounded font-bold hover:bg-indigo-700 transition">Choose Lifetime</a>
          </div>
        </div>
      </div>
    </section>
  )
}