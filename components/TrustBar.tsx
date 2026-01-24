import React from 'react';
import { Award, MapPin } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-200 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 lg:space-x-24">
          
          {/* Badge 2 */}
          <div className="flex items-center space-x-3 group cursor-default">
            <Award 
              className="text-gray-600 w-8 h-8 md:w-6 md:h-6 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-gray-800 group-hover:drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]" 
              strokeWidth={1.5} 
            />
            <span className="font-sans font-bold text-sm text-gray-700 uppercase tracking-widest transition-colors duration-300 group-hover:text-gray-900">
              Satisfaction Guaranteed
            </span>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center space-x-3 group cursor-default">
            <MapPin 
              className="text-gray-600 w-8 h-8 md:w-6 md:h-6 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-gray-800 group-hover:drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]" 
              strokeWidth={1.5} 
            />
            <span className="font-sans font-bold text-sm text-gray-700 uppercase tracking-widest transition-colors duration-300 group-hover:text-gray-900">
              Locally Owned & Operated
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBar;