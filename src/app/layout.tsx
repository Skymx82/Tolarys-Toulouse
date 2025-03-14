import type { Metadata } from "next";
import { Montserrat, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";

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
  title: "Tolarys | Développement Web & Mobile à Toulouse",
  description: "Agence de développement web et mobile basée à Toulouse, proposant des solutions digitales créatives et performantes",
  keywords: "développement web, développement mobile, Toulouse, agence web, Tolarys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${outfit.variable} ${dancingScript.variable} antialiased`}
      >
        {/* Lenis sera intégré via un composant client */}
        {children}
      </body>
    </html>
  );
}
