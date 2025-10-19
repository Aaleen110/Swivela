import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Hero1 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { firmName, tagline, aboutText } = content;

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ 
        '--primary-color': colors.primary,
        '--secondary-color': colors.secondary,
        '--accent-color': colors.accent
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Logo Placeholder */}
          <div className="mb-8">
            <div 
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white font-bold text-2xl"
              style={{ backgroundColor: colors.primary }}
            >
              {firmName.charAt(0)}
            </div>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            {firmName}
          </h1>

          {/* Tagline */}
          <p 
            className="text-xl md:text-2xl mb-8 font-medium"
            style={{ color: colors.secondary }}
          >
            {tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {aboutText}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.primary }}
            >
              Get Consultation
            </button>
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 hover:bg-gray-50 transition-colors"
              style={{ 
                borderColor: colors.primary,
                color: colors.primary
              }}
            >
              Our Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: colors.accent }}
              >
                10+
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: colors.accent }}
              >
                500+
              </div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: colors.accent }}
              >
                100%
              </div>
              <p className="text-gray-600">Compliance Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
