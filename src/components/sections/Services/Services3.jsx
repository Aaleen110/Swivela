import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Services3 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { services } = content;

  const featuredServices = [
    {
      title: "Income Tax Filing & Planning",
      description: "Complete tax filing solutions with strategic planning to minimize your tax liability.",
      icon: "📊",
      features: ["E-filing", "Tax Planning", "Refund Processing", "Compliance"]
    },
    {
      title: "GST Registration & Compliance", 
      description: "Seamless GST registration and ongoing compliance management for your business.",
      icon: "🏢",
      features: ["Registration", "Monthly Returns", "Reconciliation", "Audit Support"]
    },
    {
      title: "Audit & Assurance Services",
      description: "Comprehensive audit services ensuring compliance and transparency in your business.",
      icon: "🔍",
      features: ["Statutory Audit", "Internal Audit", "Due Diligence", "Compliance Review"]
    },
    {
      title: "Company Incorporation",
      description: "Complete company formation services from registration to compliance setup.",
      icon: "📋",
      features: ["Name Approval", "Registration", "PAN/TAN", "Banking Setup"]
    },
    {
      title: "Business Advisory",
      description: "Strategic business advisory to help you make informed financial decisions.",
      icon: "💼",
      features: ["Financial Planning", "Business Strategy", "Investment Advisory", "Risk Management"]
    },
    {
      title: "Bookkeeping & Accounting",
      description: "Professional bookkeeping and accounting services to maintain accurate records.",
      icon: "📚",
      features: ["Daily Bookkeeping", "Monthly Reports", "Financial Statements", "Reconciliation"]
    }
  ];

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: colors.primary + '05' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert financial solutions designed to drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Icon & Title */}
              <div className="flex items-start space-x-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                  style={{ backgroundColor: colors.primary + '20' }}
                >
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: colors.primary }}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mr-2"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button 
                className="w-full py-2 text-sm font-medium rounded-lg hover:opacity-90 transition-opacity text-white"
                style={{ backgroundColor: colors.primary }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 
            className="text-2xl font-bold text-center mb-8"
            style={{ color: colors.secondary }}
          >
            Why Choose Our Services?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
              >
                ⚡
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast & Efficient</h4>
              <p className="text-sm text-gray-600">
                Quick turnaround times without compromising on quality
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
              >
                🛡️
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">100% Compliant</h4>
              <p className="text-sm text-gray-600">
                Always up-to-date with latest regulations and requirements
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
              >
                💬
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">
                Round-the-clock assistance for all your queries
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for? We offer custom solutions too.
          </p>
          <button 
            className="px-8 py-3 font-semibold rounded-lg hover:opacity-90 transition-opacity text-white"
            style={{ backgroundColor: colors.primary }}
          >
            Contact Us for Custom Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services3;
