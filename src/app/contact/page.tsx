'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Variantes d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// Données des bureaux
const officeLocations = [
  {
    city: 'Toulouse',
    address: '15 Rue des Fleurs, 31000 Toulouse',
    phone: '+33 5 61 23 45 67',
    email: 'toulouse@tolarys.fr',
    hours: 'Lun - Ven: 9h - 18h'
  }
];

export default function Contact() {
  // État du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    services: [] as string[]
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  // Refs pour l'animation au scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: false, amount: 0.3 });
  
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { once: false, amount: 0.3 });

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestion des checkboxes pour les services
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, services: [...prev.services, value] };
      } else {
        return { ...prev, services: prev.services.filter(service => service !== value) };
      }
    });
  };

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulation d'envoi d'email (à remplacer par une vraie API d'envoi d'email)
    setTimeout(() => {
      // Simulation de succès (dans un vrai scenario, vérifier la réponse de l'API)
      setFormStatus('success');
      
      // Reset du formulaire après quelques secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          budget: '',
          services: []
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

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
              Contactez <span className="text-gradient bg-gradient-to-r from-rose-toulouse to-violet">Tolarys</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Discutons de votre projet et découvrez comment notre expertise toulousaine 
              peut donner vie à vos idées digitales.
            </motion.p>
          </motion.div>
        </div>

        {/* Contenu principal: Formulaire et Infos */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Formulaire de contact */}
              <motion.div
                ref={formRef}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10"
                variants={containerVariants}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-white mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                  variants={itemVariants}
                >
                  Parlez-nous de votre projet
                </motion.h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-toulouse focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-toulouse focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">Téléphone (optionnel)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-toulouse focus:border-transparent"
                        placeholder="Votre numéro"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2">Sujet</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-toulouse focus:border-transparent"
                        placeholder="Objet de votre message"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-toulouse focus:border-transparent resize-none"
                      placeholder="Détaillez votre projet ou votre demande..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="budget" className="block text-gray-300 mb-2">Budget estimé</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-rose-toulouse focus:border-transparent"
                    >
                      <option value="" className="bg-[#1A1025]">Sélectionnez un budget</option>
                      <option value="< 5k" className="bg-[#1A1025]">Moins de 5 000 €</option>
                      <option value="5k-10k" className="bg-[#1A1025]">5 000 € - 10 000 €</option>
                      <option value="10k-25k" className="bg-[#1A1025]">10 000 € - 25 000 €</option>
                      <option value="25k-50k" className="bg-[#1A1025]">25 000 € - 50 000 €</option>
                      <option value="> 50k" className="bg-[#1A1025]">Plus de 50 000 €</option>
                    </select>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <span className="block text-gray-300 mb-3">Services qui vous intéressent</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'web', label: 'Développement Web' },
                        { id: 'mobile', label: 'Applications Mobiles' },
                        { id: 'design', label: 'Design UX/UI' },
                        { id: 'ecommerce', label: 'E-commerce' },
                        { id: 'consulting', label: 'Conseil & Stratégie' },
                        { id: 'other', label: 'Autre' }
                      ].map(service => (
                        <div key={service.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service.id}
                            name="services"
                            value={service.id}
                            checked={formData.services.includes(service.id)}
                            onChange={handleServiceChange}
                            className="h-4 w-4 text-rose-toulouse focus:ring-rose-toulouse border-gray-600 bg-transparent rounded"
                          />
                          <label htmlFor={service.id} className="ml-2 text-gray-300">
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className={`w-full py-4 rounded-md text-white font-medium transition-all ${
                        formStatus === 'sending'
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-rose-toulouse to-violet hover:from-violet hover:to-rose-toulouse shadow-lg hover:shadow-rose-toulouse/30'
                      }`}
                    >
                      {formStatus === 'sending' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : formStatus === 'success' ? (
                        <span className="flex items-center justify-center">
                          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Message envoyé !
                        </span>
                      ) : (
                        'Envoyer votre message'
                      )}
                    </button>
                    
                    {formStatus === 'error' && (
                      <p className="mt-2 text-red-500 text-sm">
                        Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
                      </p>
                    )}
                  </motion.div>
                </form>
              </motion.div>
              
              {/* Informations de contact */}
              <div className="space-y-8 lg:space-y-12">
                {/* Nos bureaux */}
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                >
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                    variants={itemVariants}
                  >
                    Nos bureaux
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {officeLocations.map((office, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        variants={itemVariants}
                      >
                        <h3 className="text-xl font-bold text-white mb-3">{office.city}</h3>
                        <div className="space-y-3 text-gray-300">
                          <p className="flex items-start">
                            <svg className="h-5 w-5 mr-3 text-rose-toulouse flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            {office.address}
                          </p>
                          <p className="flex items-center">
                            <svg className="h-5 w-5 mr-3 text-rose-toulouse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            {office.phone}
                          </p>
                          <p className="flex items-center">
                            <svg className="h-5 w-5 mr-3 text-rose-toulouse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            {office.email}
                          </p>
                          <p className="flex items-center">
                            <svg className="h-5 w-5 mr-3 text-rose-toulouse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {office.hours}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* FAQ */}
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                >
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                    variants={itemVariants}
                  >
                    Questions fréquentes
                  </motion.h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        question: "Quel est le délai moyen pour un projet web ?",
                        answer: "Le délai dépend de la complexité du projet. Un site vitrine peut prendre 4-6 semaines, tandis qu'une application web plus complexe peut nécessiter 3-6 mois. Nous établissons un planning détaillé lors de la phase de découverte."
                      },
                      {
                        question: "Comment se déroule la collaboration ?",
                        answer: "Nous travaillons de manière agile avec des points réguliers. Vous êtes impliqué à chaque étape clé du projet pour valider les orientations et apporter vos retours. Notre méthodologie assure transparence et efficacité."
                      },
                      {
                        question: "Proposez-vous des services de maintenance ?",
                        answer: "Oui, nous proposons différentes formules de maintenance pour assurer le bon fonctionnement de votre site ou application dans la durée. Ces formules incluent mises à jour de sécurité, sauvegardes, et support technique."
                      }
                    ].map((faq, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        variants={itemVariants}
                      >
                        <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                        <p className="text-gray-300">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section 
          ref={mapRef}
          className="py-16 md:py-24 relative"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={mapInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
                variants={itemVariants}
              >
                Nous trouver
              </motion.h2>
            </motion.div>
            
            <motion.div
              className="relative w-full h-[400px] rounded-xl overflow-hidden border border-white/10"
              variants={itemVariants}
              initial="hidden"
              animate={mapInView ? "visible" : "hidden"}
            >
              {/* Ici, intégrer une carte Google Maps ou OpenStreetMap */}
              <div className="absolute inset-0 bg-violet/20 flex items-center justify-center text-white text-center p-8">
                <div>
                  <p className="mb-4">Carte interactive à intégrer ici.</p>
                  <p>Nos bureaux sont situés au cœur de Toulouse, facilement accessibles en transports en commun.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
