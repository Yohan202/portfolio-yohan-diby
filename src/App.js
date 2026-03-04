import React, { useState } from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Palette, Rocket } from "lucide-react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Thème de couleurs raffiné
  const theme = isDarkMode 
    ? { bg: "bg-[#0F172A]", card: "bg-[#1E293B]/80 border-[#334155]", text: "text-slate-200", sub: "text-slate-400" }
    : { bg: "bg-[#F8FAFC]", card: "bg-white/80 border-[#E2E8F0]", text: "text-slate-900", sub: "text-slate-500" };

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans ${theme.bg} ${theme.text}`}>
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto p-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">Yohan<span className="text-indigo-500">.</span>D</div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`px-4 py-2 rounded-full border transition-all ${theme.card} hover:scale-105 active:scale-95 shadow-sm`}
        >
          {isDarkMode ? 'Mode Clair' : 'Mode Sombre'}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Hero Section - Bordures très arrondies [2.5rem] */}
        <section className={`relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 border shadow-2xl ${theme.card}`}>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-6 text-sm font-semibold">
              <Sparkles size={14} />
              <span>Disponible pour de nouveaux projets</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Yohan DIBY
            </h1>
            <p className={`text-xl md:text-2xl mb-10 leading-relaxed ${theme.sub}`}>
              Je conçois des expériences numériques <span className="text-indigo-400">fluides</span> et <span className="text-indigo-400">élégantes</span>, loin de la rigidité des interfaces classiques.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold flex items-center transition-all hover:shadow-lg hover:shadow-indigo-500/30">
                Me contacter <ArrowRight className="ml-2" size={18} />
              </button>
              <div className="flex space-x-3">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <div key={i} className={`p-4 rounded-full border cursor-pointer transition-all hover:bg-indigo-500 hover:text-white ${theme.card}`}>
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Décoration d'arrière-plan */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full"></div>
        </section>

        {/* Expertise Section - Grille avec coins organiques */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Code2, title: "Développement", desc: "Code propre, performant et maintenable." },
            { icon: Palette, title: "Design UI/UX", desc: "Interfaces douces et centrées utilisateur." },
            { icon: Rocket, title: "Stratégie", desc: "Accompagnement de l'idée au déploiement." }
          ].map((skill, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-2 ${theme.card}`}>
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6">
                <skill.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className={theme.sub}>{skill.desc}</p>
            </div>
          ))}
        </section>

      </main>

      <footer className={`mt-24 py-12 border-t text-center ${theme.sub} border-slate-200 dark:border-slate-800`}>
        <p>© 2026 Yohan DIBY • Créé avec Visual Harmony</p>
      </footer>
    </div>
  );
};

export default App;