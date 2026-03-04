import React from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Mail, Code2, Palette, Rocket, Zap } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Glow d'arrière-plan */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-6xl mx-auto p-8 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-white">
          Yohan<span className="text-indigo-500">.</span>D
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Projets</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        
        {/* Hero Section - Design Ultra-Arrondi */}
        <section className="relative group overflow-hidden bg-[#0F172A]/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-8 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} />
              <span>Disponible pour vos idées</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              Yohan <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">DIBY.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-xl">
              Je construis des interfaces <span className="text-white">organiques</span> et des expériences numériques qui respirent.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
                Démarrer un projet
              </button>
              <div className="flex space-x-4">
                <Github className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={24} />
                <Linkedin className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={24} />
              </div>
            </div>
          </div>

          {/* Élément visuel flottant */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
            <div className="w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3rem] rotate-12 flex items-center justify-center shadow-2xl animate-pulse">
              <Zap size={80} className="text-white -rotate-12" />
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Code2, title: "Développement", desc: "Applications React ultra-rapides et optimisées." },
            { icon: Palette, title: "Design UI", desc: "Interfaces douces avec des bordures fluides." },
            { icon: Rocket, title: "Déploiement", desc: "Mise en ligne sécurisée et performance maximale." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

      </main>

      <footer className="py-12 text-center text-slate-600 text-sm tracking-widest uppercase">
        © 2026 Yohan DIBY • Built with Elegance
      </footer>
    </div>
  );
};

export default App;