'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0F0A1A] to-[#1A1A2E] text-white">
      {/* En-tête de la page */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/backgrounds/toulouse-back.png"
            alt="Skyline de Toulouse"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Mentions Légales
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-toulouse to-violet mx-auto mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Contenu des mentions légales */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-toulouse" style={{ fontFamily: 'var(--font-display)' }}>
              1. Informations légales
            </h2>
            <p className="mb-4">
              Le site web <span className="font-semibold">tolarys-toulouse.fr</span> est édité par :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold">Raison sociale :</span> Tolarys Toulouse</li>
              <li><span className="font-semibold">Numéro SIRET :</span> 94208529100014</li>
              <li><span className="font-semibold">Adresse :</span> Toulouse, France</li>
              <li><span className="font-semibold">Email :</span> tolarystoulouse@gmail.com</li>
              <li><span className="font-semibold">Téléphone :</span> +33 6 79 33 68 12</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 text-violet">Responsable de la publication</h3>
            <p className="mb-6">
              Le responsable de la publication du site est Tolarys Toulouse.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-toulouse" style={{ fontFamily: 'var(--font-display)' }}>
              2. Hébergement
            </h2>
            <p className="mb-4">
              Le site <span className="font-semibold">tolarys-toulouse.fr</span> est hébergé par :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold">Société :</span> Vercel Inc.</li>
              <li><span className="font-semibold">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><span className="font-semibold">Site web :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-rose-toulouse hover:underline">vercel.com</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-toulouse" style={{ fontFamily: 'var(--font-display)' }}>
              3. Propriété intellectuelle
            </h2>
            <p className="mb-4">
              L'ensemble du contenu du site <span className="font-semibold">tolarys-toulouse.fr</span> (textes, graphismes, logos, images, photos, vidéos, etc.) est la propriété exclusive de Tolarys Toulouse ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mb-4">
              Toute reproduction totale ou partielle de ce contenu est strictement interdite sans autorisation préalable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-toulouse" style={{ fontFamily: 'var(--font-display)' }}>
              4. Protection des données personnelles
            </h2>
            <p className="mb-4">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="mb-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : tolarystoulouse@gmail.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-toulouse" style={{ fontFamily: 'var(--font-display)' }}>
              5. Cookies
            </h2>
            <p className="mb-4">
              Le site <span className="font-semibold">tolarys-toulouse.fr</span> peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez désactiver l'utilisation de cookies en modifiant les paramètres de votre navigateur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-toulouse" style={{ fontFamily: 'var(--font-display)' }}>
              6. Loi applicable et juridiction
            </h2>
            <p className="mb-4">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-rose-toulouse to-violet rounded-full text-white font-semibold transition-transform hover:scale-105">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
