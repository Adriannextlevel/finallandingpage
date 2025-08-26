import React from 'react';
import { HeroSection } from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Offer from './components/Offer';

function App() {
  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <HeroSection />
      <main>
        <Features />
        <Testimonials />
        <Offer />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;