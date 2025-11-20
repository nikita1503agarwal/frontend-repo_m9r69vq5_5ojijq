import { useEffect, useState } from 'react'
import Button from '../components/Button'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
const userId = 'demo-user'

export default function Profile() {
  const [profile, setProfile] = useState(null)

  const load = async () => {
    const res = await fetch(`${baseUrl}/api/profile/${userId}`)
    const data = await res.json()
    setProfile(data)
  }

  useEffect(() => { load() }, [])

  if (!profile) return <div className="p-10">Memuat...</div>

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10 text-center">
          <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto" />
          <h1 className="text-xl font-bold mt-3">{profile.name}</h1>
          <div className="text-sm text-slate-600 dark:text-slate-300">{profile.email}</div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5"><div className="text-xl font-bold">{profile.points || 0}</div><div className="text-xs text-slate-500">Poin</div></div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5"><div className="text-xl font-bold">Lv {profile.level || 1}</div><div className="text-xs text-slate-500">Level</div></div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5"><div className="text-xl font-bold">{profile.streak_days || 0}</div><div className="text-xs text-slate-500">Streak</div></div>
          </div>
          <div className="mt-4"><Button variant="secondary">Pengaturan</Button></div>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10">
            <h3 className="font-semibold mb-3">Gesture Favorit</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(profile.favorite_gesture_slugs||[]).length === 0 && <div className="text-sm text-slate-500">Belum ada</div>}
              {(profile.favorite_gesture_slugs||[]).map((g,i)=> (
                <div key={i} className="h-24 rounded-xl bg-slate-100 dark:bg-slate-700" />
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10">
            <h3 className="font-semibold mb-3">Modul Selesai</h3>
            <div className="flex flex-wrap gap-2">
              {(profile.completed_module_slugs||[]).length === 0 && <div className="text-sm text-slate-500">Belum ada</div>}
              {(profile.completed_module_slugs||[]).map((m,i)=> (
                <span key={i} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-sm">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
