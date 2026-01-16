import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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
      // Use EmailJS to send email
      // Initialize EmailJS with your public key (set in environment variable)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: Use serverless function if EmailJS not configured
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone, message }),
          });

          if (!response.ok) {
            throw new Error('Failed to send email');
          }
        } catch (apiError) {
          // If API fails, use mailto as last resort
          const mailtoLink = `mailto:contact@yourdubaibooking.com?subject=New Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nWhatsApp: ${phone}\n\nMessage:\n${message}`)}`;
          window.location.href = mailtoLink;
          // Still show success since mailto was triggered
        }
      } else {
        // Send via EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_email: 'contact@yourdubaibooking.com',
            from_name: name,
            from_phone: phone,
            message: message,
            reply_to: phone,
          },
          publicKey
        );
      }

      setStatus(FormStatus.SUCCESS);
      
      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus(FormStatus.ERROR);
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