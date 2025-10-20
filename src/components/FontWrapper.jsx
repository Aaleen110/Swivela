import { useWebsiteStore } from '../store/useWebsiteStore';

const FontWrapper = ({ children }) => {
  const { websiteConfig } = useWebsiteStore();
  const selectedFont = websiteConfig.fonts?.primary || 'Inter';

  return (
    <div style={{ fontFamily: selectedFont }}>
      {children}
    </div>
  );
};

export default FontWrapper;
