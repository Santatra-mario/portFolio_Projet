import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <Code2 size={15} className="text-white" />
          </div>
          <span className="font-bold text-white text-sm">Port<span className="text-cyan-400">Folio</span></span>
        </div>
        <p className="text-gray-500 text-sm flex items-center gap-1.5">
          Fait avec <Heart size={13} className="text-red-400 fill-red-400" /> à Madagascar — {new Date().getFullYear()}
        </p>
        <nav className="flex items-center gap-5">
          {['#accueil', '#apropos', '#projets', '#contact'].map(href => (
            <a key={href} href={href} className="text-gray-500 hover:text-gray-300 text-xs font-medium capitalize transition-colors">
              {href.replace('#', '')}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
