import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const TIKTOK_URL = 'https://www.tiktok.com/@yourdubaibooking';
const INSTAGRAM_URL = 'https://www.instagram.com/yourdubaibooking/';

export const Footer: React.FC = () => {
  const { navigateToPrivacyPolicy, navigateToTerms } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-black text-white pt-24 pb-8 px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          {/* Brand */}
          <div className="mb-12 md:mb-0">
             <div className="mb-6">
                <img 
                  src="/logo.png" 
                  alt="Your Dubai Booking" 
                  className="h-20 w-auto object-contain opacity-90" 
                  onError={(e) => {
                    // Fallback to SVG if PNG fails
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('.png')) {
                      target.src = '/logo.svg';
                    }
                  }}
                />
            </div>
            <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Find us on social</p>
            <div className="flex gap-4">
              <a 
                href={TIKTOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                {/* TikTok Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                {/* Instagram Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-16 md:gap-24">
            
            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-6">Our Services</h4>
              <ul className="space-y-4 text-sm font-light text-gray-300">
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Desert Safari</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Yacht Rentals</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Restaurant Reservations</a></li>
                 <li><a href="#" className="hover:text-luxury-gold transition-colors">VIP Tables</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-light text-gray-300">
                <li>
                  <button 
                    onClick={navigateToTerms}
                    className="hover:text-luxury-gold transition-colors text-left"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={navigateToPrivacyPolicy}
                    className="hover:text-luxury-gold transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900">
          <p className="text-[10px] text-gray-600 mb-4 md:mb-0">
            YourDubaiBooking.com © 2025 All rights reserved.
          </p>
          
          <div className="flex gap-8 text-[10px] text-gray-600">
            <button onClick={navigateToTerms} className="hover:text-white">Terms & Conditions</button>
            <button onClick={navigateToPrivacyPolicy} className="hover:text-white">Privacy Policy</button>
          </div>

          <button onClick={scrollToTop} className="mt-4 md:mt-0 p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
             <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};