import Navbar from './components/navbar'
import Hero from './components/Hero'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
      </div>
    </>
  )
}

export default App
