import { ExternalLink, Github, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Application Web SPA',
    desc: 'Application web à navigation fluide, sans rechargement de page, développée avec Express et React.',
    tags: ['React', 'Express'],
    color: 'cyan',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Gestion de réservation coopérative',
    desc: 'Application web de gestion de réservation des places d\'une coopérative de transport.',
    tags: ['JSP', 'MySQL'],
    color: 'blue',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Projet IHM — UI/UX',
    desc: 'Conception et élaboration d\'un projet d\'interface homme-machine (design UI/UX).',
    tags: ['UI/UX'],
    color: 'indigo',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Application mobile Android',
    desc: 'Application mobile développée avec React Native et JAVA.',
    tags: ['React Native', 'Java'],
    color: 'cyan',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Gestion de vente de voiture',
    desc: 'Système de gestion de vente de véhicules développé en Java avec base de données MySQL.',
    tags: ['Java', 'MySQL'],
    color: 'blue',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Gestion de réservation colis',
    desc: 'Application de gestion de réservation de colis développée en C# avec MySQL.',
    tags: ['C#', 'MySQL'],
    color: 'indigo',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Prêt bancaire',
    desc: 'Application de gestion de prêt bancaire développée avec React JS et Laravel.',
    tags: ['React', 'Laravel'],
    color: 'cyan',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Gestion électricité & eau (JIRAMA)',
    desc: 'Application de gestion de la facturation électricité et eau, développée en PHP avec Laravel et MySQL.',
    tags: ['PHP', 'Laravel', 'MySQL'],
    color: 'blue',
    github: 'https://github.com',
    demo: '#',
  },
]

const tagColorMap = {
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

const cardBorderMap = { cyan: 'hover:border-cyan-400/30', blue: 'hover:border-blue-400/30', indigo: 'hover:border-indigo-400/30' }
const iconBgMap = { cyan: 'bg-cyan-400/10 text-cyan-400', blue: 'bg-blue-400/10 text-blue-400', indigo: 'bg-indigo-400/10 text-indigo-400' }

export default function Projects() {
  return (
    <section id="projets" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-2">Mes Projets</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">Quelques projets représentatifs de mon travail. Chacun est construit avec soin et attention aux détails.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`group bg-white/[0.02] border border-white/5 rounded-3xl p-7 flex flex-col gap-5 hover:bg-white/[0.04] ${cardBorderMap[project.color]} transition-all duration-300`}>
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${iconBgMap[project.color]}`}>
                <Code2 size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${tagColorMap[tag] || 'bg-white/5 text-gray-400'}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  <Github size={15} /> Code
                </a>
                <a href={project.demo} className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors ml-auto">
                  <ExternalLink size={15} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 hover:border-white/20 transition-all">
            <Github size={18} /> Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}