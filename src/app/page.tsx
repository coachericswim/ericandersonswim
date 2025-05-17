import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}