import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useWebsiteStore } from '../store/useWebsiteStore';

const ColorPicker = ({ onColorChange, compact = false }) => {
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
    // Professional Blues - Complete Palette
    { name: 'Blue 50', value: '#eff6ff', category: 'blue' },
    { name: 'Blue 100', value: '#dbeafe', category: 'blue' },
    { name: 'Blue 200', value: '#bfdbfe', category: 'blue' },
    { name: 'Blue 300', value: '#93c5fd', category: 'blue' },
    { name: 'Blue 400', value: '#60a5fa', category: 'blue' },
    { name: 'Blue 500', value: '#3b82f6', category: 'blue' },
    { name: 'Blue 600', value: '#2563eb', category: 'blue' },
    { name: 'Blue 700', value: '#1d4ed8', category: 'blue' },
    { name: 'Blue 800', value: '#1e40af', category: 'blue' },
    { name: 'Blue 900', value: '#1e3a8a', category: 'blue' },
    
    // Trust Greens - Complete Palette
    { name: 'Green 50', value: '#ecfdf5', category: 'green' },
    { name: 'Green 100', value: '#d1fae5', category: 'green' },
    { name: 'Green 200', value: '#a7f3d0', category: 'green' },
    { name: 'Green 300', value: '#6ee7b7', category: 'green' },
    { name: 'Green 400', value: '#34d399', category: 'green' },
    { name: 'Green 500', value: '#10b981', category: 'green' },
    { name: 'Green 600', value: '#059669', category: 'green' },
    { name: 'Green 700', value: '#047857', category: 'green' },
    { name: 'Green 800', value: '#065f46', category: 'green' },
    { name: 'Green 900', value: '#064e3b', category: 'green' },
    
    // Professional Grays - Complete Palette
    { name: 'Gray 50', value: '#f9fafb', category: 'gray' },
    { name: 'Gray 100', value: '#f3f4f6', category: 'gray' },
    { name: 'Gray 200', value: '#e5e7eb', category: 'gray' },
    { name: 'Gray 300', value: '#d1d5db', category: 'gray' },
    { name: 'Gray 400', value: '#9ca3af', category: 'gray' },
    { name: 'Gray 500', value: '#6b7280', category: 'gray' },
    { name: 'Gray 600', value: '#4b5563', category: 'gray' },
    { name: 'Gray 700', value: '#374151', category: 'gray' },
    { name: 'Gray 800', value: '#1f2937', category: 'gray' },
    { name: 'Gray 900', value: '#111827', category: 'gray' },
    
    // Elegant Purples - Complete Palette
    { name: 'Purple 50', value: '#faf5ff', category: 'purple' },
    { name: 'Purple 100', value: '#f3e8ff', category: 'purple' },
    { name: 'Purple 200', value: '#e9d5ff', category: 'purple' },
    { name: 'Purple 300', value: '#d8b4fe', category: 'purple' },
    { name: 'Purple 400', value: '#c084fc', category: 'purple' },
    { name: 'Purple 500', value: '#a855f7', category: 'purple' },
    { name: 'Purple 600', value: '#9333ea', category: 'purple' },
    { name: 'Purple 700', value: '#7c3aed', category: 'purple' },
    { name: 'Purple 800', value: '#6b21a8', category: 'purple' },
    { name: 'Purple 900', value: '#581c87', category: 'purple' },
    
    // Warm Browns - Complete Palette
    { name: 'Amber 50', value: '#fffbeb', category: 'brown' },
    { name: 'Amber 100', value: '#fef3c7', category: 'brown' },
    { name: 'Amber 200', value: '#fde68a', category: 'brown' },
    { name: 'Amber 300', value: '#fcd34d', category: 'brown' },
    { name: 'Amber 400', value: '#fbbf24', category: 'brown' },
    { name: 'Amber 500', value: '#f59e0b', category: 'brown' },
    { name: 'Amber 600', value: '#d97706', category: 'brown' },
    { name: 'Amber 700', value: '#b45309', category: 'brown' },
    { name: 'Amber 800', value: '#92400e', category: 'brown' },
    { name: 'Amber 900', value: '#78350f', category: 'brown' },
    
    // Professional Reds - Complete Palette
    { name: 'Red 50', value: '#fef2f2', category: 'red' },
    { name: 'Red 100', value: '#fee2e2', category: 'red' },
    { name: 'Red 200', value: '#fecaca', category: 'red' },
    { name: 'Red 300', value: '#fca5a5', category: 'red' },
    { name: 'Red 400', value: '#f87171', category: 'red' },
    { name: 'Red 500', value: '#ef4444', category: 'red' },
    { name: 'Red 600', value: '#dc2626', category: 'red' },
    { name: 'Red 700', value: '#b91c1c', category: 'red' },
    { name: 'Red 800', value: '#991b1b', category: 'red' },
    { name: 'Red 900', value: '#7f1d1d', category: 'red' }
  ];

  const handleColorSelect = (color) => {
    updateColors({ [activeColorType]: color });
    if (onColorChange) {
      onColorChange({ [activeColorType]: color });
    }
  };

  const activeColorTypeData = colorTypes.find(type => type.key === activeColorType);

  return (
    <div className="w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Modern Header */}
      <div className="text-center mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
            <Palette className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Color Palette</h2>
        </div>
        <p className="text-gray-500 text-sm">
          Choose colors that represent your brand identity
        </p>
      </div>

      {/* Modern Color Type Selector */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {colorTypes.map((type) => (
          <button
            key={type.key}
            onClick={() => setActiveColorType(type.key)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              activeColorType === type.key
                ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <div
                className="w-10 h-10 rounded-xl border-3 border-white shadow-lg"
                style={{ backgroundColor: type.currentColor }}
              />
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 text-sm">{type.label.split(' ')[0]}</h3>
                <p className="text-xs text-gray-500">{type.label.split(' ')[1]}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Current Color Display */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {activeColorTypeData?.label}
            </h3>
            <p className="text-xs text-gray-600 font-mono bg-white px-2 py-1 rounded">
              {activeColorTypeData?.currentColor}
            </p>
          </div>
          <div
            className="w-14 h-14 rounded-xl border-3 border-white shadow-lg"
            style={{ backgroundColor: activeColorTypeData?.currentColor }}
          />
        </div>
      </div>

      {/* Professional Color Palette */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">Color Palette</h3>
          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {predefinedColors.length} shades
          </div>
        </div>
        
        {/* Group colors by category */}
        {['blue', 'green', 'gray', 'purple', 'brown', 'red'].map(category => {
          const categoryColors = predefinedColors.filter(color => color.category === category);
          if (categoryColors.length === 0) return null;
          
          return (
            <div key={category} className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {category}
                </h4>
              </div>
              <div className="grid grid-cols-10 gap-0 w-fit">
                {categoryColors.map((color) => {
                  const isSelected = activeColorTypeData?.currentColor === color.value;
                  
                  return (
                    <motion.button
                      key={color.value}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleColorSelect(color.value)}
                      className={`relative w-8 h-8 transition-all duration-200 ${
                        isSelected 
                          ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-white' 
                          : 'hover:ring-1 hover:ring-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <Check className="w-2 h-2" style={{ color: color.value }} />
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

      {/* Modern Custom Color Input */}
      <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900">Custom Color</h3>
          <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
            Hex
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="color"
              value={activeColorTypeData?.currentColor}
              onChange={(e) => handleColorSelect(e.target.value)}
              className="w-14 h-14 rounded-xl border-3 border-white shadow-lg cursor-pointer"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-gray-200"></div>
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={activeColorTypeData?.currentColor}
              onChange={(e) => {
                if (e.target.value.match(/^#[0-9A-Fa-f]{6}$/)) {
                  handleColorSelect(e.target.value);
                }
              }}
              className="w-full px-4 py-3 text-sm font-mono border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm"
              placeholder="#000000"
            />
          </div>
        </div>
      </div>

      {/* Modern Color Preview */}
      <div className="mt-6 p-4 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900">Live Preview</h3>
          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Real-time
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            style={{ backgroundColor: websiteConfig.colors.primary }}
          >
            Primary Button
          </button>
          <span 
            className="text-sm font-semibold"
            style={{ color: websiteConfig.colors.secondary }}
          >
            Secondary Text
          </span>
          <span 
            className="text-xs px-3 py-1.5 rounded-full font-medium"
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
  );
};

export default ColorPicker;
