import { createRoot } from 'react-dom/client'
import './css/index.css'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <Home />
)
