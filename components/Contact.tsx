import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { FormStatus } from '../types';

export const Contact: React.FC = React.memo(() => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
      // Use FormSubmit - works immediately, no backend needed
      // Sends email directly to contact@yourdubaibooking.com
      const response = await fetch('https://formsubmit.co/ajax/39be9e11af02014961dbe7d13105944b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          message: message,
          _subject: `New Enquiry from ${name} - Your Dubai Booking`,
          _template: 'table',
          _captcha: false,
        }),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setStatus(FormStatus.SUCCESS);
        e.currentTarget.reset();
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Fallback: Try Web3Forms if access key is available
      const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 
                          process.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (web3formsKey) {
        try {
          const web3Response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              access_key: web3formsKey,
              subject: `New Enquiry from ${name} - Your Dubai Booking`,
              from_name: name,
              email: 'contact@yourdubaibooking.com',
              phone: phone,
              message: `Name: ${name}\nWhatsApp: ${phone}\n\nMessage:\n${message}`,
            }),
          });

          const web3Result = await web3Response.json();
          
          if (web3Result.success) {
            setStatus(FormStatus.SUCCESS);
            e.currentTarget.reset();
            return;
          }
        } catch (web3Error) {
          console.error('Web3Forms error:', web3Error);
        }
      }
      
      // Final fallback: Use mailto
      const mailtoLink = `mailto:contact@yourdubaibooking.com?subject=${encodeURIComponent(`New Enquiry from ${name} - Your Dubai Booking`)}&body=${encodeURIComponent(`Name: ${name}\nWhatsApp: ${phone}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoLink;
      setStatus(FormStatus.SUCCESS);
      e.currentTarget.reset();
    }
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
          <div className="bg-white p-8 border border-green-200 text-center animate-fade-in-up" role="alert">
            <h3 className="font-serif text-2xl mb-2 text-green-800">Enquiry Received</h3>
            <p className="text-gray-600">Our concierge team will be in touch via WhatsApp shortly.</p>
          </div>
        ) : status === FormStatus.ERROR ? (
          <div className="bg-white p-8 border border-red-200 text-center animate-fade-in-up" role="alert">
            <h3 className="font-serif text-2xl mb-2 text-red-800">Error</h3>
            <p className="text-gray-600">There was an error sending your message. Please try again.</p>
            <button
              onClick={() => setStatus(FormStatus.IDLE)}
              className="mt-4 text-luxury-black hover:text-luxury-gold underline"
            >
              Try Again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
             {/* Full Name */}
             <div className="border-b border-gray-400 py-2">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full name *" 
                  required 
                  className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-500 text-sm text-black"
                  aria-label="Full name"
                />
             </div>

             {/* WhatsApp Number */}
             <div className="border-b border-gray-400 py-2">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="WhatsApp number *" 
                  required 
                  className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-500 text-sm text-black"
                  aria-label="WhatsApp number"
                />
             </div>

             {/* Message */}
             <div className="border-b border-gray-400 py-2">
               <textarea 
                 rows={4} 
                 name="message"
                 placeholder="Tell us what you're looking for in Dubai..." 
                 className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-500 text-sm resize-none text-black" 
                 required
                 aria-label="Message"
               ></textarea>
             </div>

             <div className="pt-8 text-center">
               <button 
                type="submit" 
                disabled={status === FormStatus.SUBMITTING}
                className="bg-luxury-black text-white px-12 py-4 text-xs uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {status === FormStatus.SUBMITTING ? 'Sending...' : 'Send Message'}
               </button>
             </div>
          </form>
        )}
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';