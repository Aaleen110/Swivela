import { useWebsiteStore } from '../../store/useWebsiteStore';

const Testimonials1 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { testimonials } = content;

  const defaultTestimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      role: "CEO",
      text: "Exceptional service! They helped us with GST compliance and saved us thousands in penalties. Highly professional and always available when needed.",
      rating: 5,
      image: null
    },
    {
      name: "Priya Sharma",
      company: "Manufacturing Co.",
      role: "Finance Director",
      text: "Outstanding expertise in tax planning. They've been our CA for 5 years and we couldn't be happier. Their team is knowledgeable and responsive.",
      rating: 5,
      image: null
    },
    {
      name: "Amit Patel",
      company: "Retail Business",
      role: "Owner",
      text: "Professional, reliable, and always on time. They handle all our accounting needs efficiently. Great value for money and excellent service quality.",
      rating: 5,
      image: null
    },
    {
      name: "Sunita Gupta",
      company: "Export House",
      role: "Managing Director",
      text: "Best CA firm in the city! Their audit services are thorough and their advisory has helped us grow significantly. Highly recommended!",
      rating: 5,
      image: null
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayTestimonials.slice(0, 4).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
              >
                "
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-5 h-5 mr-1"
                    style={{ color: colors.accent }}
                  >
                    ★
                  </div>
                ))}
              </div>

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
                  <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Compliance Rate" },
              { number: "4.9/5", label: "Client Rating" }
            ].map((stat, index) => (
              <div key={index}>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors.accent }}
                >
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials1;
