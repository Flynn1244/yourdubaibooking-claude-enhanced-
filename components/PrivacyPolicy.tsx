import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Reveal } from './ui/Reveal';

export const PrivacyPolicy: React.FC = () => {
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
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-12 italic">Last updated: 15/01/2026</p>
        </Reveal>

        <div className="space-y-12 font-light leading-relaxed text-sm md:text-base">
          <Reveal delay={100}>
            <section>
              <p className="mb-6">
                This Privacy Policy explains how yourdubaibooking (“we”, “us”, “our”) collects, uses, and protects your personal information when you visit or interact with our website.
              </p>
              <p className="mb-6">
                yourdubaibooking is currently operated as a pre-launch brand and trading name, pending formal company registration.
              </p>
              <p>
                If you have any questions about this policy or how your data is handled, please contact us at: <br />
                <a href="mailto:haroldandwood.business@gmail.com" className="text-luxury-gold hover:underline">haroldandwood.business@gmail.com</a>
              </p>
            </section>
          </Reveal>

          <Reveal delay={200}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following personal information when you use our website or contact us:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number / WhatsApp number</li>
                <li>Travel details or enquiry information you voluntarily provide</li>
                <li>IP address and basic device/browser information</li>
                <li>Website usage data through cookies or analytics tools</li>
              </ul>
              <p className="mt-4">You provide most of this information directly when submitting a form, sending a message, or contacting us.</p>
            </section>
          </Reveal>

          <Reveal delay={300}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Respond to enquiries and provide concierge services</li>
                <li>Communicate with you regarding bookings, availability, and offers</li>
                <li>Improve our website, services, and user experience</li>
                <li>Analyze website traffic and performance</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties.</p>
            </section>
          </Reveal>

          <Reveal delay={400}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="mb-4">Our website may use cookies and similar technologies to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Understand how visitors use our website</li>
                <li>Improve site performance and content</li>
                <li>Support advertising and marketing campaigns</li>
              </ul>
              <p className="mt-4">You can control or disable cookies through your browser settings.</p>
            </section>
          </Reveal>

          <Reveal delay={500}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">4. Sharing of Information</h2>
              <p className="mb-4">We may share your information only when necessary with:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Service providers or partners involved in fulfilling your request (e.g., tour operators, booking platforms, communication tools)</li>
                <li>Analytics and marketing platforms (such as website analytics or advertising tools)</li>
                <li>Legal or regulatory authorities if required by law</li>
              </ul>
              <p className="mt-4">All third parties are expected to handle your data responsibly.</p>
            </section>
          </Reveal>

          <Reveal delay={600}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">5. Data Security</h2>
              <p>
                We take reasonable measures to protect your personal information against unauthorized access, loss, misuse, or disclosure. However, no method of internet transmission or electronic storage is completely secure.
              </p>
            </section>
          </Reveal>

          <Reveal delay={700}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">6. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal requirements.
              </p>
            </section>
          </Reveal>

          <Reveal delay={800}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">7. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for communications</li>
                <li>Request information about how your data is used</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:haroldandwood.business@gmail.com" className="text-luxury-gold hover:underline">haroldandwood.business@gmail.com</a>.
              </p>
            </section>
          </Reveal>

          <Reveal delay={900}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.
              </p>
            </section>
          </Reveal>

          <Reveal delay={950}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">9. Children’s Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18, and we do not knowingly collect personal data from minors.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1000}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1050}>
            <section>
              <h2 className="text-xl text-white font-serif mb-4">11. Governing Law</h2>
              <p>
                This Privacy Policy shall be governed by and interpreted in accordance with the laws of the United States.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
};