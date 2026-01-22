import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import { WINTER_CONTENT, SUMMER_CONTENT } from './constants';

const App: React.FC = () => {
  // Season Auto-Detection Logic
  const getInitialSeason = () => {
    const month = new Date().getMonth(); // 0-11
    // Winter months: November (10), December (11), January (0), February (1), March (2)
    return month >= 10 || month <= 2;
  };

  const [isWinter, setIsWinter] = useState(getInitialSeason());

  // Derive current content based on state
  const content = isWinter ? WINTER_CONTENT : SUMMER_CONTENT;
  const toggleSeason = () => setIsWinter(!isWinter);

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-gray-200 selection:text-gray-900 pb-24 md:pb-0">
      <Navbar isWinter={isWinter} toggleSeason={toggleSeason} />
      
      <main>
        <div id="home">
          <Hero isWinter={isWinter} content={content} />
        </div>
        
        <TrustBar />
        
        {/* Reordered sections to match Navigation: Services -> How It Works -> Service Area -> About Us */}
        
        <div id="services">
          <Services isWinter={isWinter} content={content} />
        </div>

        <div id="how-it-works">
          <HowItWorks isWinter={isWinter} content={content} />
        </div>
        
        <div id="service-area">
          <ServiceArea isWinter={isWinter} />
        </div>
        
        <div id="about">
          <About isWinter={isWinter} />
        </div>
        
        <div id="contact">
          <ContactForm isWinter={isWinter} content={content} />
        </div>
      </main>

      <Footer isWinter={isWinter} />
      
      {/* Mobile-only Sticky CTA */}
      <StickyMobileCTA isWinter={isWinter} content={content} />
    </div>
  );
};

export default App;