import { useEffect, useState } from 'react'
import Button from '../components/Button'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Catalog() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const fetchData = async () => {
    const params = new URLSearchParams()
    if (q) params.append('q', q)
    if (category) params.append('category', category)
    if (difficulty) params.append('difficulty', difficulty)
    params.append('page', String(page))
    params.append('limit', '24')
    const res = await fetch(`${baseUrl}/api/gestures?${params.toString()}`)
    const data = await res.json()
    setItems(data.items || [])
    setTotal(data.total || 0)
  }

  useEffect(() => { fetchData() }, [q, category, difficulty, page])

  const categories = [
    {k:'', t:'Semua'},
    {k:'letters', t:'A–Z'},
    {k:'numbers', t:'Angka'},
    {k:'basic', t:'Kata Dasar'},
    {k:'emotions', t:'Emosi'},
    {k:'activity', t:'Aktivitas'},
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Katalog Gestur</h1>

      <div className="flex flex-wrap gap-3 items-center mb-6">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari gestur..." className="w-full sm:w-80 h-11 px-4 rounded-xl border border-slate-300 bg-white dark:bg-slate-900"/>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map(c => (
            <button key={c.k} onClick={()=>{setCategory(c.k); setPage(1)}} className={`h-10 px-4 rounded-full border ${category===c.k? 'bg-[#00D9FF] text-[#0A0F1A] border-transparent':'border-slate-300 dark:border-white/10'}`}>{c.t}</button>
          ))}
        </div>
        <select value={difficulty} onChange={e=>{setDifficulty(e.target.value); setPage(1)}} className="h-10 px-3 rounded-xl border border-slate-300 bg-white dark:bg-slate-900">
          <option value="">Semua Tingkat</option>
          <option value="easy">Mudah</option>
          <option value="medium">Menengah</option>
          <option value="hard">Sulit</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <a key={item.id} href={`/gesture/${item.slug}`} className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10 shadow">
            <div className="aspect-video bg-slate-100 dark:bg-slate-700">
              {item.thumbnail && <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover" />}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold truncate">{item.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10">{item.difficulty}</span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{item.category}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="text-sm text-slate-600 dark:text-slate-300">Total: {total}</div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={()=> setPage(p=> Math.max(1, p-1))}>Prev</Button>
          <div className="h-11 px-4 rounded-xl bg-white dark:bg-slate-800 flex items-center">{page}</div>
          <Button onClick={()=> setPage(p=> p+1)}>Next</Button>
        </div>
      </div>
    </main>
  )
}
