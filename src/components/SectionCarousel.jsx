import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useWebsiteStore, sectionTemplates } from '../store/useWebsiteStore';

const SectionCarousel = ({ sectionType, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const { selectedSections, selectSection } = useWebsiteStore();
  
  const templates = sectionTemplates[sectionType] || [];
  const selectedTemplate = selectedSections[sectionType];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  const handleSelectTemplate = (templateId) => {
    selectSection(sectionType, templateId);
  };

  if (templates.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative overflow-hidden rounded-2xl bg-gray-50 p-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center min-h-[400px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {templates.map((template, index) => {
                  const isSelected = template.id === selectedTemplate;
                  const isActive = index === currentIndex;
                  
                  return (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.7,
                        scale: isActive ? 1 : 0.95
                      }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`relative cursor-pointer transition-all duration-300 ${
                        isSelected ? 'ring-2 ring-primary-500' : ''
                      }`}
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      <div className="card p-4 hover:shadow-lg transition-shadow">
                        {/* Template Preview Placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <span className="text-primary-600 font-bold text-xl">
                                {template.name.charAt(0)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{template.name}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900">{template.name}</h3>
                          <p className="text-sm text-gray-600">{template.description}</p>
                        </div>

                        {/* Selection Indicator */}
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        {templates.length > 3 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(templates.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Selection Summary */}
      <div className="mt-6 p-4 bg-primary-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-primary-900">
              Selected: {templates.find(t => t.id === selectedTemplate)?.name || 'None'}
            </p>
            <p className="text-xs text-primary-700">
              {templates.find(t => t.id === selectedTemplate)?.description}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-primary-600">Swipe to explore</span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronRight className="w-4 h-4 text-primary-600" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCarousel;
