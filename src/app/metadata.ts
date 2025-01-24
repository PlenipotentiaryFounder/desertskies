import { Metadata } from 'next';

const siteTitle = "Desert Skies Aviation | Flight Instruction in Arizona";
const siteDescription = "Personalized flight instruction in Arizona with Thomas Ferrier, Certified Flight Instructor (CFI). Offering discovery flights and comprehensive pilot training under FAR Part 61.";

const defaultMetadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'flight instruction',
    'certified flight instructor',
    'pilot training',
    'discovery flight',
    'learn to fly',
    'CFI',
    'Arizona flight training',
    'private pilot license',
    'FAR Part 61'
  ],
  authors: [{ name: 'Thomas Ferrier', url: 'https://desertskiesaviationaz.com' }],
  creator: 'Thomas Ferrier',
  publisher: 'Desert Skies Aviation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://desertskiesaviationaz.com',
    siteName: 'Desert Skies Aviation',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@desertskiesav',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export function getMetadata({ title, description }: { title?: string; description?: string } = {}) {
  return {
    ...defaultMetadata,
    title: title ? `${title} | Desert Skies Aviation` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ? `${title} | Desert Skies Aviation` : defaultMetadata.title,
      description: description || defaultMetadata.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ? `${title} | Desert Skies Aviation` : defaultMetadata.title,
      description: description || defaultMetadata.description,
    },
  };
} 