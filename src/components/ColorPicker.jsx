import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useWebsiteStore } from '../store/useWebsiteStore';

const ColorPicker = () => {
  const { websiteConfig, updateColors } = useWebsiteStore();
  const [activeColorType, setActiveColorType] = useState('primary');

  const colorTypes = [
    {
      key: 'primary',
      label: 'Primary Color',
      description: 'Main brand color for buttons and highlights',
      currentColor: websiteConfig.colors.primary
    },
    {
      key: 'secondary',
      label: 'Secondary Color',
      description: 'Supporting color for text and backgrounds',
      currentColor: websiteConfig.colors.secondary
    },
    {
      key: 'accent',
      label: 'Accent Color',
      description: 'Accent color for special elements',
      currentColor: websiteConfig.colors.accent
    }
  ];

  const predefinedColors = [
    // Professional Blues
    { name: 'Professional Blue', value: '#2563eb', category: 'blue' },
    { name: 'Deep Navy', value: '#1e40af', category: 'blue' },
    { name: 'Royal Blue', value: '#3b82f6', category: 'blue' },
    
    // Trust Greens
    { name: 'Trust Green', value: '#059669', category: 'green' },
    { name: 'Forest Green', value: '#047857', category: 'green' },
    { name: 'Emerald', value: '#10b981', category: 'green' },
    
    // Professional Grays
    { name: 'Charcoal', value: '#374151', category: 'gray' },
    { name: 'Slate Gray', value: '#475569', category: 'gray' },
    { name: 'Steel Blue', value: '#64748b', category: 'gray' },
    
    // Elegant Purples
    { name: 'Deep Purple', value: '#7c3aed', category: 'purple' },
    { name: 'Violet', value: '#8b5cf6', category: 'purple' },
    { name: 'Amethyst', value: '#a855f7', category: 'purple' },
    
    // Warm Browns
    { name: 'Rich Brown', value: '#92400e', category: 'brown' },
    { name: 'Coffee', value: '#a16207', category: 'brown' },
    { name: 'Amber', value: '#d97706', category: 'brown' },
    
    // Professional Reds
    { name: 'Burgundy', value: '#991b1b', category: 'red' },
    { name: 'Deep Red', value: '#dc2626', category: 'red' },
    { name: 'Crimson', value: '#ef4444', category: 'red' }
  ];

  const handleColorSelect = (color) => {
    updateColors({ [activeColorType]: color });
  };

  const activeColorTypeData = colorTypes.find(type => type.key === activeColorType);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Palette className="w-8 h-8 text-primary-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Choose Your Colors</h2>
        </div>
        <p className="text-gray-600">
          Select colors that represent your brand and create trust with your clients
        </p>
      </div>

      {/* Color Type Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {colorTypes.map((type) => (
          <button
            key={type.key}
            onClick={() => setActiveColorType(type.key)}
            className={`p-4 rounded-xl border-2 transition-all ${
              activeColorType === type.key
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-8 h-8 rounded-lg border-2 border-white shadow-sm"
                style={{ backgroundColor: type.currentColor }}
              />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">{type.label}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Active Color Display */}
      <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {activeColorTypeData?.label}
            </h3>
            <p className="text-gray-600">
              Current: {activeColorTypeData?.currentColor}
            </p>
          </div>
          <div
            className="w-16 h-16 rounded-xl border-4 border-white shadow-lg"
            style={{ backgroundColor: activeColorTypeData?.currentColor }}
          />
        </div>
      </div>

      {/* Color Palette */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Choose from Professional Palette</h3>
        
        {/* Group colors by category */}
        {['blue', 'green', 'gray', 'purple', 'brown', 'red'].map(category => {
          const categoryColors = predefinedColors.filter(color => color.category === category);
          if (categoryColors.length === 0) return null;
          
          return (
            <div key={category} className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                {category} Colors
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-3">
                {categoryColors.map((color) => {
                  const isSelected = activeColorTypeData?.currentColor === color.value;
                  
                  return (
                    <motion.button
                      key={color.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleColorSelect(color.value)}
                      className={`relative w-12 h-12 rounded-lg border-2 transition-all ${
                        isSelected 
                          ? 'border-white shadow-lg ring-2 ring-primary-500' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4" style={{ color: color.value }} />
                          </div>
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Color Input */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Color</h3>
        <div className="flex items-center space-x-4">
          <input
            type="color"
            value={activeColorTypeData?.currentColor}
            onChange={(e) => handleColorSelect(e.target.value)}
            className="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer"
          />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hex Code
            </label>
            <input
              type="text"
              value={activeColorTypeData?.currentColor}
              onChange={(e) => {
                if (e.target.value.match(/^#[0-9A-Fa-f]{6}$/)) {
                  handleColorSelect(e.target.value);
                }
              }}
              className="input w-full"
              placeholder="#000000"
            />
          </div>
        </div>
      </div>

      {/* Color Preview */}
      <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <button 
              className="btn-primary px-6 py-2"
              style={{ backgroundColor: websiteConfig.colors.primary }}
            >
              Primary Button
            </button>
            <span 
              className="text-lg font-semibold"
              style={{ color: websiteConfig.colors.secondary }}
            >
              Secondary Text
            </span>
            <span 
              className="text-sm px-3 py-1 rounded-full"
              style={{ 
                backgroundColor: websiteConfig.colors.accent + '20',
                color: websiteConfig.colors.accent 
              }}
            >
              Accent Badge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
