import React, { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'service-detail' | 'privacy-policy' | 'terms-conditions';

interface NavigationContextType {
  currentPage: Page;
  selectedServiceId: string | null;
  navigateToHome: () => void;
  navigateToService: (id: string) => void;
  navigateToPrivacyPolicy: () => void;
  navigateToTerms: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedServiceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPrivacyPolicy = () => {
    setCurrentPage('privacy-policy');
    setSelectedServiceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTerms = () => {
    setCurrentPage('terms-conditions');
    setSelectedServiceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, selectedServiceId, navigateToHome, navigateToService, navigateToPrivacyPolicy, navigateToTerms }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within NavigationProvider');
  return context;
};