import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code2, Layers, Smartphone } from 'lucide-react'
import heroImg from '../assets/hero.png'
import { useTheme } from '../context/ThemeContext'

// Titres qui défilent avec effet typewriter
const ROLES = [
  'Développeur Full Stack',
  'Designer UI/UX',
  'React JS Developer',
  'Laravel / PHP Dev',
  'Mobile React Native',
]

function Typewriter({ texts, dark }) {
  const [idx, setIdx]     = useState(0)
  const [text, setText]   = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1400)
      return () => clearTimeout(t)
    }
    const current = texts[idx]
    if (!deleting) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        setPause(true)
        setDeleting(true)
        return
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setIdx((i) => (i + 1) % texts.length)
        return
      }
    }
  }, [text, deleting, pause, idx, texts])

  return (
    <span className="inline-flex items-center gap-1">
      <span style={{
        background: dark
          ? 'linear-gradient(90deg,#22d3ee,#818cf8,#f472b6)'
          : 'linear-gradient(90deg,#0ea5e9,#6366f1,#ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>{text}</span>
      {/* Curseur clignotant */}
      <span
        className="inline-block w-0.5 h-7 lg:h-8 rounded-full align-middle ml-0.5"
        style={{
          background: dark ? '#818cf8' : '#6366f1',
          animation: 'cursorBlink 1s step-end infinite',
        }}
      />
    </span>
  )
}

// Particules flottantes légères
function Particles({ dark }) {
  const count = 18
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size  = 2 + (i % 3)
        const left  = (i * 37 + 11) % 100
        const delay = (i * 0.4) % 6
        const dur   = 5 + (i % 5)
        return (
          <span key={i}
            className="absolute rounded-full"
            style={{
              width: size, height: size,
              left: `${left}%`,
              top: `${(i * 19 + 7) % 90}%`,
              background: dark
                ? ['#22d3ee44','#818cf844','#f472b633'][i % 3]
                : ['#0ea5e933','#6366f133','#ec489922'][i % 3],
              animation: `particleFloat ${dur}s ease-in-out ${delay}s infinite alternate`,
            }}
          />
        )
      })}
    </div>
  )
}

