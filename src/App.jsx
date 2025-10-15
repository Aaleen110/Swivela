import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import WebsitePreview from './components/WebsitePreview';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header with Controls */}
      <Header />

      {/* Main Content - Full Website Preview */}
      <main>
        <WebsitePreview />
      </main>
    </div>
  );
}

export default App;
