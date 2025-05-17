// Updated to force Git track
export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What You Get</h2>
          <p className="text-gray-600 mt-2">Powerful tools and training resources for competitive swimmers and coaches.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">Race Pacing Calculators</h3>
            <p className="text-gray-600">Generate optimized 100m, 200m, and 400m split targets with exportable PDFs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">Premium Swim Sets</h3>
            <p className="text-gray-600">Get weekly workouts by Eric Anderson tailored to specific strokes and intensities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">Member-Only Access</h3>
            <p className="text-gray-600">All calculators, blog sets, and features are exclusive to subscribers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}