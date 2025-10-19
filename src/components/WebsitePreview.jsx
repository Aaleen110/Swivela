import SectionWithNavigation from './SectionWithNavigation';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WebsitePreview = () => {
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
    </div>
  );
};

export default WebsitePreview;
