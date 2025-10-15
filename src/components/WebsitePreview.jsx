import { useWebsiteStore, sectionTemplates } from '../store/useWebsiteStore';

// Import all section components
import Hero1 from './sections/Hero1';
import Hero2 from './sections/Hero2';
import Hero3 from './sections/Hero3';
import About1 from './sections/About1';
import Services1 from './sections/Services1';
import Testimonials1 from './sections/Testimonials1';
import Contact1 from './sections/Contact1';

const sectionComponents = {
  hero: {
    'hero-1': Hero1,
    'hero-2': Hero2,
    'hero-3': Hero3,
    'hero-4': Hero1,
    'hero-5': Hero2,
    'hero-6': Hero3
  },
  about: {
    'about-1': About1,
    'about-2': About1,
    'about-3': About1
  },
  services: {
    'services-1': Services1,
    'services-2': Services1,
    'services-3': Services1
  },
  testimonials: {
    'testimonials-1': Testimonials1,
    'testimonials-2': Testimonials1
  },
  contact: {
    'contact-1': Contact1,
    'contact-2': Contact1
  }
};

const WebsitePreview = () => {
  const { selectedSections } = useWebsiteStore();

  // Define the order of sections
  const sectionOrder = ['hero', 'about', 'services', 'testimonials', 'contact'];

  return (
    <div className="w-full">
      {sectionOrder.map((sectionType) => {
        const selectedTemplateId = selectedSections[sectionType];
        const Component = sectionComponents[sectionType]?.[selectedTemplateId];
        
        if (!Component) return null;

        return <Component key={sectionType} />;
      })}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <p className="text-gray-400">
                Professional CA services for your business growth and compliance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tax Filing</li>
                <li>GST Compliance</li>
                <li>Audit Services</li>
                <li>Business Advisory</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 98765 43210</li>
                <li>info@yourcafirm.com</li>
                <li>Mumbai, Maharashtra</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your CA Firm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsitePreview;
