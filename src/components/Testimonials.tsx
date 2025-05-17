export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by Swimmers & Coaches</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-600 mb-4">&ldquo;This calculator changed how we plan taper. It&rsquo;s spot on.&rdquo;</p>
            <p className="font-bold text-gray-800">– Coach Jen, Elite Swim Club</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-600 mb-4">&ldquo;Dropped 0.9 seconds in my 100 Free after adjusting targets.&rdquo;</p>
            <p className="font-bold text-gray-800">– Alex R., NCAA D1 Swimmer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-600 mb-4">&ldquo;Exactly what high-level swimmers need. The PDFs are gold.&rdquo;</p>
            <p className="font-bold text-gray-800">– Coach Marcus, National Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}