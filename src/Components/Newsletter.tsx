export default function Newsletter() {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="mb-6 text-lg">Get exclusive workouts, updates, and early access to new tools.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center" action="https://yournewsletterservice.com" method="POST" target="_blank">
          <input type="email" name="email" required placeholder="Enter your email" className="w-full sm:w-auto px-4 py-3 text-gray-800 rounded-md border border-white focus:outline-none" />
          <button type="submit" className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition">Subscribe</button>
        </form>
      </div>
    </section>
  )
}