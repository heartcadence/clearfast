import React from 'react';
import { SeasonContent } from '../types';

interface HeroProps {
  isWinter: boolean;
  content: SeasonContent;
}

const Hero: React.FC<HeroProps> = ({ isWinter, content }) => {
  // Static Image Logic
  // Using two separate elements for cross-fade transition
  const winterImage = '/images/hero-winter.webp';
  const summerImage = '/images/hero-summer.webp';

  // Dark semi-transparent overlay as requested (bg-black/50) to make white text pop
  const overlayColor = 'bg-black/50';
  
  // Unified Button Color: Bright Safety Orange for both seasons for maximum visibility
  const buttonBg = 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-900/50';

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* Summer Background Layer (Base) */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${!isWinter ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${summerImage})` }}
        aria-hidden="true"
      ></div>

      {/* Winter Background Layer (Overlay) */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${isWinter ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${winterImage})` }}
        aria-hidden="true"
      ></div>
      
      {/* Dark Overlay for Readability */}
      <div className={`absolute inset-0 ${overlayColor} pointer-events-none`}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight mb-6 drop-shadow-lg transition-all duration-500">
          {content.heroHeadline}
        </h1>
        
        <p 
          id="hero-sub"
          className="font-sans text-xl sm:text-2xl text-gray-100 mb-10 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md"
        >
          {content.heroSubheadline}
        </p>
        
        <a 
          href="#contact"
          id="hero-cta"
          className={`
            inline-block font-display font-bold text-2xl uppercase tracking-widest 
            py-5 px-12 rounded-sm shadow-xl transition-all duration-300 transform hover:-translate-y-1
            ${buttonBg}
          `}
        >
          {content.ctaText}
        </a>
      </div>

      {/* Seasonal Decorative Element (Optional fade at bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default Hero;