import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Testimonials2 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { testimonials } = content;

  const defaultTestimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      role: "CEO",
      text: "Exceptional service! They helped us with GST compliance and saved us thousands in penalties. Their team is knowledgeable and always available when needed.",
      rating: 5,
      industry: "Technology"
    },
    {
      name: "Priya Sharma", 
      company: "Manufacturing Co.",
      role: "Finance Director",
      text: "Outstanding expertise in tax planning. They've been our CA for 5 years and we couldn't be happier. Professional, reliable, and cost-effective.",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      name: "Amit Patel",
      company: "Retail Business",
      role: "Owner",
      text: "Best decision we made! Their audit services are thorough and their advisory has helped us grow significantly. Highly recommended!",
      rating: 5,
      industry: "Retail"
    },
    {
      name: "Sunita Gupta",
      company: "Export House",
      role: "Managing Director", 
      text: "Professional, reliable, and always on time. They handle all our accounting needs efficiently. Great value for money and excellent service quality.",
      rating: 5,
      industry: "Export"
    },
    {
      name: "Vikram Singh",
      company: "Construction Ltd",
      role: "CFO",
      text: "Comprehensive financial solutions that helped us streamline operations and improve profitability. Their team understands business challenges well.",
      rating: 5,
      industry: "Construction"
    },
    {
      name: "Neha Agarwal",
      company: "Healthcare Services",
      role: "Finance Manager",
      text: "Expert guidance on compliance matters. They've helped us navigate complex regulations with ease. Very satisfied with their services.",
      rating: 5,
      industry: "Healthcare"
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across different industries achieve their goals
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayTestimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-4 h-4 mr-1"
                    style={{ color: colors.accent }}
                  >
                    ★
                  </div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4"
                  style={{ backgroundColor: colors.primary }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-medium" style={{ color: colors.accent }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Breakdown */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 
            className="text-2xl font-bold text-center mb-8"
            style={{ color: colors.secondary }}
          >
            Industries We Serve
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Technology", "Manufacturing", "Retail", "Healthcare", 
              "Construction", "Export", "Finance", "Education"
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: colors.primary + '20' }}
                >
                  {industry === "Technology" && "💻"}
                  {industry === "Manufacturing" && "🏭"}
                  {industry === "Retail" && "🛍️"}
                  {industry === "Healthcare" && "🏥"}
                  {industry === "Construction" && "🏗️"}
                  {industry === "Export" && "🌍"}
                  {industry === "Finance" && "💰"}
                  {industry === "Education" && "🎓"}
                </div>
                <p className="text-sm font-medium text-gray-700">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Happy Clients", icon: "😊" },
            { number: "15+", label: "Years Experience", icon: "📅" },
            { number: "100%", label: "Compliance Rate", icon: "✅" },
            { number: "4.9/5", label: "Average Rating", icon: "⭐" }
          ].map((stat, index) => (
            <div key={index}>
              <div 
                className="text-4xl mb-2"
                style={{ color: colors.accent }}
              >
                {stat.icon}
              </div>
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: colors.primary }}
              >
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div 
            className="bg-gradient-to-r rounded-xl p-8 text-white"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
            }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
