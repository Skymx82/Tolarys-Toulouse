'use client';

import { useState, useEffect } from 'react';

// Définition du type pour un projet
type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  description: string;
  date: string; // Format YYYY-MM
  url: string;
};

// Fonction pour formater la date (YYYY-MM en mois année)
const formatDate = (dateString: string): string => {
  const [year, month] = dateString.split('-');
  if (!month) return year; // Si seulement l'année est fournie
  
  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Catégories de projets
const categories = ['Tous', 'Sites Web', 'Applications Mobiles', 'E-commerce', 'Design', 'SaaS'];

// Dates disponibles pour le filtrage
const years = ['Toutes', '2025', '2024', '2023'];

const months = [
  { id: '01', label: 'Janvier' },
  { id: '02', label: 'Février' },
  { id: '03', label: 'Mars' },
  { id: '04', label: 'Avril' },
  { id: '05', label: 'Mai' },
  { id: '06', label: 'Juin' },
  { id: '07', label: 'Juillet' },
  { id: '08', label: 'Août' },
  { id: '09', label: 'Septembre' },
  { id: '10', label: 'Octobre' },
  { id: '11', label: 'Novembre' },
  { id: '12', label: 'Décembre' },
];

// Données des projets (à remplacer par de vraies données)
// Les projets seront triés du plus récent au plus ancien par le code
const projects: Project[] = [
  {
    id: 'projet1',
    title: 'Maquette de site vitrine pour un restaurant de burgers',
    category: 'Design',
    image: '/projects/AfroBurger.png',
    technologies: ['Figma', 'Illustrator', 'After Effects'],
    description: 'Maquette de site vitrine pour un restaurant de burgers montalbanais avec réservation en ligne et présentation des menus.',
    date: '2023-07',
    url: 'https://www.figma.com/design/gWMeOMOPFMmx4sT9KTgVK0/Afro-Burger-EGR?node-id=0-1&t=dBkkxLjciDcV03L5-1',
  },
  {
    id: 'projet2',
    title: 'Maquette de site vitrine pour un Camps de vacances basket-ball',
    category: 'Design',
    image: '/projects/EldonCamp.png',
    technologies: ['Figma', 'Illustrator', 'After Effects'],
    description: 'Maquette de site vitrine pour un Camps de vacances basket-ball avec une présentation des activités et des tarifs.',
    date: '2023-09',
    url: 'https://www.figma.com/design/b9iGim4s66YsylVaf8Y1k0/Untitled?node-id=0-1&t=7seVN7EKzJUvzFKO-1',
  },
  {
    id: 'projet3',
    title: 'Portfolio Professionnel pour développeur web',
    category: 'Sites Web',
    image: '/projects/PortfolioMattias.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    description: 'Portfolio professionnel pour développeur web avec une présentation des projets et des compétences.',
    date: '2024-09',
    url: 'https://mattias.netlify.app/'
  },
  {
    id: 'projet4',
    title: 'Maquette de site vitrine pour une auto-école',
    category: 'Design',
    image: '/projects/Adam.png',
    technologies: ['Figma', 'Illustrator', 'After Effects'],
    description: 'Maquette de site vitrine pour une auto-école avec une présentation des activités et des tarifs.',
    date: '2024-09',
    url: 'https://www.figma.com/design/XBI7Y44Ev9PGD1KThBKLww/Untitled?node-id=0-1&t=Kw4BTr3kDTH8dGFi-1'
  },
  {
    id: 'projet5',
    title: 'Portfolio d\'un étudiant en Graphisme',
    category: 'Sites Web',
    image: '/projects/PortfolioLouis.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    description: 'Portfolio d\'un étudiant en Graphisme avec une présentation des projets et des compétences.',
    date: '2024-11',
    url: 'https://portfoliolouis.netlify.app/'
  },
  {
    id: 'projet6',
    title: 'Application de mise en relation avec les fournisseur chinois',
    category: 'Applications Mobiles',
    image: '/projects/BBDBuy.png',
    technologies: ['ReactNative', 'Firebase', 'Nodejs'],
    description: 'Application de mise en relation avec les fournisseur chinois avec une présentation des produits et des tarifs.',
    date: '2024-12',
    url: 'https://bbdbuy.netlify.app/'
  },
  {
    id: 'projet7',
    title: 'Site e-commerce de personnalidations de vêtements',
    category: 'E-commerce',
    image: '/projects/SmileTex.png',
    technologies: ['Nextjs', 'Supabase', 'Stripe'],
    description: 'Site e-commerce de personnalidations de vêtements avec une présentation des produits et des tarifs ainsi qu\'un module de personnalisation.',
    date: '2025-03',
    url: 'https://smiletx.vercel.app/'
  },
  {
    id: 'projet8',
    title: 'Notre site Tolarys avec une vrai DA',
    category: 'Sites Web',
    image: '/projects/Tolarys.png',
    technologies: ['Nextjs', 'Tailwind CSS', 'Framer Motion'],
    description: 'Notre site web a été réaliser en collaboration avec un artiste afin de faire un site avec une DA tournée autour de toulouse.',
    date: '2025-02',
    url: 'https://www.tolarys-toulouse.fr/'
  },
  {
    id: 'projet9',
    title: 'Notre SaaS de gestion des auto-écoles',
    category: 'SaaS',
    image: '/projects/TolarysAuto.png',
    technologies: ['Nextjs', 'Supabase', 'Framer Motion'],
    description: 'Notre SaaS de gestion des auto-écoles avec une gestion des plainng entre moniteurs, gestion du parc Auto et une gestion des payments.',
    date: '2025-01',
    url: 'https://tolarys-auto.vercel.app/'
  },
  {
    id: 'projet10',
    title: 'Site web pour AppForge',
    category: 'Sites Web',
    image: '/projects/AppForge.png',
    technologies: ['Nextjs', 'Tailwind CSS', 'Framer Motion'],
    description: 'Site web réaliser avec une estimation du prix et un portfolio modulable.',
    date: '2024-10',
    url: 'https://appforge-eight.vercel.app/'
  },
  {
    id: 'projet11',
    title: 'Site E-commerce de vente de véhicules japonais',
    category: 'E-commerce',
    image: '/projects/Prestigear.png',
    technologies: ['Prestashop', 'PHP', 'React', 'Stripe'],
    description: 'Site E-commerce de vente de véhicules japonais avec une présentation des produits et des tarifs ainsi qu\'un module de personnalisation.',
    date: '2025-03',
    url: 'https://prestigear.vercel.app/'
  },
  {
    id: 'projet12',
    title: 'Site vitrine pour Auto-Ecole',
    category: 'Sites Web',
    image: '/projects/autoecole.png',
    technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
    description: 'Site vitrine pour un auto-école avec un espace éléve.',
    date: '2025-03',
    url: 'https://auto-ashen.vercel.app/',
  },
  {
    id: 'projet13',
    title: 'Site vitrine pour JsBarber',
    category: 'Sites Web',
    image: '/projects/JsBarber.png',
    technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
    description: 'Site vitrine pour un barbier avec module de réservation.',
    date: '2025-04',
    url: 'https://jsbarber.vercel.app/',
  },
  {
    id: 'projet14',
    title: 'Site vitrine pour Etincelle Coworking',
    category: 'Sites Web',
    image: '/projects/Etincelle.png',
    technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
    description: 'Site vitrine pour un coworking avec module de réservation.',
    date: '2025-04',
    url: 'https://etincelle-coworking.vercel.app/',
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
  const [selectedYear, setSelectedYear] = useState('Toutes');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoaded, setIsLoaded] = useState(false);

  // Filtrer les projets en fonction de la catégorie et de l'année sélectionnées
  useEffect(() => {
    let filtered = [...projects]; // Créer une copie pour ne pas modifier l'original
    
    // Filtrer par catégorie
    if (selectedCategory !== 'Tous') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    // Filtrer par année
    if (selectedYear !== 'Toutes') {
      filtered = filtered.filter(project => project.date.startsWith(selectedYear));
    }
    
    // Trier les projets du plus récent au plus ancien
    filtered.sort((a, b) => {
      // Comparer les dates directement (format YYYY-MM est déjà trié correctement par ordre lexicographique)
      return b.date.localeCompare(a.date);
    });
    
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedYear, selectedMonth]);

  // Simuler un chargement pour l'animation initiale
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // S'assurer que les projets sont correctement filtrés et triés lors du montage initial
  useEffect(() => {
    // Déclencher le filtrage initial et trier du plus récent au plus ancien
    const initialFiltered = [...projects];
    
    // Trier les projets du plus récent au plus ancien
    initialFiltered.sort((a, b) => {
      // Comparer les dates directement (format YYYY-MM est déjà trié correctement par ordre lexicographique)
      return b.date.localeCompare(a.date);
    });
    
    setFilteredProjects(initialFiltered);
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

          {/* Filtres de catégories et d'années */}
          <div className="space-y-6 mb-16">
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="w-full text-center text-white text-lg mb-2">Catégories</h3>
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
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="w-full text-center text-white text-lg mb-2">Années</h3>
              {years.map((year, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedYear(year);
                    // Réinitialiser le mois sélectionné quand on change d'année
                    setSelectedMonth('');
                  }}
                  className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    selectedYear === year 
                      ? 'bg-rose-toulouse text-white shadow-lg shadow-rose-toulouse/30' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {year}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Grille de projets */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    duration: 0.4 
                  }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-rose-toulouse/30 transition-all group flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      width={500}
                      height={300}
                      priority={true}
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {project.date ? formatDate(project.date) : ''}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col h-[calc(100%-224px)]">
                    <div className="flex-grow">
                      <span className="text-rose-toulouse text-sm font-medium">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-rose-toulouse transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-rose-toulouse to-violet text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-violet/20 transition-all"
                      >
                        Visiter le site
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )) : null}
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
