import { useWebsiteStore, sectionTemplates } from '../store/useWebsiteStore';
import { useEffect } from 'react';

// Import all section components
import NavTopBar1 from './sections/NavTopBar/NavTopBar1';
import NavTopBar2 from './sections/NavTopBar/NavTopBar2';
import Hero1 from './sections/Hero/Hero1';
import Hero2 from './sections/Hero/Hero2';
import Hero3 from './sections/Hero/Hero3';
import About1 from './sections/About/About1';
import About2 from './sections/About/About2';
import About3 from './sections/About/About3';
import ContactShortcut1 from './sections/ContactShortcut/ContactShortcut1';
import ContactShortcut2 from './sections/ContactShortcut/ContactShortcut2';
import Services1 from './sections/Services/Services1';
import Services2 from './sections/Services/Services2';
import Services3 from './sections/Services/Services3';
import Certifications1 from './sections/Certifications/Certifications1';
import Certifications2 from './sections/Certifications/Certifications2';
import Testimonials1 from './sections/Testimonials/Testimonials1';
import Testimonials2 from './sections/Testimonials/Testimonials2';
import ContactUs1 from './sections/ContactUs/Contact1';
import ContactUs2 from './sections/ContactUs/Contact2';
import Footer1 from './sections/Footer/Footer1';

const sectionComponents = {
  navTopBar: {
    'navTopBar-1': NavTopBar1,
    'navTopBar-2': NavTopBar2
  },
  hero: {
    'hero-1': Hero1,
    'hero-2': Hero2,
    'hero-3': Hero3
  },
  about: {
    'about-1': About1,
    'about-2': About2,
    'about-3': About3
  },
  contactShortcut: {
    'contactShortcut-1': ContactShortcut1,
    'contactShortcut-2': ContactShortcut2
  },
  services: {
    'services-1': Services1,
    'services-2': Services2,
    'services-3': Services3
  },
  certifications: {
    'certifications-1': Certifications1,
    'certifications-2': Certifications2
  },
  testimonials: {
    'testimonials-1': Testimonials1,
    'testimonials-2': Testimonials2
  },
  contactUs: {
    'contactUs-1': ContactUs1,
    'contactUs-2': ContactUs2
  },
  footer: {
    'footer-1': Footer1
  }
};

// Define the order of sections for the website
const sectionOrder = [
  'navTopBar',
  'hero',
  'contactShortcut',
  'about',
  'services',
  'certifications',
  'testimonials',
  'contactUs',
  'footer'
];

const Preview = () => {
  const { selectedSections, websiteConfig } = useWebsiteStore();

  // Load store data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('swivela-website-data');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        // Update the store with saved data
        useWebsiteStore.setState({
          selectedSections: data.selectedSections || selectedSections,
          websiteConfig: data.websiteConfig || websiteConfig,
          content: data.content || {}
        });
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  return (
    <div 
      className="min-h-screen bg-white"
      style={{ 
        fontFamily: websiteConfig.fonts?.primary ? `${websiteConfig.fonts.primary}, sans-serif` : 'Inter, sans-serif'
      }}
    >
      {/* Apply custom CSS variables for colors */}
      <style>
        {`
          :root {
            --color-primary: ${websiteConfig.colors?.primary || '#2563eb'};
            --color-secondary: ${websiteConfig.colors?.secondary || '#64748b'};
            --color-accent: ${websiteConfig.colors?.accent || '#d946ef'};
          }
        `}
      </style>
      
      {sectionOrder.map((sectionType) => {
        const selectedTemplateId = selectedSections[sectionType];
        const Component = sectionComponents[sectionType]?.[selectedTemplateId];
        
        if (!Component) return null;
        
        return (
          <div key={sectionType} className="w-full">
            <Component />
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
