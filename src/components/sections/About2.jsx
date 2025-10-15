import { useWebsiteStore } from '../../store/useWebsiteStore';

const About2 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { firmName, aboutText } = content;

  const milestones = [
    { year: "2010", title: "Founded", description: "Started with a vision to serve businesses" },
    { year: "2015", title: "Expanded", description: "Grew to 10+ team members" },
    { year: "2020", title: "Digital", description: "Embraced digital transformation" },
    { year: "2024", title: "Present", description: "Serving 500+ clients nationwide" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings"
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every service"
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We work as an extension of your business team"
    },
    {
      icon: "📈",
      title: "Innovation",
      description: "Continuously evolving to meet changing business needs"
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
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {aboutText}
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: colors.secondary }}
          >
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
              style={{ backgroundColor: colors.primary + '30' }}
            />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div 
                      className="bg-white rounded-xl p-6 shadow-lg border-l-4"
                      style={{ borderLeftColor: colors.primary }}
                    >
                      <div 
                        className="text-2xl font-bold mb-2"
                        style={{ color: colors.primary }}
                      >
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                      style={{ backgroundColor: colors.primary }}
                    />
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: colors.secondary }}
          >
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                  style={{ backgroundColor: colors.primary + '20' }}
                >
                  {value.icon}
                </div>
                <h4 
                  className="text-xl font-semibold mb-3"
                  style={{ color: colors.primary }}
                >
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "500+", label: "Happy Clients" },
            { number: "50+", label: "Team Members" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index}>
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: colors.accent }}
              >
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About2;
