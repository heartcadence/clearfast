import React from 'react';
import { ClipboardList, Truck, Smile } from 'lucide-react';
import { SeasonContent } from '../types';

interface HowItWorksProps {
  isWinter: boolean;
  content: SeasonContent;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ isWinter, content }) => {
  const steps = [
    {
      icon: ClipboardList,
      title: "REQUEST A QUOTE",
      description: "Fill out our simple form in 60 seconds. We review your property specs digitally."
    },
    {
      icon: Truck,
      title: "WE GET TO WORK",
      description: isWinter 
        ? "Our fleet arrives fully equipped when the snow falls. The job gets done efficiently."
        : "Our team arrives on schedule. We handle the mowing and detailing while you relax."
    },
    {
      icon: Smile,
      title: "BASK IN THE SPLENDOR",
      description: content.howItWorksStep3
    }
  ];

  // Dynamic colors based on season
  const borderColor = isWinter ? 'border-blue-700' : 'border-green-600';
  const iconColor = isWinter ? 'text-blue-700' : 'text-green-600';
  const hoverBorder = isWinter ? 'hover:border-blue-500' : 'hover:border-green-500';
  const hoverShadow = isWinter ? 'hover:shadow-blue-900/20' : 'hover:shadow-green-900/20';

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-gray-900 uppercase tracking-tight">
            How It Works
          </h2>
          <div className={`w-24 h-2 mx-auto mt-4 ${isWinter ? 'bg-blue-700' : 'bg-green-600'} transition-colors duration-500`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`
                flex flex-col items-center text-center p-8 rounded-lg border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl
                ${borderColor} ${hoverBorder} ${hoverShadow}
              `}
            >
              <div className="mb-6 p-4 rounded-full bg-gray-50">
                <step.icon className={`w-12 h-12 ${iconColor}`} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4 uppercase">
                {step.title}
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
