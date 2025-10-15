import { useWebsiteStore } from '../../store/useWebsiteStore';

const About3 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { firmName, aboutText } = content;

  const certifications = [
    {
      name: "ICAI Member",
      description: "Institute of Chartered Accountants of India",
      icon: "🏆"
    },
    {
      name: "CPA Certified",
      description: "Certified Public Accountant",
      icon: "📜"
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "✅"
    },
    {
      name: "GST Practitioner",
      description: "Authorized GST Service Provider",
      icon: "🏢"
    }
  ];

  const expertise = [
    { area: "Tax Planning", percentage: 95 },
    { area: "Audit & Assurance", percentage: 90 },
    { area: "GST Compliance", percentage: 98 },
    { area: "Business Advisory", percentage: 85 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Professional Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {aboutText}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Certifications */}
          <div>
            <h3 
              className="text-3xl font-bold mb-8"
              style={{ color: colors.secondary }}
            >
              Certifications & Memberships
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: colors.primary + '10' }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ backgroundColor: colors.primary + '20' }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h4 
                      className="text-lg font-semibold mb-1"
                      style={{ color: colors.primary }}
                    >
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 
              className="text-3xl font-bold mb-8"
              style={{ color: colors.secondary }}
            >
              Areas of Expertise
            </h3>
            
            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{skill.area}</span>
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: colors.primary }}
                    >
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.percentage}%`,
                        backgroundColor: colors.primary
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: colors.accent + '10' }}>
              <h4 
                className="text-lg font-semibold mb-3"
                style={{ color: colors.accent }}
              >
                Why Choose Us?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.accent }} />
                  15+ Years of Experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.accent }} />
                  500+ Successful Projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.accent }} />
                  24/7 Client Support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.accent }} />
                  Latest Technology & Tools
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div 
            className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
            style={{ borderTop: `4px solid ${colors.primary}` }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide exceptional financial services that empower businesses to grow, 
              comply with regulations, and achieve their strategic objectives while maintaining 
              the highest standards of integrity and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;
