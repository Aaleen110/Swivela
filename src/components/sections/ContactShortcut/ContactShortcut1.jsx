import { useWebsiteStore } from '../../../store/useWebsiteStore';

const ContactShortcut1 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className="bg-white rounded-2xl p-8 shadow-sm text-center"
          style={{ borderTop: `4px solid ${colors.primary}` }}
        >
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Need Expert Financial Guidance?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get professional CA services tailored to your business needs. 
            From tax planning to compliance, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.primary }}
            >
              Get Free Consultation
            </button>
            <button 
              className="px-8 py-3 border-2 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              style={{ 
                borderColor: colors.primary,
                color: colors.primary
              }}
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactShortcut1;
