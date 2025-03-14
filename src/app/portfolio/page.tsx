'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Catégories de projets
const categories = ['Tous', 'Sites Web', 'Applications Mobiles', 'E-commerce', 'Design'];

// Données des projets (à remplacer par de vraies données)
const projects = [
  {
    id: 'projet1',
    title: 'Site vitrine pour restaurant gastronomique',
    category: 'Sites Web',
    image: '/projects/project-placeholder-1.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'GSAP'],
    description: 'Refonte complète du site vitrine pour un restaurant gastronomique toulousain avec réservation en ligne et présentation des menus.',
    year: '2023'
  },
  {
    id: 'projet2',
    title: 'Application de livraison de produits locaux',
    category: 'Applications Mobiles',
    image: '/projects/project-placeholder-2.jpg',
    technologies: ['React Native', 'Firebase', 'Stripe'],
    description: 'Développement d\'une application mobile permettant aux toulousains de commander des produits frais auprès de producteurs locaux.',
    year: '2023'
  },
  {
    id: 'projet3',
    title: 'E-commerce de vêtements personnalisés',
    category: 'E-commerce',
    image: '/projects/project-placeholder-3.jpg',
    technologies: ['Shopify', 'React', 'Three.js'],
    description: 'Création d\'une boutique en ligne proposant un outil de personnalisation 3D pour visualiser les vêtements avant achat.',
    year: '2022'
  },
  {
    id: 'projet4',
    title: 'Refonte de l\'identité visuelle pour une startup',
    category: 'Design',
    image: '/projects/project-placeholder-4.jpg',
    technologies: ['Figma', 'Illustrator', 'After Effects'],
    description: 'Création d\'une nouvelle identité de marque complète incluant logo, charte graphique et animations pour les réseaux sociaux.',
    year: '2022'
  },
  {
    id: 'projet5',
    title: 'Plateforme de réservation d\'événements',
    category: 'Sites Web',
    image: '/projects/project-placeholder-5.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    description: 'Développement d\'une plateforme permettant de découvrir et réserver des événements culturels dans la région toulousaine.',
    year: '2022'
  },
  {
    id: 'projet6',
    title: 'Application de gestion pour cabinet médical',
    category: 'Applications Mobiles',
    image: '/projects/project-placeholder-6.jpg',
    technologies: ['Flutter', 'Firebase', 'Django'],
    description: 'Conception d\'une application mobile et web pour la gestion des rendez-vous et des dossiers patients d\'un cabinet médical.',
    year: '2021'
  },
];

// Variantes d'animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoaded, setIsLoaded] = useState(false);

  // Filtrer les projets en fonction de la catégorie sélectionnée
  useEffect(() => {
    if (selectedCategory === 'Tous') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Simuler un chargement pour l'animation initiale
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0F0A1A] to-[#1A1025]">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* En-tête de page */}
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
              Notre <span className="text-gradient bg-gradient-to-r from-rose-toulouse to-violet">Portfolio</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Découvrez une sélection de nos projets les plus remarquables. 
              Chaque création reflète notre engagement envers l'excellence technique et la créativité toulousaine.
            </p>
          </motion.div>

          {/* Filtres de catégories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-violet text-white shadow-lg shadow-violet/30' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grille de projets */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-rose-toulouse/30 transition-all group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="w-full h-full bg-gray-800 animate-pulse absolute"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      width={500}
                      height={300}
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-rose-toulouse text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-rose-toulouse transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center text-sm font-medium text-violet hover:text-rose-toulouse transition-colors"
                    >
                      Voir le projet
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Message si aucun projet dans la catégorie */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">
                Aucun projet dans cette catégorie pour le moment.
              </p>
              <button
                onClick={() => setSelectedCategory('Tous')}
                className="mt-4 px-6 py-2 bg-violet text-white rounded-full text-sm hover:bg-opacity-90 transition-colors"
              >
                Voir tous les projets
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
