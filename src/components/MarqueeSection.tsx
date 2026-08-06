import React, { useRef, useState, useEffect } from 'react';

const marqueeImagesRow1 = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const marqueeImagesRow2 = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Tripled = [...marqueeImagesRow1, ...marqueeImagesRow1, ...marqueeImagesRow1];
  const row2Tripled = [...marqueeImagesRow2, ...marqueeImagesRow2, ...marqueeImagesRow2];

  const row1Translate = scrollOffset - 200;
  const row2Translate = -(scrollOffset - 200);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* ROW 1 - Moves RIGHT on scroll */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-3 w-max"
            style={{ 
              transform: `translate3d(${row1Translate}px, 0px, 0px)`,
              willChange: 'transform'
            }}
          >
            {row1Tripled.map((url, i) => (
              <div 
                key={`row1-${i}`}
                className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818] border border-white/5 shadow-xl hover:border-white/20 transition-all duration-300"
              >
                <img 
                  src={url} 
                  alt={`Showcase ${i}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 - Moves LEFT on scroll */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-3 w-max"
            style={{ 
              transform: `translate3d(${row2Translate}px, 0px, 0px)`,
              willChange: 'transform'
            }}
          >
            {row2Tripled.map((url, i) => (
              <div 
                key={`row2-${i}`}
                className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818] border border-white/5 shadow-xl hover:border-white/20 transition-all duration-300"
              >
                <img 
                  src={url} 
                  alt={`Showcase ${i}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
