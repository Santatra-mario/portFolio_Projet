import { useState, useEffect, useRef } from "react";
import profilePhoto from "../assets/hero.png";

function Icon({ d, size = 18, className = "", style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style}>
      <path d={d} />
    </svg>
  );
}

const IC = {
  mail:      "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
  phone:     "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
  location:  "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a3 3 0 100-6 3 3 0 000 6z",
  calendar:  "M3 9h18M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z M8 3v4 M16 3v4",
  briefcase: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2",
  code:      "M16 18l6-6-6-6 M8 6l-6 6 6 6",
  award:     "M12 15a7 7 0 100-14 7 7 0 000 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12",
  layers:    "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  download:  "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  user:      "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z",
  check:     "M20 6L9 17l-5-5",
  car:       "M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2 M7 17a2 2 0 100 4 2 2 0 000-4z M17 17a2 2 0 100 4 2 2 0 000-4z",
  star:      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  globe:     "M12 2a10 10 0 100 20A10 10 0 0012 2z M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
  smartphone:"M12 18h.01 M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z",
  monitor:   "M8 21h8 M12 17v4 M2 3h20a1 1 0 011 1v13a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z",
  trophy:    "M6 9H4.5a2.5 2.5 0 010-5H6 M18 9h1.5a2.5 2.5 0 000-5H18 M4 22h16 M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 19.07 6 20.33 6 22 M14 14.66V17c0 .55.47.98.97 1.21C16.15 19.07 18 20.33 18 22 M18 2H6v7a6 6 0 0012 0V2z",
};

function SkillBar({ name, level, color, delay = 0 }) {
  const [go, setGo] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setGo(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="mb-2.5">
      <div className="flex justify-between mb-1 text-xs font-semibold">
        <span className="text-gray-300">{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-gray-700 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: go ? `${level}%` : "0%", background: color, transitionDelay: `${delay}ms` }} />
      </div>
    </div>
  );
}

function SecTitle({ icon, label }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)" }}>
        <Icon d={IC[icon]} size={14} className="text-white" />
      </div>
      <h2 className="text-sm font-black uppercase tracking-widest text-white">{label}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
    </div>
  );
}

