import { useEffect, useState } from 'react'
import Button from '../components/Button'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function GestureDetail({ slugFromProps }) {
  const slug = slugFromProps || window.location.pathname.split('/').pop()
  const [data, setData] = useState(null)
  const [related, setRelated] = useState([])

  useEffect(() => {
    const run = async () => {
      const res = await fetch(`${baseUrl}/api/gestures/${slug}`)
      if (res.ok) {
        const d = await res.json()
        setData(d)
        const rel = await fetch(`${baseUrl}/api/gestures?category=${d.category}&limit=8`)
        const rj = await rel.json()
        setRelated((rj.items || []).filter(x => x.slug !== d.slug))
      }
    }
    run()
  }, [slug])

  if (!data) return <div className="p-10">Memuat...</div>

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="aspect-video rounded-3xl overflow-hidden bg-black">
            {data.video_url ? (
              <video src={data.video_url} controls className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full grid place-items-center text-white">Tidak ada video</div>
            )}
          </div>
          <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10">
            <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
            <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10">{data.difficulty}</span>
            <h3 className="mt-6 font-semibold">Langkah-langkah</h3>
            <ol className="list-decimal ml-6 text-slate-700 dark:text-slate-300 space-y-1 mt-2">
              {(data.steps || []).map((s,i)=> <li key={i}>{s}</li>)}
            </ol>
            <h3 className="mt-6 font-semibold">Contoh Penggunaan</h3>
            <ul className="list-disc ml-6 text-slate-700 dark:text-slate-300 space-y-1 mt-2">
              {(data.examples || []).map((s,i)=> <li key={i}>{s}</li>)}
            </ul>
            <div className="mt-6 flex gap-3">
              <Button>Latih Gestur (Webcam)</Button>
              <Button variant="outline">Tambahkan ke Favorit</Button>
            </div>
          </div>
        </div>
        <aside>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10">
            <h3 className="font-semibold mb-4">Gestur Terkait</h3>
            <div className="grid grid-cols-2 gap-3">
              {related.map(r => (
                <a key={r.id} href={`/gesture/${r.slug}`} className="rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-700">
                  <div className="aspect-video bg-slate-200 dark:bg-slate-600">
                    {r.thumbnail && <img src={r.thumbnail} alt={r.name} className="w-full h-full object-cover" />}
                  </div>
                  <div className="p-2 text-sm font-medium">{r.name}</div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
