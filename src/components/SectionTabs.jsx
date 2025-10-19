import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Users,
  Phone,
  Settings,
  Award,
  MessageCircle,
  Mail,
  FileText
} from 'lucide-react';
import { useWebsiteStore } from '../store/useWebsiteStore';

const SectionTabs = ({ activeSection, setActiveSection, sectionOrder, onReorder }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const sectionLabels = {
    hero: 'Hero',
    about: 'About',
    contactShortcut: 'CTA',
    services: 'Services',
    certifications: 'Certifications',
    testimonials: 'Testimonials',
    contactUs: 'Contact',
    footer: 'Footer'
  };

  const sectionIcons = {
    hero: Home,
    about: Users,
    contactShortcut: Phone,
    services: Settings,
    certifications: Award,
    testimonials: MessageCircle,
    contactUs: Mail,
    footer: FileText
  };

  const handleDragStart = (e, index) => {
    const sectionType = sectionOrder[index];
    // Prevent dragging for Hero and Footer sections
    if (sectionType === 'hero' || sectionType === 'footer') {
      e.preventDefault();
      return;
    }
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dropSectionType = sectionOrder[dropIndex];
    // Prevent dropping on Hero and Footer sections
    if (dropSectionType === 'hero' || dropSectionType === 'footer') {
      setDraggedIndex(null);
      return;
    }
    
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      const newOrder = [...sectionOrder];
      const draggedItem = newOrder[draggedIndex];
      newOrder.splice(draggedIndex, 1);
      newOrder.splice(dropIndex, 0, draggedItem);
      onReorder(newOrder);
    }
    setDraggedIndex(null);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50">
      {/* <div className="max-w-7xl mx-auto px-6 py-3"> */}
        <div className="flex items-center justify-between p-2">
          {/* <h3 className="text-sm font-semibold text-gray-800">Website Sections</h3> */}

          <div className="flex gap-2 overflow-x-auto pb-1">
            {sectionOrder.map((sectionType, index) => (
              <motion.div
                key={sectionType}
                draggable={sectionType !== 'hero' && sectionType !== 'footer'}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                onClick={() => setActiveSection(sectionType)}
                className={`
                flex items-center space-x-2 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
                min-w-fit whitespace-nowrap select-none border
                ${activeSection === sectionType
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                  }
                ${draggedIndex === index ? 'opacity-50 scale-95' : ''}
                ${sectionType === 'hero' || sectionType === 'footer' ? 'opacity-75' : ''}
              `}
                whileHover={{ scale: sectionType === 'hero' || sectionType === 'footer' ? 1 : 1.02 }}
                whileTap={{ scale: sectionType === 'hero' || sectionType === 'footer' ? 1 : 0.98 }}
              >
                {React.createElement(sectionIcons[sectionType], {
                  size: 16,
                  className: "flex-shrink-0"
                })}
                <span className="text-sm font-medium">{sectionLabels[sectionType]}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            Drag to reorder
          </div>
        </div>


      {/* </div> */}
    </div>
  );
};

export default SectionTabs;
