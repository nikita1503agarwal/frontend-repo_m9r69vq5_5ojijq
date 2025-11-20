import clsx from 'clsx'

const base =
  'inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 disabled:opacity-50 disabled:cursor-not-allowed'

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-base',
  lg: 'h-12 px-6 text-lg',
}

const variants = {
  primary:
    'bg-[#00D9FF] text-[#0A0F1A] hover:bg-sky-300 ring-offset-white dark:ring-offset-slate-900',
  secondary:
    'bg-[#0A0F1A] text-white hover:bg-slate-900 ring-offset-white dark:ring-offset-slate-900',
  ghost:
    'bg-transparent text-[#0A0F1A] hover:bg-sky-50 dark:text-white dark:hover:bg-white/5',
  outline:
    'border border-sky-300 text-[#0A0F1A] hover:bg-sky-50 dark:text-white dark:border-white/20 dark:hover:bg-white/5',
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) {
  return (
    <button className={clsx(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
