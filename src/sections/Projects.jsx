import { ExternalLink, Github, Code2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: 'Application Web SPA',
    desc: 'Plateforme web moderne monopage (Single Page Application) offrant une expérience utilisateur fluide et réactive, architecturée autour du couplage React (Frontend) et Express (API REST).',
    tags: ['React', 'Express', 'API REST'],
    color: 'cyan',
    github: 'https://github.com/Santatra-mario/gestionVente',
    demo: 'https://gestionVente.vercel.app',
  },
  {
    title: 'Gestion de réservation coopérative',
    desc: 'Système complet de gestion asynchrone pour la réservation de places au sein d\'une coopérative de transport, assurant la synchronisation des données via MySQL.',
    tags: ['JSP', 'Java', 'MySQL'],
    color: 'blue',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Projet IHM — UI/UX',
    desc: 'Conception centrée utilisateur et prototypage haute fidélité d\'une interface homme-machine, optimisant l\'ergonomie et le parcours utilisateur (Design Thinking).',
    tags: ['UI/UX', 'Figma', 'Prototypage'],
    color: 'indigo',
    github: 'Santatra-mario/gestionEtudiant',
    demo: '#',
  },
  {
    title: 'Application mobile Android',
    desc: 'Application mobile native développée en Java/Kotlin pour Android, intégrant des composants hybrides via React Native pour une flexibilité accrue.',
    tags: ['Android', 'React Native', 'Java'],
    color: 'cyan',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Gestion de vente de voiture',
    desc: 'Logiciel de bureau ou web de gestion commerciale (ERP) pour concessionnaires, automatisant le suivi des stocks de véhicules et le processus de vente avec persistance MySQL.',
    tags: ['Java', 'MySQL', 'Swing/JavaFX'], // Ajustez le 3ème tag selon la techno exacte
    color: 'blue',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Gestion de réservation colis',
    desc: 'Solution logicielle robuste développée en .NET/C# pour le suivi logistique et la réservation de transport de colis, appuyée par une base de données MySQL.',
    tags: ['C#', '.NET', 'MySQL'],
    color: 'indigo',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Prêt bancaire',
    desc: 'Application de simulation et de gestion de demandes de prêts bancaires, combinant une interface réactive React avec une logique métier sécurisée sous Laravel.',
    tags: ['React', 'Laravel', 'API REST'],
    color: 'cyan',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Gestion électricité & eau (JIRAMA)',
    desc: 'Application web de facturation et de gestion de clientèle (CRM) pour les services d\'utilité publique, automatisant le calcul des consommations et la génération de factures sous Laravel.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    color: 'blue',
    github: 'https://github.com',
    demo: '#',
  },
]
// Couleurs des tags adaptées au thème
const tagColorMapDark = {
  React: 'bg-cyan-400/10 text-cyan-400',
  'React Native': 'bg-cyan-400/10 text-cyan-400',
  'Node.js': 'bg-green-400/10 text-green-400',
  Express: 'bg-gray-400/10 text-gray-400',
  JSP: 'bg-orange-400/10 text-orange-400',
  MySQL: 'bg-blue-400/10 text-blue-400',
  PostgreSQL: 'bg-blue-400/10 text-blue-400',
  PHP: 'bg-indigo-400/10 text-indigo-400',
  Laravel: 'bg-rose-400/10 text-rose-400',
  Java: 'bg-amber-400/10 text-amber-400',
  'C#': 'bg-purple-400/10 text-purple-400',
  'UI/UX': 'bg-pink-400/10 text-pink-400',
}

const tagColorMapLight = {
  React: 'bg-sky-400/15 text-sky-600',
  'React Native': 'bg-sky-400/15 text-sky-600',
  'Node.js': 'bg-green-400/15 text-green-600',
  Express: 'bg-slate-300/50 text-slate-700',
  JSP: 'bg-orange-400/15 text-orange-600',
  MySQL: 'bg-blue-400/15 text-blue-600',
  PostgreSQL: 'bg-blue-400/15 text-blue-600',
  PHP: 'bg-indigo-400/15 text-indigo-600',
  Laravel: 'bg-rose-400/15 text-rose-600',
  Java: 'bg-amber-400/15 text-amber-600',
  'C#': 'bg-purple-400/15 text-purple-600',
  'UI/UX': 'bg-pink-400/15 text-pink-600',
}

