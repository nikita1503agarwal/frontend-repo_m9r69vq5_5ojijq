import { useEffect, useState } from 'react'
import AccessibilityControls from '../components/AccessibilityControls'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
const userId = 'demo-user'

export default function AccessibilityPage() {
  const [prefs, setPrefs] = useState({ dark_mode: false, high_contrast: false, font_scale: 1, reduce_motion: false })

  const load = async () => {
    const r = await fetch(`${baseUrl}/api/accessibility/${userId}`)
    const d = await r.json()
    setPrefs(d)
    document.documentElement.classList.toggle('dark', !!d.dark_mode)
  }

  useEffect(() => { load() }, [])

  const update = async (change) => {
    const next = { ...prefs, ...change }
    setPrefs(next)
    document.documentElement.classList.toggle('dark', !!next.dark_mode)
    await fetch(`${baseUrl}/api/accessibility/${userId}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(change) })
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Mode Aksesibilitas</h1>
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10">
        <AccessibilityControls prefs={prefs} onChange={update} />
        <div className="mt-6 p-6 rounded-xl bg-slate-50 dark:bg-white/5">
          <h3 className="font-semibold mb-2">Pratinjau</h3>
          <p className="text-slate-700 dark:text-slate-300">Teks ini akan mengikuti ukuran font, kontras, dan mode gelap sesuai pilihan Anda.</p>
        </div>
      </div>
    </main>
  )
}
