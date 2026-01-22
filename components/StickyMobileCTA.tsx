import React from 'react';
import { SeasonContent } from '../types';

interface StickyMobileCTAProps {
  isWinter: boolean;
  content: SeasonContent;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ isWinter, content }) => {
  // Unified Orange CTA for both seasons
  const buttonBg = 'bg-orange-600 active:bg-orange-700 shadow-orange-900/50 border-orange-700';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.1)]">
      <a
        href="#contact"
        className={`
          block w-full text-center font-display font-bold text-xl uppercase tracking-widest 
          py-4 rounded-sm shadow-lg text-white transition-all duration-300 border-b-4 active:border-b-0 active:translate-y-1
          ${buttonBg}
        `}
      >
        {content.ctaText}
      </a>
    </div>
  );
};

export default StickyMobileCTA;