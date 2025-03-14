'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Définition des projets à mettre en avant
const projects = [
  {
    id: 'project1',
    title: 'E-commerce nouvelle génération',
    category: 'E-commerce',
    description: 'Plateforme e-commerce à haute performance avec une expérience d\'achat immersive et intuitive.',
    image: '/projects/ecommerce-project.webp',
    color: 'var(--rose-toulouse)'
  },
  {
    id: 'project2',
    title: 'Application mobile fitness',
    category: 'Mobile',
    description: 'Application de suivi d\'activité physique avec des fonctionnalités sociales et une interface engageante.',
    image: '/projects/mobile-project.webp',
    color: 'var(--violet)'
  },
  {
    id: 'project3',
    title: 'Plateforme événementielle',
    category: 'Web App',
    description: 'Système de gestion d\'événements complet avec billetterie et interactions en temps réel.',
    image: '/projects/webapp-project.webp',
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

  // Initialisation de GSAP ScrollTrigger pour l'effet de scrolling cinématique
  useEffect(() => {
    if (typeof window === 'undefined' || !projectsRef.current) return;

    // Enregistrement du plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Sélection des éléments de projet
    const projects = projectsRef.current.querySelectorAll('.project-card');
    
    // Animation horizontale au scroll
    if (projectsRef.current) {
      gsap.to(projects, {
        xPercent: -100 * (projects.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: projectsRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (projectsRef.current?.offsetWidth || 0),
        },
      });
    }

    // Animation des images au survol
    projects.forEach((project) => {
      const image = project.querySelector('.project-image');
      
      project.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.05,
          duration: 0.5,
          ease: "power2.out"
        });
      });
      
      project.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });

    // Nettoyage
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#1A0B22] to-[#180B28]"
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
        className="relative h-[500px] md:h-[600px] overflow-hidden"
      >
        <div className="absolute top-0 left-0 flex items-center h-full">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card flex-shrink-0 w-[85vw] md:w-[75vw] lg:w-[65vw] h-full px-4 md:px-8"
            >
              <div 
                className="h-full rounded-2xl overflow-hidden relative group hover-scale backdrop-blur-sm"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Image de fond du projet */}
                <div className="absolute inset-0 opacity-30 toulouse-overlay">
                  <div className="project-image w-full h-full transition-transform duration-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      objectFit="cover"
                    />
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: `linear-gradient(to top, rgba(24, 11, 40, 0.9), rgba(24, 11, 40, 0.5) 50%, rgba(24, 11, 40, 0.3))` 
                  }}
                ></div>
                
                {/* Contenu du projet */}
                <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                  <span 
                    className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
                    style={{ 
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}40`
                    }}
                  >
                    {project.category}
                  </span>
                  
                  <h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-dore transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 md:text-lg max-w-xl">
                    {project.description}
                  </p>
                  
                  <a 
                    href={`/portfolio#${project.id}`}
                    className="inline-flex items-center text-white bg-gradient-to-r from-rose-toulouse to-violet
                             px-6 py-3 rounded-md hover:from-violet hover:to-rose-toulouse
                             transition-all duration-500 shadow-lg hover:shadow-rose-toulouse/30 w-fit"
                  >
                    Voir le projet
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  {/* Numéro du projet avec effet néon */}
                  <div 
                    className="absolute top-8 right-8 text-8xl font-bold opacity-20 neon-text"
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
