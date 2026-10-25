import Hero from './pages/Hero'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-3xl mx-auto gap-4">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}