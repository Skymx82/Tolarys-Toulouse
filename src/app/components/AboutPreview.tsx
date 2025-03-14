'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export default function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(to bottom, #0F0A1A, #1A0B22)` 
      }}
    >
      {/* Éléments graphiques décoratifs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-rose-toulouse/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Motif artistique discret inspiré du street art à l'arrière-plan */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('/patterns/toulouse-pattern.svg')`,
          backgroundSize: '500px',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image avec effet visuel */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="toulouse-overlay rounded-lg overflow-hidden">
              <Image
                src="/toulouse-capitole.webp"
                alt="Toulouse - Place du Capitole"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Badge "Ville Rose" avec effet néon */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-rose-toulouse to-violet 
                        rounded-full w-28 h-28 flex items-center justify-center shadow-lg shadow-rose-toulouse/30
                        border-2 border-white/20 transform rotate-12">
              <div className="text-white font-bold text-center leading-tight">
                <span className="text-xs uppercase tracking-wide">La</span>
                <div className="text-xl neon-text" style={{ fontFamily: 'var(--font-handwriting)' }}>
                  Ville Rose
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contenu texte */}
          <motion.div
            className="space-y-6"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-rose-toulouse">Tolarys</span>, créations digitales ancrées à Toulouse
            </h2>
            
            <p className="text-lg text-gray-300">
              Au cœur de la Ville Rose, Tolarys s'inspire quotidiennement de l'énergie créative et du 
              patrimoine culturel toulousain pour concevoir des expériences digitales uniques.
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="bg-rose-toulouse/20 rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-toulouse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>
                  Nous combinons <span className="text-rose-toulouse font-semibold">expertise technique</span> et <span className="text-rose-toulouse font-semibold">créativité toulousaine</span> pour vous offrir des solutions digitales performantes.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-rose-toulouse/20 rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-toulouse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>
                  Notre approche est inspirée de la richesse culturelle locale, où <span className="text-rose-toulouse font-semibold">tradition</span> et <span className="text-rose-toulouse font-semibold">innovation</span> se rencontrent pour créer l'extraordinaire.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-rose-toulouse/20 rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-toulouse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>
                  Comme les festivals qui animent Toulouse, nos créations digitales sont conçues pour <span className="text-rose-toulouse font-semibold">émouvoir</span> et <span className="text-rose-toulouse font-semibold">engager</span>.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="/a-propos" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                         text-base font-medium rounded-md text-white bg-violet hover:bg-opacity-80 
                         transition-all shadow-lg hover:shadow-violet/30"
              >
                Découvrir notre histoire
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
