import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Services1 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { services } = content;

  const serviceIcons = {
    'Income Tax Filing & Planning': '📊',
    'GST Registration & Compliance': '🏢',
    'Company Incorporation': '📋',
    'Audit & Assurance Services': '🔍',
    'Financial Statement Preparation': '📈',
    'Business Advisory': '💼',
    'Bookkeeping & Accounting': '📚',
    'TDS Compliance': '💰',
    'PF & ESI Compliance': '👥',
    'Startup Registration & Compliance': '🚀'
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial and business solutions tailored for your success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Service Icon */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: colors.primary + '20' }}
              >
                {serviceIcons[service] || '⚙️'}
              </div>

              {/* Service Title */}
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: colors.primary }}
              >
                {service}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                Professional {service.toLowerCase()} services with expert guidance and timely completion.
              </p>

              {/* Learn More Button */}
              <button 
                className="text-sm font-medium hover:underline"
                style={{ color: colors.accent }}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div 
            className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto"
            style={{ borderLeft: `4px solid ${colors.accent}` }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-gray-600 mb-6">
              We provide tailored financial services to meet your specific business requirements.
            </p>
            <button 
              className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.primary }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
