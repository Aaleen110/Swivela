import { useWebsiteStore } from '../../store/useWebsiteStore';

const Services2 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { services } = content;

  const serviceCategories = [
    {
      category: "Tax Services",
      icon: "📊",
      services: ["Income Tax Filing", "Tax Planning", "TDS Compliance", "Tax Audit"]
    },
    {
      category: "GST Services", 
      icon: "🏢",
      services: ["GST Registration", "GST Returns", "GST Compliance", "GST Audit"]
    },
    {
      category: "Audit & Assurance",
      icon: "🔍",
      services: ["Statutory Audit", "Internal Audit", "Tax Audit", "Compliance Audit"]
    },
    {
      category: "Business Advisory",
      icon: "💼",
      services: ["Company Incorporation", "Business Planning", "Financial Advisory", "Startup Support"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored for your business success
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mr-4"
                  style={{ backgroundColor: colors.primary + '20' }}
                >
                  {category.icon}
                </div>
                <h3 
                  className="text-2xl font-bold"
                  style={{ color: colors.primary }}
                >
                  {category.category}
                </h3>
              </div>

              {/* Services List */}
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-center">
                    <div 
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button 
                className="mt-6 text-sm font-medium hover:underline"
                style={{ color: colors.accent }}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: colors.secondary }}
          >
            How We Work
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Free initial consultation to understand your needs"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Custom strategy development for your business"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Expert execution with regular progress updates"
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing support and maintenance services"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: colors.primary }}
                >
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div 
            className="bg-gradient-to-r rounded-xl p-8 text-white"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
            }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help your business grow and comply with regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
