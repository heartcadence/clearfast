import React, { useState } from 'react';
import { Menu, X, Snowflake, Sun } from 'lucide-react';

interface NavbarProps {
  isWinter: boolean;
  toggleSeason: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isWinter, toggleSeason }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navigation order as requested:
  // 1. Services 2. How It Works 3. Service Area 4. About Us 5. Get a Quote (CTA Button)
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'About Us', href: '#about' },
  ];

  const themeColor = isWinter ? 'text-winter-primary' : 'text-summer-primary';
  // Unified Orange CTA
  const buttonBg = 'bg-orange-600 hover:bg-orange-700 text-white';
  const buttonText = 'Get a Quote';

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-lg border-b-4 transition-colors duration-500" style={{ borderColor: isWinter ? '#004aad' : '#2e7d32' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`font-display font-bold text-3xl tracking-tighter uppercase ${themeColor} transition-colors duration-500`}>
              ClearFast
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Toggle Switch */}
            <div 
              onClick={toggleSeason}
              className={`relative inline-flex items-center h-10 w-24 rounded-full cursor-pointer transition-colors duration-500 ${isWinter ? 'bg-gray-200' : 'bg-gray-200'}`}
              title="Toggle Season"
              role="button"
              aria-label="Toggle Season"
            >
              <div className={`absolute left-0 w-1/2 h-full flex items-center justify-center transition-opacity duration-300 ${isWinter ? 'opacity-100' : 'opacity-30'}`}>
                <Snowflake size={20} className="text-winter-primary" />
              </div>
              <div className={`absolute right-0 w-1/2 h-full flex items-center justify-center transition-opacity duration-300 ${!isWinter ? 'opacity-100' : 'opacity-30'}`}>
                <Sun size={20} className="text-summer-primary" />
              </div>
              
              <span 
                className={`
                  absolute left-1 top-1 bg-white w-10 h-8 rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center
                  ${isWinter ? 'translate-x-0' : 'translate-x-11'}
                `}
              >
                {isWinter ? <Snowflake size={18} className="text-winter-primary" /> : <Sun size={18} className="text-summer-primary" />}
              </span>
            </div>

            {/* Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display font-medium text-gray-700 hover:text-gray-900 tracking-wide uppercase text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* CTA - Fixed Width to prevent layout shift */}
            <a
              href="#contact"
              className={`font-display uppercase tracking-wider py-2 font-bold text-sm shadow-md transition-colors duration-500 ${buttonBg} w-52 text-center flex justify-center items-center`}
            >
              {buttonText}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
             {/* Toggle Switch Mobile - Enhanced Visibility */}
             <button 
              onClick={toggleSeason}
              className={`mr-4 p-3 rounded-full transition-colors duration-300 shadow-sm border border-gray-100 ${isWinter ? 'bg-blue-50' : 'bg-green-50'}`}
              aria-label="Toggle Season"
            >
              {isWinter 
                ? <Snowflake className="text-winter-primary w-6 h-6" /> 
                : <Sun className="text-summer-primary w-6 h-6" />
              }
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Open menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display block px-3 py-4 text-xl font-bold uppercase text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`font-display block w-full text-center px-5 py-4 mt-4 text-xl font-bold uppercase shadow-md ${buttonBg}`}
            >
              {buttonText}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;