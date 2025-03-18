'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

// Définition des projets à mettre en avant
const projects = [
  {
    id: 'project1',
    title: 'E-commerce avec personnalisation',
    category: 'E-commerce',
    description: 'Plateforme e-commerce à haute performance avec une expérience d\'achat immersive et intuitive. Ainsi que la possibilité de personnalisation des produits.',
    image: '/images/projects/e-commerce.png',
    color: 'var(--rose-toulouse)'
  },
  {
    id: 'project2',
    title: 'Application Web de gestion d\'auto école',
    category: 'Web App',
    description: 'Application Web qui facilite la gestion des insciprtion, planning moniteur, examens, etc.',
    image: '/images/projects/auto-ecole.png',
    color: 'var(--violet)'
  },
  {
    id: 'project3',
    title: 'Site Vitrine Gagnant du Sites of the days',
    category: 'Site Web',
    description: 'Portfolio réalisé en collaboration avec un designer qui a remporté le prix du site du jour.',
    image: '/images/projects/portfolio.png',
    color: 'var(--bleu)'
  },
];

// Variantes d'animation pour les titres
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export default function ProjectsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  // Fonction pour gérer le redimensionnement de la fenêtre
  const handleResize = () => {
    if (typeof window === 'undefined' || !projectsRef.current) return;
    
    // Rafraîchir tous les ScrollTriggers pour s'adapter à la nouvelle taille
    ScrollTrigger.refresh();
  };

  // Initialisation de GSAP ScrollTrigger pour l'effet de scrolling cinématique
  useEffect(() => {
    if (typeof window === 'undefined' || !projectsRef.current) return;

    // Enregistrement des plugins GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', handleResize);
    
    // Sélection des éléments de projet
    const projects = projectsRef.current.querySelectorAll('.project-card');
    
    // Détection de la taille d'écran pour adapter l'animation
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    // Animation horizontale au scroll adaptée selon la taille d'écran
    if (projectsRef.current) {
      // Calcul dynamique de la distance à parcourir en fonction du nombre de projets et de la taille d'écran
      const totalDistance = isMobile ? -100 * (projects.length - 0.8) : 
                           isTablet ? -100 * (projects.length - 0.9) : 
                           -100 * (projects.length - 1);
      
      gsap.to(projects, {
        xPercent: totalDistance,
        ease: "none",
        scrollTrigger: {
          trigger: projectsRef.current,
          pin: true,
          scrub: isMobile ? 0.8 : 1, // Ajustement de la fluidité pour mobile
          end: () => "+=" + ((projectsRef.current?.offsetWidth || 0) * (isMobile ? 0.8 : isTablet ? 0.9 : 1)),
          // Désactiver le pin sur mobile en mode portrait si nécessaire
          pinSpacing: true,
          invalidateOnRefresh: true, // Recalculer lors du redimensionnement
          start: "top 15%", // Commencer le défilement plus tôt (15% du haut de la fenêtre)
          anticipatePin: 1, // Anticiper le pin pour une transition plus fluide
          onEnter: () => {
            // Ajuster le scroll pour éviter les sauts brusques
            if (projectsRef.current) {
              const sectionTop = projectsRef.current.getBoundingClientRect().top + window.scrollY;
              gsap.to(window, {duration: 0.1, scrollTo: {y: sectionTop - window.innerHeight * 0.15}});
            }
          }
        },
      });
    }

    // Animation des éléments au survol
    projects.forEach((project) => {
      const image = project.querySelector('.project-image');
      const title = project.querySelector('h3');
      const category = project.querySelector('.category-badge');
      
      project.addEventListener('mouseenter', () => {
        // L'animation de l'image est maintenant gérée par CSS (group-hover:scale-105)
        // Animation du titre
        gsap.to(title, {
          y: -5,
          duration: 0.4,
          ease: "power2.out"
        });
        
        // Animation du badge de catégorie
        gsap.to(category, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out"
        });
      });
      
      project.addEventListener('mouseleave', () => {
        // Animation du titre
        gsap.to(title, {
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
        
        // Animation du badge de catégorie
        gsap.to(category, {
          scale: 1,
          duration: 0.3,
          ease: "back.out"
        });
      });
    });

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#1A0B22] to-[#180B28]"
      id="projects-section" // Ajouter un ID pour faciliter le ciblage
    >
      {/* Éléments graphiques de fond */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-bleu/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-dore/5 blur-3xl"></div>
      
      {/* Lignes diagonales type néon */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px bg-gradient-to-r from-rose-toulouse to-transparent opacity-20"
            style={{ 
              width: '100%',
              top: `${10 + i * 20}%`,
              transform: 'rotate(-5deg)',
              left: '-10%',
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
            variants={titleVariants}
          >
            Nos <span className="text-dore">Réalisations</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={titleVariants}
          >
            Découvrez quelques-uns de nos projets réalisés avec passion et expertise
          </motion.p>
        </motion.div>
      </div>

      {/* Section horizontale avec effet de scrolling cinématique */}
      <div 
        ref={projectsRef}
        className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden"
        style={{ marginTop: '2rem' }} // Ajouter un peu d'espace avant la section pour améliorer la visibilité
      >
        <div className="absolute top-0 left-0 flex items-center h-full">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] h-full px-4 md:px-8"
            >
              <div 
                className="h-full rounded-2xl overflow-hidden relative group hover-scale backdrop-blur-sm"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Image de fond du projet */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-500"
                  />
                </div>
                
                {/* Overlay gradient personnalisé selon la couleur du projet */}
                <div 
                  className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-80"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}10 0%, rgba(24, 11, 40, 0.7) 50%, rgba(24, 11, 40, 0.9) 100%)` 
                  }}
                ></div>
                
                {/* Contenu du projet */}
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12 z-10">
                  {/* Effet de trait fluo derrière les éléments de texte */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/100 to-transparent z-0"></div>
                  
                  <span 
                    className="category-badge relative z-10 inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-300"
                    style={{ 
                      backgroundColor: `${project.color}30`,
                      color: project.color,
                      border: `1px solid ${project.color}50`,
                      boxShadow: `0 0 15px ${project.color}40`
                    }}
                  >
                    {project.category}
                  </span>
                  
                  <div className="relative z-10 mb-4">
                    <div 
                      className="absolute -inset-1 rounded-lg opacity-70" 
                      style={{ 
                        background: `linear-gradient(45deg, transparent, ${project.color}30, transparent)`,
                        filter: 'blur(8px)',
                      }}
                    ></div>
                    <h3 
                      className="relative text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-dore transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-display)', textShadow: '0 0 10px rgba(0,0,0,0.5)' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="relative z-10 mb-8">
                    <div 
                      className="absolute -inset-2 rounded-lg opacity-50" 
                      style={{ 
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(4px)',
                      }}
                    ></div>
                    <p className="relative text-sm sm:text-base md:text-lg max-w-xl">
                      {project.description}
                    </p>
                  </div>
                  
                  <a 
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center text-white bg-gradient-to-r from-rose-toulouse to-violet
                             px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md hover:from-violet hover:to-rose-toulouse
                             transition-all duration-500 shadow-lg hover:shadow-rose-toulouse/30 w-fit z-50 text-sm sm:text-base"
                  >
                    Voir le projet
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  {/* Numéro du projet avec effet néon */}
                  <div 
                    className="absolute top-6 sm:top-8 right-6 sm:right-8 text-6xl sm:text-7xl md:text-8xl font-bold opacity-20 neon-text"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 mt-8 text-center">
        <a 
          href="/portfolio" 
          className="inline-flex items-center justify-center px-6 py-3 border border-dore 
                   text-base font-medium rounded-md text-white hover:bg-dore/10 
                   transition-all mt-8"
        >
          Voir tous nos projets
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}
