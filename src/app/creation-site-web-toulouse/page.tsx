'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

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

export default function CreationSiteWebToulouse() {
  // Refs pour les animations basées sur le scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  
  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: false, amount: 0.3 });
  
  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: false, amount: 0.3 });
  
  const faqRef = useRef<HTMLDivElement>(null);
  const faqInView = useInView(faqRef, { once: false, amount: 0.3 });
  
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
              Création de <span className="text-gradient bg-gradient-to-r from-rose-toulouse to-violet">Site Web à Toulouse</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Agence web spécialisée dans la création de sites internet professionnels, 
              e-commerce et applications web sur-mesure à Toulouse.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
              variants={itemVariants}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-md text-white bg-rose-toulouse hover:bg-opacity-80 
                transition-all shadow-lg hover:shadow-rose-toulouse/30"
              >
                Demander un devis gratuit
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="tel:0679336812" 
                className="inline-flex items-center justify-center px-6 py-3 border border-rose-toulouse 
                text-base font-medium rounded-md text-white hover:bg-rose-toulouse/10 
                transition-all"
              >
                Appeler au 06 79 33 68 12
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Section Avantages */}
        <section 
          ref={benefitsRef}
          className="py-16 bg-gradient-to-b from-[#1A1025] to-[#180B28]"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Pourquoi choisir Tolarys pour votre <span className="text-rose-toulouse">site web à Toulouse</span> ?
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Nous concevons des sites web performants, esthétiques et optimisés pour le référencement.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              {/* Avantage 1 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-rose-toulouse/30 transition-all"
                variants={itemVariants}
              >
                <div className="text-rose-toulouse text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-3">Expertise locale toulousaine</h3>
                <p className="text-gray-300">
                  Nous connaissons parfaitement le marché toulousain et les besoins spécifiques des entreprises locales.
                </p>
              </motion.div>
              
              {/* Avantage 2 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-rose-toulouse/30 transition-all"
                variants={itemVariants}
              >
                <div className="text-rose-toulouse text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-white mb-3">Sites web sur-mesure</h3>
                <p className="text-gray-300">
                  Chaque projet est unique. Nous créons des sites web personnalisés qui reflètent votre identité et vos objectifs.
                </p>
              </motion.div>
              
              {/* Avantage 3 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-rose-toulouse/30 transition-all"
                variants={itemVariants}
              >
                <div className="text-rose-toulouse text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-3">Design responsive</h3>
                <p className="text-gray-300">
                  Tous nos sites s'adaptent parfaitement à tous les appareils : ordinateurs, tablettes et smartphones.
                </p>
              </motion.div>
              
              {/* Avantage 4 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-rose-toulouse/30 transition-all"
                variants={itemVariants}
              >
                <div className="text-rose-toulouse text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-3">SEO optimisé</h3>
                <p className="text-gray-300">
                  Nous optimisons votre site pour les moteurs de recherche afin d'améliorer votre visibilité en ligne.
                </p>
              </motion.div>
              
              {/* Avantage 5 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-rose-toulouse/30 transition-all"
                variants={itemVariants}
              >
                <div className="text-rose-toulouse text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Sécurité renforcée</h3>
                <p className="text-gray-300">
                  Nous mettons en place les meilleures pratiques de sécurité pour protéger votre site et vos données.
                </p>
              </motion.div>
              
              {/* Avantage 6 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-rose-toulouse/30 transition-all"
                variants={itemVariants}
              >
                <div className="text-rose-toulouse text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance optimale</h3>
                <p className="text-gray-300">
                  Nous optimisons la vitesse de chargement de votre site pour une expérience utilisateur fluide.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section FAQ */}
        <section 
          ref={faqRef}
          className="py-16 bg-gradient-to-b from-[#180B28] to-[#1A1025]"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Questions fréquentes sur la <span className="text-rose-toulouse">création de site web à Toulouse</span>
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="max-w-3xl mx-auto space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
            >
              {/* Question 1 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-white mb-3">Quel est le prix d'un site web à Toulouse ?</h3>
                <p className="text-gray-300">
                  Le coût d'un site web à Toulouse varie en fonction de vos besoins spécifiques. Un site vitrine simple 
                  débute généralement à partir de 1500€, tandis qu'un site e-commerce ou une application web complexe 
                  peut nécessiter un investissement plus important. Contactez-nous pour un devis personnalisé gratuit.
                </p>
              </motion.div>
              
              {/* Question 2 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-white mb-3">Combien de temps faut-il pour créer un site web ?</h3>
                <p className="text-gray-300">
                  La durée de création d'un site web varie selon la complexité du projet. Un site vitrine peut être 
                  réalisé en 2 à 4 semaines, tandis qu'un site e-commerce ou une application web peut nécessiter 
                  de 1 à 3 mois. Nous établissons un calendrier précis dès le début du projet.
                </p>
              </motion.div>
              
              {/* Question 3 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-white mb-3">Comment améliorer le référencement de mon site web à Toulouse ?</h3>
                <p className="text-gray-300">
                  Pour améliorer votre référencement local à Toulouse, nous mettons en place une stratégie SEO complète : 
                  optimisation technique du site, création de contenus pertinents ciblant des mots-clés locaux, 
                  inscription sur Google My Business, et développement de backlinks de qualité auprès d'entreprises 
                  et médias toulousains.
                </p>
              </motion.div>
              
              {/* Question 4 */}
              <motion.div 
                className="bg-white/5 p-6 rounded-lg border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-white mb-3">Proposez-vous la maintenance de sites web ?</h3>
                <p className="text-gray-300">
                  Oui, nous proposons des contrats de maintenance pour assurer le bon fonctionnement de votre site web 
                  dans la durée. Nos services incluent les mises à jour de sécurité, les sauvegardes régulières, 
                  le monitoring des performances et un support technique réactif.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-center mt-12"
              variants={containerVariants}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
            >
              <motion.a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-md text-white bg-rose-toulouse hover:bg-opacity-80 
                transition-all shadow-lg hover:shadow-rose-toulouse/30"
                variants={itemVariants}
              >
                Discuter de votre projet
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-16 bg-gradient-to-b from-[#1A1025] to-[#0F0A1A]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à lancer votre projet web à <span className="text-rose-toulouse">Toulouse</span> ?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:tolarystoulouse@gmail.com" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-md text-white bg-rose-toulouse hover:bg-opacity-80 
                transition-all shadow-lg hover:shadow-rose-toulouse/30"
              >
                tolarystoulouse@gmail.com
              </a>
              <a 
                href="tel:0679336812" 
                className="inline-flex items-center justify-center px-6 py-3 border border-rose-toulouse 
                text-base font-medium rounded-md text-white hover:bg-rose-toulouse/10 
                transition-all"
              >
                06 79 33 68 12
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
