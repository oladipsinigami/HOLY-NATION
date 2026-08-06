import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* 4 DECORATIVE 3D CORNER IMAGES */}
      {/* Top-Left: Moon Icon */}
      <FadeIn 
        delay={0.1} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="3D Moon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] animate-pulse"
        />
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn 
        delay={0.25} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D Shape"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        />
      </FadeIn>

      {/* Top-Right: Lego Icon */}
      <FadeIn 
        delay={0.15} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="3D Lego"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        />
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn 
        delay={0.3} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D Spheres Group"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        />
      </FadeIn>

      {/* SECTION CONTENT CONTAINER */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto">
        {/* HEADING */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2 
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            About me
          </h2>
        </FadeIn>

        {/* CHARACTER-BY-CHARACTER SCROLL REVEAL PARAGRAPH */}
        <div className="mb-16 sm:mb-20 md:mb-24 px-4">
          <AnimatedText
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="font-medium leading-relaxed max-w-[560px] mx-auto text-center"
          />
        </div>

        {/* CONTACT BUTTON */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={scrollToContact} />
        </FadeIn>
      </div>
    </section>
  );
};
