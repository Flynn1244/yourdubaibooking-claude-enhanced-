import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { useNavigation } from '../context/NavigationContext';
import { servicesData } from '../data/servicesData';

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const { navigateToService } = useNavigation();

  return (
    <section 
      id="services" 
      className="bg-luxury-black py-24 relative overflow-hidden"
      style={{ scrollMarginTop: '100px' }}
    >
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
        <Reveal>
            <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Curated <span className="italic text-luxury-gold">Services</span>
            </h2>
        </Reveal>
        <Reveal delay={200}>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-md leading-relaxed">
              Select a category to explore our offerings.
            </p>
        </Reveal>
      </div>

      {/* Desktop Horizontal Accordion */}
      <div className="hidden md:flex w-full h-[600px] lg:h-[700px] border-y border-white/5">
        {servicesData.map((service, index) => (
          <div 
            key={service.id}
            onMouseEnter={() => setActiveId(index)}
            onMouseLeave={() => setActiveId(null)}
            onClick={() => navigateToService(service.id)}
            className={`
              relative h-full border-r border-white/5 last:border-r-0 cursor-pointer overflow-hidden group
              transition-all duration-700 ease-out
              ${activeId === index ? 'flex-[2.5] bg-neutral-900' : 'flex-1 bg-black'}
              ${activeId !== null && activeId !== index ? 'opacity-60' : 'opacity-100'}
            `}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
              style={{ 
                backgroundImage: `url(${service.image})`,
                transform: activeId === index ? 'scale(1.1)' : 'scale(1.0)',
                filter: activeId === index ? 'grayscale(0%)' : 'grayscale(100%) brightness(0.7)'
              }}
            />
            
            {/* Overlays */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeId === index ? 'opacity-20' : 'opacity-60'}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            {/* Content Wrapper */}
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 flex flex-col justify-end h-full">
              
              {/* Number */}
              <div className={`mb-auto transition-all duration-500 ${activeId === index ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                 <span className="font-serif text-2xl text-luxury-gold">0{index + 1}</span>
              </div>

              {/* Title & Desc */}
              <div className="transform transition-transform duration-500">
                <h3 className={`font-serif text-2xl lg:text-4xl text-white mb-4 transition-colors duration-300 ${activeId === index ? 'text-white' : 'text-gray-300'}`}>
                  {service.title}
                </h3>
                
                <div className={`overflow-hidden transition-all duration-700 ease-out ${activeId === index ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md border-l border-luxury-gold/50 pl-4">
                    {service.shortDescription}
                  </p>
                  <button 
                    className="flex items-center gap-3 text-luxury-gold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Stack Layout */}
      <div className="md:hidden flex flex-col">
         {servicesData.map((service, index) => (
           <div key={service.id} onClick={() => navigateToService(service.id)} className="relative h-[400px] w-full border-b border-white/10 overflow-hidden group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-luxury-gold font-serif text-xl mb-2 block">0{index + 1}</span>
                <h3 className="text-white font-serif text-3xl mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2">
                  {service.shortDescription}
                </p>
                <span className="flex items-center gap-2 text-white text-xs uppercase tracking-widest">
                  View Details <ArrowRight size={12} />
                </span>
              </div>
           </div>
         ))}
      </div>
    </section>
  );
};