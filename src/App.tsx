import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import TrustBar from '../components/TrustBar';
import ServiceArea from '../components/ServiceArea';
import About from '../components/About';
import StickyMobileCTA from '../components/StickyMobileCTA';
import Footer from '../components/Footer';

function App() {
  const [isWinter, setIsWinter] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isWinter={isWinter} setIsWinter={setIsWinter} />
      <main>
        <Hero isWinter={isWinter} />
        <TrustBar isWinter={isWinter} />
        <Services isWinter={isWinter} />
        <HowItWorks isWinter={isWinter} />
        <ServiceArea isWinter={isWinter} />
        <About isWinter={isWinter} />
      </main>
      <Footer isWinter={isWinter} />
      <StickyMobileCTA isWinter={isWinter} />
    </div>
  );
}

export default App;
