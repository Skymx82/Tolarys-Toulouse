'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation des liens
const linkVariants = {
  initial: { y: -5, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * i,
      duration: 0.3,
    },
  }),
  hover: {
    scale: 1.05,
    color: 'var(--rose-toulouse)',
    transition: {
      duration: 0.2,
    },
  },
};

// Animation du logo
const logoVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

// Animation du menu mobile
const mobileMenuVariants = {
  closed: { opacity: 0, x: '100%' },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gérer le changement de style lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu lorsqu'on clique sur un lien en version mobile
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0F0A1A]/90 backdrop-blur-md py-2 shadow-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div variants={logoVariants} initial="initial" animate="animate">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Tolarys Logo"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span 
              className={`text-xl md:text-2xl font-bold transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tolarys
            </span>
          </Link>
        </motion.div>

        {/* Navigation Desktop */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Link
                href={link.path}
                className={`relative text-base font-medium transition-colors hover:text-primary
                after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-rose-toulouse 
                after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
                ${isScrolled ? 'text-foreground' : 'text-white'}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bouton du menu mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            } ${isScrolled ? 'bg-foreground' : 'bg-white'}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            } ${isScrolled ? 'bg-foreground' : 'bg-white'}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            } ${isScrolled ? 'bg-foreground' : 'bg-white'}`}
          ></span>
        </button>

        {/* Menu mobile */}
        <motion.div
          className="fixed top-0 right-0 h-screen w-screen md:hidden bg-white dark:bg-[#0F0A1A] p-8"
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMobileMenuOpen ? 'open' : 'closed'}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                <Link
                  href={link.path}
                  className="text-2xl font-semibold hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
