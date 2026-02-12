import Hero from './components/Hero'
import Layout from './components/Layout'

export default function App() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-darkBg text-white">
      {/* Section 1: Hero */}
      <section className="snap-start w-full">
        <Hero />
      </section>

      {/* Section 2: Layout / Main Content */}
      <section className="snap-start w-full">
        <Layout />
      </section>
    </div>
  )
}