const cardBorderMapDark = {
  cyan: 'hover:border-cyan-400/30',
  blue: 'hover:border-blue-400/30',
  indigo: 'hover:border-indigo-400/30',
}

const cardBorderMapLight = {
  cyan: 'hover:border-sky-400/50',
  blue: 'hover:border-blue-400/50',
  indigo: 'hover:border-indigo-400/50',
}

const iconBgMapDark = {
  cyan: 'bg-cyan-400/10 text-cyan-400',
  blue: 'bg-blue-400/10 text-blue-400',
  indigo: 'bg-indigo-400/10 text-indigo-400',
}

const iconBgMapLight = {
  cyan: 'bg-sky-400/15 text-sky-600',
  blue: 'bg-blue-400/15 text-blue-600',
  indigo: 'bg-indigo-400/15 text-indigo-600',
}

export default function Projects() {
  const { dark } = useTheme()

  const tagColorMap = dark ? tagColorMapDark : tagColorMapLight
  const cardBorderMap = dark ? cardBorderMapDark : cardBorderMapLight
  const iconBgMap = dark ? iconBgMapDark : iconBgMapLight

  return (
    <section id="projets" className={`py-24 relative transition-colors duration-500 ${
      dark ? 'bg-gray-950' : 'bg-slate-50'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] ${
          dark ? 'bg-cyan-500/5' : 'bg-cyan-400/10'
        }`} />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className={`text-sm font-semibold uppercase tracking-widest ${
            dark ? 'text-cyan-400' : 'text-sky-500'
          }`}>Portfolio</span>
          <h2 className={`text-4xl lg:text-5xl font-black mt-2 ${
            dark ? 'text-white' : 'text-slate-900'
          }`}>Mes Projets</h2>
          <div className={`w-16 h-1 rounded-full mx-auto mt-4 ${
            dark
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
              : 'bg-gradient-to-r from-sky-400 to-indigo-500'
          }`} />
          <p className={`mt-4 max-w-xl mx-auto ${
            dark ? 'text-gray-400' : 'text-slate-600'
          }`}>Quelques projets représentatifs de mon travail. Chacun est construit avec soin et attention aux détails.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`group rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300 border ${
              dark
                ? `bg-white/[0.02] border-white/5 hover:bg-white/[0.04] ${cardBorderMap[project.color]}`
                : `bg-white border-slate-200 hover:bg-slate-100 ${cardBorderMap[project.color]}`
            }`}>
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${iconBgMap[project.color]}`}>
                <Code2 size={20} />
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-2 ${
                  dark ? 'text-white' : 'text-slate-900'
                }`}>{project.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  dark ? 'text-gray-400' : 'text-slate-600'
                }`}>{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${tagColorMap[tag] || (dark ? 'bg-white/5 text-gray-400' : 'bg-slate-200 text-slate-600')}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`flex items-center gap-3 mt-auto pt-2 ${
                dark ? 'border-white/5' : 'border-slate-200'
              } border-t`}>
                <a href={project.github} target="_blank" rel="noreferrer" className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  dark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}>
                  <Github size={15} /> Code
                </a>
                <a href={project.demo} className={`flex items-center gap-1.5 text-sm font-medium transition-colors ml-auto ${
                  dark
                    ? 'text-gray-400 hover:text-cyan-400'
                    : 'text-slate-600 hover:text-sky-500'
                }`}>
                  <ExternalLink size={15} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Santatra-mario" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border font-semibold transition-all ${
            dark
              ? 'border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20'
              : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400'
          }`}>
            <Github size={18} /> Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
