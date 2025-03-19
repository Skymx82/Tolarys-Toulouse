import type { Metadata } from "next";
import { Montserrat, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import SchemaOrg from "./components/SchemaOrg";

// Police principale moderne pour le contenu
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

// Police d'affichage moderne pour les titres
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

// Police manuscrite pour les accents artistiques
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Tolarys | Création de Sites Web & Mobile à Toulouse - Agence Web Professionnelle",
  description: "Agence de création de sites web à Toulouse ✓ Sites sur-mesure ✓ E-commerce ✓ Responsive ✓ SEO local ✓ Devis gratuit ☎ 06 79 33 68 12",
  keywords: "création site web Toulouse, agence web Toulouse, développement web Toulouse, site internet Toulouse, création site e-commerce Toulouse, prix site web Toulouse",
  alternates: {
    canonical: 'https://tolarys-toulouse.fr',
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
      { url: '/images/logos/logo.png', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.png', sizes: 'any', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/logo.png' }
    ]
  },
  openGraph: {
    title: 'Tolarys | Création de Sites Web & Mobile à Toulouse - Agence Web Professionnelle',
    description: 'Agence de création de sites web à Toulouse ✓ Sites sur-mesure ✓ E-commerce ✓ Responsive ✓ SEO local ✓ Devis gratuit',
    url: 'https://tolarys-toulouse.fr',
    siteName: 'Tolarys Toulouse',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://tolarys-toulouse.fr/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo Tolarys Toulouse',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tolarys | Création de Sites Web & Mobile à Toulouse',
    description: 'Agence de création de sites web à Toulouse ✓ Sites sur-mesure ✓ E-commerce ✓ Responsive ✓ SEO local',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Tolarys Toulouse' }],
  publisher: 'Tolarys Toulouse',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: 'Création de sites web',
  creator: 'Tolarys Toulouse',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="FR-31" />
        <meta name="geo.placename" content="Toulouse" />
        <meta name="geo.position" content="43.604652;1.444209" />
        <meta name="ICBM" content="43.604652, 1.444209" />
        <meta name="google-site-verification" content="HC3bLk9DOOzJGj0bHYYFVZrZhzAEKDkSJpekq3ggU68" />
        <link rel="alternate" hrefLang="fr-fr" href="https://tolarys-toulouse.fr" />
        
        {/* Favicons pour tous les navigateurs et appareils */}
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="mask-icon" href="/logo.png" color="#5bbad5" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Autres balises pour assurer la visibilité du logo */}
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="fluid-icon" href="/logo.png" title="Tolarys Toulouse" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${montserrat.variable} ${outfit.variable} ${dancingScript.variable} antialiased`}
      >
        {/* Lenis sera intégré via un composant client */}
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
