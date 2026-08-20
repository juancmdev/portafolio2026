import Navbar from './components/navbar'
import Hero from './components/Hero'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
