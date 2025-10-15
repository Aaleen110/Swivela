import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useWebsiteStore, sectionTemplates } from '../store/useWebsiteStore';

// Import all section components
import Hero1 from './sections/Hero1';
import Hero2 from './sections/Hero2';
import Hero3 from './sections/Hero3';
import About1 from './sections/About1';
import Services1 from './sections/Services1';
import Testimonials1 from './sections/Testimonials1';
import Contact1 from './sections/Contact1';

const sectionComponents = {
  hero: {
    'hero-1': Hero1,
    'hero-2': Hero2,
    'hero-3': Hero3,
    'hero-4': Hero1,
    'hero-5': Hero2,
    'hero-6': Hero3
  },
  about: {
    'about-1': About1,
    'about-2': About1,
    'about-3': About1
  },
  services: {
    'services-1': Services1,
    'services-2': Services1,
    'services-3': Services1
  },
  testimonials: {
    'testimonials-1': Testimonials1,
    'testimonials-2': Testimonials1
  },
  contact: {
    'contact-1': Contact1,
    'contact-2': Contact1
  }
};

const SectionWithNavigation = ({ sectionType, isActive = false }) => {
  const { selectedSections, selectSection } = useWebsiteStore();
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const templates = sectionTemplates[sectionType] || [];
  const selectedTemplateId = selectedSections[sectionType];
  const currentIndex = templates.findIndex(t => t.id === selectedTemplateId);
  
  const Component = sectionComponents[sectionType]?.[selectedTemplateId] || Hero1;

  const nextTemplate = () => {
    const nextIndex = (currentIndex + 1) % templates.length;
    selectSection(sectionType, templates[nextIndex].id);
  };

  const prevTemplate = () => {
    const prevIndex = (currentIndex - 1 + templates.length) % templates.length;
    selectSection(sectionType, templates[prevIndex].id);
  };

  // Touch/swipe handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTemplate();
    } else if (isRightSwipe) {
      prevTemplate();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only respond to keyboard events when this section is active (in viewport)
      if (!isActive) return;
      
      // Prevent default behavior for arrow keys to avoid page scrolling
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
      }

      if (e.key === 'ArrowRight') {
        nextTemplate();
      } else if (e.key === 'ArrowLeft') {
        prevTemplate();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, currentIndex, templates, sectionType, selectSection]);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Arrows */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={prevTemplate}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={nextTemplate}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Section Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTemplateId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Component />
        </motion.div>
      </AnimatePresence>

      {/* Template Indicators */}
      <AnimatePresence>
        {isHovered && templates.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
          >
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => selectSection(sectionType, templates[index].id)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWithNavigation;
