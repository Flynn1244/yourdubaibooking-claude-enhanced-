import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { servicesData } from '../data/servicesData';
import { Reveal } from './ui/Reveal';
import { Contact } from './Contact';

export const ServiceDetail: React.FC = () => {
  const { selectedServiceId, navigateToHome } = useNavigation();
  const service = servicesData.find(s => s.id === selectedServiceId);
  const [activeTab, setActiveTab] = useState(0);

  // Reset tab when service changes
  useEffect(() => {
    setActiveTab(0);
  }, [selectedServiceId]);

  // If no service found, or not on detail page, technically shouldn't happen due to parent logic
  if (!service) return null;

  return (
    <div className="bg-luxury-black min-h-screen text-white pt-20 animate-fade-in-up">
      
      {/* Back Navigation */}
      <div className="container mx-auto px-6 py-6 sticky top-20 z-40 bg-luxury-black/90 backdrop-blur-sm border-b border-white/5">
        <button 
          onClick={navigateToHome}
          className="flex items-center gap-2 text-gray-400 hover:text-luxury-gold transition-colors text-xs uppercase tracking-widest font-medium"
        >
          <ArrowLeft size={14} /> Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent z-20" />
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover animate-slow-pan"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-30">
          <div className="container mx-auto">
             <Reveal>
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">{service.title}</h1>
             </Reveal>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Description */}
          <div className={`flex-1 ${service.id === 'desert-safari' ? 'max-w-5xl' : ''}`}>
            <Reveal delay={200}>
              <h2 className="text-luxury