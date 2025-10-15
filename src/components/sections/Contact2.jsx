import { useWebsiteStore } from '../../store/useWebsiteStore';

const Contact2 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { contactInfo } = content;

  const defaultContactInfo = {
    email: 'info@yourcafirm.com',
    phone: '+91 98765 43210',
    address: '123 Business District,',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001'
  };

  const contact = { ...defaultContactInfo, ...contactInfo };

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const quickLinks = [
    { title: "Tax Filing", icon: "📊", description: "Income Tax & GST Services" },
    { title: "Audit Services", icon: "🔍", description: "Comprehensive Audit Solutions" },
    { title: "Business Setup", icon: "🏢", description: "Company Registration & Compliance" },
    { title: "Advisory", icon: "💼", description: "Strategic Business Consulting" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your business to the next level? Let's discuss how we can help you achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Office Address */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                >
                  📍
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: colors.primary }}
                  >
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    {contact.address}<br />
                    {contact.city}, {contact.state} {contact.pincode}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                  >
                    📞
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{contact.phone}</p>
                    <p className="text-sm text-gray-600">Call us directly</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                  >
                    ✉️
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{contact.email}</p>
                    <p className="text-sm text-gray-600">Email us anytime</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: colors.primary }}
              >
                Office Hours
              </h3>
              <div className="space-y-2">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span 
                      className="font-medium"
                      style={{ color: colors.accent }}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: colors.secondary }}
              >
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="input w-full"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="input w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select className="input w-full">
                    <option>Select a service</option>
                    <option>Tax Filing & Planning</option>
                    <option>GST Compliance</option>
                    <option>Company Incorporation</option>
                    <option>Audit Services</option>
                    <option>Business Advisory</option>
                    <option>Bookkeeping & Accounting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="input w-full"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: colors.primary }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16">
          <h3 
            className="text-2xl font-bold text-center mb-8"
            style={{ color: colors.secondary }}
          >
            Quick Access to Our Services
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow text-left"
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{link.title}</h4>
                <p className="text-sm text-gray-600">{link.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div 
            className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto"
            style={{ borderLeft: `4px solid ${colors.accent}` }}
          >
            <h4 
              className="text-lg font-semibold mb-2"
              style={{ color: colors.accent }}
            >
              Need Urgent Assistance?
            </h4>
            <p className="text-gray-600 mb-4">
              For urgent financial matters or compliance deadlines, call us directly.
            </p>
            <button 
              className="px-6 py-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.accent }}
            >
              Call Now: {contact.phone}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
