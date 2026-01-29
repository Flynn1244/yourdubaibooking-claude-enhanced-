import React, { useState, useEffect, useRef } from 'react';
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
              <h2 className="text-luxury-gold font-serif text-3xl md:text-4xl mb-8">Overview</h2>
              <div className="space-y-6 mb-12">
                {service.longDescription.map((para, idx) => (
                  <p key={idx} className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Price Section */}
              {service.price && service.price.trim() !== '' && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-luxury-gold font-serif text-lg md:text-xl">{service.price}</p>
                </div>
              )}
            </Reveal>

            {/* GetYourGuide Widget (Desert Safari only) */}
            {service.id === 'desert-safari' && (
              <div className="mt-12 mb-12">
                <h3 className="text-white font-serif text-2xl md:text-3xl mb-8">Check availability</h3>
                <div 
                  className="w-full"
                  dangerouslySetInnerHTML={{
                    __html: `<div data-gyg-href="https://widget.getyourguide.com/default/availability.frame" data-gyg-tour-id="128547" data-gyg-locale-code="en-US" data-gyg-currency="EUR" data-gyg-widget="availability" data-gyg-variant="horizontal" data-gyg-partner-id="05E1XCJ"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span></div>`
                  }}
                />
              </div>
            )}

            {/* Packages Section (other services) */}
            {service.id !== 'desert-safari' && service.packages && service.packages.length > 0 && (
              <Reveal delay={400}>
                <div className="mt-12">
                  <h3 className="text-white font-serif text-2xl md:text-3xl mb-8">Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.packages.map((pkg, idx) => (
                      <div key={idx} className="border border-white/10 bg-white/5 p-6 rounded-lg hover:border-luxury-gold/50 transition-colors">
                        <h4 className="text-luxury-gold font-serif text-xl mb-4">{pkg.name}</h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-start gap-3 text-gray-300 text-sm">
                              <Check size={18} className="text-luxury-gold flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};