import { create } from 'zustand';

// CA Section Templates
export const sectionTemplates = {
  navTopBar: [
    {
      id: 'navTopBar-1',
      name: 'Clean Navigation',
      description: 'Simple header with logo, navigation and CTA button'
    },
    {
      id: 'navTopBar-2',
      name: 'Professional Header',
      description: 'Header with contact info and branded design'
    }
  ],
  contactShortcut: [
    {
      id: 'contactShortcut-1',
      name: 'Simple CTA',
      description: 'Clean call-to-action with consultation buttons'
    },
    {
      id: 'contactShortcut-2',
      name: 'Quick Contact',
      description: 'Multiple contact options with action buttons'
    }
  ],
  hero: [
    {
      id: 'hero-1',
      name: 'Trust & Expertise',
      type: 'hero',
      preview: '/templates/hero-1.png',
      component: 'Hero1',
      description: 'Emphasizes trust, experience, and professional expertise'
    },
    {
      id: 'hero-2',
      name: 'Services Focus',
      type: 'hero',
      preview: '/templates/hero-2.png',
      component: 'Hero2',
      description: 'Highlights key services and consultation booking'
    },
    {
      id: 'hero-3',
      name: 'Client Success',
      type: 'hero',
      preview: '/templates/hero-3.png',
      component: 'Hero3',
      description: 'Showcases client testimonials and success stories'
    },
    {
      id: 'hero-4',
      name: 'Compliance Expert',
      type: 'hero',
      preview: '/templates/hero-4.png',
      component: 'Hero4',
      description: 'Focuses on compliance, GST, and tax expertise'
    },
    {
      id: 'hero-5',
      name: 'Local Presence',
      type: 'hero',
      preview: '/templates/hero-5.png',
      component: 'Hero5',
      description: 'Emphasizes local presence and accessibility'
    },
    {
      id: 'hero-6',
      name: 'Digital First',
      type: 'hero',
      preview: '/templates/hero-6.png',
      component: 'Hero6',
      description: 'Modern, digital-first approach with online services'
    }
  ],
  about: [
    {
      id: 'about-1',
      name: 'Team Focus',
      type: 'about',
      preview: '/templates/about-1.png',
      component: 'About1',
      description: 'Team profiles with qualifications and experience'
    },
    {
      id: 'about-2',
      name: 'Firm History',
      type: 'about',
      preview: '/templates/about-2.png',
      component: 'About2',
      description: 'Firm history, mission, and values'
    },
    {
      id: 'about-3',
      name: 'Certifications',
      type: 'about',
      preview: '/templates/about-3.png',
      component: 'About3',
      description: 'Professional certifications and memberships'
    }
  ],
  services: [
    {
      id: 'services-1',
      name: 'Service Grid',
      type: 'services',
      preview: '/templates/services-1.png',
      component: 'Services1',
      description: 'Grid layout showcasing all services'
    },
    {
      id: 'services-2',
      name: 'Service List',
      type: 'services',
      preview: '/templates/services-2.png',
      component: 'Services2',
      description: 'Detailed list with descriptions'
    },
    {
      id: 'services-3',
      name: 'Service Cards',
      type: 'services',
      preview: '/templates/services-3.png',
      component: 'Services3',
      description: 'Card-based layout with icons'
    }
  ],
  certifications: [
    {
      id: 'certifications-1',
      name: 'Certification Grid',
      description: 'Grid layout showcasing professional certifications'
    },
    {
      id: 'certifications-2',
      name: 'Credential List',
      description: 'Detailed list of certifications with verification badges'
    }
  ],
  testimonials: [
    {
      id: 'testimonials-1',
      name: 'Client Quotes',
      type: 'testimonials',
      preview: '/templates/testimonials-1.png',
      component: 'Testimonials1',
      description: 'Client testimonials with photos'
    },
    {
      id: 'testimonials-2',
      name: 'Case Studies',
      type: 'testimonials',
      preview: '/templates/testimonials-2.png',
      component: 'Testimonials2',
      description: 'Success stories and case studies'
    }
  ],
  contactUs: [
    {
      id: 'contact-1',
      name: 'Contact Form',
      type: 'contact',
      preview: '/templates/contact-1.png',
      component: 'Contact1',
      description: 'Contact form with office details'
    },
    {
      id: 'contact-2',
      name: 'Office Details',
      type: 'contact',
      preview: '/templates/contact-2.png',
      component: 'Contact2',
      description: 'Multiple office locations with map'
    }
  ],
  footer: [
    {
      id: 'footer-1',
      name: 'Professional Footer',
      type: 'footer',
      preview: '/templates/footer-1.png',
      component: 'Footer1',
      description: 'Comprehensive footer with links and contact info'
    },
    {
      id: 'footer-2',
      name: 'Minimal Footer',
      type: 'footer',
      preview: '/templates/footer-2.png',
      component: 'Footer2',
      description: 'Clean footer with essential information'
    }
  ]
};

