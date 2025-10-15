import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Upload, 
  Eye, 
  Download,
  Settings,
  ChevronDown
} from 'lucide-react';
import { useWebsiteStore } from '../store/useWebsiteStore';
import ColorPicker from './ColorPicker';

const Header = ({ activeSectionType, setActiveSectionType }) => {
  const { websiteConfig, updateColors } = useWebsiteStore();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleColorChange = (colors) => {
    updateColors(colors);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">Swivela</h1>
            <span className="ml-2 text-sm text-gray-500">Website Builder</span>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
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
                  className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 p-6 z-50"
                >
                  <ColorPicker onColorChange={handleColorChange} />
                </motion.div>
              )}
            </div>

            {/* Logo Upload */}
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Logo</span>
            </button>

            {/* Preview */}
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>

            {/* Settings */}
            <div className="relative">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50"
                >
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Website Settings</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Firm Name
                      </label>
                      <input
                        type="text"
                        className="input w-full"
                        defaultValue={websiteConfig.title}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tagline
                      </label>
                      <input
                        type="text"
                        className="input w-full"
                        defaultValue={websiteConfig.description}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Generate Button */}
            <button className="flex items-center space-x-2 px-6 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Generate</span>
            </button>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
