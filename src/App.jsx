import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import CV from './components/CV'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* Section CV — accessible via #cv dans la navbar */}
      <section id="cv">
        <CV />
      </section>

      <Contact />
      <Footer />
    </div>
  )
}

export default App
