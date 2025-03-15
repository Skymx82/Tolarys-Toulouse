'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      duration: 0.6,
    },
  },
};

// Services détaillés
const servicesData = [
  {
    id: 'web-dev',
    title: 'Développement Web',
    icon: '/icons/web-icon.svg',
    color: 'var(--rose-toulouse)',
    description: 'Des sites internet et applications web sur-mesure, optimisés pour les performances et l\'expérience utilisateur.',
    features: [
      'Sites vitrines et institutionnels',
      'Applications web complexes',
      'E-commerce et plateformes de vente',
      'Intranets et extranets',
      'Progressive Web Apps (PWA)'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'PHP', 'Laravel', 'WordPress'],
    image: '/services/web-development.jpg'
  },
  {
    id: 'mobile-dev',
    title: 'Applications Mobiles',
    icon: '/icons/mobile-icon.svg',
    color: 'var(--violet)',
    description: 'Des applications natives et cross-platform pour iOS et Android, conçues pour offrir une expérience utilisateur optimale.',
    features: [
      'Applications natives iOS et Android',
      'Applications cross-platform',
      'Applications de commerce mobile',
      'Applications d\'entreprise',
      'Mise à jour et maintenance'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    image: '/services/mobile-development.jpg'
  },
  {
    id: 'ecommerce',
    title: 'Solutions E-commerce',
    icon: '/icons/ecommerce-icon.svg',
    color: 'var(--dore)',
    description: 'Des boutiques en ligne performantes et sécurisées pour maximiser vos ventes et offrir une expérience d\'achat optimale.',
    features: [
      'Création de boutiques en ligne',
      'Refonte de sites e-commerce existants',
      'Intégration de moyens de paiement',
      'Optimisation du tunnel de conversion',
      'Systèmes de gestion des stocks'
    ],
    technologies: ['Shopify', 'WooCommerce', 'PrestaShop', 'Magento', 'Stripe', 'PayPal'],
    image: '/services/ecommerce.jpg'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    icon: '/icons/maintenance-icon.svg',
    color: 'var(--violet)',
    description: 'Un suivi régulier et un support réactif pour assurer le bon fonctionnement de vos solutions digitales dans la durée.',
    features: [
      'Contrats de maintenance',
      'Support technique',
      'Monitoring et alertes',
      'Mises à jour de sécurité',
      'Sauvegardes et restauration'
    ],
    technologies: [],
    image: '/services/maintenance.jpg'
  }
];

export default function Services() {
  // Refs pour les animations basées sur le scroll
  const serviceRefs = servicesData.map(() => useRef<HTMLDivElement>(null));
  const serviceInView = serviceRefs.map(ref => useInView(ref, { once: false, amount: 0.3 }));
  
  // Ref pour la section hero
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  // Ref pour la section process
  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0F0A1A] to-[#1A1025]">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero section */}
        <div 
          ref={heroRef}
          className="container mx-auto px-4 py-12"
        >
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
              variants={itemVariants}
            >
              Nos <span className="text-gradient bg-gradient-to-r from-rose-toulouse to-violet">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Nous créons des expériences digitales complètes, du concept à la réalisation, 
              en alliant expertise technique et créativité toulousaine.
            </motion.p>
          </motion.div>

          {/* Illustration des services */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 py-8"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {servicesData.map((service, index) => (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-white/5 transition-all text-center group"
                variants={itemVariants}
              >
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full mb-3 transition-all group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${service.color}20`,
                    border: `1px solid ${service.color}40`
                  }}
                >
                  <div className="text-3xl">{service.icon.includes('svg') ? '🔹' : '🔹'}</div>
                </div>
                <h3 className="text-sm md:text-base font-medium text-white group-hover:text-rose-toulouse transition-colors">
                  {service.title}
                </h3>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Services détaillés */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {servicesData.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  ref={serviceRefs[index]}
                  className="scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Image du service - Alternance des côtés */}
                    <motion.div
                      className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          x: index % 2 === 0 ? -50 : 50 
                        },
                        visible: {
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1.0],
                          },
                        },
                      }}
                      initial="hidden"
                      animate={serviceInView[index] ? "visible" : "hidden"}
                    >
                      <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                        <div className="w-full h-full bg-gray-800 animate-pulse absolute"></div>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Overlay de couleur */}
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{ 
                            background: `linear-gradient(to bottom right, ${service.color}, transparent)` 
                          }}
                        ></div>
                      </div>
                      
                      {/* Élément décoratif */}
                      <div 
                        className="absolute -top-4 -left-4 w-full h-full border-2 rounded-lg -z-10"
                        style={{ borderColor: service.color }}
                      ></div>
                    </motion.div>
                    
                    {/* Contenu du service */}
                    <motion.div
                      className="space-y-6"
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          x: index % 2 === 0 ? 50 : -50 
                        },
                        visible: {
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1.0],
                          },
                        },
                      }}
                      initial="hidden"
                      animate={serviceInView[index] ? "visible" : "hidden"}
                    >
                      <h2 
                        className="text-3xl md:text-4xl font-bold text-white"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {service.title}
                      </h2>
                      
                      <p className="text-lg text-gray-300">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Ce que nous proposons</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div 
                                className="mt-1 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: `${service.color}30` }}
                              >
                                <div 
                                  className="h-2 w-2 rounded-full"
                                  style={{ backgroundColor: service.color }}
                                ></div>
                              </div>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {service.technologies.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 text-sm rounded-full"
                                style={{ 
                                  backgroundColor: `${service.color}20`,
                                  color: 'white',
                                  border: `1px solid ${service.color}30`
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-6">
                        <a 
                          href="/contact" 
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                                   text-base font-medium rounded-md text-white
                                   transition-all shadow-lg hover:shadow-rose-toulouse/30"
                          style={{ 
                            background: `linear-gradient(to right, ${service.color}, ${index % 2 === 0 ? 'var(--violet)' : 'var(--bleu)'})` 
                          }}
                        >
                          Demander un devis
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section processus de travail */}
        <section 
          ref={processRef}
          className="py-16 md:py-24 bg-[#16091E]"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
            >
              <motion.span 
                className="text-rose-toulouse text-lg"
                style={{ fontFamily: 'var(--font-handwriting)' }}
                variants={itemVariants}
              >
                Notre méthode
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mt-2"
                style={{ fontFamily: 'var(--font-display)' }}
                variants={itemVariants}
              >
                Comment nous travaillons
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 max-w-2xl mx-auto mt-4"
                variants={itemVariants}
              >
                Notre approche méthodique garantit des projets réussis, livrés dans les délais et conformes à vos attentes.
              </motion.p>
            </motion.div>
            
            {/* Étapes du processus */}
            <div className="max-w-4xl mx-auto">
              {[
                {
                  number: '01',
                  title: 'Découverte et analyse',
                  description: 'Nous prenons le temps de comprendre votre entreprise, vos objectifs et vos besoins spécifiques pour proposer des solutions adaptées.',
                  color: 'var(--rose-toulouse)'
                },
                {
                  number: '02',
                  title: 'Conception et prototypage',
                  description: 'Nous élaborons des wireframes et des prototypes interactifs pour visualiser le projet avant le développement.',
                  color: 'var(--violet)'
                },
                {
                  number: '03',
                  title: 'Développement',
                  description: 'Nos développeurs transforment les designs en code, en respectant les meilleures pratiques et en garantissant qualité et performance.',
                  color: 'var(--bleu)'
                },
                {
                  number: '04',
                  title: 'Tests et validation',
                  description: 'Nous réalisons des tests rigoureux pour s\'assurer que tout fonctionne parfaitement sur tous les appareils et navigateurs.',
                  color: 'var(--dore)'
                },
                {
                  number: '05',
                  title: 'Lancement et suivi',
                  description: 'Après le déploiement, nous restons à vos côtés pour assurer le suivi, la maintenance et les évolutions futures de votre projet.',
                  color: 'var(--rose-toulouse)'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12 last:mb-0 pl-16 md:pl-24"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                >
                  {/* Numéro de l'étape */}
                  <div 
                    className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full text-xl md:text-2xl font-bold"
                    style={{ 
                      backgroundColor: `${step.color}20`,
                      color: step.color,
                      border: `2px solid ${step.color}` 
                    }}
                  >
                    {step.number}
                  </div>
                  
                  {/* Ligne verticale reliant les étapes */}
                  {index < 4 && (
                    <div 
                      className="absolute left-6 md:left-8 top-12 md:top-16 w-px h-full"
                      style={{ 
                        background: `linear-gradient(to bottom, ${step.color}, ${[...Array(5)][index+1]?.color || 'var(--rose-toulouse)'})`,
                        opacity: 0.3 
                      }}
                    ></div>
                  )}
                  
                  {/* Contenu de l'étape */}
                  <div>
                    <h3 
                      className="text-xl md:text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full rotate-12 scale-125">
              <div className="w-full h-full bg-gradient-to-r from-rose-toulouse via-violet to-bleu opacity-30 blur-3xl"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Prêt à <span className="text-rose-toulouse">concrétiser</span> votre projet ?
              </h2>
              
              <p className="text-lg text-gray-300">
                Discutons ensemble de votre projet et découvrez comment Tolarys peut vous aider à le réaliser.
              </p>
              
              <div className="pt-4 flex flex-wrap justify-center gap-4">
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
                  href="/portfolio" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-dore
                           text-base font-medium rounded-md text-white hover:bg-dore/10 
                           transition-all"
                >
                  Voir nos réalisations
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
