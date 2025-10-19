import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import WebsiteBuilder from './components/WebsiteBuilder';
import SectionWithNavigation from './components/SectionWithNavigation';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header with Controls - Swivela Customization Bar */}
      <Header />

      {/* NavTopBar - Website Theme Navigation */}
      <SectionWithNavigation 
        sectionType="navTopBar" 
        isActive={true}
      />

      {/* Main Content - Full Website Preview */}
      <main>
        <WebsiteBuilder />
      </main>
    </div>
  );
}

export default App;
