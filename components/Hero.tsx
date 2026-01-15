import React from 'react';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = React.memo(() => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with slight parallax or pan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Destination Palm Jumeirah"
          className="w-full h-full object-cover animate-slow-pan opacity-80"
        />
        {/* Animated grain or texture overlay can go here */}
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16 flex flex-col items-center">
        <Reveal delay={200}>
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Your Dubai Experience, <br />
            <span className="italic">end-to-end</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
           <p className="text-gray-200 text-xs md:text-sm tracking-[0.15em] uppercase mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Desert safari, yacht rentals, restaurant reservations, VIP nightlife, transports
           </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href="#contact"
              onClick={scrollToContact}
              className="bg-transparent border border-white text-white px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 ease-out mx-auto cursor-pointer"
            >
              Enquire Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';