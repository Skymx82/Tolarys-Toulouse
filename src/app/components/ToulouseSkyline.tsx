'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Les monuments emblématiques de Toulouse stylisés avec un effet "néon" 
export default function ToulouseSkyline() {
  const skylineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skylineRef.current) return;
    
    const skyline = skylineRef.current;
    const elements = skyline.querySelectorAll('.monument');
    
    // Animation des monuments avec GSAP
    gsap.fromTo(
      elements,
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Animation continue de "pulsation" des monuments
    gsap.to(elements, {
      filter: "drop-shadow(0 0 8px var(--rose-toulouse)) drop-shadow(0 0 12px var(--violet))",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random"
      }
    });

  }, []);

  return (
    <div 
      ref={skylineRef} 
      className="w-full h-24 md:h-32 relative overflow-hidden mt-12"
    >
      <div className="absolute bottom-0 left-0 w-full flex justify-around items-end">
        {/* Le Capitole */}
        <motion.div 
          className="monument h-20 md:h-28 w-16 md:w-24 relative"
          initial={{ opacity: 0, y: 50 }}
        >
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-rose-toulouse to-violet opacity-80 h-full rounded-t-lg">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 border-t-2 border-l-2 border-r-2 border-white/50 rounded-t-lg"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1/4 border-t-2 border-l-2 border-r-2 border-white/50 rounded-t-sm"></div>
          </div>
        </motion.div>
        
        {/* La Basilique Saint-Sernin */}
        <motion.div 
          className="monument h-24 md:h-32 w-12 md:w-16 relative"
          initial={{ opacity: 0, y: 50 }}
        >
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-violet to-dore opacity-80 h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1/4 bg-dore/80 rounded-full"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-3/4 border-t-2 border-l-2 border-r-2 border-white/50 rounded-t-lg"></div>
          </div>
        </motion.div>
        
        {/* Le Pont Neuf */}
        <motion.div 
          className="monument h-12 md:h-16 w-32 md:w-48 relative"
          initial={{ opacity: 0, y: 50 }}
        >
          <div className="absolute bottom-0 w-full bg-gradient-to-r from-rose-toulouse to-bleu opacity-80 h-1/3 rounded-t-sm">
            <div className="flex justify-around w-full">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-8 md:h-10 bg-white/50 rounded-t-sm"></div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* La Tour de la Cité de l'Espace */}
        <motion.div 
          className="monument h-24 md:h-32 w-6 md:w-8 relative"
          initial={{ opacity: 0, y: 50 }}
        >
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-bleu to-dore opacity-80 h-full rounded-t-3xl">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-1/4 bg-dore/50 rounded-full"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Reflet lumineux sur l'eau (la Garonne) */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-rose-toulouse/30 via-violet/30 to-bleu/30 blur-sm"></div>
    </div>
  );
}
