import { createRoot } from 'react-dom/client'
import './css/index.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <>
  <About />
  <Projects />
  <Contact />
  </>
)
