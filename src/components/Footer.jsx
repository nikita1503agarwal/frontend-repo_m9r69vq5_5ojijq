export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 dark:border-white/10 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-[#00D9FF]" />
            <span className="font-extrabold text-lg tracking-tight">SignifyLearn</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300">Belajar bahasa isyarat dengan cara yang mudah, interaktif, dan inklusif.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Navigasi</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><a href="/catalog" className="hover:text-[#0A0F1A] dark:hover:text-white">Katalog</a></li>
              <li><a href="/modules" className="hover:text-[#0A0F1A] dark:hover:text-white">Modul</a></li>
              <li><a href="/quiz" className="hover:text-[#0A0F1A] dark:hover:text-white">Quiz</a></li>
              <li><a href="/webcam" className="hover:text-[#0A0F1A] dark:hover:text-white">Pengenalan Gestur</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Sosial</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-slate-500 text-sm md:text-right">© {new Date().getFullYear()} SignifyLearn. All rights reserved.</div>
      </div>
    </footer>
  )
}