export default function Hero() {
  const { dark } = useTheme()

  // Compteur animé
  const [count, setCount] = useState(0)
  useEffect(() => {
    let n = 0
    const t = setInterval(() => {
      n += 1
      setCount(n)
      if (n >= 20) clearInterval(t)
    }, 60)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="accueil"
      className={`min-h-screen flex flex-col justify-center relative overflow-hidden transition-colors duration-500 ${
        dark ? 'bg-gray-950' : 'bg-slate-50'
      }`}
    >
      {/* ── Fond ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbes */}
        <div className={`absolute top-1/4 left-1/3 w-[520px] h-[520px] rounded-full blur-[130px]
          ${dark ? 'bg-cyan-500/8' : 'bg-cyan-400/15'}`}
          style={{ animation: 'floatOrb 8s ease-in-out infinite' }} />
        <div className={`absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full blur-[100px]
          ${dark ? 'bg-violet-600/8' : 'bg-violet-400/15'}`}
          style={{ animation: 'floatOrb 10s ease-in-out 2s infinite reverse' }} />
        <div className={`absolute bottom-1/4 left-1/5 w-[280px] h-[280px] rounded-full blur-[80px]
          ${dark ? 'bg-pink-500/6' : 'bg-pink-400/12'}`}
          style={{ animation: 'floatOrb 7s ease-in-out 1s infinite' }} />

        {/* Grille */}
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-[linear-gradient(rgba(255,255,255,0.013)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.013)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)]'
        } bg-[size:56px_56px]`} />

        {/* Ligne diagonale déco */}
        <div className="absolute top-0 right-0 w-px h-full opacity-10"
          style={{ background: dark ? 'linear-gradient(to bottom,transparent,#818cf8,transparent)' : 'linear-gradient(to bottom,transparent,#6366f1,transparent)' }} />
      </div>

      <Particles dark={dark} />

      {/* ── Contenu ── */}
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-14">

        {/* Texte */}
        <div className="flex-1 text-center lg:text-left" style={{ animation: 'slideUp 0.7s ease both' }}>

          {/* Badge disponibilité */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-7 border
            ${dark
              ? 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400'
              : 'bg-violet-50 border-violet-200 text-violet-600'
            }`}>
            <span className={`w-2 h-2 rounded-full ${dark ? 'bg-cyan-400' : 'bg-violet-500'}`}
              style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
            <Sparkles size={12} />
            Disponible pour un stage · ENI L3
          </div>

          {/* Nom */}
          <h1 className={`text-4xl lg:text-6xl font-black leading-[1.1] mb-3
            ${dark ? 'text-white' : 'text-slate-900'}`}
            style={{ animation: 'slideUp 0.7s ease 0.1s both' }}>
            Bonjour, je suis
            <br />
            <span style={{
              background: dark
                ? 'linear-gradient(135deg,#22d3ee 0%,#818cf8 50%,#f472b6 100%)'
                : 'linear-gradient(135deg,#0ea5e9 0%,#6366f1 50%,#ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Santatra Mario
            </span>
          </h1>

          {/* Typewriter */}
          <div className="text-xl lg:text-2xl font-bold mb-5 h-9 flex items-center justify-center lg:justify-start"
            style={{ animation: 'slideUp 0.7s ease 0.2s both' }}>
            <Typewriter texts={ROLES} dark={dark} />
          </div>

          {/* Description */}
          <p className={`leading-relaxed max-w-md mb-8 text-sm lg:text-base
            ${dark ? 'text-slate-400' : 'text-slate-500'}`}
            style={{ animation: 'slideUp 0.7s ease 0.3s both' }}>
            Étudiant en 3ᵉ année à l'ENI Fianarantsoa, je crée des applications web et mobiles
            modernes. Passionné par React, Laravel et le design d'interfaces.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            style={{ animation: 'slideUp 0.7s ease 0.4s both' }}>
            <a href="#projets"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl
                text-white font-bold text-sm shadow-lg transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg,#0ea5e9,#6366f1,#ec4899)',
                boxShadow: dark ? '0 8px 32px #6366f140' : '0 8px 24px #6366f130',
              }}>
              Voir mes projets
            </a>
            <a href="#cv"
              className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl
                font-bold text-sm border-2 transition-all duration-200 hover:scale-105
                ${dark
                  ? 'border-white/15 text-white hover:border-violet-400/50 hover:bg-violet-500/10'
                  : 'border-slate-200 text-slate-700 hover:border-violet-300 hover:bg-violet-50'
                }`}>
              Mon CV
            </a>
          </div>

          {/* Réseaux */}
          <div className="flex items-center gap-3 justify-center lg:justify-start"
            style={{ animation: 'slideUp 0.7s ease 0.5s both' }}>
            {[
              { href: 'https://github.com/Santatra-mario',             icon: Github,   label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/mario-jonsthone',   icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:santatramario17@gmail.com',              icon: Mail,     label: 'Email' },
            ].map(({ href, icon: Ic, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110
                  ${dark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-violet-600 hover:border-violet-300 hover:shadow-md'
                  }`}>
                <Ic size={17} />
              </a>
            ))}
            <span className={`text-xs ml-1 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>·</span>
            <span className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>Connectons-nous</span>
          </div>
        </div>

        {/* ── PHOTO + déco ── */}
        <div className="relative flex-shrink-0" style={{ animation: 'fadeIn 0.9s ease 0.2s both' }}>

          {/* Anneaux tournants */}
          <div className="absolute -inset-5 rounded-full border border-dashed opacity-20"
            style={{
              borderColor: dark ? '#818cf8' : '#6366f1',
              animation: 'spinSlow 18s linear infinite',
            }} />
          <div className="absolute -inset-10 rounded-full border border-dashed opacity-10"
            style={{
              borderColor: dark ? '#22d3ee' : '#0ea5e9',
              animation: 'spinSlow 26s linear infinite reverse',
            }} />

          {/* Lueur derrière la photo */}
          <div className="absolute inset-0 rounded-3xl blur-2xl scale-90 opacity-40"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1,#ec4899)' }} />

          {/* Photo */}
          <div className={`relative w-60 h-60 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-2xl
            ring-2 ${dark ? 'ring-white/10' : 'ring-slate-200'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-violet-500/10 to-pink-500/15 z-10" />
            <img src={heroImg} alt="Santatra Mario" className="w-full h-full object-cover" />
          </div>

          {/* Badge Projets */}
          <div className={`absolute -bottom-5 -right-5 rounded-2xl px-4 py-3 shadow-xl border
            ${dark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-100 shadow-slate-200/80'}`}
            style={{ animation: 'floatBadge 4s ease-in-out infinite' }}>
            <p className={`text-xs font-medium ${dark ? 'text-slate-400' : 'text-slate-400'}`}>Projets</p>
            <p className="text-xl font-black"
              style={{
                background: 'linear-gradient(90deg,#0ea5e9,#6366f1)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
              {count}+
            </p>
          </div>

          {/* Badge Stack */}
          <div className={`absolute -top-5 -left-5 rounded-2xl px-4 py-3 shadow-xl border
            ${dark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-100 shadow-slate-200/80'}`}
            style={{ animation: 'floatBadge 4s ease-in-out 2s infinite' }}>
            <p className={`text-xs font-medium mb-1.5 ${dark ? 'text-slate-400' : 'text-slate-400'}`}>Stack</p>
            <div className="flex items-center gap-1.5">
              {[
                { ic: Code2,      color: '#0ea5e9', label: 'React' },
                { ic: Layers,     color: '#818cf8', label: 'Laravel' },
                { ic: Smartphone, color: '#f472b6', label: 'Mobile' },
              ].map(({ ic: Ic, color, label }) => (
                <div key={label} title={label}
                  className="w-6 h-6 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}22` }}>
                  <Ic size={13} style={{ color }} />
                </div>
              ))}
            </div>
          </div>

          {/* Badge ENI */}
          <div className={`absolute top-1/2 -right-8 -translate-y-1/2 rounded-xl px-3 py-2 shadow-lg border
            ${dark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-100'}`}
            style={{ animation: 'floatBadge 5s ease-in-out 1s infinite' }}>
            <p className="text-xs font-black"
              style={{
                background: 'linear-gradient(90deg,#22d3ee,#818cf8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>ENI L3</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#apropos"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
          transition-colors ${dark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-300 hover:text-slate-500'}`}
        style={{ animation: 'bounce 2s ease-in-out infinite' }}>
        <ArrowDown size={20} />
      </a>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes cursorBlink  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse        { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:.7} }
        @keyframes floatOrb     { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-28px) scale(1.04)} }
        @keyframes floatBadge   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes spinSlow     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes particleFloat{ from{transform:translateY(0) scale(1)} to{transform:translateY(-22px) scale(1.3)} }
        @keyframes slideUp      { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn       { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
        @keyframes bounce       { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
      `}</style>
    </section>
  )
}
