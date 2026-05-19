import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import FeaturedProperties from './components/FeaturedProperties'
import Cities from './components/Cities'
import TrustSection from './components/TrustSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div style={{ background: 'var(--color-alabaster)' }}>
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedProperties />
      <Cities />
      <TrustSection />
      <Footer />
    </div>
  )
}

export default App
