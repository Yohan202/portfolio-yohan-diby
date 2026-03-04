import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, MapPin, Briefcase, Code2, 
  GraduationCap, Terminal, Layers, ChevronRight, Globe, Linkedin, Github 
} from "lucide-react";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "EasyVM",
      description: "Automatisation du déploiement de machines virtuelles via une interface web intuitive. Orchestration complète du cycle de vie des instances.",
      tech: ["Ansible", "Docker", "Apache", "MariaDB", "PHP", "Azure"],
      icon: <Layers className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Projet DIV",
      description: "Système d'automatisation de la configuration des VLANs sur équipements réseau multi-constructeurs. Interface de monitoring dédiée.",
      tech: ["Ansible", "PHPMyAdmin", "Linux", "Cisco", "HPE"],
      icon: <Terminal className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Sécurisation Réseau",
      description: "Installation et configuration d'un Firewall PFSense incluant la gestion des accès VPN, le filtrage de contenu et la détection d'intrusions.",
      tech: ["PFSense", "OpenVPN", "Sécurité", "Réseau"],
      icon: <Briefcase className="w-6 h-6 text-orange-400" />
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* Background Animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl bg-black/20 shadow-2xl transition-all ${scrolled ? 'scale-95 opacity-90' : ''}`}>
          <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-xl">YD.</span>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Profil</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projets</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Compétences</a>
          </div>
          <a href="mailto:dibyyohan02@gmail.com" className="px-5 py-2 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Disponible pour de nouveaux défis
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Yohan <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">DIBY</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light mb-8">
          Technicien Systèmes et Réseaux passionné par l'automatisation et l'infrastructure Cloud.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300 mb-10">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <User size={16} className="text-cyan-400" /> 22 ans
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <MapPin size={16} className="text-cyan-400" /> Île-de-France
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <a href="mailto:dibyyohan02@gmail.com" className="flex-1 flex items-center justify-center gap-2 rounded-2xl h-12 bg-white text-black hover:bg-slate-200 transition-all font-semibold">
            <Mail size={18} /> Email
          </a>
          <a href="tel:0784733624" className="flex-1 flex items-center justify-center gap-2 rounded-2xl h-12 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-semibold">
            <Phone size={18} /> Téléphone
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold flex items-center gap-3 mb-12">
          <Briefcase className="text-cyan-400" /> Expérience Professionnelle
        </h2>
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-500/30 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Technicien IT Helpdesk</h3>
              <p className="text-cyan-400 font-medium text-lg">WEBEDIA — Levallois-Perret</p>
            </div>
            <span className="bg-white/10 text-slate-300 px-4 py-1 rounded-full text-sm">Juin 2022 - Juillet 2022</span>
          </div>
          <ul className="space-y-3">
            {["Gestion du matériel informatique", "Assistance auprès des utilisateurs", "Gestion des tickets (ITSM)", "Installation des postes de travail"].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                <ChevronRight size={16} className="mt-0.5 text-purple-400" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Code2 className="text-purple-400" /> Projets Majeurs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:border-cyan-500/50 transition-all group">
              <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold text-slate-300 tracking-wider">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-2xl mb-12">
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-8 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'skills' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >Compétences</button>
            <button 
              onClick={() => setActiveTab('edu')}
              className={`px-8 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'edu' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >Formations</button>
          </div>

          {activeTab === 'skills' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["CCNA 1 & 2", "VLAN / STP", "Python", "Bash", "MySQL", "Docker", "VMware ESXi", "Windows Server"].map((skill, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-medium">{skill}</div>
              ))}
            </div>
          ) : (
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <div className="pl-6 border-l-2 border-cyan-500">
                <h3 className="font-bold text-lg">Bachelor AIS (Option AIS)</h3>
                <p className="text-cyan-400 text-sm">ESIEA — 2023 à 2025</p>
                <p className="text-slate-500 text-xs">Titre RNCP Niveau 6</p>
              </div>
              <div className="pl-6 border-l-2 border-purple-500">
                <h3 className="font-bold text-lg">BTS SIO Option SISR</h3>
                <p className="text-purple-400 text-sm">INSERTEC — Depuis 2025</p>
              </div>
            </div>
          )}
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center mt-20">
        <p className="text-slate-500 text-sm mb-4">© 2026 Yohan DIBY — Technicien Systèmes et Réseaux</p>
        <div className="flex justify-center gap-6">
            <Globe className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
            <Linkedin className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors" size={20} />
            <Github className="text-slate-400 hover:text-white cursor-pointer transition-colors" size={20} />
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;