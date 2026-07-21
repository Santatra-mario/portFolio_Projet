import { useState } from 'react'
// Importation des icônes Mail, MapPin, Phone, Send, Github, Linkedin ET ArrowUpRight
import { Mail, MapPin, Phone, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
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
    <section id="contact" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[100px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-2">Travaillons ensemble</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Un projet en tête ? Une question ? N'hésitez pas à me contacter, je réponds sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Colonne gauche */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Coordonnées */}
            <div className="bg-gray-950/60 border border-white/5 rounded-3xl p-6 space-y-5">
              <h3 className="text-white font-bold text-lg">Mes coordonnées</h3>
              {[
                { icon: Mail, label: 'Email', value: 'santatramario17@gmail.com', href: 'mailto:santatramario17@gmail.com' },
                { icon: Phone, label: 'Téléphone', value: '+261 33 18 089 85 / 038 75 465 13', href: 'tel:+261331808985' },
                // Remplacement du href null par l'URL de Google Maps pour la cohérence
                { icon: MapPin, label: 'Localisation', value: 'Tanambao, Fianarantsoa', href: 'https://maps.google.com/?q=Tanambao,Fianarantsoa' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <item.icon size={17} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.label === 'Localisation' ? '_blank' : undefined} rel="noreferrer" className="text-gray-300 text-sm hover:text-white transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-gray-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-gray-950/60 border border-white/5 rounded-3xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Réseaux sociaux</h3>
              <div className="flex gap-3">
                <a href="https://github.com/Santatra-mario" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/mario-jonsthone" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Map moderne */}
            <div className="bg-gray-950/60 border border-white/5 rounded-3xl overflow-hidden">
              <div className="px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">Ma localisation</h3>
                  <p className="text-cyan-400 text-xs mt-0.5 flex items-center gap-1">
                    <MapPin size={11} /> Tanambao → ENI Fianarantsoa
                  </p>
                </div>
                
                {/* Bouton Ouvrir avec l'icône de flèche Lucide */}
                <a 
                  href="https://maps.google.com/?q=Tanambao,Fianarantsoa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-400/20 rounded-lg px-3 py-1.5 transition-colors hover:bg-cyan-400/10 flex items-center gap-1"
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
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-3 left-3 bg-gray-950/90 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-white text-xs font-medium">ENI — Fianarantsoa</span>
                </div>
              </div>
            </div>

          </div>

          {/* Colonne droite — Formulaire */}
          <div className="lg:col-span-3">
            <div className="bg-gray-950/60 border border-white/5 rounded-3xl p-8 h-full">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
                    <Send size={28} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message envoyé !</h3>
                  <p className="text-gray-400">Merci ! Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <h3 className="text-white font-bold text-lg mb-6">Envoyer un message</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Nom</label>
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange} required
                          placeholder="Votre nom"
                          className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Email</label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange} required
                          placeholder="votre@email.com"
                          className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Sujet</label>
                      <input
                        type="text" name="subject" value={form.subject} onChange={handleChange} required
                        placeholder="Votre projet..."
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required rows={7}
                        placeholder="Décrivez votre projet ou votre besoin..."
                        className="w-full h-full min-h-[160px] bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-200"
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