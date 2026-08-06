import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-20 border-t border-[#D7E2EA]/10 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <span className="text-[#D7E2EA]/60 uppercase text-sm font-light tracking-widest block mb-2">
              Let&apos;s Connect
            </span>
            <h3 className="hero-heading text-4xl sm:text-6xl font-black uppercase tracking-tight">
              Start a Project
            </h3>
          </div>

          <a 
            href="mailto:jack@3dcreator.dev" 
            className="inline-flex items-center gap-3 bg-[#D7E2EA]/10 hover:bg-[#D7E2EA]/20 border border-[#D7E2EA]/30 text-[#D7E2EA] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-[#B600A8]" />
            <span>jack@3dcreator.dev</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-6 pt-12 border-t border-[#D7E2EA]/10 text-sm text-[#D7E2EA]/60 font-light">
          <div>
            © {new Date().getFullYear()} Jack — 3D Creator. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D7E2EA] transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#D7E2EA] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#D7E2EA] transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#D7E2EA] transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>

          <button 
            onClick={scrollToTop}
            className="hover:text-[#D7E2EA] uppercase tracking-widest text-xs font-medium cursor-pointer transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
