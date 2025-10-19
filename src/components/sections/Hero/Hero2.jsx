import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Hero2 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { firmName, tagline, services } = content;

  return (
    <section 
      className="min-h-screen flex items-center"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {firmName}
            </h1>
            
            <p className="text-xl mb-8 opacity-90">
              {tagline}
            </p>

            {/* Key Services */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Our Key Services:</h3>
              <ul className="space-y-2">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index} className="flex items-center">
                    <div 
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <span className="opacity-90">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-4 text-lg font-semibold bg-white rounded-lg hover:bg-gray-100 transition-colors"
                style={{ color: colors.primary }}
              >
                Book Consultation
              </button>
              <button 
                className="px-8 py-4 text-lg font-semibold border-2 border-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                View All Services
              </button>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.slice(0, 4).map((service, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-opacity-20 transition-all"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.accent }}
                >
                  <span className="text-white font-bold text-lg">
                    {service.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold mb-2">{service}</h4>
                <p className="text-sm opacity-75">
                  Professional {service.toLowerCase()} services
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
