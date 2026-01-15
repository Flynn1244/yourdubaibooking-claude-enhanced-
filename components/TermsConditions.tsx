import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Reveal } from './ui/Reveal';

export const TermsConditions: React.FC = () => {
  const { navigateToHome } = useNavigation();

  return (
    <div className="bg-luxury-black min-h-screen text-gray-300 pt-24 pb-24 px-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <button 
          onClick={navigateToHome}
          className="flex items-center gap-2 text-luxury-gold hover:text-white transition-colors text-xs uppercase tracking-widest font-medium mb-12"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        <Reveal>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-12 italic">Last updated: 15/01/2026</p>
        </Reveal>

        <div className="space-y-12 font-light leading-relaxed text-sm md:text-base">
          <Reveal delay={100}>
            <section>
              <p className="mb-6">
                These Terms and Conditions (“Terms”) govern your use of the yourdubaibooking website and services. By accessing this website or submitting an enquiry, you agree to be bound by these Terms.
              </p>
              <p className="mb-6">
                yourdubaibooking (“we”, “us”, “our”) is currently operated as a pre-launch brand and trading name, pending formal company registration.
              </p>
              <p className="mb-6">
                If you do not agree with these Terms, please do not use this website.
              </p>
              <p>
                For any questions, contact: <br />
                <a href="mailto:haroldandwood.business@gmail.com" className="text-luxury-gold hover:underline">haroldandwood.business@gmail.com</a>
              </p>
            </section>
          </Reveal>

          <Reveal delay={200}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">1. Services</h2>
              <p className="mb-4">
                yourdubaibooking provides concierge and travel assistance services, including but not limited to arranging tours, activities, transportation, dining reservations, and experiences in Dubai.
              </p>
              <p className="mb-4">
                We act solely as an intermediary between you and third-party service providers. We do not own, operate, or directly control the services provided by third parties.
              </p>
              <p>
                All bookings are subject to availability and the terms of the individual suppliers.
              </p>
            </section>
          </Reveal>

          <Reveal delay={300}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">2. Enquiries and Bookings</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Submitting an enquiry through this website does not guarantee availability or confirm a booking.</li>
                <li>A booking is only confirmed once you receive written confirmation and any required payment has been received.</li>
                <li>Prices are indicative and may change based on availability, seasonality, supplier pricing, or special requests.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={400}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">3. Payments</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Payment terms, deposits, and accepted payment methods will be communicated at the time of booking.</li>
                <li>Some services may require full payment or non-refundable deposits in advance.</li>
                <li>Any additional fees, taxes, or supplier charges will be clearly communicated where applicable.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={500}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">4. Cancellations and Refunds</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Cancellation and refund policies vary depending on the third-party service provider.</li>
                <li>yourdubaibooking does not guarantee refunds unless explicitly stated in writing.</li>
                <li>Late cancellations, no-shows, or supplier restrictions may result in partial or full loss of payment.</li>
                <li>We recommend confirming cancellation terms before completing any booking.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={600}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">5. Third-Party Services & Liability</h2>
              <p className="mb-4">All services arranged are provided by independent third parties. We are not responsible for:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400 mb-4">
                <li>The performance, safety, quality, or conduct of third-party providers</li>
                <li>Delays, cancellations, weather conditions, mechanical issues, or operational changes</li>
                <li>Accidents, injuries, losses, or damages occurring during any experience</li>
                <li>Changes made by suppliers without notice</li>
              </ul>
              <p>
                By booking through us, you agree that any disputes relating to the service itself must be resolved directly with the service provider.
              </p>
            </section>
          </Reveal>

          <Reveal delay={700}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">6. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Follow all safety instructions and local laws during activities</li>
                <li>Arrive on time for scheduled services</li>
                <li>Hold valid travel documents where required</li>
              </ul>
              <p>Failure to comply may result in denied service without refund.</p>
            </section>
          </Reveal>

          <Reveal delay={800}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">7. Intellectual Property</h2>
              <p>
                All content on this website, including text, logos, images, and branding, is the property of yourdubaibooking unless otherwise stated. You may not reproduce or distribute any content without written permission.
              </p>
            </section>
          </Reveal>

          <Reveal delay={850}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, yourdubaibooking shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of this website or services.
              </p>
              <p>
                Our total liability shall not exceed the amount paid by you directly to us for the relevant service.
              </p>
            </section>
          </Reveal>

          <Reveal delay={900}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">9. Privacy</h2>
              <p>
                Your use of this website is also governed by our Privacy Policy.
              </p>
            </section>
          </Reveal>

          <Reveal delay={950}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Updates will be posted on this page with a revised date. Continued use of the website constitutes acceptance of the updated Terms.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1000}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and interpreted in accordance with the laws of the United States.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
};