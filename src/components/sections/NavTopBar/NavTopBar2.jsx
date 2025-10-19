import { useWebsiteStore } from '../../../store/useWebsiteStore';

const NavTopBar2 = () => {
  const { websiteConfig, content } = useWebsiteStore();
  const { colors } = websiteConfig;
  const { firmName } = content;

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
              <span 
                className="font-bold text-lg"
                style={{ color: colors.primary }}
              >
                {firmName.charAt(0)}
              </span>
            </div>
            <span className="text-xl font-bold text-white">
              {firmName}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-gray-200 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-white text-sm">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <span>info@yourcafirm.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavTopBar2;
