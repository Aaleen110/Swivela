import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Certifications2 = () => {
  const { websiteConfig } = useWebsiteStore();
  const { colors } = websiteConfig;

  const certifications = [
    {
      name: "ICAI Member",
      description: "Institute of Chartered Accountants of India",
      logo: "ICAI",
      status: "Active Member"
    },
    {
      name: "CPA Certified",
      description: "Certified Public Accountant",
      logo: "CPA",
      status: "Licensed"
    },
    {
      name: "GST Practitioner",
      description: "Authorized GST Service Provider",
      logo: "GST",
      status: "Registered"
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      logo: "ISO",
      status: "Certified"
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
            Professional Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized certifications that validate our expertise and commitment to quality
          </p>
        </div>

        {/* Certifications List */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  {/* Logo Placeholder */}
                  <div 
                    className="w-20 h-20 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {cert.logo}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 
                      className="text-2xl font-semibold mb-2"
                      style={{ color: colors.primary }}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{cert.description}</p>
                    <div 
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: colors.accent + '20',
                        color: colors.accent
                      }}
                    >
                      {cert.status}
                    </div>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="text-right">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                    style={{ backgroundColor: colors.accent }}
                  >
                    ✓
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Verified</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div 
              className="text-4xl font-bold mb-2"
              style={{ color: colors.accent }}
            >
              15+
            </div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <div 
              className="text-4xl font-bold mb-2"
              style={{ color: colors.accent }}
            >
              6
            </div>
            <p className="text-gray-600">Professional Certifications</p>
          </div>
          <div>
            <div 
              className="text-4xl font-bold mb-2"
              style={{ color: colors.accent }}
            >
              100%
            </div>
            <p className="text-gray-600">Compliance Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications2;
