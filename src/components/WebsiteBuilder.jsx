import SectionWithNavigation from './SectionWithNavigation';

const WebsiteBuilder = ({ activeSection }) => {
  return (
    <div className="w-full pb-20">
      {/* Render only the active section */}
      <SectionWithNavigation 
        sectionType={activeSection} 
        isActive={true}
      />
    </div>
  );
};

export default WebsiteBuilder;
