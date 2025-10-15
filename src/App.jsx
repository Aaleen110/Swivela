import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useWebsiteStore } from './store/useWebsiteStore';
import Header from './components/Header';
import SectionNavigator from './components/SectionNavigator';
import './App.css';

const sectionTypes = [
  {
    type: 'hero',
    title: 'Hero Section',
    description: 'Your main landing section that makes the first impression'
  },
  {
    type: 'about',
    title: 'About Section',
    description: 'Showcase your firm and team expertise'
  },
  {
    type: 'services',
    title: 'Services Section',
    description: 'Display your CA services and offerings'
  },
  {
    type: 'testimonials',
    title: 'Testimonials',
    description: 'Client feedback and success stories'
  },
  {
    type: 'contact',
    title: 'Contact Section',
    description: 'How clients can reach you'
  }
];

function App() {
  const [activeSectionType, setActiveSectionType] = useState('hero');
  const currentSection = sectionTypes.find(s => s.type === activeSectionType);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header with Controls */}
      <Header 
        activeSectionType={activeSectionType}
        setActiveSectionType={setActiveSectionType}
      />

      {/* Main Content - Live Section Preview */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {currentSection?.title}
            </h2>
            <p className="text-gray-600">
              {currentSection?.description}
            </p>
          </div>

          {/* Live Section Navigator */}
          <SectionNavigator 
            sectionType={activeSectionType}
            title={currentSection?.title}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
