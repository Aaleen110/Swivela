import { useWebsiteStore } from '../../../store/useWebsiteStore';

const ContactShortcut2 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;

  const quickActions = [
    {
      icon: "📞",
      title: "Call Now",
      description: "Speak directly with our CA",
      action: "+91 98765 43210"
    },
    {
      icon: "✉️",
      title: "Email Us",
      description: "Get detailed consultation",
      action: "info@yourcafirm.com"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick queries & support",
      action: "Chat Now"
    }
  ];

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: colors.primary + '10' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your preferred way to connect with our expert team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                style={{ backgroundColor: colors.primary + '20' }}
              >
                {action.icon}
              </div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: colors.primary }}
              >
                {action.title}
              </h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <button 
                className="w-full py-2 text-sm font-medium rounded-lg hover:opacity-90 transition-opacity text-white"
                style={{ backgroundColor: colors.primary }}
              >
                {action.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactShortcut2;
