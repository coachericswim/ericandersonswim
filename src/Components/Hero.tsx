export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Train Smarter. Swim Faster.</h1>
        <p className="text-lg md:text-xl mb-6">
          Welcome to <strong>Eric Anderson Swim</strong> — elite-level swim calculators and curated training sets.
        </p>
        <a href="/register" className="inline-block bg-white text-indigo-700 font-bold py-3 px-6 rounded hover:bg-gray-100 transition">
          Get Started
        </a>
      </div>
    </section>
  )
}