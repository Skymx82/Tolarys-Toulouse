'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

// Configuration des monuments
const monuments = [
  {
    name: 'Capitole',
    image: '/images/monuments/capitole.png',
    width: 'w-32 md:w-48',
    height: 'h-24 md:h-32',
    gradient: 'from-rose-toulouse/40 to-violet/40'
  },
  {
    name: 'Basilique Saint-Sernin',
    image: '/images/monuments/saint-sernin.png',
    width: 'w-24 md:w-32',
    height: 'h-32 md:h-40',
    gradient: 'from-violet/40 to-dore/40'
  },
  {
    name: 'Pont Neuf',
    image: '/images/monuments/pont-neuf.png',
    width: 'w-48 md:w-64',
    height: 'h-20 md:h-24',
    gradient: 'from-rose-toulouse/40 to-bleu/40'
  },
  {
    name: 'Cité de l\'Espace',
    image: '/images/monuments/cite-espace.png',
    width: 'w-16 md:w-24',
    height: 'h-32 md:h-40',
    gradient: 'from-bleu/40 to-dore/40'
  }
];

export default function ToulouseSkyline() {
  const skylineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skylineRef.current) return;
    
    const skyline = skylineRef.current;
    const elements = skyline.querySelectorAll('.monument');
    const reflection = skyline.querySelector('.reflection');
    
    // Animation d'apparition des monuments
    gsap.fromTo(
      elements,
      { 
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      { 
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Animation continue de "flottement" des monuments
    elements.forEach((el, index) => {
      gsap.to(el, {
        y: '+=10',
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    // Animation de l'effet néon
    gsap.to(elements, {
      filter: "drop-shadow(0 0 10px var(--rose-toulouse)) drop-shadow(0 0 15px var(--violet))",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random"
      }
    });

    // Animation du reflet sur l'eau
    if (reflection) {
      gsap.to(reflection, {
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

  }, []);

  return (
    <div 
      ref={skylineRef} 
      className="w-full h-64 md:h-96 relative overflow-visible"
      style={{
        marginBottom: '2rem',
        paddingBottom: '2rem',
      }}
    >
      {/* Arrière-plan du ciel nocturne */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#180B28]/0 to-[#180B28]/50 z-0"></div>
      
      {/* Conteneur des monuments avec espacement amélioré */}
      <div className="absolute bottom-16 left-0 w-full flex justify-around items-end z-10">
        {monuments.map((monument, index) => (
          <motion.div 
            key={monument.name}
            className={`monument relative ${monument.width} ${monument.height}`}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
          >
            <div className={`absolute bottom-0 w-full h-full overflow-visible
                          rounded-lg bg-gradient-to-t ${monument.gradient}`}>
              <Image
                src={monument.image}
                alt={monument.name}
                fill
                className="object-contain mix-blend-screen"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Reflet lumineux sur l'eau (la Garonne) - amélioré */}
      <div className="reflection absolute bottom-0 left-0 w-full h-16 
                    bg-gradient-to-r from-rose-toulouse/30 via-violet/30 to-bleu/30 
                    blur-md z-5"></div>
      
      {/* Ligne d'horizon */}
      <div className="absolute bottom-16 left-0 w-full h-px 
                   bg-gradient-to-r from-transparent via-violet/50 to-transparent z-10"></div>
    </div>
  );
}
