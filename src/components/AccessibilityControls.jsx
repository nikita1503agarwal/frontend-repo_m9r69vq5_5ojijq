import { useEffect } from 'react'

export default function AccessibilityControls({ prefs, onChange }) {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--font-scale', String(prefs.font_scale || 1))
    if (prefs.high_contrast) root.classList.add('hc')
    else root.classList.remove('hc')
  }, [prefs.font_scale, prefs.high_contrast])

  return (
    <div className="flex items-center gap-3">
      <label className="inline-flex items-center gap-2">
        <input type="checkbox" className="accent-[#00D9FF]" checked={!!prefs.dark_mode} onChange={e => onChange({ dark_mode: e.target.checked })} />
        <span>Dark</span>
      </label>
      <label className="inline-flex items-center gap-2">
        <input type="checkbox" className="accent-[#00D9FF]" checked={!!prefs.high_contrast} onChange={e => onChange({ high_contrast: e.target.checked })} />
        <span>High Contrast</span>
      </label>
      <label className="inline-flex items-center gap-2">
        <span className="text-sm">Font</span>
        <input type="range" min="0.9" max="1.5" step="0.05" value={prefs.font_scale || 1} onChange={e => onChange({ font_scale: parseFloat(e.target.value) })} />
      </label>
      <label className="inline-flex items-center gap-2">
        <input type="checkbox" className="accent-[#00D9FF]" checked={!!prefs.reduce_motion} onChange={e => onChange({ reduce_motion: e.target.checked })} />
        <span>Reduce Motion</span>
      </label>
    </div>
  )
}
