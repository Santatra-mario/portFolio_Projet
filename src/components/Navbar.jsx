import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Accueil',      href: '#accueil' },
  { label: 'À propos',     href: '#apropos' },
  { label: 'Compétences',  href: '#competences' },
  { label: 'Projets',      href: '#projets' },
  { label: 'Mon CV',       href: '#cv' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const { dark } = useTheme()
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('#accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
            : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2 group">
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${
            dark
              ? 'from-cyan-400 to-blue-600'
              : 'from-sky-400 to-indigo-600'
          } flex items-center justify-center shadow-lg ${
            dark ? 'shadow-cyan-500/30' : 'shadow-sky-500/30'
          } group-hover:${dark ? 'shadow-cyan-500/50' : 'shadow-sky-500/50'} transition-all`}>
            <Code2 size={18} className="text-white" />
          </div>
          <span className={`font-bold text-lg tracking-tight ${
            dark ? 'text-white' : 'text-slate-900'
          }`}>
            Dev<span className={dark ? 'text-cyan-400' : 'text-sky-500'}>Folio</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.href
                    ? dark
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-sky-500 bg-sky-400/10'
                    : dark
                      ? 'text-gray-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                } ${
                  link.href === '#cv'
                    ? dark
                      ? 'border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-300 hover:text-cyan-200'
                      : 'border border-sky-500/30 hover:border-sky-400/60 text-sky-600 hover:text-sky-500'
                    : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
            text-white text-sm font-semibold shadow-lg transition-all duration-200 ${
            dark
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/25 hover:shadow-cyan-500/40'
              : 'bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sky-500/25 hover:shadow-sky-500/40'
          } hover:scale-105`}
        >
          Me contacter
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${
            dark ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-1 ${
          dark
            ? 'bg-gray-950/98 border-white/5'
            : 'bg-white/98 border-slate-200'
        }`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setActive(link.href); setOpen(false) }}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                link.href === '#cv'
                  ? dark
                    ? 'text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-400/5'
                    : 'text-sky-600 border border-sky-500/30 hover:border-sky-400/60 hover:bg-sky-400/5'
                  : dark
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-2 px-5 py-3 rounded-lg text-white text-sm font-semibold text-center ${
              dark
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                : 'bg-gradient-to-r from-sky-500 to-indigo-600'
            }`}
          >
            Me contacter
          </a>
        </div>
      )}
    </nav>
  )
}
