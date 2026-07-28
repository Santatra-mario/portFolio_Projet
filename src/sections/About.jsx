import { useEffect, useRef, useState } from 'react'
import { User, MapPin, GraduationCap, TrendingUp, Briefcase, Award, Code2, Smartphone, Mail, Phone, Car } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const stats = [
  { label: 'Projets réalisés',        value: '15+', color: '#0ea5e9' },
  { label: 'Technologies maîtrisées', value: '3+', color: '#818cf8' },
  { label: 'Années de formation',     value: '3',   color: '#f472b6' },
  { label: 'Compétitions &amp; Stages',   value: '4+',  color: '#10b981' },
]

const timeline = [
  {
    icon: GraduationCap,
    year: '2022–2023',
    title: 'Baccalauréat Série S',
    desc: 'Lycée André Resampa — Antsirabe (LARA) · Mention Passable',
    color: '#10b981',
  },
  {
    icon: GraduationCap,
    year: '2023–2024',
    title: '1ère année Licence Informatique',
    desc: 'ENI Fianarantsoa — École Nationale de l\'Informatique',
    color: '#0ea5e9',
    items: ['Projet fin d\'année : Compagnie aérienne PHP/Laravel'],
  },
  {
    icon: Award,
    year: '22/06/2024',
    title: 'Compétition Web HTML/CSS + Concours Algorithme',
    desc: 'ENI Fianarantsoa',
    color: '#f59e0b',
    items: [
      'Réalisation d\'interfaces Web e-commerce',
      'Algorithmique C avancé',
    ],
  },
  {
    icon: GraduationCap,
    year: '2024–2025',
    title: '2ème année Licence Informatique',
    desc: 'ENI Fianarantsoa',
    color: '#818cf8',
    items: [
      'Projet L2 : Java, C#, React JS + Laravel, PHP/MySQL',
      'Dev Mobile : React Native & Flutter',
    ],
  },
  {
    icon: Briefcase,
    year: '2025',
    title: 'Stage — Service Régional du Budget Vakinankaratra',
    desc: 'Administration financière publique · Finance',
    color: '#ec4899',
    items: [
      'Traitement et gestion de documents budgétaires',
      'Saisie et vérification des données financières',
    ],
  },
  {
    icon: TrendingUp,
    year: '2025–2026',
    title: '3ème année Licence — En cours',
    desc: 'ENI Fianarantsoa · Recherche de stage',
    color: '#f472b6',
    badge: 'Actuel',
  },
]

