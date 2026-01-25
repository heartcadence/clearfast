import React from 'react';

interface AboutProps {
  isWinter: boolean;
}

const About: React.FC<AboutProps> = ({ isWinter }) => {
  const accentColor = isWinter ? 'text-winter-primary' : 'text-summer-primary';
  const borderColor = isWinter ? 'border-winter-primary' : 'border-summer-primary';

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-6">
              Local Experts, <span className={`${accentColor} transition-colors duration-500`}>Twin-Season</span> Mastery
            </h2>
            <div className={`h-1 w-20 ${isWinter ? 'bg-winter-primary' : 'bg-summer-primary'} mb-8 transition-colors duration-500`}></div>
            <p className="font-sans text-lg text-gray-300 mb-6 leading-relaxed">
              At ClearFast Property Care, we understand that maintaining a property in our region requires two distinct mindsets. You need the grit to handle heavy snowfall at 5 AM, and the precision to manicure a lawn to perfection in July.
            </p>
            <p className="font-sans text-lg text-gray-300 leading-relaxed">
              We aren't just contractors; we are your neighbors. Whether we are plowing your driveway or aerating your turf, our promise remains the same: <strong className="text-white">Reliability you can set your watch by.</strong>
            </p>
          </div>

          <div className="relative">
             <div className={`absolute top-4 left-4 w-full h-full border-4 ${borderColor} opacity-50 transition-colors duration-500`}></div>
             <img 
               src="/images/about-us.webp" 
               alt="ClearFast Property Care Team in Brantford and Hamilton" 
               className="relative z-10 w-full h-auto shadow-2xl filter  hover:-0 "
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;