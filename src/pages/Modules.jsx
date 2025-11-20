import { useEffect, useState } from 'react'
import Button from '../components/Button'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Modules() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/api/modules`).then(r=>r.json()).then(setItems)
  }, [])

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Modul Edukasi</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <a key={item.id} href={`/modules/${item.slug}`} className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10 shadow">
            <div className="aspect-video bg-slate-100 dark:bg-slate-700">
              {item.cover_image && <img src={item.cover_image} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{item.description}</p>
              <div className="mt-3 text-xs text-slate-500">{item.subtopics?.length || 0} topik</div>
              <div className="mt-4"><Button variant="ghost">Mulai Belajar</Button></div>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
