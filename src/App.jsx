import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

export default function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:bg-cyan-900'>
      <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className='container mx-auto px-8'>
        <div className='sticky top-0 z-50'>
          <Navbar />
        </div>
        <Hero />
        <About/>
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
