import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import './css/index.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path='Projects' element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </>
)
