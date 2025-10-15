import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useWebsiteStore } from './store/useWebsiteStore';
import Header from './components/Header';
import WebsitePreview from './components/WebsitePreview';
import FloatingNavigation from './components/FloatingNavigation';
import './App.css';

function App() {
  const [activeSectionType, setActiveSectionType] = useState('hero');

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header with Controls */}
      <Header 
        activeSectionType={activeSectionType}
        setActiveSectionType={setActiveSectionType}
      />

      {/* Main Content - Full Website Preview */}
      <main>
        <WebsitePreview />
      </main>

      {/* Floating Navigation for Template Switching */}
      <FloatingNavigation currentSectionType={activeSectionType} />
    </div>
  );
}

export default App;
