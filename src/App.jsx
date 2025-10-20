import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import WebsiteBuilder from './components/WebsiteBuilder';
import SectionWithNavigation from './components/SectionWithNavigation';
import SectionTabs from './components/SectionTabs';
import FontWrapper from './components/FontWrapper';
import './App.css';

function App() {
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
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header with Controls - Swivela Customization Bar */}
      <Header />

      {/* Website Content with Font Applied */}
      <FontWrapper>
        {/* NavTopBar - Website Theme Navigation */}
        <SectionWithNavigation 
          sectionType="navTopBar" 
          isActive={true}
        />

        {/* Main Content - Full Website Preview */}
        <main>
          <WebsiteBuilder activeSection={activeSection} />
        </main>
      </FontWrapper>

      {/* Section Tabs - Controls (outside FontWrapper) */}
      <SectionTabs 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sectionOrder={sectionOrder}
        onReorder={handleReorder}
      />
    </div>
  );
}

export default App;
