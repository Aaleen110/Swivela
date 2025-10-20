import { useState } from 'react';
import { motion } from 'framer-motion';
import { Type, Check, Search } from 'lucide-react';
import { useWebsiteStore } from '../store/useWebsiteStore';

const FontPicker = ({ onFontChange, compact = false }) => {
  const { websiteConfig, updateFonts } = useWebsiteStore();
  const [searchQuery, setSearchQuery] = useState('');

  const currentFont = websiteConfig.fonts?.primary || 'Inter';

  const fontCategories = [
    {
      name: 'Modern Sans',
      fonts: [
        { name: 'Inter', weights: [300, 400, 500, 600, 700], description: 'Clean and versatile' },
        { name: 'Poppins', weights: [300, 400, 500, 600, 700], description: 'Friendly and approachable' },
        { name: 'Roboto', weights: [300, 400, 500, 700], description: 'Google\'s signature font' },
        { name: 'Open Sans', weights: [300, 400, 600, 700], description: 'Highly readable' },
        { name: 'Lato', weights: [300, 400, 700], description: 'Humanist sans-serif' },
        { name: 'Montserrat', weights: [300, 400, 500, 600, 700], description: 'Geometric and modern' },
        { name: 'Source Sans Pro', weights: [300, 400, 600, 700], description: 'Adobe\'s clean font' },
        { name: 'Nunito', weights: [300, 400, 600, 700], description: 'Rounded and friendly' }
      ]
    },
    {
      name: 'Professional Serif',
      fonts: [
        { name: 'Playfair Display', weights: [400, 500, 600, 700], description: 'Elegant and sophisticated' },
        { name: 'Merriweather', weights: [300, 400, 700], description: 'Designed for reading' },
        { name: 'Lora', weights: [400, 500, 600, 700], description: 'Contemporary serif' },
        { name: 'Crimson Text', weights: [400, 600, 700], description: 'Classic book typography' },
        { name: 'Libre Baskerville', weights: [400, 700], description: 'Traditional serif' },
        { name: 'PT Serif', weights: [400, 700], description: 'Russian-inspired serif' }
      ]
    },
    {
      name: 'Display & Creative',
      fonts: [
        { name: 'Oswald', weights: [300, 400, 500, 600, 700], description: 'Condensed and bold' },
        { name: 'Raleway', weights: [300, 400, 500, 600, 700], description: 'Elegant and thin' },
        { name: 'Ubuntu', weights: [300, 400, 500, 700], description: 'Humanist and friendly' },
        { name: 'Fira Sans', weights: [300, 400, 500, 600, 700], description: 'Mozilla\'s font' },
        { name: 'Work Sans', weights: [300, 400, 500, 600, 700], description: 'Optimized for UI' },
        { name: 'DM Sans', weights: [400, 500, 700], description: 'Low-contrast sans-serif' }
      ]
    },
    {
      name: 'Monospace',
      fonts: [
        { name: 'JetBrains Mono', weights: [400, 500, 700], description: 'Developer-friendly' },
        { name: 'Fira Code', weights: [300, 400, 500, 600, 700], description: 'Programming font' },
        { name: 'Source Code Pro', weights: [300, 400, 600, 700], description: 'Adobe\'s monospace' },
        { name: 'Roboto Mono', weights: [300, 400, 500, 700], description: 'Google\'s monospace' }
      ]
    }
  ];

  const handleFontSelect = (fontName) => {
    updateFonts({ primary: fontName });
    if (onFontChange) {
      onFontChange({ primary: fontName });
    }
  };

  // Filter fonts based on search query
  const filteredCategories = fontCategories.map(category => ({
    ...category,
    fonts: category.fonts.filter(font => 
      font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      font.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.fonts.length > 0);

  return (
    <div className="w-full">
      {/* Modern Header */}
      <div className="text-center mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
            <Type className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Typography</h2>
        </div>
        <p className="text-gray-500 text-sm">
          Choose fonts that match your brand personality
        </p>
      </div>

      {/* Font Preview Section */}
      <div className="mb-6 p-6 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Live Preview</h3>
          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Real-time
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Heading Preview */}
          <div 
            className="text-3xl font-bold text-gray-900"
            style={{ fontFamily: currentFont }}
          >
            Professional CA Services
          </div>
          
          {/* Body Text Preview */}
          <div 
            className="text-base text-gray-700 leading-relaxed"
            style={{ fontFamily: currentFont }}
          >
            We provide comprehensive financial and business advisory services to help your business grow and succeed in today's competitive market.
          </div>
          
          {/* Accent Text Preview */}
          <div 
            className="text-lg font-semibold"
            style={{ 
              fontFamily: currentFont,
              color: websiteConfig.colors?.primary || '#2563eb'
            }}
          >
            Trusted by 500+ Businesses
          </div>
        </div>
      </div>

      {/* Current Font Display */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Selected Font
            </h3>
            <p className="text-xs text-gray-600 font-mono bg-white px-2 py-1 rounded">
              {currentFont}
            </p>
          </div>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <Type className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search fonts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Font Categories */}
      <div className="space-y-6">
        {filteredCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                {category.name}
              </h4>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.fonts.length} fonts
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {category.fonts.map((font) => {
                const isSelected = currentFont === font.name;
                
                return (
                  <motion.button
                    key={font.name}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleFontSelect(font.name)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      isSelected 
                        ? 'border-primary-500 bg-gradient-to-r from-primary-50 to-primary-100 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h5 
                            className="text-lg font-semibold"
                            style={{ fontFamily: font.name }}
                          >
                            {font.name}
                          </h5>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
                            >
                              <Check className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{font.description}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">Weights:</span>
                          <div className="flex space-x-1">
                            {font.weights.map((weight) => (
                              <span 
                                key={weight}
                                className="text-xs px-2 py-1 bg-gray-100 rounded font-mono"
                                style={{ fontFamily: font.name, fontWeight: weight }}
                              >
                                {weight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Font Preview */}
                      <div className="ml-4 text-right">
                        <div 
                          className="text-2xl font-bold text-gray-900 mb-1"
                          style={{ fontFamily: font.name }}
                        >
                          Aa
                        </div>
                        <div 
                          className="text-sm text-gray-600"
                          style={{ fontFamily: font.name }}
                        >
                          Sample
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FontPicker;
