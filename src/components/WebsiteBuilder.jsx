import { useState } from 'react';
import SectionWithNavigation from './SectionWithNavigation';
import SectionTabs from './SectionTabs';

const WebsiteBuilder = () => {
  // Define the order of sections - now manageable via tabs
  const [sectionOrder, setSectionOrder] = useState([
    'hero', 
    'about', 
    'contactShortcut', 
    'services', 
    'certifications', 
    'testimonials', 
    'contactUs', 
    'footer'
  ]);
  
  const [activeSection, setActiveSection] = useState('hero');

  const handleReorder = (newOrder) => {
    setSectionOrder(newOrder);
  };

  return (
    <div className="w-full pb-20">
      {/* Render only the active section */}
      <SectionWithNavigation 
        sectionType={activeSection} 
        isActive={true}
      />

      {/* Excel-style section tabs at bottom */}
      <SectionTabs 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sectionOrder={sectionOrder}
        onReorder={handleReorder}
      />
    </div>
  );
};

export default WebsiteBuilder;
