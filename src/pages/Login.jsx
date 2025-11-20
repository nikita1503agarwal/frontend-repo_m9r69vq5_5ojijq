import Button from '../components/Button'

export default function Login() {
  return (
    <main className="min-h-[80vh] bg-[#F5F7FA] dark:bg-slate-900 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        <div className="hidden md:block">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/10 shadow">
            <img src="https://images.unsplash.com/photo-1551240903-154be3f2e18b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduJTIwbGFuZ3VhZ2V8ZW58MHwwfHx8MTc2MzY1MTg0Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Sign language" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/70 dark:border-white/10 p-8 shadow">
          <h1 className="text-2xl font-bold mb-2">Masuk</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-6">Selamat datang kembali di SignifyLearn</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full h-11 px-4 rounded-xl border border-slate-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none bg-white dark:bg-slate-900" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input type="password" className="w-full h-11 px-4 rounded-xl border border-slate-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none bg-white dark:bg-slate-900" placeholder="••••••••"/>
            </div>
            <Button className="w-full">Login</Button>
            <div className="relative py-2 text-center text-sm text-slate-500">
              <span className="bg-white dark:bg-slate-800 px-2 relative z-10">atau</span>
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-slate-200 dark:bg-white/10"/>
            </div>
            <button type="button" className="w-full h-11 rounded-xl border border-slate-300 hover:bg-sky-50 dark:hover:bg-white/5">Login dengan Google</button>
            <div className="text-sm text-center text-slate-600 dark:text-slate-300">
              Lupa password? • <a href="#" className="text-sky-600">Daftar</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
