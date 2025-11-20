import { useState, useEffect } from 'react'
import { Menu, Camera, BookOpen, Hand, Settings, User, Moon, Sun, Contrast, Accessibility, LogIn } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ onToggleTheme, theme = 'light' }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg font-medium transition-colors ${
          isActive
            ? 'text-[#0A0F1A] bg-sky-100 dark:text-white dark:bg-white/10'
            : 'text-slate-700 hover:text-[#0A0F1A] hover:bg-sky-50 dark:text-slate-300 dark:hover:bg-white/5'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {children}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 bg-white/60 border-b border-slate-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-sky-50 dark:hover:bg-white/5 sm:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#00D9FF]" />
            <span className="font-extrabold text-lg tracking-tight text-[#0A0F1A] dark:text-white">SignifyLearn</span>
          </Link>
        </div>

        <nav className="hidden sm:flex items-center gap-1">
          <NavItem to="/catalog">Katalog</NavItem>
          <NavItem to="/modules">Modul</NavItem>
          <NavItem to="/quiz">Quiz</NavItem>
          <NavItem to="/webcam">Pengenalan Gestur</NavItem>
          <NavItem to="/accessibility">Aksesibilitas</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-lg hover:bg-sky-50 dark:hover:bg-white/5"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link to="/login" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0A0F1A] text-white hover:bg-slate-900">
            <LogIn className="w-4 h-4" /> Masuk
          </Link>
        </div>
      </div>

      {open && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <NavItem to="/catalog">Katalog</NavItem>
          <NavItem to="/modules">Modul</NavItem>
          <NavItem to="/quiz">Quiz</NavItem>
          <NavItem to="/webcam">Pengenalan Gestur</NavItem>
          <NavItem to="/accessibility">Aksesibilitas</NavItem>
          <Link to="/login" className="block px-3 py-2 rounded-lg bg-[#0A0F1A] text-white hover:bg-slate-900">Masuk</Link>
        </div>
      )}
    </header>
  )
}
