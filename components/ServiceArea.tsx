import React from 'react';
import { MapPin } from 'lucide-react';

interface ServiceAreaProps {
  isWinter: boolean;
}

const ServiceArea: React.FC<ServiceAreaProps> = ({ isWinter }) => {
  const accentColor = isWinter ? 'text-winter-primary' : 'text-summer-primary';

  const locations = [
    "Brantford",
    "Brant",
    "Kitchener",
    "Cambridge",
    "Hamilton",
    "London",
    "St. George",
    "Paris"
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h2 className="font-display font-bold text-4xl uppercase tracking-tight text-gray-900 mb-4 leading-tight">
              Proudly Serving <br />
              <span className={`${accentColor} transition-colors duration-500`}>Brantford & Surrounding Areas</span>
            </h2>
            
            <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
              We are locally owned and limit our route to ensure reliable response times during storms. When you call us, you're calling a neighbor, not a call center.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {locations.map((loc, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <MapPin className={`flex-shrink-0 w-5 h-5 ${accentColor} transition-colors duration-500`} />
                  <span className="font-sans font-medium text-gray-700">{loc}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="font-sans text-sm text-gray-500">
                <strong className="text-gray-700 uppercase tracking-wide">Serving Postal Codes:</strong> N3R, N3T, N3P, N3L, and more.
              </p>
            </div>
          </div>

          {/* Right Column: Map Visual */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
            {/* 
              TODO: Replace the src below with a screenshot of your actual Google Maps zone. 
              Go to My Maps, draw your polygon, screenshot it, and upload.
            */}
            <img 
              src="/images/brantford-service-map.webp" 
              alt="Map of ClearFast Service Area in Brantford" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Interactive Overlay Hint */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
            
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
               <span className={`font-display text-xs font-bold uppercase tracking-wider ${accentColor}`}>Service Zone</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceArea;