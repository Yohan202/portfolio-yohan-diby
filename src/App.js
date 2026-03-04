import React from 'react';
import { MousePointer2, Code2, Layout, Sparkles, Github, Linkedin, Mail, Zap } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-cyan-500/30">
      
      {/* Arrière-plan décoratif (Lumières diffuses) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-cyan-600/10 blur-[100px] rounded-full"></div>
      </div>

      <nav className="relative z-10 max-w-5xl mx-auto px-6 py-10 flex justify-between items-center">
        <div className="text-xl font-black tracking-widest bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          YOHAN DIBY
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Projets</a>
          <a href="#" className="hover:text-white transition-colors">Expertise</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-24">
        
        {/* Hero Section : Design "Glow" et Ultra-Arrondi */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-[3.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-[#0F172A]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8 text-center md:text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                  Digital Artisan
                </div>
                <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                  Build <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Beyond</span> Limits.
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Créateur d'interfaces immersives. Je transforme des concepts complexes en expériences utilisateur fluides et mémorables.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Let's Talk
                  </button>
                  <div className="flex items-center space-x-4 px-2">
                    <Github className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
                    <Linkedin className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>

              {/* Élément Visuel Abstrait */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-white/5 shadow-inner animate-pulse">
                <div className="w-48 h-48 bg-white/5 rounded-full backdrop-blur-3xl border border-white/10 flex items-center justify-center">
                   <Zap size={60} className="text-white animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grille de services "Soft Cards" */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "UI Design", icon: Layout, color: "text-purple-400" },
            { title: "Frontend", icon: Code2, color: "text-cyan-400" },
            { title: "Interaction", icon: MousePointer2, color: "text-rose-400" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/[0.08] transition-all group cursor-default">
              <item.icon className={`mb-6 ${item.color} group-hover:scale-110 transition-transform`} size={32} />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">Conception de haute précision adaptée à vos besoins spécifiques.</p>
            </div>
          ))}
        </section>

      </main>

      <footer className="text-center py-10 text-slate-600 text-xs tracking-widest uppercase">
        © 2026 Yohan Diby — Design for the future
      </footer>
    </div>
  );
};

export default App;