// Stack avec niveaux de maîtrise (pour les barres animées)
const stackGroups = [
  {
    title: 'Frontend & Web',
    icon: Code2,
    color: '#0ea5e9',
    items: [
      { name: 'React JS', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Backend & BDD',
    icon: TrendingUp,
    color: '#818cf8',
    items: [
      { name: 'PHP (Laravel, CI4)', level: 85 },
      { name: 'Java', level: 70 },
      { name: 'C#', level: 65 },
      { name: 'Python', level: 60 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    color: '#f472b6',
    items: [
      { name: 'React Native', level: 75 },
      { name: 'Flutter', level: 70 },
      { name: 'Intégration API', level: 78 },
    ],
  },
  {
    title: 'Outils',
    icon: Award,
    color: '#f59e0b',
    items: [
      { name: 'VS Code', level: 90 },
      { name: 'NetBeans / Visual Studio', level: 75 },
      { name: 'WampServer', level: 80 },
      { name: 'GitHub', level: 78 },
    ],
  },
  {
    title: 'Systèmes',
    icon: GraduationCap,
    color: '#10b981',
    items: [
      { name: 'Windows', level: 90 },
      { name: 'Linux', level: 68 },
      { name: 'Git', level: 78 },
      { name: 'C (Algorithmique)', level: 75 },
    ],
  },
  {
    title: 'Langues',
    icon: User,
    color: '#ec4899',
    items: [
      { name: 'Malagasy — Maternelle', level: 100 },
      { name: 'Français — Moyen', level: 65 },
      { name: 'Anglais — Moyen', level: 55 },
    ],
  },
]

// ─── Effet "spotlight" qui suit le curseur (signature visuelle) ───
function Spotlight({ children, className = '', style = {}, color = '#818cf8' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [hover, setHover] = useState(false)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(280px circle at ${pos.x}% ${pos.y}%, ${color}20, transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

// Compteur animé
function Counter({ target, color }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  const num = parseInt(target)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let n = 0
        const step = Math.ceil(num / 30)
        const t = setInterval(() => {
          n = Math.min(n + step, num)
          setVal(n)
          if (n >= num) clearInterval(t)
        }, 40)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [num])

  const suffix = target.replace(/[0-9]/g, '')
  return (
    <span ref={ref} style={{ color }} className="text-3xl font-black tabular-nums">
      {val}{suffix}
    </span>
  )
}

// Barre de compétence animée (fill au scroll)
function SkillBar({ name, level, color, dark, delay = 0 }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true)
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="mb-3 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className={`text-xs font-semibold ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{name}</span>
        <span className="text-[10px] font-bold tabular-nums" style={{ color }}>{level}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-white/[0.06]' : 'bg-slate-100'}`}>
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            transitionDuration: '900ms',
            transitionDelay: `${delay}ms`,
            boxShadow: visible ? `0 0 8px ${color}60` : 'none',
          }}
        />
      </div>
    </div>
  )
}

// Item de timeline avec reveal au scroll + notification de progression au parent
function TimelineItem({ item, index, dark, onReveal }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const Ic = item.icon

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (visible) onReveal(index)
  }, [visible, index, onReveal])

  return (
    <div ref={ref} className="relative pl-16 pb-8 last:pb-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}>

      {/* Icône */}
      <div className="absolute left-0 top-0 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg z-10 transition-transform duration-300 hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${item.color}33, ${item.color}18)`,
          border: `1.5px solid ${item.color}50`,
          boxShadow: visible ? `0 4px 20px ${item.color}40` : `0 4px 20px ${item.color}30`,
        }}>
        <Ic size={18} style={{ color: item.color }} />
      </div>

      {/* Contenu */}
      <Spotlight color={item.color}
        className={`rounded-2xl p-4 border transition-all duration-300 group cursor-default
        ${dark
          ? 'bg-white/[0.03] border-white/[0.06] hover:border-white/10 hover:bg-white/[0.05]'
          : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
        }`}
        style={{ borderLeft: `3px solid ${item.color}60` }}>

        {/* En-tête */}
        <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}35` }}>
            {item.year}
          </span>
          {item.badge && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white animate-pulse"
              style={{ background: `linear-gradient(90deg,${item.color},#818cf8)` }}>
              {item.badge}
            </span>
          )}
        </div>

        <h4 className={`font-bold text-sm mt-2 mb-0.5 ${dark ? 'text-white' : 'text-slate-800'}`}
          style={{ fontFamily: 'var(--font-display, inherit)' }}>
          {item.title}
        </h4>
        <p className={`text-xs mb-2 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{item.desc}</p>

        {item.items && (
          <ul className="space-y-1">
            {item.items.map((it, i) => (
              <li key={i} className="flex items-start gap-2 text-xs"
                style={{ color: dark ? '#94a3b8' : '#64748b' }}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: item.color }} />
                {it}
              </li>
            ))}
          </ul>
        )}
      </Spotlight>
    </div>
  )
}

export default function About() {
  const { dark } = useTheme()
  const [activeTab, setActiveTab] = useState('parcours')
  const [visibleCount, setVisibleCount] = useState(0)

  // ── Pill d'onglet animée : mesure la position réelle du bouton actif ──
  const tabRefs = useRef({})
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })

  const tabs = [
    { id: 'profil',   label: 'Profil',   icon: User },
    { id: 'parcours', label: 'Parcours', icon: GraduationCap },
    { id: 'stack',    label: 'Stack',    icon: Code2 },
  ]

  useEffect(() => {
    const el = tabRefs.current[activeTab]
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth })
  }, [activeTab])

  const handleReveal = (index) => {
    setVisibleCount((c) => Math.max(c, index + 1))
  }

  const progress = timeline.length ? (visibleCount / timeline.length) * 100 : 0

  const bg   = dark ? 'bg-[#17171c]' : 'bg-slate-50'
  const text = dark ? 'text-slate-400' : 'text-slate-500'
  const head = dark ? 'text-white' : 'text-slate-900'
  const card = dark
    ? 'bg-white/[0.025] border border-white/5 hover:border-white/10'
    : 'bg-white border border-slate-100 shadow-sm hover:shadow-md'

  return (
    <section id="apropos" className={`py-24 relative transition-colors duration-500 ${bg}`}>

      {/* Fond déco */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]
          ${dark ? 'bg-violet-600/5' : 'bg-violet-400/8'}`} />
        <div className={`absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px]
          ${dark ? 'bg-cyan-500/5' : 'bg-cyan-400/8'}`} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* En-tête section */}
        <div className="text-center mb-14">
          <span className="text-sm font-bold uppercase tracking-widest"
            style={{
              background: 'linear-gradient(90deg,#0ea5e9,#818cf8,#f472b6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
            À propos
          </span>
          <h2 className={`text-4xl lg:text-5xl font-black mt-2 ${head}`}
            style={{ fontFamily: 'var(--font-display, inherit)', letterSpacing: '-0.02em' }}>
            Qui suis-je ?
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg,#0ea5e9,#818cf8,#f472b6)' }} />
        </div>

        {/* Tabs avec pill animée */}
        <div className="flex justify-center mb-10">
          <div className={`relative inline-flex rounded-2xl p-1 ${dark ? 'bg-white/5' : 'bg-white shadow-sm border border-slate-100'}`}>
            {/* Pill glissante */}
            <div className="absolute top-1 bottom-1 rounded-xl shadow-lg transition-all duration-300 ease-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                background: 'linear-gradient(135deg,#0ea5e9,#818cf8)',
              }} />
            {tabs.map(({ id, label, icon: Ic }) => (
              <button key={id}
                ref={(el) => (tabRefs.current[id] = el)}
                onClick={() => setActiveTab(id)}
                className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200
                  ${activeTab === id
                    ? 'text-white'
                    : dark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'
                  }`}>
                <Ic size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── TAB PROFIL ── */}
        {activeTab === 'profil' && (
          <div className="grid lg:grid-cols-2 gap-10 items-start"
            style={{ animation: 'tabFade 0.4s ease both' }}>

            {/* Bio */}
            <div>
              <Spotlight color="#0ea5e9" className={`flex items-center gap-3 mb-6 p-4 rounded-2xl ${card}`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 hover:rotate-6"
                  style={{ background: 'linear-gradient(135deg,#0ea5e9,#818cf8)' }}>
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${head}`} style={{ fontFamily: 'var(--font-display, inherit)' }}>
                    LAHIMANITRARIVO Santatra Mario Jonsthone
                  </h3>
                  <div className={`flex items-center gap-1 text-xs mt-0.5 ${text}`}>
                    <MapPin size={11} />
                    Mahafaly Vatofotsy · Madagascar
                  </div>
                </div>
              </Spotlight>

              <p className={`leading-relaxed mb-4 text-sm ${text}`}>
                Étudiant en 3ᵉ année d'Informatique à l'ENI Fianarantsoa, je suis motivé,
                curieux et prêt à m'investir pleinement dans un stage. Je suis à la recherche
                d'une opportunité pour découvrir le milieu professionnel et mettre en pratique
                mes connaissances académiques.
              </p>
              <p className={`leading-relaxed mb-8 text-sm ${text}`}>
                Dynamique et volontaire, je maîtrise React JS, Laravel, PHP, Java, C# et
                le développement mobile avec React Native,JAVA &amp; Flutter. Déterminé à apprendre
                et à progresser au sein d'une équipe.
              </p>

              {/* Infos rapides — désormais cliquables (mail / tel) */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Email',    val: 'santatramario17@gmail.com', color: '#0ea5e9', icon: Mail, href: 'mailto:santatramario17@gmail.com' },
                  { label: 'Tél',      val: '033 18 089 85 / 038 75 465 13',             color: '#818cf8', icon: Phone, href: 'tel:0331808985' },
                  { label: 'Permis',   val: 'A-B',                       color: '#f59e0b', icon: Car },
                  { label: 'Localité', val: 'Antsirabe,Mahafaly Vatofotsy',          color: '#10b981', icon: MapPin },
                ].map((info) => {
                  const InfoIcon = info.icon
                  const Wrapper = info.href ? 'a' : 'div'
                  return (
                    <Spotlight key={info.label} color={info.color}
                      className={`rounded-xl transition-transform duration-200 hover:-translate-y-0.5 ${card}`}>
                      <Wrapper {...(info.href ? { href: info.href } : {})} className="block p-3">
                        <p className="text-xs font-bold mb-0.5 flex items-center gap-1.5" style={{ color: info.color }}>
                          <InfoIcon size={11} />
                          {info.label}
                        </p>
                        <p className={`text-xs truncate ${text}`}>{info.val}</p>
                      </Wrapper>
                    </Spotlight>
                  )
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <Spotlight key={s.label} color={s.color}
                  className={`rounded-2xl p-6 transition-all hover:scale-[1.02] cursor-default ${card}`}
                  style={{ boxShadow: `0 4px 24px ${s.color}12` }}>
                  <Counter target={s.value} color={s.color} />
                  <p className={`text-sm mt-1 ${text}`}
                    dangerouslySetInnerHTML={{ __html: s.label }} />
                </Spotlight>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB PARCOURS ── */}
        {activeTab === 'parcours' && (
          <div className="max-w-2xl mx-auto" style={{ animation: 'tabFade 0.4s ease both' }}>
            <h3 className={`text-xl font-bold mb-8 text-center ${head}`} style={{ fontFamily: 'var(--font-display, inherit)' }}>
              Mon parcours complet
            </h3>
            <div className="relative">
              {/* Ligne de progression globale — se remplit au fil du scroll */}
              <div className={`absolute left-5 top-5 bottom-5 w-px ${dark ? 'bg-white/10' : 'bg-slate-200'}`} />
              <div className="absolute left-5 top-5 w-px transition-all duration-500 ease-out"
                style={{
                  height: `calc(${progress}% - ${progress > 0 ? '20px' : '0px'})`,
                  background: 'linear-gradient(to bottom, #0ea5e9, #818cf8, #f472b6)',
                  boxShadow: '0 0 8px rgba(129,140,248,0.5)',
                }} />
              {timeline.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} dark={dark} onReveal={handleReveal} />
              ))}
            </div>
          </div>
        )}

        {/* ── TAB STACK ── */}
        {activeTab === 'stack' && (
          <div style={{ animation: 'tabFade 0.4s ease both' }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackGroups.map((group) => {
                const Ic = group.icon
                return (
                  <Spotlight key={group.title} color={group.color}
                    className={`rounded-2xl p-5 transition-all hover:scale-[1.01] cursor-default ${card}`}
                    style={{ borderTop: `3px solid ${group.color}60` }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                        style={{ background: `${group.color}22` }}>
                        <Ic size={15} style={{ color: group.color }} />
                      </div>
                      <h4 className={`text-sm font-bold ${head}`} style={{ fontFamily: 'var(--font-display, inherit)' }}>
                        {group.title}
                      </h4>
                    </div>
                    <div>
                      {group.items.map((item, i) => (
                        <SkillBar
                          key={item.name}
                          name={item.name}
                          level={item.level}
                          color={group.color}
                          dark={dark}
                          delay={i * 80}
                        />
                      ))}
                    </div>
                  </Spotlight>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes tabFade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  )
}
