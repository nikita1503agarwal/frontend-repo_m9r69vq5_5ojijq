import { useEffect, useMemo, useState } from 'react'
import Button from '../components/Button'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Quiz() {
  const url = new URL(window.location.href)
  const slug = url.searchParams.get('slug') || 'kuis-dasar'
  const [quiz, setQuiz] = useState(null)
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    fetch(`${baseUrl}/api/quizzes/${slug}`).then(r=>r.json()).then(setQuiz)
  }, [slug])

  if (!quiz) return <div className="p-10">Memuat...</div>

  const q = quiz.questions[idx]
  const progress = Math.round(((idx) / quiz.questions.length) * 100)

  const pick = (i) => {
    const next = [...answers]
    next[idx] = i
    setAnswers(next)
  }

  const nextQ = () => {
    if (idx+1 < quiz.questions.length) setIdx(idx+1)
    else setDone(true)
  }

  const score = useMemo(() => {
    if (!done) return 0
    return quiz.questions.reduce((acc, qq, i) => acc + (answers[i] === qq.answer_index ? 1 : 0), 0)
  }, [done, answers, quiz])

  if (done) {
    return (
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10 text-center">
          <h1 className="text-3xl font-bold mb-2">Hasil</h1>
          <p className="text-slate-600 dark:text-slate-300">Skor kamu: <span className="font-semibold">{score}</span> / {quiz.questions.length}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button onClick={() => { setIdx(0); setAnswers([]); setDone(false) }}>Coba Lagi</Button>
            <Button variant="secondary" asChild><a href="/modules">Kembali ke Modul</a></Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
        <div className="h-2 bg-[#00D9FF]" style={{ width: `${progress}%` }} />
      </div>
      <div className="mt-6 p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10">
        <div className="text-sm text-slate-500">Pertanyaan {idx+1} dari {quiz.questions.length}</div>
        <h1 className="text-2xl font-bold mt-2">{q.prompt}</h1>
        {q.media_url && (
          <div className="aspect-video rounded-2xl overflow-hidden bg-black mt-4">
            <video src={q.media_url} controls className="w-full h-full object-cover" />
          </div>
        )}
        <div className="grid gap-3 mt-6">
          {q.options.map((opt, i) => (
            <button key={i} onClick={()=>pick(i)} className={`text-left h-12 px-4 rounded-xl border ${answers[idx]===i? 'bg-[#00D9FF] text-[#0A0F1A] border-transparent' : 'border-slate-300 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5'}`}>{opt}</button>
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={()=> setIdx(i=> Math.min(quiz.questions.length-1, i+1))}>Lewati</Button>
          <Button onClick={nextQ}>Berikutnya</Button>
        </div>
      </div>
    </main>
  )
}
