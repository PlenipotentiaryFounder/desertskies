import { Metadata } from 'next';

const siteTitle = "Affordable Flight Training in Arizona | Desert Skies Aviation";
const siteDescription = "Expert flight training in Arizona at competitive rates. Get your pilot's license with personalized instruction from a certified CFI. Offering discovery flights starting at $199. Located in Scottsdale, AZ.";

const defaultMetadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'cheap flight training arizona',
    'affordable flight school arizona',
    'flight instruction scottsdale',
    'best flight school phoenix',
    'pilot training arizona cost',
    'discovery flight arizona',
    'learn to fly arizona',
    'flight instructor scottsdale',
    'private pilot license cost arizona',
    'aviation school phoenix',
    'flight training near me',
    'CFI arizona',
    'pilot certification arizona',
    'flight lessons scottsdale',
    'aviation training phoenix'
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
    google: 'qGId2qOd8bmLwA-SCLA_JlxrxyCGu4bcDvo',
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