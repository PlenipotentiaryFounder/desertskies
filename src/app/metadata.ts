import { Metadata } from 'next';

const defaultMetadata = {
  title: {
    default: 'Desert Skies Aviation | Flight Training in Arizona',
    template: '%s | Desert Skies Aviation',
  },
  description: 'Premier flight training school in Arizona offering personalized programs for recreational and career pilots. Start your aviation journey with Desert Skies Aviation.',
  keywords: [
    'flight school',
    'pilot training',
    'aviation school',
    'flight training Arizona',
    'career pilot program',
    'discovery flight',
    'private pilot license',
    'commercial pilot license',
    'flight instructor',
    'Scottsdale airport',
  ],
  authors: [{ name: 'Thomas Ferrier' }],
  creator: 'Desert Skies Aviation',
  publisher: 'Desert Skies Aviation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://desertskiesaviation.com',
    siteName: 'Desert Skies Aviation',
    title: 'Desert Skies Aviation | Flight Training in Arizona',
    description: 'Premier flight training school in Arizona offering personalized programs for recreational and career pilots.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Desert Skies Aviation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desert Skies Aviation | Flight Training in Arizona',
    description: 'Premier flight training school in Arizona offering personalized programs for recreational and career pilots.',
    images: ['/images/twitter-image.jpg'],
    creator: '@desertskiesav',
  },
  robots: {
    index: true,
    follow: true,
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
} as const;

export const getMetadata = (
  title?: string,
  description?: string,
  images?: string[]
): Metadata => {
  const defaultTitle = defaultMetadata.title.default;

  return {
    ...defaultMetadata,
    ...(title && { title }),
    ...(description && { description }),
    ...(images && {
      openGraph: {
        ...defaultMetadata.openGraph,
        images: images.map((url) => ({
          url,
          width: 1200,
          height: 630,
          alt: title || defaultTitle,
        })),
      },
      twitter: {
        ...defaultMetadata.twitter,
        images,
      },
    }),
  };
}; 