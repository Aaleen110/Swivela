import { useWebsiteStore } from '../../../store/useWebsiteStore';

const NavTopBar1 = () => {
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
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            className="px-6 py-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: colors.primary }}
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavTopBar1;
