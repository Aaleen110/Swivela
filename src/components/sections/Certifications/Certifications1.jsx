import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Certifications1 = () => {
  const { websiteConfig } = useWebsiteStore();
  const { colors } = websiteConfig;

  const certifications = [
    {
      name: "ICAI Member",
      description: "Institute of Chartered Accountants of India",
      icon: "🏆",
      year: "2010"
    },
    {
      name: "CPA Certified",
      description: "Certified Public Accountant",
      icon: "📜",
      year: "2012"
    },
    {
      name: "GST Practitioner",
      description: "Authorized GST Service Provider",
      icon: "🏢",
      year: "2017"
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "✅",
      year: "2020"
    },
    {
      name: "CISA Certified",
      description: "Certified Information Systems Auditor",
      icon: "🔒",
      year: "2021"
    },
    {
      name: "IFRS Certified",
      description: "International Financial Reporting Standards",
      icon: "🌍",
      year: "2022"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Certifications & Memberships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional credentials that demonstrate our expertise and commitment to excellence
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4"
                style={{ backgroundColor: colors.primary + '20' }}
              >
                {cert.icon}
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: colors.primary }}
              >
                {cert.name}
              </h3>
              <p className="text-gray-600 mb-3">{cert.description}</p>
              <div 
                className="text-sm font-medium"
                style={{ color: colors.accent }}
              >
                Certified {cert.year}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div 
            className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto"
            style={{ borderLeft: `4px solid ${colors.accent}` }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: colors.secondary }}
            >
              Trusted Professional Standards
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our certifications ensure that we maintain the highest standards of professional 
              competence, ethical behavior, and continuous learning. We stay updated with the 
              latest regulations, technologies, and best practices to serve you better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications1;
