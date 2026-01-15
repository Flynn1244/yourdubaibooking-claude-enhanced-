import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';

function AppContent() {
  const { currentPage } = useNavigation();

  // Cursor Spotlight Effect (Subtle)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-luxury-black font-sans selection:bg-luxury-gold selection:text-white">
      {/* Global Cursor Spotlight */}
      <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-20 mix-blend-screen"
           style={{
             background: `radial-gradient(600px circle at var(--cursor-x) var(--cursor-y), rgba(197, 160, 89, 0.15), transparent 40%)`
           }}
      />

      <Header />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Services />
            <About />
            <Contact />
          </>
        ) : currentPage === 'service-detail' ? (
          <ServiceDetail />
        ) : currentPage === 'privacy-policy' ? (
          <PrivacyPolicy />
        ) : (
          <TermsConditions />
        )}
      </main>

      {(currentPage !== 'privacy-policy' && currentPage !== 'terms-conditions') && <Footer />}
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;