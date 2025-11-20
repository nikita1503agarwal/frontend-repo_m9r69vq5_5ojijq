import { useEffect, useState } from 'react'
import Button from '../components/Button'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ModuleDetail() {
  const slug = window.location.pathname.split('/').pop()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${baseUrl}/api/modules/${slug}`).then(r=>r.json()).then(setData)
  }, [slug])

  if (!data) return <div className="p-10">Memuat...</div>

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10 sticky top-24">
          <h3 className="font-semibold mb-3">Progress</h3>
          <div className="h-2 bg-slate-200 dark:bg-white/10 rounded-full">
            <div className="h-2 bg-[#00D9FF] rounded-full w-1/3" />
          </div>
          <ul className="mt-4 text-sm space-y-2">
            {(data.subtopics||[]).map((s,i)=>(
              <li key={i} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00D9FF]"/> {s}</li>
            ))}
          </ul>
        </div>
      </aside>
      <section className="lg:col-span-3">
        <div className="rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10">
          {data.cover_image && <img src={data.cover_image} alt="" className="w-full h-64 object-cover" />}
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl">{data.description}</p>
            <div className="mt-6"><Button asChild><a href={`/quiz?slug=${data.slug}`}>Mulai Kuis</a></Button></div>
          </div>
        </div>
      </section>
    </main>
  )
}
