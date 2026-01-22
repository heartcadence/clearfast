import React from 'react';
import { SeasonContent } from '../types';

interface ServicesProps {
  isWinter: boolean;
  content: SeasonContent;
}

const Services: React.FC<ServicesProps> = ({ isWinter, content }) => {
  const cardBorder = isWinter ? 'border-winter-primary' : 'border-summer-primary';
  const iconBg = isWinter ? 'bg-winter-primary' : 'bg-summer-primary';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="font-sans text-xl text-gray-500 max-w-2xl mx-auto">
            Professional solutions tailored for the {isWinter ? 'coldest' : 'hottest'} months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service, index) => (
            <div 
              key={index} 
              className={`
                bg-white p-8 border-t-8 shadow-xl hover:-translate-y-2 transition-transform duration-300
                ${cardBorder}
              `}
            >
              <div className={`w-14 h-14 ${iconBg} text-white flex items-center justify-center mb-6 shadow-md transition-colors duration-500`}>
                <service.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-gray-900 mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="font-sans text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;