import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Landing() {
  return (
    <main className="bg-[#F5F7FA] dark:bg-slate-900 text-[#0A0F1A] dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-white dark:from-slate-800 dark:to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Belajar Bahasa Isyarat dengan Cara yang Mudah & Interaktif
            </h1>
            <p className="mt-5 text-lg text-slate-700 dark:text-slate-300 max-w-xl">
              Akses materi lengkap, katalog gestur, latihan kuis, hingga pengenalan gestur real-time via webcam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/modules">Mulai Belajar</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/catalog">Lihat Katalog Gesture</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center border border-slate-200/70 dark:border-white/10">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop" alt="Ilustrasi bahasa isyarat" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Fitur Utama</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {title:'Katalog Gestur', desc:'Jelajahi ratusan gestur dengan video & panduan.'},
            {title:'Modul Edukasi', desc:'Materi terstruktur dari dasar hingga mahir.'},
            {title:'Quiz Interaktif', desc:'Uji pemahaman dengan kuis seru.'},
            {title:'Pengenalan Gestur', desc:'Latih gestur secara real-time via webcam.'},
          ].map((f,i)=> (
            <div key={i} className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow border border-slate-200/70 dark:border-white/10">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gesture Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Mulai dari Dasar</h2>
          <Link to="/catalog" className="text-sky-600 hover:underline">Lihat Semua Gesture</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow border border-slate-200/70 dark:border-white/10">
              <div className="aspect-video bg-slate-100 dark:bg-slate-700" />
              <div className="p-4">
                <h4 className="font-semibold">Gesture {i}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Mudah</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Cara Kerja</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Pelajari Gestur', d:'Ikuti panduan langkah demi langkah.'},
            {t:'Latihan via Video', d:'Tonton contoh dan tirukan gerakannya.'},
            {t:'Uji dengan Webcam', d:'Dapatkan umpan balik real-time.'},
          ].map((s,i)=>(
            <div key={i} className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow border border-slate-200/70 dark:border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#00D9FF] mb-4" />
              <h3 className="font-semibold text-lg mb-1">{s.t}</h3>
              <p className="text-slate-600 dark:text-slate-300">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Testimoni</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow border border-slate-200/70 dark:border-white/10">
              <p className="text-slate-700 dark:text-slate-200">“Pembelajaran jadi seru dan mudah dipahami!”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200" />
                <div>
                  <div className="font-semibold">Pengguna {i}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Mahasiswa</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
