'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import ToulouseSkyline from './ToulouseSkyline';

// Variantes d'animation pour le texte
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

// Variantes pour les éléments d'illustration
const illustrationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
      delay: 0.3,
    },
  },
};

export default function HeroSection() {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!illustrationRef.current || !backgroundRef.current) return;

    const elements = illustrationRef.current.querySelectorAll('.floating-element');
    const background = backgroundRef.current;
    
    // Animation flottante des éléments décoratifs avec GSAP
    elements.forEach((el, index) => {
      gsap.to(el, {
        y: `${10 + Math.random() * 15}px`,
        x: `${5 + Math.random() * 10}px`,
        rotation: Math.random() * 8 - 4,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.1 * index,
      });
    });

    // Animation du fond avec un effet brillant
    gsap.to(background, {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      ease: "sine.inOut",
      yoyo: true,
    });

    // Effet parallax lors du scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(illustrationRef.current, {
        y: scrollY * 0.2,
        duration: 0.8,
        ease: "power1.out",
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Fond artistique inspiré de Bigflo & Oli et du style urbain de Toulouse */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-[#180B28] via-[#330E3A] to-[#2F102F] z-0"
        style={{ 
          backgroundSize: '200% 200%',
          background: `
            linear-gradient(0deg, rgba(24,11,40,1) 0%, rgba(51,14,58,0.8) 50%, rgba(47,16,47,0.9) 100%),
            url('/background-texture.webp')
          `
        }}
      >
        {/* Lignes de grille style néon */}
        <div className="absolute inset-0 flex flex-col justify-around opacity-20">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-px bg-gradient-to-r from-rose-toulouse via-transparent to-bleu" />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-row justify-around opacity-20">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-px h-full bg-gradient-to-b from-violet via-transparent to-dore" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contenu texte */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div variants={textVariants}>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight" 
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Développement web & mobile <span className="text-rose-toulouse neon-text">à Toulouse</span>
              </h1>
            </motion.div>
            
            <motion.div variants={textVariants}>
              <p 
                className="text-xl md:text-2xl font-light text-gray-300 mb-4"
                style={{ fontFamily: 'var(--font-handwriting)' }}
              >
                Créations digitales uniques dans la Ville Rose
              </p>
            </motion.div>
            
            <motion.div variants={textVariants}>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Bienvenue chez Tolarys, votre partenaire de confiance pour transformer vos idées en expériences digitales performantes et créatives. 
                Situés au cœur de Toulouse, nous concevons des solutions web et mobile qui vous démarquent.
              </p>
            </motion.div>
            
            <motion.div 
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <a 
                href="/services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-md text-white bg-rose-toulouse hover:bg-opacity-80 
                transition-all shadow-lg hover:shadow-rose-toulouse/30"
              >
                Découvrir nos services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-rose-toulouse 
                text-base font-medium rounded-md text-white hover:bg-rose-toulouse/10 
                transition-all"
              >
                Nous contacter
              </a>
            </motion.div>
          </motion.div>
          
          {/* Illustrations et éléments graphiques */}
          <motion.div
            ref={illustrationRef}
            className="relative h-[400px] md:h-[500px]"
            initial="hidden"
            animate="visible"
            variants={illustrationVariants}
          >
            {/* Cercle lumineux */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          w-72 h-72 md:w-96 md:h-96 rounded-full 
                          bg-gradient-to-tr from-rose-toulouse/20 via-violet/30 to-bleu/20 
                          blur-xl"></div>
            
            {/* Smartphone mockup */}
            <div className="floating-element absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 
                        w-32 h-64 md:w-40 md:h-80 rounded-3xl 
                        border-4 border-white/30 
                        bg-gradient-to-b from-gray-900 to-gray-800
                        shadow-lg shadow-rose-toulouse/20 overflow-hidden
                        rotate-6">
              <div className="absolute top-0 left-0 w-full h-full opacity-80 
                            bg-gradient-to-br from-rose-toulouse/40 via-violet/20 to-transparent">
              </div>
            </div>
            
            {/* Laptop mockup */}
            <div className="floating-element absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 
                        w-64 h-40 md:w-80 md:h-48
                        rounded-t-lg 
                        border-4 border-white/30 
                        bg-gradient-to-b from-gray-900 to-gray-800
                        shadow-lg shadow-violet/20
                        -rotate-3">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 
                            w-72 h-4 md:w-[22rem] md:h-6 rounded-b-lg bg-gray-800 
                            border-2 border-t-0 border-white/30"></div>
              <div className="absolute top-0 left-0 w-full h-full opacity-80 
                            bg-gradient-to-br from-bleu/40 via-violet/20 to-transparent">
              </div>
            </div>
            
            {/* Éléments graphiques flottants */}
            <div className="floating-element absolute top-1/3 right-1/3 
                        w-12 h-12 md:w-16 md:h-16 rounded-full 
                        bg-dore/60 blur-sm"></div>
            
            <div className="floating-element absolute bottom-1/4 left-1/3 
                        w-8 h-8 md:w-12 md:h-12 rounded-sm rotate-45 
                        bg-rose-toulouse/60 blur-sm"></div>
                        
            <div className="floating-element absolute top-2/3 right-1/4 
                        w-10 h-10 md:w-14 md:h-14 
                        bg-violet/60 blur-sm
                        clip-path-polygon"></div>
          </motion.div>
        </div>

        {/* Skyline de Toulouse */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 md:mt-24"
        >
          <ToulouseSkyline />
        </motion.div>
        
        {/* Fading gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#180B28] to-transparent z-0"></div>
      </div>
    </section>
  );
}
