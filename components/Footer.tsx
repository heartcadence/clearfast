import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Snowflake, Leaf } from 'lucide-react';

interface FooterProps {
  isWinter: boolean;
}

const Footer: React.FC<FooterProps> = ({ isWinter }) => {
  const bgColor = isWinter ? 'bg-winter-dark' : 'bg-summer-dark';
  // Use light theme colors for accents/hover on the dark footer background
  const accentColor = isWinter ? 'text-blue-300' : 'text-green-300';
  const hoverColor = isWinter ? 'hover:text-blue-200' : 'hover:text-green-200';

  return (
    <footer className={`${bgColor} text-white pt-20 pb-10 transition-colors duration-500 relative overflow-hidden`}>
      {/* Winter Background Decoration */}
      {isWinter && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Large subtle snowflakes positioned behind content with very low opacity to ensure no text interference */}
          <Snowflake className="absolute -top-10 -left-10 text-white opacity-[0.03] w-64 h-64 rotate-12" />
          <Snowflake className="absolute top-1/4 right-0 text-white opacity-[0.03] w-48 h-48 -rotate-12" />
          <Snowflake className="absolute bottom-0 left-1/3 text-white opacity-[0.02] w-56 h-56 rotate-45" />
          <Snowflake className="absolute -bottom-10 right-10 text-white opacity-[0.03] w-32 h-32 rotate-6" />
          <Snowflake className="absolute top-10 left-1/2 text-white opacity-[0.02] w-24 h-24" />
        </div>
      )}

      {/* Summer Background Decoration */}
      {!isWinter && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Large subtle leaves positioned behind content with very low opacity */}
          <Leaf className="absolute -top-10 -left-10 text-white opacity-[0.03] w-64 h-64 rotate-12" />
          <Leaf className="absolute top-1/4 right-0 text-white opacity-[0.03] w-48 h-48 -rotate-12" />
          <Leaf className="absolute bottom-0 left-1/3 text-white opacity-[0.02] w-56 h-56 rotate-45" />
          <Leaf className="absolute -bottom-10 right-10 text-white opacity-[0.03] w-32 h-32 rotate-6" />
          <Leaf className="absolute top-10 left-1/2 text-white opacity-[0.02] w-24 h-24" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-6">
            <div>
              <span className="font-display font-bold text-3xl uppercase tracking-tighter">ClearFast</span>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Property Care</p>
            </div>
            <p className="text-gray-300 font-sans leading-relaxed">
              Reliable Twin-Season Property Care. We handle the toughest winter storms and the hottest summer days so you don't have to.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div>
            <h3 className="font-display font-bold text-xl uppercase mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <Phone className={`mt-1 flex-shrink-0 ${accentColor}`} size={20} />
                <span className="text-gray-300 font-sans">(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className={`mt-1 flex-shrink-0 ${accentColor}`} size={20} />
                <span className="text-gray-300 font-sans">hello@clearfast.com</span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className={`mt-1 flex-shrink-0 ${accentColor}`} size={20} />
                <span className="text-gray-300 font-sans">
                  123 Maple Avenue<br />
                  Springfield, IL 62704
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl uppercase mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3 font-sans text-gray-300">
              <li><a href="#services" className={`transition-colors ${hoverColor}`}>Snow Plowing</a></li>
              <li><a href="#services" className={`transition-colors ${hoverColor}`}>Salting & De-icing</a></li>
              <li><a href="#services" className={`transition-colors ${hoverColor}`}>Lawn Mowing</a></li>
              <li><a href="#services" className={`transition-colors ${hoverColor}`}>Fertilization</a></li>
              <li><a href="#services" className={`transition-colors ${hoverColor}`}>Spring Cleanup</a></li>
              <li><a href="#services" className={`transition-colors ${hoverColor}`}>Aeration</a></li>
            </ul>
          </div>

          {/* Column 4: Service Area */}
          <div>
            <h3 className="font-display font-bold text-xl uppercase mb-6 tracking-wide">Service Area</h3>
            <ul className="space-y-3 font-sans text-gray-300">
              <li>Brantford</li>
              <li>Brant</li>
              <li>Paris</li>
              <li>Newport</li>
              <li>Ohsweken</li>
              <li>St. George</li>
              <li>Mt Vernon</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-sans">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} ClearFast Property Care. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;