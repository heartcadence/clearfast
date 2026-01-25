import React, { useState, Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// --- LAZY LOAD THESE COMPONENTS ---
// The browser will download these chunks only AFTER the Hero is visible.
const TrustBar = lazy(() => import('../components/TrustBar'));
const Services = lazy(() => import('../components/Services'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const ServiceArea = lazy(() => import('../components/ServiceArea'));
const About = lazy(() => import('../components/About'));
const StickyMobileCTA = lazy(() => import('../components/StickyMobileCTA'));
const Footer = lazy(() => import('../components/Footer'));

// A lightweight placeholder to prevent layout jumping while loading
const SectionLoader = () => <div className="w-full h-32 animate-pulse bg-gray-50" />;

function App() {
  const [isWinter, setIsWinter] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Critical Path: Loaded Immediately (No Suspense) */}
      <Navbar isWinter={isWinter} setIsWinter={setIsWinter} />
      <main>
        <Hero isWinter={isWinter} />
        
        {/* Deferred Loading: The rest of the page loads in the background */}
        <Suspense fallback={<SectionLoader />}>
          <TrustBar isWinter={isWinter} />
          <Services isWinter={isWinter} />
          <HowItWorks isWinter={isWinter} />
          <ServiceArea isWinter={isWinter} />
          <About isWinter={isWinter} />
        </Suspense>
      </main>

      {/* Footer loads last */}
      <Suspense fallback={<div className="h-20 bg-slate-900" />}>
        <Footer isWinter={isWinter} />
        <StickyMobileCTA isWinter={isWinter} />
      </Suspense>
    </div>
  );
}

export default App;
