'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Variantes d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(to right, #180B28, #331A2F)` 
      }}
    >
      {/* Éléments graphiques de fond inspirés des quartiers de Toulouse */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Silhouette du Capitole de Toulouse */}
        <div className="absolute -bottom-10 left-0 w-full h-40 opacity-5">
          <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 L1200,200 L1200,180 L1100,180 L1100,120 L1050,100 L1000,120 L1000,180 L900,180 L900,150 L850,130 L800,150 L800,180 L700,180 L700,100 L650,80 L600,100 L600,180 L500,180 L500,160 L450,140 L400,160 L400,180 L300,180 L300,130 L250,110 L200,130 L200,180 L100,180 L100,140 L50,120 L0,140 Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-toulouse via-violet to-bleu"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <span 
              className="text-lg text-rose-toulouse font-medium"
              style={{ fontFamily: 'var(--font-handwriting)' }}
            >
              Un projet en tête ?
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display)' }}
            variants={itemVariants}
          >
            Transformons vos idées en <span className="text-gradient bg-gradient-to-r from-rose-toulouse via-violet to-bleu">réalité digitale</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300"
            variants={itemVariants}
          >
            Prenez contact avec notre équipe toulousaine pour donner vie à votre projet web ou mobile. 
            Nous sommes impatients de collaborer avec vous et d'apporter notre expertise à votre vision.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center"
            variants={itemVariants}
          >
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent 
                       text-base font-medium rounded-md text-black bg-dore hover:bg-opacity-90
                       transition-all shadow-lg hover:shadow-dore/30"
            >
              Nous contacter
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
            <a 
              href="tel:+33612345678" 
              className="inline-flex items-center justify-center px-8 py-4 border border-dore
                       text-base font-medium rounded-md text-white hover:bg-dore/10 
                       transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +33 6 12 34 56 78
            </a>
          </motion.div>
          
          <motion.div 
            className="pt-12 flex flex-wrap justify-center gap-8 items-center"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center">
              <div className="text-rose-toulouse text-3xl font-bold mb-2">7+</div>
              <div className="text-white text-sm">Années d'expérience</div>
            </div>
            
            <div className="w-px h-12 bg-white/20"></div>
            
            <div className="flex flex-col items-center">
              <div className="text-rose-toulouse text-3xl font-bold mb-2">120+</div>
              <div className="text-white text-sm">Projets réalisés</div>
            </div>
            
            <div className="w-px h-12 bg-white/20"></div>
            
            <div className="flex flex-col items-center">
              <div className="text-rose-toulouse text-3xl font-bold mb-2">98%</div>
              <div className="text-white text-sm">Clients satisfaits</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
