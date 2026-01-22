import React from 'react';
import { SeasonContent } from '../types';
import { ClipboardList, Truck, Smile } from 'lucide-react';

interface HowItWorksProps {
  isWinter: boolean;
  content: SeasonContent;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ isWinter, content }) => {
  const iconColor = isWinter ? 'text-winter-primary' : 'text-summer-primary';

  const steps = [
    {
      title: "Request a Quote",
      text: "Fill out our simple form in 60 seconds. We review your property specs digitally.",
      icon: ClipboardList
    },
    {
      title: "We Get to Work",
      text: "Our blocky trucks arrive fully equipped. The job gets done efficiently and correctly.",
      icon: Truck
    },
    {
      title: "Bask in the Splendor",
      text: content.howItWorksStep3,
      icon: Smile
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-display text-4xl font-bold uppercase tracking-tight text-gray-900 mb-4`}>
            How It Works
          </h2>
          <div className={`h-2 w-24 mx-auto ${isWinter ? 'bg-winter-primary' : 'bg-summer-primary'} transition-colors duration-500`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`
                w-24 h-24 flex items-center justify-center border-4 rounded-xl mb-6 bg-white shadow-lg transition-colors duration-500
                ${isWinter ? 'border-winter-primary' : 'border-summer-primary'}
              `}>
                <step.icon size={48} className={`${iconColor} transition-colors duration-500`} />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed max-w-xs">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;