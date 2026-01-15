import React from 'react';
import { Reveal } from './ui/Reveal';
import { Key, ShieldCheck, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-luxury-charcoal text-white">
      {/* Top Split */}
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Text Side */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">About Us</h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="font-sans text-gray-400 text-sm leading-relaxed mb-12 max-w-xl space-y-4">
              <p>
                We’re a Dubai-based concierge and travel experience company built for people who want to experience the city properly — without wasting time, overpaying, or relying on guesswork.
              </p>
              <p>
                From private yacht charters and desert adventures to restaurant reservations, beach clubs, nightlife, and custom itineraries, we handle every detail so your trip runs smoothly from the moment you arrive.
              </p>
              <p>
                We work directly with trusted operators, venues, and local partners across Dubai, giving our clients reliable access, transparent pricing, and priority availability — even during peak season.
              </p>
              <p>
                Whether you’re visiting for a weekend, a special occasion, or a longer stay, our role is simple: remove friction, save you time, and help you experience the best of what Dubai has to offer with confidence.
              </p>
              <p className="font-medium text-gray-200">
                No call centres. No confusing packages. Just straightforward service, fast communication, and experiences done properly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="bg-white text-luxury-black px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-luxury-gold hover:text-white transition-all duration-300 self-start"
            >
              Plan Your Trip
            </a>
          </Reveal>
        </div>
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
           <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Private Jet Interior"
            className="absolute inset-0 w-full h-full object-cover"
           />
        </div>
      </div>

      {/* Bottom Content Box - Why You Need Us */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="border border-white/10 relative overflow-hidden bg-gradient-to-br from-neutral-900/80 to-black p-8 md:p-16">
            
            <Reveal width="100%">
              <div className="text-center mb-16 max-w-3xl mx-auto relative z-10">
                <h3 className="font-serif text-3xl md:text-4xl mb-6 text-white leading-tight">
                  Why Dubai Requires a <span className="italic text-luxury-gold">Concierge</span>
                </h3>
                <p className="font-sans text-gray-400 font-light text-sm md:text-base">
                   Dubai is a city of infinite possibility, but true access is reserved for the few. We bridge the gap between visiting the city and truly experiencing it.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Feature 1 */}
              <Reveal delay={100}>
                <div className="flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 border border-luxury-gold/20 bg-luxury-gold/5 rounded-full flex items-center justify-center text-luxury-gold mb-2 group-hover:bg-luxury-gold group-hover:text-black transition-all duration-500">
                    <Key size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-white mb-3">Access</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      The most coveted venues in Dubai don’t list availability online. They run on relationships. We hold the keys to sold-out restaurants, private beach clubs, and events that appear "fully booked" to the public.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Feature 2 */}
              <Reveal delay={200}>
                <div className="flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-500">
                   <div className="w-14 h-14 border border-luxury-gold/20 bg-luxury-gold/5 rounded-full flex items-center justify-center text-luxury-gold mb-2 group-hover:bg-luxury-gold group-hover:text-black transition-all duration-500">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-white mb-3">Curation</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Dubai is saturated with hype. We filter the noise to distinguish between "Instagram traps" and genuine world-class experiences. We only recommend what we have personally vetted and verified.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Feature 3 */}
              <Reveal delay={300}>
                <div className="flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-500">
                   <div className="w-14 h-14 border border-luxury-gold/20 bg-luxury-gold/5 rounded-full flex items-center justify-center text-luxury-gold mb-2 group-hover:bg-luxury-gold group-hover:text-black transition-all duration-500">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-white mb-3">Logistics</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      The city is vast and traffic can be unforgiving. A poorly planned itinerary wastes hours. We structure your days to optimize flow, pairing nearby venues so you spend your time enjoying, not commuting.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            
            {/* Background flourish */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};