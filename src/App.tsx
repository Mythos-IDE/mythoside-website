import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { HowItWorks } from './components/sections/HowItWorks'
import { Features } from './components/sections/Features'
import { Philosophy } from './components/sections/Philosophy'
import { OpenSource } from './components/sections/OpenSource'
import { FinalCTA } from './components/sections/FinalCTA'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Philosophy />
        <OpenSource />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
