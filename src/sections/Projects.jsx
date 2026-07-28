import { useState, useEffect } from 'react'
import { ExternalLink, Github, Code2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

// Images du projet "Application Web SPA"
import spa1 from '../assets/projects/vente1.png'
import spa2 from '../assets/projects/vente2.png'
import spa3 from '../assets/projects/vente3.png'
import spa4 from '../assets/projects/vente4.png'

// Styles CSS animés
const animationStyles = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      border-color: rgba(34, 211, 238, 0.2);
      box-shadow: inset 0 0 20px rgba(34, 211, 238, 0.05), 0 0 20px rgba(34, 211, 238, 0.1);
    }
    50% {
      border-color: rgba(34, 211, 238, 0.6);
      box-shadow: inset 0 0 20px rgba(34, 211, 238, 0.1), 0 0 40px rgba(34, 211, 238, 0.25);
    }
  }

  @keyframes borderGlowLight {
    0%, 100% {
      border-color: rgba(59, 130, 246, 0.2);
      box-shadow: inset 0 0 20px rgba(59, 130, 246, 0.05), 0 0 20px rgba(59, 130, 246, 0.1);
    }
    50% {
      border-color: rgba(59, 130, 246, 0.6);
      box-shadow: inset 0 0 20px rgba(59, 130, 246, 0.1), 0 0 40px rgba(59, 130, 246, 0.25);
    }
  }

  @keyframes imageFade {
    from {
      opacity: 0;
      transform: scale(1.08) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes shimmerGlow {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @keyframes tiltRotate {
    0%, 100% {
      transform: perspective(1000px) rotateX(0) rotateY(0);
    }
    50% {
      transform: perspective(1000px) rotateX(2px) rotateY(2px);
    }
  }

  .animate-slide-in {
    animation: slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .animate-image-fade {
    animation: imageFade 0.5s ease-out;
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .card-border-glow.glow-active {
    animation: borderGlow 2.5s ease-in-out infinite;
  }

  .card-border-glow-light.glow-active {
    animation: borderGlowLight 2.5s ease-in-out infinite;
  }

  .shimmer-overlay {
    animation: shimmerGlow 3s infinite;
  }

  .tilt-effect:hover {
    animation: tiltRotate 0.8s ease-out forwards;
  }

  .project-card {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .project-card:hover {
    transform: translateY(-8px);
  }

  .image-zoom-effect {
    transition: transform 0.4s ease-out, filter 0.4s ease-out;
  }

  .image-zoom-effect:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`

const projects = [
  {
    title: 'Application Web SPA',
    desc: 'Plateforme web moderne monopage (Single Page Application) offrant une expérience utilisateur fluide et réactive, architecturée autour du couplage React (Frontend) et Express (API REST).',
    tags: ['React', 'Express', 'API REST'],
    color: 'cyan',
    github: 'https://github.com/Santatra-mario/gestionVente',
    images: [spa1, spa2, spa3, spa4],
  },
  {
    title: 'Gestion de réservation coopérative',
    desc: 'Système complet de gestion asynchrone pour la réservation de places au sein d\'une coopérative de transport, assurant la synchronisation des données via MySQL.',
    tags: ['JSP', 'Java', 'MySQL'],
    color: 'blue',
    github: 'https://github.com/Santatra-mario/GestionCooperativeJSP',
  },
  {
    title: 'Projet IHM — UI/UX',
    desc: 'Conception centrée utilisateur et prototypage haute fidélité d\'une interface homme-machine, optimisant l\'ergonomie et le parcours utilisateur (Design Thinking).',
    tags: ['UI/UX', 'Figma', 'Prototypage'],
    color: 'indigo',
    github: 'https://github.com/Santatra-mario/gestionEtudiant',
  },
  {
    title: 'Application mobile Android',
    desc: 'Application mobile native développée en Java/Kotlin pour Android, intégrant des composants hybrides via React Native pour une flexibilité accrue.',
    tags: ['Android', 'React Native', 'Java'],
    color: 'cyan',
    github: 'https://github.com/Santatra-mario/GestionMedecineMobileJava',
  },
  {
    title: 'Gestion de vente de voiture',
    desc: 'Logiciel de bureau ou web de gestion commerciale (ERP) pour concessionnaires, automatisant le suivi des stocks de véhicules et le processus de vente avec persistance MySQL.',
    tags: ['Java', 'MySQL', 'Swing/JavaFX'],
    color: 'blue',
    github: 'https://github.com',
  },
  {
    title: 'Gestion de réservation colis',
    desc: 'Solution logicielle robuste développée en .NET/C# pour le suivi logistique et la réservation de transport de colis, appuyée par une base de données MySQL.',
    tags: ['C#', '.NET', 'MySQL'],
    color: 'indigo',
    github: 'https://github.com',
  },
  {
    title: 'Prêt bancaire',
    desc: 'Application de simulation et de gestion de demandes de prêts bancaires, combinant une interface réactive React avec une logique métier sécurisée sous Laravel.',
    tags: ['React', 'Laravel', 'API REST'],
    color: 'cyan',
    github: 'https://github.com',
  },
  {
    title: 'Gestion électricité & eau (JIRAMA)',
    desc: 'Application web de facturation et de gestion de clientèle (CRM) pour les services d\'utilité publique, automatisant le calcul des consommations et la génération de factures sous Laravel.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    color: 'blue',
    github: 'https://github.com',
  },
]

// Couleurs des tags adaptées au thème
const tagColorMapDark = {
  React: 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30',
  'React Native': 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30',
  'Node.js': 'bg-green-400/20 text-green-300 border border-green-400/30',
  Express: 'bg-gray-400/20 text-gray-300 border border-gray-400/30',
  JSP: 'bg-orange-400/20 text-orange-300 border border-orange-400/30',
  MySQL: 'bg-blue-400/20 text-blue-300 border border-blue-400/30',
  PostgreSQL: 'bg-blue-400/20 text-blue-300 border border-blue-400/30',
  PHP: 'bg-indigo-400/20 text-indigo-300 border border-indigo-400/30',
  Laravel: 'bg-rose-400/20 text-rose-300 border border-rose-400/30',
  Java: 'bg-amber-400/20 text-amber-300 border border-amber-400/30',
  'C#': 'bg-purple-400/20 text-purple-300 border border-purple-400/30',
  'UI/UX': 'bg-pink-400/20 text-pink-300 border border-pink-400/30',
  Figma: 'bg-purple-400/20 text-purple-300 border border-purple-400/30',
  Prototypage: 'bg-violet-400/20 text-violet-300 border border-violet-400/30',
  Android: 'bg-green-400/20 text-green-300 border border-green-400/30',
  '.NET': 'bg-purple-400/20 text-purple-300 border border-purple-400/30',
  'Swing/JavaFX': 'bg-amber-400/20 text-amber-300 border border-amber-400/30',
}

const tagColorMapLight = {
  React: 'bg-sky-400/20 text-sky-600 border border-sky-300',
  'React Native': 'bg-sky-400/20 text-sky-600 border border-sky-300',
  'Node.js': 'bg-green-400/20 text-green-600 border border-green-300',
  Express: 'bg-slate-300/40 text-slate-700 border border-slate-300',
  JSP: 'bg-orange-400/20 text-orange-600 border border-orange-300',
  MySQL: 'bg-blue-400/20 text-blue-600 border border-blue-300',
  PostgreSQL: 'bg-blue-400/20 text-blue-600 border border-blue-300',
  PHP: 'bg-indigo-400/20 text-indigo-600 border border-indigo-300',
  Laravel: 'bg-rose-400/20 text-rose-600 border border-rose-300',
  Java: 'bg-amber-400/20 text-amber-600 border border-amber-300',
  'C#': 'bg-purple-400/20 text-purple-600 border border-purple-300',
  'UI/UX': 'bg-pink-400/20 text-pink-600 border border-pink-300',
  Figma: 'bg-purple-400/20 text-purple-600 border border-purple-300',
  Prototypage: 'bg-violet-400/20 text-violet-600 border border-violet-300',
  Android: 'bg-green-400/20 text-green-600 border border-green-300',
  '.NET': 'bg-purple-400/20 text-purple-600 border border-purple-300',
  'Swing/JavaFX': 'bg-amber-400/20 text-amber-600 border border-amber-300',
}

const cardBorderMapDark = {
  cyan: 'card-border-glow',
  blue: 'card-border-glow',
  indigo: 'card-border-glow',
}

const cardBorderMapLight = {
  cyan: 'card-border-glow-light',
  blue: 'card-border-glow-light',
  indigo: 'card-border-glow-light',
}

const iconBgMapDark = {
  cyan: 'bg-gradient-to-br from-cyan-400/20 to-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-400/20',
  blue: 'bg-gradient-to-br from-blue-400/20 to-blue-400/10 text-blue-400 shadow-lg shadow-blue-400/20',
  indigo: 'bg-gradient-to-br from-indigo-400/20 to-indigo-400/10 text-indigo-400 shadow-lg shadow-indigo-400/20',
}

const iconBgMapLight = {
  cyan: 'bg-gradient-to-br from-sky-400/25 to-sky-400/15 text-sky-600 shadow-lg shadow-sky-400/15',
  blue: 'bg-gradient-to-br from-blue-400/25 to-blue-400/15 text-blue-600 shadow-lg shadow-blue-400/15',
  indigo: 'bg-gradient-to-br from-indigo-400/25 to-indigo-400/15 text-indigo-600 shadow-lg shadow-indigo-400/15',
}

// Carrousel d'images amélioré avec animation
function ProjectImageCarousel({ images, title, iconBg }) {
  const [index, setIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay || !images || images.length <= 1) return
    
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [autoPlay, images])

  if (!images || images.length === 0) {
    return (
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg} animate-float`}>
        <Code2 size={24} className="animate-pulse" />
      </div>
    )
  }

  const next = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAutoPlay(false)
    setIndex((i) => (i + 1) % images.length)
    setTimeout(() => setAutoPlay(true), 8000)
  }

  const prev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAutoPlay(false)
    setIndex((i) => (i - 1 + images.length) % images.length)
    setTimeout(() => setAutoPlay(true), 8000)
  }

  return (
    <div 
      className="relative w-full h-48 rounded-2xl overflow-hidden group/carousel bg-gradient-to-br from-slate-800 to-slate-900"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Couche brillante */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Image avec animation */}
      <img
        key={index}
        src={images[index]}
        alt={`${title} - image ${index + 1}`}
        className="w-full h-full object-cover animate-image-fade image-zoom-effect"
      />
      
      {/* Overlay graduel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />

      {images.length > 1 && (
        <>
          {/* Boutons navigation */}
          <button
            type="button"
            onClick={prev}
            aria-label="Image précédente"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            type="button"
            onClick={next}
            aria-label="Image suivante"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20"
          >
            <ChevronRight size={18} />
          </button>

          {/* Indicateurs */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setAutoPlay(false)
                  setIndex(i)
                  setTimeout(() => setAutoPlay(true), 8000)
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? 'w-3 h-3 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Indicateur de progression */}
          <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" style={{
            width: `${((index + 1) / images.length) * 100}%`,
            transition: 'width 0.3s ease-out'
          }} />
        </>
      )}
    </div>
  )
}

