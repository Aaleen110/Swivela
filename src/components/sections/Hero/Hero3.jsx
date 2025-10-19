import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Hero3 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { firmName, tagline, testimonials } = content;

  const defaultTestimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Startup",
      text: "Excellent service and professional approach. Highly recommended!"
    },
    {
      name: "Priya Sharma",
      company: "Manufacturing Co.",
      text: "Outstanding expertise in GST compliance. Saved us thousands!"
    },
    {
      name: "Amit Patel",
      company: "Retail Business",
      text: "Professional, reliable, and always on time. Great work!"
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="mb-8">
            <div 
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: colors.primary }}
            >
              {firmName.charAt(0)}
            </div>
          </div>

          {/* Main Content */}
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            {firmName}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {tagline}
          </p>

          {/* CTA */}
          <button 
            className="px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: colors.primary }}
          >
            Get Started Today
          </button>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4"
                  style={{ backgroundColor: colors.accent }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-4 h-4 mr-1"
                    style={{ color: colors.accent }}
                  >
                    ★
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by 500+ businesses across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg">ICAI Certified</div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">10+ Years Experience</div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">100% Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
