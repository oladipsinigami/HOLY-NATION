import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="main-wrapper min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: MARQUEE */}
      <MarqueeSection />

      {/* SECTION 3: ABOUT */}
      <AboutSection />

      {/* SECTION 4: SERVICES */}
      <ServicesSection />

      {/* SECTION 5: PROJECTS */}
      <ProjectsSection />

      {/* FOOTER / CONTACT */}
      <Footer />
    </div>
  );
};

export default App;
