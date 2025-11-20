import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Catalog from './pages/Catalog'
import GestureDetail from './pages/GestureDetail'
import Modules from './pages/Modules'
import ModuleDetail from './pages/ModuleDetail'
import Quiz from './pages/Quiz'
import Webcam from './pages/Webcam'
import Profile from './pages/Profile'
import AccessibilityPage from './pages/Accessibility'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-slate-900 text-[#0A0F1A] dark:text-white" style={{ fontSize: 'calc(1rem * var(--font-scale, 1))' }}>
      <Navbar theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/gesture/:slug" element={<GestureDetail />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:slug" element={<ModuleDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/webcam" element={<Webcam />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
