import { useWebsiteStore } from '../../store/useWebsiteStore';

const About1 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { firmName, aboutText } = content;

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      title: "Senior Partner",
      qualification: "FCA, CPA",
      experience: "15+ Years",
      image: null
    },
    {
      name: "Priya Sharma",
      title: "Tax Specialist",
      qualification: "CA, LLB",
      experience: "12+ Years",
      image: null
    },
    {
      name: "Amit Patel",
      title: "Audit Partner",
      qualification: "FCA, CISA",
      experience: "18+ Years",
      image: null
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            About {firmName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {aboutText}
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: colors.secondary }}
          >
            Our Expert Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Profile Image Placeholder */}
                <div 
                  className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{ backgroundColor: colors.primary }}
                >
                  {member.name.charAt(0)}
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>
                
                <p 
                  className="text-lg font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  {member.title}
                </p>
                
                <p className="text-gray-600 mb-2">{member.qualification}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values/Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Experience", value: "15+", description: "Years in Practice" },
            { title: "Clients", value: "500+", description: "Happy Businesses" },
            { title: "Compliance", value: "100%", description: "Success Rate" },
            { title: "Expertise", value: "50+", description: "Service Areas" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: colors.accent }}
              >
                {stat.value}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {stat.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About1;
