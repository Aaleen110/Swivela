import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Contact1 = () => {
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: colors.secondary }}
              >
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                  >
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">{contact.phone}</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                  >
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">{contact.email}</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                  >
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      {contact.address}<br />
                      {contact.city}, {contact.state} {contact.pincode}
                    </p>
                    <p className="text-sm text-gray-500">Visit us by appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div 
              className="rounded-xl p-6"
              style={{ backgroundColor: colors.primary + '10' }}
            >
              <h4 
                className="text-lg font-semibold mb-3"
                style={{ color: colors.primary }}
              >
                Quick Response
              </h4>
              <p className="text-gray-600 mb-4">
                Need immediate assistance? Call us now for urgent financial matters.
              </p>
              <button 
                className="px-6 py-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: colors.primary }}
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
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
    </section>
  );
};

export default Contact1;
