import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Snowflake, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white py-12 font-sans border-t border-gray-800 overflow-hidden">
      
      {/* --- BACKGROUND DECORATION (The "Embedded" Images) --- */}
      {/* Winter Side (Left) */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full overflow-hidden pointer-events-none">
        <Snowflake 
          className="absolute -top-10 -left-10 text-blue-900 opacity-10 transform -rotate-12" 
          size={400} 
          strokeWidth={0.5} 
        />
        <Snowflake 
          className="absolute bottom-10 left-20 text-blue-500 opacity-5" 
          size={100} 
        />
      </div>

      {/* Summer Side (Right) */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden pointer-events-none">
        <Leaf 
          className="absolute -bottom-20 -right-10 text-green-900 opacity-10 transform rotate-45" 
          size={400} 
          strokeWidth={0.5} 
        />
        <Leaf 
          className="absolute top-10 right-20 text-green-500 opacity-5" 
          size={100} 
        />
      </div>

      {/* --- CONTENT (Sits on top of the background) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-display font-bold text-xl uppercase mb-6 tracking-wide text-gray-100 flex items-center gap-2">
                Property Care
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Reliable Twin-Season Property Care. We handle the toughest winter storms and the hottest summer days so you don't have to.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div>
              <h3 className="font-display font-bold text-xl uppercase mb-6 tracking-wide text-gray-100">Contact</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-gray-400" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-gray-400" />
                  <span>hello@clearfast.ca</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-gray-400" />
                  <span>Brantford, ON<br />Serving Brant & Hamilton</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
               <h3 className="font-display font-bold text-xl uppercase mb-6 tracking-wide text-gray-100">Services</h3>
               <ul className="space-y-3 text-gray-300">
                 <li><a href="#services" className="hover:text-white transition-colors">Snow Plowing</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Salting & De-icing</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Lawn Mowing</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Fertilization</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Spring Cleanup</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Aeration</a></li>
               </ul>
            </div>

            {/* Column 4: Service Area */}
            <div>
              <h3 className="font-display font-bold text-xl uppercase mb-6 tracking-wide text-gray-100">Service Area</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Brantford</li>
                <li>Brant</li>
                <li>Kitchener</li>
                <li>Cambridge</li>
                <li>Hamilton</li>
                <li>London</li>
                <li>St. George</li>
                <li>Paris</li>
              </ul>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
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
