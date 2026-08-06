import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const projectsData: Project[] = [
  {
    number: "01",
    category: "Client",
    name: "Nextlevel Studio",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    number: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    number: "03",
    category: "Client",
    name: "Solaris Digital",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  }
];

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden"
      >
        {/* TOP ROW */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span 
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
              className="font-black text-[#D7E2EA] leading-none"
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm font-light tracking-wider">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-2xl md:text-3xl uppercase tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* BOTTOM ROW - 2-COLUMN IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 h-full min-h-[320px]">
          {/* LEFT COLUMN (40% width on md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <img 
              src={project.col1Img1} 
              alt={`${project.name} preview 1`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/20 hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src={project.col1Img2} 
              alt={`${project.name} preview 2`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/20 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* RIGHT COLUMN (60% width on md:col-span-7) */}
          <div className="md:col-span-7 h-full">
            <img 
              src={project.col2Img} 
              alt={`${project.name} main preview`}
              className="w-full h-full min-h-[300px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/20 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-32 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-24">
          <h2 
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            Project
          </h2>
        </FadeIn>

        {/* STICKY STACKING CARDS CONTAINER */}
        <div className="relative flex flex-col gap-12 pb-24">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.number}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
