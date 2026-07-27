import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Contact() {
  const { dark } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className={`py-24 relative transition-colors duration-500 ${
      dark ? 'bg-gray-950' : 'bg-slate-50'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[100px] ${
          dark ? 'bg-cyan-500/5' : 'bg-cyan-400/10'
        }`} />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <span className={`text-sm font-semibold uppercase tracking-widest ${
            dark ? 'text-cyan-400' : 'text-sky-500'
          }`}>Contact</span>
          <h2 className={`text-4xl lg:text-5xl font-black mt-2 ${
            dark ? 'text-white' : 'text-slate-900'
          }`}>Travaillons ensemble</h2>
          <div className={`w-16 h-1 rounded-full mx-auto mt-4 ${
            dark
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
              : 'bg-gradient-to-r from-sky-400 to-indigo-500'
          }`} />
          <p className={`mt-4 max-w-lg mx-auto ${
            dark ? 'text-gray-400' : 'text-slate-600'
          }`}>
            Un projet en tête ? Une question ? N'hésitez pas à me contacter, je réponds sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Colonne gauche */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Coordonnées */}
            <div className={`rounded-3xl p-6 space-y-5 border ${
              dark
                ? 'bg-gray-950/60 border-white/5'
                : 'bg-white border-slate-200'
            }`}>
              <h3 className={`font-bold text-lg ${
                dark ? 'text-white' : 'text-slate-900'
              }`}>Mes coordonnées</h3>
              {[
                { icon: Mail, label: 'Email', value: 'santatramario17@gmail.com', href: 'mailto:santatramario17@gmail.com' },
                { icon: Phone, label: 'Téléphone', value: '+261 33 18 089 85 / 038 75 465 13', href: 'tel:+261331808985' },
                { icon: MapPin, label: 'Localisation', value: 'Tanambao, Fianarantsoa', href: 'https://maps.google.com/?q=Tanambao,Fianarantsoa' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0 border ${
                    dark
                      ? 'bg-cyan-400/10 border-cyan-400/20'
                      : 'bg-sky-400/15 border-sky-400/30 text-sky-600'
                  }`}>
                    <item.icon size={17} />
                  </div>
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-0.5 ${
                      dark ? 'text-gray-500' : 'text-slate-500'
                    }`}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.label === 'Localisation' ? '_blank' : undefined} rel="noreferrer" className={`text-sm hover:transition-colors ${
                        dark
                          ? 'text-gray-300 hover:text-white'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}>{item.value}</a>
                    ) : (
                      <p className={`text-sm ${
                        dark ? 'text-gray-300' : 'text-slate-700'
                      }`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className={`rounded-3xl p-6 border ${
              dark
                ? 'bg-gray-950/60 border-white/5'
                : 'bg-white border-slate-200'
            }`}>
              <h3 className={`font-bold text-lg mb-4 ${
                dark ? 'text-white' : 'text-slate-900'
              }`}>Réseaux sociaux</h3>
              <div className="flex gap-3">
                <a href="https://github.com/Santatra-mario" target="_blank" rel="noreferrer"
                  className={`flex items-center gap-2 flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                    dark
                      ? 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}>
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/mario-jonsthone" target="_blank" rel="noreferrer"
                  className={`flex items-center gap-2 flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                    dark
                      ? 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}>
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Map moderne */}
            <div className={`rounded-3xl overflow-hidden border ${
              dark
                ? 'bg-gray-950/60 border-white/5'
                : 'bg-white border-slate-200'
            }`}>
              <div className={`px-6 py-4 flex items-center justify-between ${
                dark ? 'border-b border-white/5' : 'border-b border-slate-200'
              }`}>
                <div>
                  <h3 className={`font-bold text-lg ${
                    dark ? 'text-white' : 'text-slate-900'
                  }`}>Ma localisation</h3>
                  <p className={`text-xs mt-0.5 flex items-center gap-1 ${
                    dark ? 'text-cyan-400' : 'text-sky-500'
                  }`}>
                    <MapPin size={11} /> Tanambao → ENI Fianarantsoa
                  </p>
                </div>
                
                <a 
                  href="https://maps.google.com/?q=Tanambao,Fianarantsoa"
                  target="_blank"
                  rel="noreferrer"
                  className={`text-xs rounded-lg px-3 py-1.5 transition-all flex items-center gap-1 border ${
                    dark
                      ? 'text-cyan-400 border-cyan-400/20 hover:text-cyan-300 hover:bg-cyan-400/10'
                      : 'text-sky-600 border-sky-400/30 hover:text-sky-500 hover:bg-sky-400/10'
                  }`}
                >
                  Ouvrir <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="relative">
                <iframe
                  title="Tanambao vers ENI Fianarantsoa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.17462002325!2d47.0910103!3d-21.4422204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7be3ca4e8df7f%3A0x67393d2cb0c870bc!2sEcole%20Nationale%20d&#39;Informatique!5e0!3m2!1sfr!2smg!4v1710000000000!5m2!1sfr!2smg"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={`w-full transition-all duration-700 ${dark ? 'grayscale hover:grayscale-0' : 'grayscale-0'}`}
                />
                {/* Overlay badge */}
                <div className={`absolute bottom-3 left-3 backdrop-blur-sm border rounded-xl px-3 py-2 flex items-center gap-2 ${
                  dark
                    ? 'bg-gray-950/90 border-white/10'
                    : 'bg-white/90 border-slate-200'
                }`}>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    dark ? 'bg-cyan-400' : 'bg-sky-500'
                  }`} />
                  <span className={`text-xs font-medium ${
                    dark ? 'text-white' : 'text-slate-900'
                  }`}>ENI — Fianarantsoa</span>
                </div>
              </div>
            </div>

          </div>

          {/* Colonne droite — Formulaire */}
          <div className="lg:col-span-3">
            <div className={`rounded-3xl p-8 h-full border ${
              dark
                ? 'bg-gray-950/60 border-white/5'
                : 'bg-white border-slate-200'
            }`}>
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-20">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border ${
                    dark
                      ? 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400'
                      : 'bg-sky-400/15 border-sky-400/30 text-sky-600'
                  }`}>
                    <Send size={28} />
                  </div>
                  <h3 className={`font-bold text-xl mb-2 ${
                    dark ? 'text-white' : 'text-slate-900'
                  }`}>Message envoyé !</h3>
                  <p className={dark ? 'text-gray-400' : 'text-slate-600'}>Merci ! Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <h3 className={`font-bold text-lg mb-6 ${
                    dark ? 'text-white' : 'text-slate-900'
                  }`}>Envoyer un message</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                          dark ? 'text-gray-400' : 'text-slate-600'
                        }`}>Nom</label>
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange} required
                          placeholder="Votre nom"
                          className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all border ${
                            dark
                              ? 'bg-white/5 border-white/5 text-white placeholder-gray-600 focus:border-cyan-400/50 focus:bg-white/8'
                              : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-400/50 focus:bg-white'
                          }`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                          dark ? 'text-gray-400' : 'text-slate-600'
                        }`}>Email</label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange} required
                          placeholder="votre@email.com"
                          className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all border ${
                            dark
                              ? 'bg-white/5 border-white/5 text-white placeholder-gray-600 focus:border-cyan-400/50 focus:bg-white/8'
                              : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-400/50 focus:bg-white'
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        dark ? 'text-gray-400' : 'text-slate-600'
                      }`}>Sujet</label>
                      <input
                        type="text" name="subject" value={form.subject} onChange={handleChange} required
                        placeholder="Votre projet..."
                        className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all border ${
                          dark
                            ? 'bg-white/5 border-white/5 text-white placeholder-gray-600 focus:border-cyan-400/50 focus:bg-white/8'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-400/50 focus:bg-white'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        dark ? 'text-gray-400' : 'text-slate-600'
                      }`}>Message</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required rows={7}
                        placeholder="Décrivez votre projet ou votre besoin..."
                        className={`w-full h-full min-h-[160px] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all resize-none border ${
                          dark
                            ? 'bg-white/5 border-white/5 text-white placeholder-gray-600 focus:border-cyan-400/50 focus:bg-white/8'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-400/50 focus:bg-white'
                        }`}
                      />
                    </div>
                    <button
                      type="submit"
                      className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold shadow-lg transition-all duration-200 hover:scale-[1.02] ${
                        dark
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/25 hover:shadow-cyan-500/40'
                          : 'bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sky-500/25 hover:shadow-sky-500/40'
                      }`}
                    >
                      <Send size={17} /> Envoyer le message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
