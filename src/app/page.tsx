import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import AboutPreview from './components/AboutPreview';
import ProjectsPreview from './components/ProjectsPreview';
import ContactCTA from './components/ContactCTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#180B28]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Section Héro avec animation dynamique */}
        <HeroSection />
        
        {/* Présentation des services */}
        <ServicesPreview />
        
        {/* À propos de Tolarys et son ancrage à Toulouse */}
        <AboutPreview />
        
        {/* Présentation des projets avec effet de scrolling cinématique */}
        <ProjectsPreview />
        
        {/* CTA Contact avec éléments rappelant les quartiers toulousains */}
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
}
