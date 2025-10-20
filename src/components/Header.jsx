import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Upload,
  Eye,
  Download,
  Settings,
  ChevronDown,
  Type,
} from 'lucide-react';
import { useWebsiteStore } from '../store/useWebsiteStore';
import ColorPicker from './ColorPicker';
import FontPicker from './FontPicker';
import LogoPicker from './LogoPicker';

const Header = () => {
  const { websiteConfig, updateColors, updateFonts } = useWebsiteStore();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFontPicker, setShowFontPicker] = useState(false);
  const [showLogoPicker, setShowLogoPicker] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleColorChange = (colors) => {
    updateColors(colors);
  };

  const handleFontChange = (fonts) => {
    updateFonts(fonts);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Swivela</h1>
            <span className="ml-2 text-sm text-gray-500">Website Builder</span>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">

            {/* Font Selection */}
            <div className="relative">

              <button
                onClick={() => setShowFontPicker(!showFontPicker)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Type className="w-4 h-4" />
                <span>Fonts</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showFontPicker && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-[800px] max-h-[80vh] bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50 overflow-y-auto"
                >
                  <FontPicker onFontChange={handleFontChange} />
                </motion.div>
              )}
            </div>

            {/* Color Picker */}
            <div className="relative">

              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Palette className="w-4 h-4" />
                <span>Colors</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showColorPicker && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-[800px] max-h-[80vh] bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50 overflow-y-auto"
                >
                  <ColorPicker onColorChange={handleColorChange} />
                </motion.div>
              )}
            </div>

            {/* Logo Upload */}
            <button 
              onClick={() => setShowLogoPicker(true)}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Upload className="w-4 h-4" />
              <span>Logo</span>
            </button>

            {/* Preview */}
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>

            {/* Generate Button */}
            <button className="flex items-center space-x-2 px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              {/* <Download className="w-4 h-4" /> */}
              <span>Go Live!</span>
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center space-x-4 text-sm text-blue-700">
            <span>💡 <strong>Pro Tip:</strong> Use ← → arrow keys to switch templates</span>
            <span>•</span>
            <span>Hover over sections to see navigation controls</span>
            <span>•</span>
            <span>Swipe on mobile devices</span>
          </div>
        </div>
      </div>

      {/* Logo Picker Modal */}
      <LogoPicker 
        isOpen={showLogoPicker} 
        onClose={() => setShowLogoPicker(false)} 
      />

    </header>
  );
};

export default Header;