// Default CA services
export const defaultCAServices = [
  'Income Tax Filing & Planning',
  'GST Registration & Compliance',
  'Company Incorporation',
  'Audit & Assurance Services',
  'Financial Statement Preparation',
  'Business Advisory',
  'Bookkeeping & Accounting',
  'TDS Compliance',
  'PF & ESI Compliance',
  'Startup Registration & Compliance'
];

export const useWebsiteStore = create((set, get) => ({
  // Website Configuration
  websiteConfig: {
    title: 'Your CA Firm',
    description: 'Professional Chartered Accountant Services',
    logo: null,
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#d946ef'
    },
    fonts: {
      primary: 'Inter'
    }
  },

  // Selected Sections
  selectedSections: {
    navTopBar: 'navTopBar-1',
    hero: 'hero-1',
    about: 'about-1',
    contactShortcut: 'contactShortcut-1',
    services: 'services-1',
    certifications: 'certifications-1',
    testimonials: 'testimonials-1',
    contactUs: 'contactUs-1',
    footer: 'footer-1'
  },

  // Content Data
  content: {
    firmName: 'Your CA Firm',
    tagline: 'Professional Chartered Accountant Services',
    aboutText: 'We provide comprehensive financial and business advisory services to help your business grow.',
    services: defaultCAServices,
    team: [],
    testimonials: [],
    contactInfo: {
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: ''
    }
  },

  // Uploaded Files
  uploadedFiles: {
    logo: null,
    csvData: null
  },

  // Current Step in Builder
  currentStep: 0,

  // Actions
  updateWebsiteConfig: (config) =>
    set((state) => ({
      websiteConfig: { ...state.websiteConfig, ...config }
    })),

  updateColors: (colors) =>
    set((state) => ({
      websiteConfig: {
        ...state.websiteConfig,
        colors: { ...state.websiteConfig.colors, ...colors }
      }
    })),

  updateFonts: (fonts) =>
    set((state) => ({
      websiteConfig: {
        ...state.websiteConfig,
        fonts: { ...state.websiteConfig.fonts, ...fonts }
      }
    })),

  selectSection: (sectionType, templateId) =>
    set((state) => ({
      selectedSections: {
        ...state.selectedSections,
        [sectionType]: templateId
      }
    })),

  updateContent: (content) =>
    set((state) => ({
      content: { ...state.content, ...content }
    })),

  uploadFile: (fileType, file) =>
    set((state) => ({
      uploadedFiles: {
        ...state.uploadedFiles,
        [fileType]: file
      }
    })),

  setCurrentStep: (step) =>
    set({ currentStep: step }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 5)
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0)
    })),

  resetWebsite: () =>
    set({
      websiteConfig: {
        title: 'Your CA Firm',
        description: 'Professional Chartered Accountant Services',
        logo: null,
        colors: {
          primary: '#2563eb',
          secondary: '#64748b',
          accent: '#d946ef'
        },
        fonts: {
          primary: 'Inter'
        }
      },
              selectedSections: {
                navTopBar: 'navTopBar-1',
                hero: 'hero-1',
                about: 'about-1',
                contactShortcut: 'contactShortcut-1',
                services: 'services-1',
                certifications: 'certifications-1',
                testimonials: 'testimonials-1',
                contactUs: 'contactUs-1',
                footer: 'footer-1'
              },
      content: {
        firmName: 'Your CA Firm',
        tagline: 'Professional Chartered Accountant Services',
        aboutText: 'We provide comprehensive financial and business advisory services to help your business grow.',
        services: defaultCAServices,
        team: [],
        testimonials: [],
        contactInfo: {
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          pincode: ''
        }
      },
      uploadedFiles: {
        logo: null,
        csvData: null
      },
      currentStep: 0
    })
}));
