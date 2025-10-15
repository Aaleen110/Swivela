import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  const { threshold = 0.5, rootMargin = '0px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.sectionType);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [threshold, rootMargin]);

  const setRef = (sectionType) => (ref) => {
    if (ref) {
      ref.dataset.sectionType = sectionType;
      sectionRefs.current[sectionType] = ref;
    }
  };

  return { activeSection, setRef };
};

export default useIntersectionObserver;
