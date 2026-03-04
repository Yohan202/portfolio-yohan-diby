import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Code2, 
  GraduationCap, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Terminal, 
  Layers, 
  Cpu, 
  ChevronRight,
  Globe
} from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  Badge, 
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    }
  ];

  const skills = [
    { name: "CCNA 1&2", category: "Réseau" },
    { name: "VLAN / STP", category: "Réseau" },
    { name: "Python", category: "Dev" },
    { name: "Bash", category: "Dev" },
    { name: "MySQL", category: "Data" },
    { name: "Apache / Tomcat", category: "Web" }
  ];

  const knowledge = [
    "Windows Server", "Linux", "VMware ESXi", "Docker", "ITSM / Ticketing", "Gestion de Parc"
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-2xl`}>
        <div className={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl bg-black/20 shadow-2xl ${scrolled ? 'py-2 scale-95 opacity-90' : ''}`}>
          <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">YD.</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Profil</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projets</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Compétences</a>
          </div>
          <Button size="sm" className="rounded-full bg-cyan-600 hover:bg-cyan-500 text-white border-none">Contact</Button>
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
          <Button className="flex-1 rounded-2xl h-12 bg-white text-black hover:bg-slate-200 transition-all font-semibold shadow-lg shadow-white/5" onClick={() => window.location.href='mailto:contact@example.com'}>
            <Mail className="mr-2 h-4 w-4" /> Email
          </Button>
          <Button variant="outline" className="flex-1 rounded-2xl h-12 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-semibold" onClick={() => window.location.href='tel:+33000000000'}>
            <Phone className="mr-2 h-4 w-4" /> Téléphone
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Briefcase className="text-cyan-400" /> Expérience Professionnelle
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <Card className="relative bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Technicien IT Helpdesk</h3>
                  <p className="text-cyan-400 font-medium">WEBEDIA</p>
                </div>
                <Badge variant="secondary" className="bg-white/10 text-slate-300 border-none px-4 py-1">2023 - Présent</Badge>
              </div>
              <ul className="space-y-3">
                {[
                  "Gestion et maintenance du parc informatique multi-sites",
                  "Support utilisateur de niveau 1 et 2 via outil ITSM",
                  "Préparation, masterisation et déploiement des postes de travail",
                  "Gestion des stocks matériels et coordination des interventions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                    <ChevronRight size={16} className="mt-0.5 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <Code2 className="text-purple-400" /> Projets Majeurs
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-xl group hover:border-cyan-500/50 transition-all duration-500 rounded-3xl overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="outline" className="bg-white/5 border-white/10 text-[10px] tracking-wider uppercase font-bold text-slate-300">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills & Knowledge Section */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <Tabs defaultValue="skills" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl">
              <TabsTrigger value="skills" className="rounded-xl px-8 py-2 data-[state=active]:bg-cyan-600 data-[state=active]:text-white transition-all">
                Compétences Techniques
              </TabsTrigger>
              <TabsTrigger value="knowledge" className="rounded-xl px-8 py-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all">
                Connaissances
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="skills">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col gap-1 group">
                  <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">{skill.category}</span>
                  <span className="text-white font-medium group-hover:translate-x-1 transition-transform">{skill.name}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="knowledge">
            <div className="flex flex-wrap justify-center gap-3">
              {knowledge.map((item, idx) => (
                <Badge key={idx} className="bg-white/5 hover:bg-purple-500/20 text-slate-200 border border-white/10 px-6 py-3 rounded-2xl text-sm transition-all">
                  {item}
                </Badge>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 justify-center">
          <GraduationCap className="text-cyan-400" /> Formations
        </h2>
        <div className="space-y-6">
          <div className="flex gap-6 items-start relative pl-6 border-l border-white/10">
            <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <div>
              <h3 className="text-lg font-bold text-white">Bachelor Administrateur Infrastructures Sécurisées (AIS)</h3>
              <p className="text-cyan-400 text-sm font-medium">ESIEA - RNCP Niveau 6</p>
            </div>
          </div>
          <div className="flex gap-6 items-start relative pl-6 border-l border-white/10">
            <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-purple-500"></div>
            <div>
              <h3 className="text-lg font-bold text-white">BTS SIO Option SISR</h3>
              <p className="text-purple-400 text-sm font-medium">INSERTEC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-cyan-500/20 hover:text-cyan-400 transition-all border border-white/10">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-purple-500/20 hover:text-purple-400 transition-all border border-white/10">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-white/10">
            <Globe size={20} />
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Yohan DIBY — Conçu avec React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;