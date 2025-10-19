import { useWebsiteStore } from '../../../store/useWebsiteStore';

const Footer1 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { firmName, contactInfo } = content;

  const defaultContactInfo = {
    email: 'info@yourcafirm.com',
    phone: '+91 98765 43210',
    address: '123 Business District, Mumbai, Maharashtra 400001'
  };

  const contact = { ...defaultContactInfo, ...contactInfo };

  const footerLinks = {
    services: [
      'Tax Filing & Planning',
      'GST Compliance',
      'Audit Services',
      'Company Incorporation',
      'Business Advisory'
    ],
    company: [
      'About Us',
      'Our Team',
      'Certifications',
      'Testimonials',
      'Contact Us'
    ],
    resources: [
      'Tax Calendar',
      'GST Updates',
      'Compliance Guide',
      'FAQ',
      'Blog'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: colors.primary }}
              >
                {firmName.charAt(0)}
              </div>
              <span 
                className="text-xl font-bold"
                style={{ color: colors.primary }}
              >
                {firmName}
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional CA services for your business growth and compliance. 
              We provide comprehensive financial solutions with expert guidance.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                📘
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                🐦
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                💼
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                📧
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 mt-1">📍</span>
                <p className="text-gray-400">{contact.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">📞</span>
                <a 
                  href={`tel:${contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">✉️</span>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 {firmName}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
