import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentPage, navigateToHome } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (currentPage !== 'home') {
      navigateToHome();
      // Allow state update to propagate before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled || currentPage !== 'home'
          ? 'bg-luxury-black/90 backdrop-blur-md border-neutral-800 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer" onClick={navigateToHome}>
          <img 
            src="/logo.png" 
            alt="Your Dubai Booking" 
            className="h-12 w-auto object-contain brightness-0 invert hover:opacity-80 transition-opacity" 
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase font-medium">
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-gray-300 hover:text-luxury-gold transition-colors"
          >
            Our Services
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-gray-300 hover:text-luxury-gold transition-colors"
          >
            About Us
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-gray-300 hover:text-luxury-gold transition-colors"
          >
            Message us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:block text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-luxury-black border-b border-neutral-800 py-8 px-6 flex flex-col space-y-4">
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')} 
            className="text-gray-300 text-sm uppercase"
          >
            Our Services
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')} 
            className="text-gray-300 text-sm uppercase"
          >
            About Us
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')} 
            className="text-gray-300 text-sm uppercase"
          >
            Message us
          </a>
        </div>
      )}
    </header>
  );
};