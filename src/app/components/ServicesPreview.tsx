'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// Animation des cartes de services
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services = [
  {
    id: 'web',
    title: 'Développement Web',
    description: 'Sites vitrines, plateformes e-commerce et applications web sur-mesure avec les dernières technologies pour une expérience optimale.',
    icon: '/images/services/site-vitrine.jpg',
    color: 'var(--rose-toulouse)',
  },
  {
    id: 'mobile',
    title: 'Applications Mobiles',
    description: 'Applications mobiles natives et hybrides pour iOS et Android qui offrent une expérience utilisateur fluide et intuitive.',
    icon: '/images/services/mobile.jpg',
    color: 'var(--violet)',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Solutions e-commerce performantes, sécurisées et optimisées pour transformer les visiteurs en clients fidèles.',
    icon: '/images/services/e-commerce.jpg',
    color: 'var(--bleu)',
  }
];

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#180B28] to-[#0F0A1A]">
      {/* Éléments graphiques de fond */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-toulouse via-violet to-bleu opacity-70"></div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-violet/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rose-toulouse/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Nos <span className="text-rose-toulouse">Services</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nous proposons des solutions digitales complètes pour répondre à tous vos besoins
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group hover-scale bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10
                         transition-all duration-300 hover:border-rose-toulouse/30 hover:bg-white/10
                         flex flex-col h-full"
            >
              {/* Icône avec effet de survol */}
              <div 
                className="w-24 h-24 rounded-lg mb-6 overflow-hidden
                           group-hover:shadow-lg transition-all duration-300 relative"
                style={{ 
                  boxShadow: `0 0 20px ${service.color}30`
                }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div 
                  className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${service.color}80, transparent)` }}
                ></div>
              </div>
              
              <h3 
                className="text-xl font-bold mb-3 text-white group-hover:text-rose-toulouse transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 flex-grow">
                {service.description}
              </p>
              
              <a 
                href={`/services#${service.id}`}
                className="inline-flex items-center text-rose-toulouse hover:text-rose-clair mt-2"
              >
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="/services" 
            className="inline-flex items-center justify-center px-6 py-3 border border-rose-toulouse 
                     text-base font-medium rounded-md text-white hover:bg-rose-toulouse/10 
                     transition-all"
          >
            Tous nos services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