function TLine({ title, sub, period, items, accent }) {
  return (
    <div className="relative pl-5 mb-6 last:mb-0">
      <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full ring-2 ring-slate-800"
        style={{ background: accent }} />
      <div className="absolute left-[4px] top-5 bottom-0 w-px bg-gray-700/60" />
      <div className="flex flex-wrap items-center gap-2 mb-0.5">
        <p className="text-sm font-bold text-white">{title}</p>
        {period && (
          <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}>
            {period}
          </span>
        )}
      </div>
      {sub && <p className="text-xs font-semibold text-gray-400 mb-2">{sub}</p>}
      {items && (
        <ul className="space-y-1">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <Icon d={IC.check} size={11} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
              {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function BadgeGroup({ title, items, color }) {
  return (
    <div className="mb-4">
      <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color }}>{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: `${color}18`, color, border: `1px solid ${color}35` }}>
            <Icon d={IC.check} size={9} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CV() {
  return (
    <div className="py-16 px-4" style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-white">
            Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Vitæ</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">Stage ENI L3 — 2025-2026</p>
        </div>
      
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        style={{ animation: "cvFadeUp 0.6s ease both" }}>
        <div className="grid md:grid-cols-[270px_1fr]">

          {/* ── SIDEBAR ── */}
          <aside className="bg-slate-950 p-7 flex flex-col gap-6">

            {/* Avatar + identité */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 ring-4 ring-white/10"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1,#a855f7)" }}>
                <img src={profilePhoto} alt="LAHIMANITRARIVO Santatra Mario Jonsthone"
                  className="w-full h-full object-cover" />
              </div>
              <h1 className="text-base font-black text-white leading-tight">
                LAHIMANITRARIVO<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
                  Santatra Mario
                </span>
              </h1>
              <p className="text-xs text-gray-500 mt-0.5 tracking-widest">JONSTHONE</p>
              <div className="mt-3 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                style={{ background: "linear-gradient(90deg,#0ea5e9,#6366f1)" }}>
                Étudiant L3 Informatique · ENI
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-400 mb-3">Contact</p>
              {[
                { icon: "location", val: "0910 B 537 Mahafaly Vatofotsy" },
                { icon: "mail",     val: "santatramario17@gmail.com" },
                { icon: "phone",    val: "033 18 089 85 / 038 75 465 13" },
                { icon: "car",      val: "Permis A-B" },
              ].map((c) => (
                <div key={c.val} className="flex items-start gap-2 mb-2.5">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon d={IC[c.icon]} size={11} className="text-sky-400" />
                  </div>
                  <span className="text-xs text-gray-400 leading-relaxed">{c.val}</span>
                </div>
              ))}
            </div>

            {/* Langues */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-400 mb-3">Langues</p>
              {[
                { lang: "Malagasy", lvl: 100, label: "Maternelle" },
                { lang: "Français", lvl: 60,  label: "Moyen" },
                { lang: "Anglais",  lvl: 50,  label: "Moyen" },
              ].map((l) => (
                <div key={l.lang} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-semibold">{l.lang}</span>
                    <span className="text-sky-400">{l.label}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-700">
                    <div className="h-full rounded-full"
                      style={{ width: `${l.lvl}%`, background: "linear-gradient(90deg,#38bdf8,#818cf8)" }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Logiciels */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-400 mb-3">Logiciels</p>
              <div className="flex flex-wrap gap-2">
                {["VS Code","NetBeans","Visual Studio","GitHub","Android Studio"].map((s) => (
                  <span key={s}
                    className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Système d'exploitation */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-400 mb-3">Systèmes</p>
              <div className="flex gap-2">
                {["Windows","Linux"].map((s) => (
                  <span key={s}
                    className="text-xs px-3 py-1 rounded-full border font-semibold"
                    style={{ color: "#38bdf8", borderColor: "#38bdf830", background: "#38bdf810" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Intérêts */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-sky-400 mb-3">Sports &amp; Intérêts</p>
              <div className="flex flex-wrap gap-2">
                {["Football","Vélo","Natation"].map((i) => (
                  <span key={i}
                    className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* ── CONTENU PRINCIPAL ── */}
          <main className="bg-slate-900 p-7 flex flex-col gap-7">

            {/* Profil */}
            <section>
              <SecTitle icon="user" label="Profil" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Étudiant en 3ᵉ année d'Informatique à l'ENI Fianarantsoa, je suis motivé, curieux
                et prêt à m'investir pleinement dans un stage. Je suis à la recherche d'une opportunité
                pour découvrir le milieu professionnel, mettre en pratique mes connaissances académiques
                et enrichir mon expérience sur le terrain. Dynamique et volontaire, je suis déterminé
                à apprendre et à progresser au sein d'une équipe.
              </p>
            </section>

            {/* Formation */}
            <section>
              <SecTitle icon="award" label="Formation" />
              <TLine accent="#f59e0b"
                title="3ᵉ année de Licence en Informatique (En cours)"
                sub="ENI Fianarantsoa — École Nationale de l'Informatique"
                period="2025–2026" />
              <TLine accent="#f59e0b"
                title="2ᵉ année de Licence en Informatique"
                sub="ENI Fianarantsoa — École Nationale de l'Informatique"
                period="2024–2025" />
              <TLine accent="#f59e0b"
                title="1ère année de Licence en Informatique"
                sub="ENI Fianarantsoa"
                period="2023–2024" />
              <TLine accent="#10b981"
                title="Baccalauréat Série S — Mention Passable"
                sub="Lycée André Resampa — Antsirabe (LARA)"
                period="2022–2023" />
            </section>

            {/* Expériences */}
            <section>
              <SecTitle icon="briefcase" label="Expériences" />
              <TLine accent="#f472b6"
                title="Projets réalisés en troisième année"
                period="27/06/2026"
                items={[
                  "Application web SPA sans rechargement de page (Express, React)",
                  "Gestion de réservation des places d'une coopérative (JSP, MySQL)",
                  "Design UI/UX — projet IHM (interface homme-machine)",
                  "Application mobile (React Native, JAVA)",
                ]} />
              <TLine accent="#0ea5e9"
                title="Stage — Service Régional du Budget Vakinankaratra (Finance)"
                period="13/09/2025"
                items={[
                  "Découverte du fonctionnement de l'administration financière",
                  "Traitement des documents budgétaires",
                  "Saisie et vérification des données",
                  "Suivi des dépenses publiques",
                  "Participation au développement d'un système (CodeIgniter 4, MySQL)",
                ]} />
              <TLine accent="#6366f1"
                title="Projets réalisés en deuxième année"
                period="17/06/2025"
                items={[
                  "Gestion de vente de voiture (Java, MySQL)",
                  "Gestion de réservation colis (C#, MySQL)",
                  "Prêt bancaire sur React JS avec Laravel",
                  "Gestion d'électricité et eau JIRAMA (PHP, MySQL, Laravel)",
                ]} />
            </section>

            {/* Compétences techniques */}
            <section>
              <SecTitle icon="code" label="Compétences techniques" />
              <div className="grid sm:grid-cols-2 gap-x-8 mb-4">
                <div>
                  <p className="text-xs font-bold text-sky-400 uppercase tracking-wide mb-3">Web &amp; Backend</p>
                  <SkillBar name="PHP (Laravel, CodeIgniter 4)" level={85} color="#818cf8" delay={0}   />
                  <SkillBar name="JavaScript (React JS, Node.js, Express)" level={82} color="#0ea5e9" delay={100} />
                  <SkillBar name="Java (JSP)"                   level={72} color="#f59e0b" delay={200} />
                  <SkillBar name="MySQL / PostgreSQL"           level={78} color="#10b981" delay={300} />
                </div>
                <div>
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-3">Autres langages</p>
                  <SkillBar name="Python (Django, Flask)"       level={55} color="#84cc16" delay={0}   />
                  <SkillBar name="C#"                           level={65} color="#ec4899" delay={100} />
                  <SkillBar name="C (Algorithmique)"            level={65} color="#f97316" delay={200} />
                  <SkillBar name="Développement mobile JAVA"    level={75} color="#a855f7" delay={300} />
                </div>
              </div>

              {/* Badges par catégorie */}
              <BadgeGroup
                title="Frameworks &amp; Librairies"
                color="#818cf8"
                items={["Laravel","CodeIgniter 4","React JS","React Native","Node.js","Express","JSP"]} />
              <BadgeGroup
                title="Développement Mobile"
                color="#0ea5e9"
                items={["JAVA","APK Android","Android Studio","Intégration API"]} />
              <BadgeGroup
                title="Outils &amp; Environnement"
                color="#10b981"
                items={["Git","GitHub","VS Code","NetBeans","Visual Studio","Android Studio","Windows","Linux"]} />
            </section>

          </main>
        </div>
      </div>

      <style>{`
        @keyframes cvFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media print {
          nav, button { display: none !important; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
}
