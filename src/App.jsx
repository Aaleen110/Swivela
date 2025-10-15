import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { 
  Palette, 
  Upload, 
  FileText, 
  Eye, 
  Download,
  ArrowLeft,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import { useWebsiteStore } from './store/useWebsiteStore';
import SectionCarousel from './components/SectionCarousel';
import ColorPicker from './components/ColorPicker';
import './App.css';

const steps = [
  {
    id: 0,
    title: 'Choose Sections',
    description: 'Select templates for each section of your website',
    icon: FileText,
    component: 'sections'
  },
  {
    id: 1,
    title: 'Pick Colors',
    description: 'Choose your brand colors',
    icon: Palette,
    component: 'colors'
  },
  {
    id: 2,
    title: 'Upload Logo',
    description: 'Add your firm logo',
    icon: Upload,
    component: 'logo'
  },
  {
    id: 3,
    title: 'Add Content',
    description: 'Upload your content via CSV',
    icon: FileText,
    component: 'content'
  },
  {
    id: 4,
    title: 'Preview',
    description: 'Review your website',
    icon: Eye,
    component: 'preview'
  },
  {
    id: 5,
    title: 'Generate',
    description: 'Download your website',
    icon: Download,
    component: 'generate'
  }
];

const sectionTypes = [
  {
    type: 'hero',
    title: 'Hero Section',
    description: 'Choose how your main message will be displayed'
  },
  {
    type: 'about',
    title: 'About Section',
    description: 'Select how to showcase your firm and team'
  },
  {
    type: 'services',
    title: 'Services Section',
    description: 'Pick how to display your services'
  },
  {
    type: 'testimonials',
    title: 'Testimonials',
    description: 'Choose how to show client feedback'
  },
  {
    type: 'contact',
    title: 'Contact Section',
    description: 'Select your contact information layout'
  }
];

function App() {
  const { currentStep, setCurrentStep, nextStep, prevStep, selectedSections } = useWebsiteStore();
  const [activeSectionType, setActiveSectionType] = useState('hero');

  const currentStepData = steps.find(step => step.id === currentStep);

  const renderStepContent = () => {
    switch (currentStepData?.component) {
      case 'sections':
        const sectionData = sectionTypes.find(s => s.type === activeSectionType);
        return (
          <div className="space-y-8">
            {/* Section Type Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
              {sectionTypes.map((section) => (
                <button
                  key={section.type}
                  onClick={() => setActiveSectionType(section.type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSectionType === section.type
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Section Carousel */}
            {sectionData && (
              <SectionCarousel
                sectionType={sectionData.type}
                title={sectionData.title}
                description={sectionData.description}
              />
            )}
          </div>
        );

      case 'colors':
        return <ColorPicker />;

      case 'logo':
        return (
          <div className="text-center">
            <Upload className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Logo</h2>
            <p className="text-gray-600 mb-8">Add your firm logo to personalize your website</p>
            
            <div className="max-w-md mx-auto">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-primary-400 transition-colors">
                <div className="text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drag and drop your logo here</p>
                  <p className="text-sm text-gray-500">or click to browse</p>
                  <button className="btn-primary mt-4">Choose File</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="text-center">
            <FileText className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Content</h2>
            <p className="text-gray-600 mb-8">Upload a CSV file with your firm information</p>
            
            <div className="max-w-md mx-auto">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-primary-400 transition-colors">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload your CSV file</p>
                  <p className="text-sm text-gray-500">Include firm details, services, team info</p>
                  <button className="btn-primary mt-4">Choose CSV File</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'preview':
        return (
          <div className="text-center">
            <Eye className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview Your Website</h2>
            <p className="text-gray-600 mb-8">Review your website before generating</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-100 rounded-lg p-8 min-h-[600px]">
                <div className="text-gray-500">
                  <Eye className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p>Website preview will be displayed here</p>
                  <p className="text-sm mt-2">Selected sections: {Object.keys(selectedSections).length}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'generate':
        return (
          <div className="text-center">
            <Download className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Generate Your Website</h2>
            <p className="text-gray-600 mb-8">Download your complete website files</p>
            
            <div className="max-w-md mx-auto space-y-4">
              <button className="btn-primary w-full py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Website
              </button>
              <button className="btn-outline w-full py-4 text-lg">
                Deploy to Cloudflare
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStepData?.component) {
      case 'sections':
        return Object.keys(selectedSections).length > 0;
      case 'colors':
      case 'logo':
      case 'content':
      case 'preview':
      case 'generate':
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Swivela</h1>
              <span className="ml-2 text-sm text-gray-500">Website Builder</span>
            </div>
            
            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= currentStep
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 ${
                      index < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="btn-outline flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </button>

            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">
                Step {currentStep + 1} of {steps.length}
              </p>
              <p className="text-xs text-gray-500">{currentStepData?.title}</p>
            </div>

            <button
              onClick={nextStep}
              disabled={!canProceed() || currentStep === steps.length - 1}
              className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
              {currentStep < steps.length - 1 && <ArrowRight className="w-4 h-4 ml-2" />}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
