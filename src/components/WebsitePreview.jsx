import SectionWithNavigation from './SectionWithNavigation';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WebsitePreview = () => {
  // Define the order of sections
  const sectionOrder = ['hero', 'about', 'services', 'testimonials', 'contact'];
  const { activeSection, setRef } = useIntersectionObserver({
    threshold: 0.6, // Section needs to be 60% visible to be considered active
    rootMargin: '-10% 0px -10% 0px' // Add some margin to prevent flickering
  });

  return (
    <div className="w-full">
      {sectionOrder.map((sectionType) => (
        <div key={sectionType} ref={setRef(sectionType)}>
          <SectionWithNavigation 
            sectionType={sectionType} 
            isActive={activeSection === sectionType}
          />
        </div>
      ))}
      
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
