import React from 'react';
import { Reveal } from './ui/Reveal';

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-luxury-gray py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-serif text-gray-500 italic mb-12 block">Testimonials from our members</span>
        
        <Reveal>
          <blockquote className="font-serif text-2xl md:text-3xl text-luxury-black leading-relaxed mb-12">
            “Although a weird couple of years, you have been constant and an absolute positive in our lives! And we really really can't imagine life without you.”
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <cite className="font-sans text-xs uppercase tracking-widest text-gray-500 not-italic">
            Member Since 2020
          </cite>
        </Reveal>
      </div>
    </section>
  );
};