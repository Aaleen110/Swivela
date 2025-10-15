import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useWebsiteStore, sectionTemplates } from '../store/useWebsiteStore';

// Import all hero components
import Hero1 from './sections/Hero1';
import Hero2 from './sections/Hero2';
import Hero3 from './sections/Hero3';

const sectionComponents = {
  hero: {
    'hero-1': Hero1,
    'hero-2': Hero2,
    'hero-3': Hero3,
    'hero-4': Hero1, // Placeholder - will create more components
    'hero-5': Hero2, // Placeholder
    'hero-6': Hero3  // Placeholder
  }
};

const SectionNavigator = ({ sectionType, title }) => {
  const { selectedSections, selectSection } = useWebsiteStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const templates = sectionTemplates[sectionType] || [];
  const selectedTemplateId = selectedSections[sectionType];
  const selectedIndex = templates.findIndex(t => t.id === selectedTemplateId);
  
  const Component = sectionComponents[sectionType]?.[selectedTemplateId] || Hero1;

  const nextTemplate = () => {
    const nextIndex = (selectedIndex + 1) % templates.length;
    selectSection(sectionType, templates[nextIndex].id);
  };

  const prevTemplate = () => {
    const prevIndex = (selectedIndex - 1 + templates.length) % templates.length;
    selectSection(sectionType, templates[prevIndex].id);
  };

  const currentTemplate = templates[selectedIndex];

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        onClick={prevTemplate}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={nextTemplate}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Live Section Preview */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTemplateId}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Template Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {currentTemplate?.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {currentTemplate?.description}
        </p>
        
        {/* Template Indicators */}
        <div className="flex justify-center space-x-2">
          {templates.map((template, index) => (
            <button
              key={template.id}
              onClick={() => selectSection(sectionType, template.id)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex
                  ? 'bg-primary-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Navigation Hint */}
        <p className="text-sm text-gray-500 mt-4">
          Use arrows to browse templates • Click dots to select
        </p>
      </div>
    </div>
  );
};

export default SectionNavigator;
