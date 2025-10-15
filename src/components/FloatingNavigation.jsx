import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, Settings } from 'lucide-react';
import { useWebsiteStore, sectionTemplates } from '../store/useWebsiteStore';

const FloatingNavigation = ({ currentSectionType }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { selectedSections, selectSection } = useWebsiteStore();
  
  const templates = sectionTemplates[currentSectionType] || [];
  const selectedTemplateId = selectedSections[currentSectionType];
  const currentIndex = templates.findIndex(t => t.id === selectedTemplateId);
  const currentTemplate = templates[currentIndex];

  const nextTemplate = () => {
    const nextIndex = (currentIndex + 1) % templates.length;
    selectSection(currentSectionType, templates[nextIndex].id);
  };

  const prevTemplate = () => {
    const prevIndex = (currentIndex - 1 + templates.length) % templates.length;
    selectSection(currentSectionType, templates[prevIndex].id);
  };

  return (
    <>
      {/* Floating Navigation Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed right-6 bottom-6 w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-primary-700 transition-colors"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Expanded Navigation Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            className="fixed right-6 bottom-24 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6 z-40"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {currentTemplate?.name}
              </h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6">
              {currentTemplate?.description}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevTemplate}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-sm text-gray-500">
                {currentIndex + 1} of {templates.length}
              </span>

              <button
                onClick={nextTemplate}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Template Indicators */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Choose Template:</p>
              <div className="grid grid-cols-2 gap-2">
                {templates.map((template, index) => (
                  <button
                    key={template.id}
                    onClick={() => selectSection(currentSectionType, template.id)}
                    className={`p-3 rounded-lg text-left transition-colors ${
                      index === currentIndex
                        ? 'bg-primary-100 border-2 border-primary-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {template.name}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {template.description.substring(0, 50)}...
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Customize</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavigation;
