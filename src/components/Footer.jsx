import { Code2, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { dark } = useTheme()

  return (
    <footer className={`border-t py-10 transition-colors duration-500 ${
      dark
        ? 'bg-gray-950 border-white/5'
        : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center ${
            dark
              ? 'from-cyan-400 to-blue-600'
              : 'from-sky-400 to-indigo-600'
          }`}>
            <Code2 size={15} className="text-white" />
          </div>
          <span className={`font-bold text-sm ${
            dark ? 'text-white' : 'text-slate-900'
          }`}>Port<span className={dark ? 'text-cyan-400' : 'text-sky-500'}>Folio</span></span>
        </div>
        <p className={`text-sm flex items-center gap-1.5 ${
          dark ? 'text-gray-500' : 'text-slate-600'
        }`}>
          Fait avec <Heart size={13} className="text-red-400 fill-red-400" /> à Madagascar — {new Date().getFullYear()}
        </p>
        <nav className="flex items-center gap-5">
          {['#accueil', '#apropos', '#projets', '#contact'].map(href => (
            <a key={href} href={href} className={`text-xs font-medium capitalize transition-colors ${
              dark
                ? 'text-gray-500 hover:text-gray-300'
                : 'text-slate-600 hover:text-slate-900'
            }`}>
              {href.replace('#', '')}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
