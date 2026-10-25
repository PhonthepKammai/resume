import Hero from './pages/Hero'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-3xl mx-auto gap-4">
      <Hero />
      <hr className="my-4 border-slate-200" />  
      <Skills />
      <hr className="my-4 border-slate-200" />  
      <Experience />
      <hr className="my-4 border-slate-200" />  
      <Education />
      <hr className="my-4 border-slate-200" />  
      <Contact />
      <hr className="my-4 border-slate-200" />  
      <Footer />
    </div>
  )
}