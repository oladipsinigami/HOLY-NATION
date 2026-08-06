import React from 'react';
import { FadeIn } from './FadeIn';

const servicesData = [
  {
    number: "01",
    title: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    number: "02",
    title: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    number: "03",
    title: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    number: "04",
    title: "Branding",
    description: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence."
  },
  {
    number: "05",
    title: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADING */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2 
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
          >
            Services
          </h2>
        </FadeIn>

        {/* SERVICES LIST */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {servicesData.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={30}>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-4 sm:gap-10 hover:px-4 transition-all duration-300 group cursor-default">
                {/* NUMBER */}
                <div 
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black leading-none text-[#0C0C0C] group-hover:translate-x-2 transition-transform duration-300"
                >
                  {service.number}
                </div>

                {/* NAME & DESCRIPTION */}
                <div className="flex flex-col gap-2 max-w-2xl sm:text-right md:text-left">
                  <h3 
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  >
                    {service.title}
                  </h3>
                  <p 
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
