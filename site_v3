
import React, { useState } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, ChevronRight, Code2, Database, Network, Monitor, Award, Briefcase, FileText } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Palette de couleurs
  const colors = {
    background: '#0a0a0a',
    text: {
      primary: '#e0e0e0',
      secondary: '#95a5a6',
    },
    primary: '#1abc9c',
    secondary: '#16a085',
    accent: '#27ae60',
  };

  // Données des projets
  const projects = [
    {
      id: 1,
      title: 'EasyVM',
      shortDesc: 'Automatisation Infrastructure Cloud',
      description: 'Plateforme complète d\'automatisation pour la gestion des machines virtuelles sur Azure avec Ansible. Solution complète pour le provisioning, la configuration et le monitoring.',
      technologies: ['Ansible', 'Azure', 'Python', 'Terraform', 'Docker'],
      objectives: [
        'Automatiser le déploiement des VM Azure',
        'Réduire le temps de provisioning de 80%',
        'Standardiser les configurations infrastructure',
        'Intégrer le monitoring et les alertes'
      ],
      results: [
        'Déploiement de VM en moins de 5 minutes',
        'Réduction du temps d\'administration de 70%',
        'Zéro erreur de configuration manuelle',
        'Économies d\'infrastructure estimées à 40%'
      ],
      image: 'https://placehold.co/600x400?text=EasyVM+Project',
      startDate: 'Janvier 2023',
      endDate: 'Décembre 2023'
    },
    {
      id: 2,
      title: 'DIV - VLAN Automation',
      shortDesc: 'Automatisation Gestion VLAN Cisco',
      description: 'Système intelligent de gestion et d\'automatisation des VLAN sur les switchs Cisco. Permet une création, modification et suppression des VLAN en quelques clics.',
      technologies: ['Python', 'Netmiko', 'Cisco IOS', 'REST API', 'Flask'],
      objectives: [
        'Automatiser la gestion des VLAN',
        'Créer une API REST pour les équipes réseau',
        'Centraliser la configuration réseau',
        'Implémenter un système de logging et audit'
      ],
      results: [
        'Gestion de 500+ VLAN automatisée',
        'API utilisée par 15+ administrateurs réseau',
        'Temps de création VLAN: 30 secondes (vs 20 minutes)',
        'Audit trail complet de toutes les modifications'
      ],
      image: 'https://placehold.co/600x400?text=DIV+Project',
      startDate: 'Mars 2023',
      endDate: 'Août 2023'
    },
    {
      id: 3,
      title: 'Monitoring Infrastructure',
      shortDesc: 'Solution Monitoring Multi-Couches',
      description: 'Mise en place d\'une solution de monitoring et d\'observabilité pour l\'ensemble de l\'infrastructure. Centralisation des logs, métriques et traces.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Docker', 'Linux'],
      objectives: [
        'Monitorer l\'ensemble de l\'infrastructure',
        'Détecter les anomalies en temps réel',
        'Créer des dashboards de visualisation',
        'Mettre en place des alertes intelligentes'
      ],
      results: [
        'Détection des incidents réduite à 2 minutes',
        '99.99% de disponibilité maintenue',
        '150+ dashboards créés',
        'Réduction du MTTR de 65%'
      ],
      image: 'https://placehold.co/600x400?text=Monitoring+Project',
      startDate: 'Septembre 2023',
      endDate: 'Novembre 2023'
    }
  ];

  // Données des compétences
  const skills = {
    reseau: [
      { name: 'Cisco IOS/IOS-XE', level: 95 },
      { name: 'Switching & VLAN', level: 90 },
      { name: 'Routing (OSPF, BGP)', level: 85 },
      { name: 'MPLS & QoS', level: 80 },
      { name: 'Netmiko', level: 88 },
      { name: 'Network Automation', level: 90 }
    ],
    systemes: [
      { name: 'Linux (Debian/RHEL)', level: 95 },
      { name: 'Windows Server', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Ansible', level: 92 },
      { name: 'Terraform', level: 85 }
    ],
    webBdd: [
      { name: 'Python', level: 92 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'REST APIs', level: 85 },
      { name: 'Flask/Django', level: 80 },
      { name: 'SQL', level: 90 },
      { name: 'MongoDB', level: 75 }
    ]
  };

  // Données expérience
  const experience = [
    {
      title: 'Ingénieur Infrastructure & Systèmes',
      company: 'TechCorp Solutions',
      period: '2022 - Présent',
      description: 'Gestion complète de l\'infrastructure cloud, automatisation des déploiements et monitoring.'
    },
    {
      title: 'Administrateur Réseau Senior',
      company: 'Digital Services Inc',
      period: '2020 - 2022',
      description: 'Administration et maintenance des infrastructures réseau d\'entreprise, support des équipes.'
    },
    {
      title: 'Technicien Réseau',
      company: 'Network Pro',
      period: '2018 - 2020',
      description: 'Support technique, configuration des équipements réseau et troubleshooting.'
    }
  ];

  // Données formations
  const formations = [
    {
      title: 'Master Informatique - Réseaux et Systèmes',
      school: 'Université Technologique',
      year: '2018',
      grade: 'Mention Bien'
    },
    {
      title: 'Cisco CCNA',
      school: 'Cisco Certification',
      year: '2019',
      grade: 'Certified'
    },
    {
      title: 'Ansible Automation Specialist',
      school: 'Red Hat',
      year: '2021',
      grade: 'Certified'
    }
  ];

  // Données veille technologique
  const articles = [
    {
      title: 'Kubernetes 1.28: Nouvelles fonctionnalités',
      date: '15 Novembre 2024',
      category: 'Cloud Native',
      link: '#'
    },
    {
      title: 'Tendances Cybersécurité 2025',
      date: '10 Novembre 2024',
      category: 'Sécurité',
      link: '#'
    },
    {
      title: 'Python pour l\'Automatisation Réseau',
      date: '05 Novembre 2024',
      category: 'Automatisation',
      link: '#'
    },
    {
      title: 'Infrastructure as Code: Best Practices',
      date: '01 Novembre 2024',
      category: 'DevOps',
      link: '#'
    }
  ];

  // Composant SkillBar
  function SkillBar({ name, level }) {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-sm" style={{ color: colors.text.primary }}>
            {name}
          </span>
          <span className="font-mono text-xs" style={{ color: colors.primary }}>
            {level}%
          </span>
        </div>
        <div 
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${level}%`,
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`
            }}
          />
        </div>
      </div>
    );
  }

  // Composant Hero
  function HeroSection() {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Yohan DIBY - Ingénieur Infrastructure & Systèmes';

    React.useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div 
        className="min-h-screen flex items-center justify-center px-4 py-20"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-4xl w-full">
          <div 
            className="p-8 rounded-lg font-mono border"
            style={{ 
              borderColor: colors.primary,
              backgroundColor: '#0f0f0f',
              boxShadow: `0 0 20px ${colors.primary}40`
            }}
          >
            <div className="space-y-6">
              <div style={{ color: colors.primary }}>
                <span>~ $ whoami</span>
              </div>
              
              <h1 
                className="text-4xl md:text-6xl font-bold font-mono"
                style={{ color: colors.primary }}
              >
                {displayedText}
                <span className="animate-pulse">_</span>
              </h1>

              <div style={{ color: colors.text.secondary }} className="text-lg md:text-xl">
                <p className="mb-4">
                  🔧 Automatisation Infrastructure | Cloud & Réseaux | DevOps
                </p>
                <p>
                  Spécialisé dans l'automatisation des infrastructures cloud, la gestion des réseaux d'entreprise et la mise en place de solutions DevOps scalables.
                </p>
              </div>

              <div className="flex gap-4 flex-wrap pt-4">
                <button
                  onClick={() => {
                    setCurrentPage('projets');
                    setMenuOpen(false);
                  }}
                  className="px-8 py-3 rounded-lg font-mono font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ 
                    backgroundColor: colors.primary,
                    color: colors.background
                  }}
                >
                  Voir Projets
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    setMenuOpen(false);
                  }}
                  className="px-8 py-3 rounded-lg font-mono font-semibold border-2 transition-all duration-300 hover:bg-opacity-10"
                  style={{ 
                    borderColor: colors.primary,
                    color: colors.primary
                  }}
                >
                  Me Contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Composant Compétences
  function SkillsSection() {
    return (
      <div 
        className="min-h-screen px-4 py-20"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold font-mono mb-16 text-center"
            style={{ color: colors.primary }}
          >
            Compétences
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Réseaux */}
            <div 
              className="p-8 rounded-lg border"
              style={{ 
                borderColor: colors.primary,
                backgroundColor: '#0f0f0f',
                borderLeft: `4px solid ${colors.primary}`
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Network size={28} style={{ color: colors.primary }} />
                <h3 className="text-xl font-bold font-mono" style={{ color: colors.primary }}>
                  Réseaux
                </h3>
              </div>
              <div>
                {skills.reseau.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Systèmes */}
            <div 
              className="p-8 rounded-lg border"
              style={{ 
                borderColor: colors.accent,
                backgroundColor: '#0f0f0f',
                borderLeft: `4px solid ${colors.accent}`
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Monitor size={28} style={{ color: colors.accent }} />
                <h3 className="text-xl font-bold font-mono" style={{ color: colors.accent }}>
                  Systèmes
                </h3>
              </div>
              <div>
                {skills.systemes.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Web & BDD */}
            <div 
              className="p-8 rounded-lg border"
              style={{ 
                borderColor: colors.secondary,
                backgroundColor: '#0f0f0f',
                borderLeft: `4px solid ${colors.secondary}`
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Database size={28} style={{ color: colors.secondary }} />
                <h3 className="text-xl font-bold font-mono" style={{ color: colors.secondary }}>
                  Web & BDD
                </h3>
              </div>
              <div>
                {skills.webBdd.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Composant Projets
  function ProjectsSection() {
    return (
      <div 
        className="min-h-screen px-4 py-20"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold font-mono mb-16 text-center"
            style={{ color: colors.primary }}
          >
            Projets
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project.id);
                  setCurrentPage('project-detail');
                }}
                className="group p-6 rounded-lg border cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{ 
                  borderColor: colors.primary,
                  backgroundColor: '#0f0f0f',
                  borderTop: `3px solid ${colors.primary}`
                }}
              >
                <h3 className="text-xl font-bold font-mono mb-3" style={{ color: colors.primary }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: colors.text.secondary }}>
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{
                        backgroundColor: colors.primary + '20',
                        color: colors.primary
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div 
                  className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2"
                  style={{ color: colors.primary }}
                >
                  <span className="text-sm font-mono">Voir détails</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Composant Détail Projet
  function ProjectDetailPage() {
    const project = projects.find(p => p.id === selectedProject);
    if (!project) return null;

    return (
      <div 
        className="min-h-screen px-4 py-20"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentPage('projets')}
            className="mb-8 px-6 py-2 rounded-lg font-mono border transition-all duration-300 hover:bg-opacity-10"
            style={{ 
              borderColor: colors.primary,
              color: colors.primary
            }}
          >
            ← Retour aux projets
          </button>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold font-mono mb-4" style={{ color: colors.primary }}>
                {project.title}
              </h1>
              <p className="text-lg" style={{ color: colors.text.secondary }}>
                {project.startDate} - {project.endDate}
              </p>
            </div>

            <div 
              className="rounded-lg overflow-hidden border"
              style={{ borderColor: colors.primary }}
            >
              <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
            </div>

            <div style={{ color: colors.text.primary }} className="text-lg leading-relaxed">
              <p>{project.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-mono mb-4" style={{ color: colors.primary }}>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full font-mono text-sm"
                    style={{
                      backgroundColor: colors.primary + '20',
                      color: colors.primary,
                      border: `1px solid ${colors.primary}`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold font-mono mb-4" style={{ color: colors.accent }}>
                  Objectifs
                </h3>
                <ul className="space-y-3">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="flex gap-3" style={{ color: colors.text.primary }}>
                      <span style={{ color: colors.accent }}>✓</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-mono mb-4" style={{ color: colors.accent }}>
                  Résultats
                </h3>
                <ul className="space-y-3">
                  {project.results.map((res, idx) => (
                    <li key={idx} className="flex gap-3" style={{ color: colors.text.primary }}>
                      <span style={{ color: colors.accent }}>→</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Composant Expérience
  function ExperienceSection() {
    return (
      <div 
        className="min-h-screen px-4 py-20"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold font-mono mb-16 text-center"
            style={{ color: colors.primary }}
          >
            Expérience
          </h2>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg border-l-4 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: colors.primary,
                  backgroundColor: '#0f0f0f',
                  borderLeft: `4px solid ${colors.primary}`
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold font-mono" style={{ color: colors.primary }}>
                      {exp.title}
                    </h3>
                    <p className="font-mono" style={{ color: colors.accent }}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-sm" style={{ color: colors.text.secondary }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ color: colors.text.primary }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Composant Formations
  function EducationSection() {
    return (
      <div 
        className="min-h-screen px-4 py-20"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold font-mono mb-16 text-center"
            style={{ color: colors.primary }}
          >
            Formations
          </h2>

          <div className="space-y-6">
            {formations.map((formation, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: colors.secondary,
                  backgroundColor: '#0f0f0f',
                  borderLeft: `4px solid ${colors.secondary}`
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold font-mono" style={{ color: colors.secondary }}>
                      {formation.title}
                    </h3>
                    <p className="font-mono" style={{ color: colors.text.secondary }}>
                      {formation.school}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm" style={{ color: colors.text.secondary }}>
                      {formation.year}
                    </p>
                    <p className="font-mono text-sm" style={{ color: colors.secondary }}>
                      {formation.grade}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Composant Veille Technologique
  function TechWatchSection() {
    return (
      <div 
        className="min-h-screen px-4 py-20"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold font-mono mb-16 text-center"
            style={{ color: colors.primary }}
          >
            Veille Technologique
          </h2>

          <div className="space-y-4">
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                className="group p-6 rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-x-1 block"
                style={{
                  borderColor: colors.secondary,
                  backgroundColor: '#0f0f0f'
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          backgroundColor: colors.secondary + '20',
                          color: colors.secondary
                        }}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs font-mono" style={{ color: colors.text.secondary }}>
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-mono" style={{ color: colors.text.primary }}>
                      {article.title}
                    </h3>
                  </div>
                  <ExternalLink 
                    size={20} 
                    className="transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: colors.primary }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Composant Contact
  function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    };

    return (
      <div 
        className="min-h-screen px-4 py-20"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold font-mono mb-8 text-center"
            style={{ color: colors.primary }}
          >
            Me Contacter
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div 
              className="p-8 rounded-lg border text-center"
              style={{ 
                borderColor: colors.primary,
                backgroundColor: '#0f0f0f'
              }}
            >
              <Mail size={32} className="mx-auto mb-4" style={{ color: colors.primary }} />
              <h3 className="font-mono font-bold mb-2" style={{ color: colors.primary }}>
                Email
              </h3>
              <p style={{ color: colors.text.primary }}>yohan.diby@email.com</p>
            </div>

            <div 
              className="p-8 rounded-lg border text-center"
              style={{ 
                borderColor: colors.secondary,
                backgroundColor: '#0f0f0f'
              }}
            >
              <Linkedin size={32} className="mx-auto mb-4" style={{ color: colors.secondary }} />
              <h3 className="font-mono font-bold mb-2" style={{ color: colors.secondary }}>
                LinkedIn
              </h3>
              <p style={{ color: colors.text.primary }}>linkedin.com/in/yohandiby</p>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="p-8 rounded-lg border"
            style={{ 
              borderColor: colors.primary,
              backgroundColor: '#0f0f0f'
            }}
          >
            <div className="mb-6">
              <label className="block font-mono mb-2" style={{ color: colors.primary }}>
                Nom
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-opacity-50 border font-mono"
                style={{
                  backgroundColor: '#0a0a0a',
                  borderColor: colors.primary,
                  color: colors.text.primary
                }}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-mono mb-2" style={{ color: colors.primary }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-opacity-50 border font-mono"
                style={{
                  backgroundColor: '#0a0a0a',
                  borderColor: colors.primary,
                  color: colors.text.primary
                }}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-mono mb-2" style={{ color: colors.primary }}>
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-opacity-50 border font-mono"
                style={{
                  backgroundColor: '#0a0a0a',
                  borderColor: colors.primary,
                  color: colors.text.primary,
                  minHeight: '150px'
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg font-mono font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                backgroundColor: submitted ? colors.accent : colors.primary,
                color: colors.background
              }}
            >
              {submitted ? '✓ Message envoyé!' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Composant Navigation
  function Navigation() {
    const navItems = [
      { label: 'Accueil', page: 'home', icon: '~' },
      { label: 'Compétences', page: 'competences', icon: '◆' },
      { label: 'Projets', page: 'projets', icon: '▸' },
      { label: 'Expérience', page: 'experience', icon: '◇' },
      { label: 'Formations', page: 'formations', icon: '★' },
      { label: 'Veille Tech', page: 'veille', icon: '◈' },
      { label: 'Contact', page: 'contact', icon: '◉' }
    ];

    return (
      <nav 
        className="fixed top-0 w-full z-50 border-b backdrop-blur-sm bg-opacity-90"
        style={{ 
          borderColor: colors.primary,
          backgroundColor: colors.background + 'E6'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 
              className="font-mono font-bold text-lg cursor-pointer transition-all duration-300 hover:text-opacity-70"
              onClick={() => {
                setCurrentPage('home');
                setMenuOpen(false);
              }}
              style={{ color: colors.primary }}
            >
              {'<'}YD{'/>'} 
            </h1>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8">
              {navItems.map(item => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMenuOpen(false);
                  }}
                  className="font-mono text-sm transition-all duration-300"
                  style={{
                    color: currentPage === item.page ? colors.primary : colors.text.secondary,
                    textDecoration: currentPage === item.page ? 'underline' : 'none'
                  }}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2"
              style={{ color: colors.primary }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div 
              className="lg:hidden pb-4 border-t space-y-2"
              style={{ borderColor: colors.primary }}
            >
              {navItems.map(item => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 font-mono text-sm rounded transition-all duration-300"
                  style={{
                    color: colors.text.primary,
                    backgroundColor: currentPage === item.page ? colors.primary + '20' : 'transparent'
                  }}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    );
  }

  // Rendu principal
  return (
    <div style={{ backgroundColor: colors.background }}>
      <Navigation />
      <div style={{ paddingTop: '4rem' }}>
        {currentPage === 'home' && <HeroSection />}
        {currentPage === 'competences' && <SkillsSection />}
        {currentPage === 'projets' && <ProjectsSection />}
        {currentPage === 'project-detail' && <ProjectDetailPage />}
        {currentPage === 'experience' && <ExperienceSection />}
        {currentPage === 'formations' && <EducationSection />}
        {currentPage === 'veille' && <TechWatchSection />}
        {currentPage === 'contact' && <ContactSection />}
      </div>
    </div>
  );
}