export default function Projects() {
  const { dark } = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const tagColorMap = dark ? tagColorMapDark : tagColorMapLight
  const cardBorderMap = dark ? cardBorderMapDark : cardBorderMapLight
  const iconBgMap = dark ? iconBgMapDark : iconBgMapLight

  return (
    <section 
      id="projets" 
      className={`py-32 relative transition-colors duration-500 overflow-hidden ${
        dark ? 'bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900' : 'bg-gradient-to-b from-slate-50 via-slate-50 to-blue-50'
      }`}
    >
      {/* Styles d'animation */}
      <style>{animationStyles}</style>

      {/* Éléments de fond animés */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl ${
          dark 
            ? 'bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent' 
            : 'bg-gradient-to-tr from-cyan-400/15 via-blue-400/10 to-transparent'
        } animate-float`} />
        
        <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl ${
          dark 
            ? 'bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent' 
            : 'bg-gradient-to-bl from-indigo-400/15 via-purple-400/10 to-transparent'
        } animate-float`} style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className={`h-1 w-8 rounded-full ${
              dark 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                : 'bg-gradient-to-r from-sky-400 to-blue-500'
            }`} />
            <span className={`text-sm font-bold uppercase tracking-widest ${
              dark ? 'text-cyan-400' : 'text-sky-500'
            }`}>Portfolio</span>
            <div className={`h-1 w-8 rounded-full ${
              dark 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400' 
                : 'bg-gradient-to-r from-blue-500 to-sky-400'
            }`} />
          </div>

          <h2 className={`text-5xl lg:text-6xl font-black mt-4 mb-6 bg-clip-text ${
            dark
              ? 'text-transparent bg-gradient-to-r from-cyan-400 via-white to-blue-500'
              : 'text-transparent bg-gradient-to-r from-sky-600 via-slate-900 to-indigo-600'
          }`}>Mes Projets</h2>

          <div className={`h-1 w-24 rounded-full mx-auto mb-6 ${
            dark
              ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600'
              : 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500'
          }`} />

          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
            dark ? 'text-gray-400' : 'text-slate-600'
          }`}>
            Découvrez ma collection de projets innovants. Chacun représente une étape de mon évolution en tant que développeur, alliant créativité et excellence technique.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`animate-slide-in project-card group rounded-3xl p-8 flex flex-col gap-6 border transition-all duration-500 backdrop-blur-sm ${
                dark
                  ? `bg-white/[0.03] border-white/10 hover:bg-white/[0.06] ${cardBorderMap[project.color]} ${hoveredIndex === i ? 'card-border-glow glow-active' : ''}`
                  : `bg-white/40 border-slate-300/50 hover:bg-white/60 ${cardBorderMap[project.color]} ${hoveredIndex === i ? 'card-border-glow-light glow-active' : ''}`
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Brillance supérieure */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <div className="absolute -inset-full bg-gradient-to-br from-white/20 via-transparent to-transparent blur-xl shimmer-overlay" />
              </div>

              {/* Image carrousel */}
              <div className="relative z-10">
                <ProjectImageCarousel
                  images={project.images}
                  title={project.title}
                  iconBg={iconBgMap[project.color]}
                />
              </div>

              {/* Contenu du projet */}
              <div className="flex flex-col gap-4 relative z-10">
                <div>
                  <h3 className={`font-bold text-xl mb-3 transition-colors duration-300 ${
                    dark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    dark ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {project.desc}
                  </p>
                </div>

                {/* Tags avec style amélioré */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                        tagColorMap[tag] || (dark 
                          ? 'bg-white/5 text-gray-400 border border-white/10' 
                          : 'bg-slate-200 text-slate-600 border border-slate-300'
                        )
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px ${
                dark ? 'bg-gradient-to-r from-white/0 via-white/20 to-white/0' : 'bg-gradient-to-r from-slate-200/0 via-slate-300 to-slate-200/0'
              }`} />

              {/* Boutons d'action */}
              <div className={`flex items-center gap-4 relative z-10 ${
                dark ? 'text-gray-400' : 'text-slate-600'
              }`}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-3 ${
                    dark
                      ? 'text-gray-400 hover:text-cyan-400'
                      : 'text-slate-600 hover:text-sky-500'
                  }`}
                >
                  <Github size={16} className="transition-transform group-hover:scale-110" />
                  <span>Code</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-3 ml-auto ${
                      dark
                        ? 'text-gray-400 hover:text-cyan-400'
                        : 'text-slate-600 hover:text-sky-500'
                    }`}
                  >
                    <ExternalLink size={16} className="transition-transform group-hover:scale-110" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bouton CTA */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/Santatra-mario"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 active:scale-95 border ${
              dark
                ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-400/30 text-cyan-300 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20'
                : 'bg-gradient-to-r from-sky-400/10 to-blue-400/10 border-sky-300/50 text-sky-600 hover:from-sky-400/20 hover:to-blue-400/20 hover:border-sky-400/70 hover:shadow-lg hover:shadow-sky-400/20'
            }`}
          >
            <Github size={20} className="transition-transform group-hover:rotate-12" />
            <span>Explorer tous mes projets sur GitHub</span>
            <Sparkles size={18} className="animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  )
}