import React from 'react';
import { Key, Clock, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const ValueProp: React.FC = () => {
  return (
    <section id="membership" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-black mb-8 leading-snug">
            A bespoke membership that<br />
            will uncover a world of<br />
            <span className="italic text-gray-500">possibility.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-serif text-xl md:text-2xl text-luxury-black mb-12">
            Anything, anytime, anywhere.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed mb-20 max-w-2xl mx-auto">
            A Quintessence membership enables access to a vast global network of
            advisors and experts to execute each and every demand, wish, and need. By
            making anything - and everything - possible, we offer unparalleled access
            and a bespoke luxury lifestyle for now and into the future.
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-4 md:px-16">
          <Reveal delay={500}>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="p-4 rounded-full bg-transparent border border-transparent group-hover:border-luxury-gold transition-all duration-500">
                <Key strokeWidth={1} size={48} className="text-luxury-black group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-luxury-gold">Access</span>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="p-4 rounded-full bg-transparent border border-transparent group-hover:border-luxury-gold transition-all duration-500">
                <Clock strokeWidth={1} size={48} className="text-luxury-black group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-luxury-gold">Time</span>
            </div>
          </Reveal>
          
          <Reveal delay={700}>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="p-4 rounded-full bg-transparent border border-transparent group-hover:border-luxury-gold transition-all duration-500">
                <Sparkles strokeWidth={1} size={48} className="text-luxury-black group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-luxury-gold">Experiences</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};