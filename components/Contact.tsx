import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { FormStatus } from '../types';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    // Simulate submission
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gray-100 py-24 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <Reveal>
            <h2 className="font-serif text-3xl text-luxury-black mb-4">
              Ready to experience Dubai?<br />
              Message us below.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-serif text-lg text-luxury-black">
              Let us handle the details while you enjoy the journey.
            </p>
          </Reveal>
        </div>

        {status === FormStatus.SUCCESS ? (
          <div className="bg-white p-8 border border-green-200 text-center animate-fade-in-up">
            <h3 className="font-serif text-2xl mb-2 text-green-800">Enquiry Received</h3>
            <p className="text-gray-600">Our concierge team will be in touch via WhatsApp shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
             {/* Full Name */}
             <div className="border-b border-gray-400 py-2">
                <input type="text" placeholder="Full name *" required className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-500 text-sm" />
             </div>

             {/* WhatsApp Number */}
             <div className="border-b border-gray-400 py-2">
                <input type="tel" placeholder="WhatsApp number *" required className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-500 text-sm" />
             </div>

             {/* Message */}
             <div className="border-b border-gray-400 py-2">
               <textarea rows={4} placeholder="Tell us what you're looking for in Dubai..." className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-500 text-sm resize-none" required></textarea>
             </div>

             <div className="pt-8 text-center">
               <button 
                type="submit" 
                disabled={status === FormStatus.SUBMITTING}
                className="bg-luxury-black text-white px-12 py-4 text-xs uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 disabled:opacity-50"
               >
                 {status === FormStatus.SUBMITTING ? 'Sending...' : 'Send Message'}
               </button>
             </div>
          </form>
        )}
      </div>
    </section>
  );
};