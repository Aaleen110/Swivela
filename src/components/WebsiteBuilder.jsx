import SectionWithNavigation from './SectionWithNavigation';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const NavigationChips = () => {
  return (
    <div className="fixed top-60 -left-6 flex flex-wrap flex-col gap-20 z-50">
      <div className="bg-primary-600 text-white py-2 -rotate-90 w-25 text-center">
        <span className="text-sm">Hero</span>
      </div>

        <div className="bg-primary-600 text-white py-2 -rotate-90 w-25 text-center">
          <span className="text-sm">About</span>
        </div>

        <div className="bg-primary-600 text-white py-2 px-2 -rotate-90 w-25 text-center">
          <span className="text-sm">Contact</span>
        </div>

        <div className="bg-primary-600 text-white py-2 px-2 -rotate-90 w-25 text-center">
          <span className="text-sm">Services</span>
        </div>
    </div>
  )
}

const WebsiteBuilder = () => {
  // Define the order of sections according to the new structure
  // Note: navTopBar is excluded here as it will be rendered separately below the Header
  const sectionOrder = [
    'hero', 
    'about', 
    'contactShortcut', 
    'services', 
    'certifications', 
    'testimonials', 
    'contactUs', 
    'footer'
  ];
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

      {/* <NavigationChips /> */}
    </div>
  );
};

export default WebsiteBuilder;
