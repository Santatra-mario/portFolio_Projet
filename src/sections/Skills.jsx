import { useEffect, useRef, useState } from 'react'
import { Palette, Server, Wrench } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const skillGroups = [
  {
    category: 'Frontend',
    accent: 'cyan',
    icon: Palette,
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    category: 'Backend',
    accent: 'violet',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 60 },
      { name: 'REST API', level: 75 },
      { name: 'Firebase', level: 50 },
    ],
  },
  {
    category: 'Outils',
    accent: 'pink',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vite', level: 85 },
      { name: 'Figma', level: 40 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 65 },
    ],
  },
]

const gradients = {
  cyan: 'from-cyan-400 to-cyan-600',
  violet: 'from-violet-400 to-violet-600',
  pink: 'from-pink-400 to-pink-600',
}
const badgeDark = {
  cyan: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',
  violet: 'bg-violet-400/10 border-violet-400/20 text-violet-400',
  pink: 'bg-pink-400/10 border-pink-400/20 text-pink-400',
}
const badgeLight = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-700',
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-700',
  pink: 'bg-pink-500/10 border-pink-500/20 text-pink-700',
}
const iconBg = {
  cyan: 'bg-cyan-400/15 text-cyan-400',
  violet: 'bg-violet-400/15 text-violet-400',
  pink: 'bg-pink-400/15 text-pink-400',
}

function SkillCard({ group, dark }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)
  const Icon = group.icon

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const badge = dark ? badgeDark[group.accent] : badgeLight[group.accent]
  const card = dark
    ? 'bg-white/[0.025] border border-white/5 hover:border-white/10'
    : 'bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200'
  const label = dark ? 'text-slate-300' : 'text-slate-700'
  const pct = dark ? 'text-slate-500' : 'text-slate-400'
  const track = dark ? 'bg-white/5' : 'bg-slate-100'

  return (
    <div ref={ref} className={`rounded-3xl p-8 transition-all duration-300 ${card}`}>
      <div className="flex items-center gap-3 mb-8">
        <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg[group.accent]}`}>
          <Icon size={20} strokeWidth={2} />
        </span>
        <span className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-sm font-bold ${badge}`}>
          {group.category}
        </span>
      </div>
      <div className="space-y-5">
        {group.skills.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${label}`}>{skill.name}</span>
              <span className={`text-xs font-bold ${pct}`}>{skill.level}%</span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${track}`}>
              <div
                className={`h-full rounded-full bg-gradient-to-r ${gradients[group.accent]} skill-bar-fill`}
                style={{ width: animated ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { dark } = useTheme()

  const section = dark ? 'bg-[#17171c]' : 'bg-white'

  return (
    <section id="competences" className={`py-24 relative transition-colors duration-500 ${section}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] blur-[80px] ${
          dark ? 'bg-violet-500/5' : 'bg-violet-400/10'
        }`} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="gradient-text text-sm font-bold uppercase tracking-widest">Compétences</span>
          <h2 className={`text-4xl lg:text-5xl font-black mt-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Mes Technologies
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map(group => (
            <SkillCard key={group.category} group={group} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  )
}