import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Characters from './components/Characters'
import Trailer from './components/Trailer'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary font-[Hanken_Grotesk]">
      <Navbar />
      <Hero />
      <Features />
      <Characters />
      <Trailer />
      <Download />
      <Footer />
    </div>
  )
}

export default App
