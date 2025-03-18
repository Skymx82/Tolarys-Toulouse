'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Variantes d'animation pour les éléments de texte
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

// Variantes d'animation pour les images
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

// Membres de l'équipe
const teamMembers = [
  {
    name: 'Mathevon Mattias',
    role: 'Fondateur & Développeur Full-Stack',
    image: '/images/team/mattias.png',
    bio: 'Passionné de programmation depuis l\' age de 11 ans, Mattias a fondé Tolarys avec la vision de créer des expériences digitales uniques qui allient performance technique et créativité.'
  },
];

// Valeurs de l'entreprise
const values = [
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Nous repoussons constamment les limites de la technologie pour offrir des solutions avant-gardistes.'
  },
  {
    icon: '🤝',
    title: 'Proximité',
    description: 'Nous construisons des relations durables basées sur l\'écoute et la compréhension des besoins de nos clients.'
  },
  {
    icon: '✨',
    title: 'Créativité',
    description: 'Inspirés par la richesse culturelle toulousaine, nous apportons une touche artistique unique à chaque projet.'
  },
  {
    icon: '🚀',
    title: 'Excellence',
    description: 'Nous visons l\'excellence technique et esthétique dans chacune de nos réalisations.'
  }
];

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyIsInView = useInView(storyRef, { once: false, amount: 0.3 });
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesIsInView = useInView(valuesRef, { once: false, amount: 0.3 });
  const teamRef = useRef<HTMLDivElement>(null);
  const teamIsInView = useInView(teamRef, { once: false, amount: 0.3 });

  // Animation de la timeline avec GSAP
  useEffect(() => {
    if (typeof window === 'undefined' || !timelineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

    // Animation de la ligne
    timeline.to(".timeline-line", {
      height: "100%",
      duration: 1,
      ease: "none"
    });

    // Animation des points et du contenu
    const timelinePoints = timelineRef.current.querySelectorAll(".timeline-point");
    const timelineContents = timelineRef.current.querySelectorAll(".timeline-content");

    timelinePoints.forEach((point, index) => {
      timeline.to(point, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, index * 0.2);

      if (timelineContents[index]) {
        timeline.to(timelineContents[index], {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        }, index * 0.2 + 0.1);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0F0A1A] to-[#1A1025]">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero section */}
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              À Propos de <span className="text-gradient bg-gradient-to-r from-rose-toulouse to-violet">Tolarys</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Une agence digitale née à Toulouse, inspirée par la créativité locale 
              et passionnée par l'innovation technologique.
            </p>
          </motion.div>
        </div>

        {/* Section Histoire et Vision */}
        <section 
          ref={storyRef}
          className="py-16 md:py-24 relative overflow-hidden"
        >
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose-toulouse/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-violet/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Contenu texte */}
              <motion.div
                className="space-y-6"
                variants={textVariants}
                initial="hidden"
                animate={storyIsInView ? "visible" : "hidden"}
              >
                <span className="text-rose-toulouse text-lg" style={{ fontFamily: 'var(--font-handwriting)' }}>
                  Notre Histoire
                </span>
                <h2 
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Un voyage digital inspiré par Toulouse
                </h2>
                
                <p className="text-gray-300">
                  Fondée en 2016 au cœur de la Ville Rose, Tolarys est née de la passion pour le développement web et la 
                  créativité visuelle. Notre fondateur, originaire de Toulouse, a été profondément inspiré par le patrimoine 
                  culturel riche et l'esprit innovant de la région.
                </p>
                
                <p className="text-gray-300">
                  Notre nom même, Tolarys, est un hommage à nos racines toulousaines et à notre vision d'excellence ("ys" 
                  pour l'excellence). Nous avons commencé comme une petite équipe spécialisée dans la création de sites web, 
                  et avons progressivement élargi notre expertise pour offrir une gamme complète de services digitaux.
                </p>
                
                <div className="pt-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-rose-toulouse/20 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-toulouse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Notre mission</h3>
                      <p className="text-gray-300">Créer des expériences digitales qui allient performance technique et sensibilité artistique.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Image */}
              <motion.div
                className="relative"
                variants={imageVariants}
                initial="hidden"
                animate={storyIsInView ? "visible" : "hidden"}
              >
                <div className="relative z-10 rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl">
                  <Image
                    src="/images/about/tolarys-story.jpg"
                    alt="L'équipe Tolarys"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  {/* Badge décoratif */}
                  <div className="absolute -bottom-5 -right-5 bg-violet rounded-full w-24 h-24 flex items-center justify-center shadow-lg shadow-violet/30 border-2 border-white/20 transform rotate-12">
                    <div className="text-white font-bold text-center leading-tight">
                      <span className="text-xs uppercase tracking-wide">Depuis</span>
                      <div className="text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                        2016
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Élément décoratif */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-dore rounded-lg -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline de l'entreprise */}
        <section className="py-16 md:py-24 relative bg-[#16091E]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-rose-toulouse text-lg" style={{ fontFamily: 'var(--font-handwriting)' }}>
                Notre parcours
              </span>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white mt-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                L'évolution de Tolarys
              </h2>
            </div>
            
            <div 
              ref={timelineRef}
              className="relative max-w-3xl mx-auto py-12"
            >
              {/* Ligne de la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-rose-toulouse via-violet to-bleu h-0 timeline-line"></div>
              
              {/* Points sur la timeline */}
              <div className="space-y-24">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-rose-toulouse shadow-lg shadow-rose-toulouse/30 scale-0 opacity-0 timeline-point"></div>
                  </div>
                  <div className="ml-auto mr-8 md:mr-16 w-1/2 opacity-0 translate-x-8 timeline-content">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <h3 className="text-xl font-bold text-white">2016</h3>
                      <h4 className="text-rose-toulouse font-medium mb-2">Création de Tolarys</h4>
                      <p className="text-gray-300 text-sm">
                        Fondation de l'agence à Toulouse avec une spécialisation dans le développement web et mobile.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-violet shadow-lg shadow-violet/30 scale-0 opacity-0 timeline-point"></div>
                  </div>
                  <div className="mr-auto ml-8 md:ml-16 w-1/2 opacity-0 -translate-x-8 timeline-content">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <h3 className="text-xl font-bold text-white">2018</h3>
                      <h4 className="text-violet font-medium mb-2">Expansion de l'équipe</h4>
                      <p className="text-gray-300 text-sm">
                        Agrandissement de l'équipe avec l'arrivée de designers et développeurs supplémentaires.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-bleu shadow-lg shadow-bleu/30 scale-0 opacity-0 timeline-point"></div>
                  </div>
                  <div className="ml-auto mr-8 md:mr-16 w-1/2 opacity-0 translate-x-8 timeline-content">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <h3 className="text-xl font-bold text-white">2020</h3>
                      <h4 className="text-bleu font-medium mb-2">Diversification des services</h4>
                      <p className="text-gray-300 text-sm">
                        Extension de notre offre pour inclure le design UX/UI, le marketing digital et les applications mobiles avancées.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-dore shadow-lg shadow-dore/30 scale-0 opacity-0 timeline-point"></div>
                  </div>
                  <div className="mr-auto ml-8 md:ml-16 w-1/2 opacity-0 -translate-x-8 timeline-content">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <h3 className="text-xl font-bold text-white">2023</h3>
                      <h4 className="text-dore font-medium mb-2">Nouveaux locaux et reconnaissances</h4>
                      <p className="text-gray-300 text-sm">
                        Emménagement dans de nouveaux locaux au cœur de Toulouse et obtention de plusieurs prix régionaux pour l'innovation digitale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Valeurs */}
        <section 
          ref={valuesRef}
          className="py-16 md:py-24 relative"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={textVariants}
              initial="hidden"
              animate={valuesIsInView ? "visible" : "hidden"}
            >
              <span className="text-rose-toulouse text-lg" style={{ fontFamily: 'var(--font-handwriting)' }}>
                Ce qui nous guide
              </span>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white mt-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Nos valeurs
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mt-4">
                Ces principes fondamentaux définissent notre approche et notre engagement envers nos clients.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
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
                  animate={valuesIsInView ? "visible" : "hidden"}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-rose-toulouse/30 transition-all"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Équipe */}
        <section 
          ref={teamRef}
          className="py-16 md:py-24 relative bg-[#16091E]"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={textVariants}
              initial="hidden"
              animate={teamIsInView ? "visible" : "hidden"}
            >
              <span className="text-rose-toulouse text-lg" style={{ fontFamily: 'var(--font-handwriting)' }}>
                L'équipe derrière Tolarys
              </span>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white mt-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Nos talents
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mt-4">
                Des passionnés de technologie et de créativité, unis par l'amour de Toulouse et du digital.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
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
                  animate={teamIsInView ? "visible" : "hidden"}
                  className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-gray-800 animate-pulse absolute"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      width={300}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16091E] to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-rose-toulouse text-sm">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
