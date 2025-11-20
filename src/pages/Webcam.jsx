import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'

export default function Webcam() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const init = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
          setReady(true)
        }
      } catch (e) {
        console.error(e)
      }
    }
    init()
    const timer = setInterval(() => {
      // Mock accuracy changes for visual feedback
      setAccuracy(a => Math.min(100, Math.max(0, a + (Math.random()*20-10))))
    }, 1200)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-3xl overflow-hidden bg-black aspect-video">
            <video ref={videoRef} className="w-full h-full object-cover" muted playsInline />
          </div>
          <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10 flex items-center justify-between">
            <div className="text-sm text-slate-600 dark:text-slate-300">Akurasi real-time</div>
            <div className="w-64 h-3 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
              <div className="h-3 bg-[#00D9FF]" style={{ width: `${Math.round(accuracy)}%` }} />
            </div>
            <div className="text-sm">{Math.round(accuracy)}%</div>
          </div>
        </div>
        <aside>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10">
            <h3 className="font-semibold mb-2">Target Gestur</h3>
            <div className="aspect-video rounded-xl bg-slate-200 dark:bg-slate-700 mb-3 grid place-items-center">Ilustrasi</div>
            <p className="text-sm text-slate-600 dark:text-slate-300">Ikuti contoh gestur pada video lalu posisikan tangan seperti pada tahap berikut.</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm">Percobaan: <b>{attempt}</b></div>
              <Button onClick={() => { setAttempt(0); setAccuracy(0) }}>Mulai Tes Ulang</Button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
