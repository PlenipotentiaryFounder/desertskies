import { Metadata } from 'next';

const siteTitle = 'Desert Skies Aviation | Flight Training in Arizona';
const siteDescription = 'Premier flight training school in Arizona offering personalized programs for recreational and career pilots. Start your aviation journey with Desert Skies Aviation.';

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://desertskiesaviationaz.com'),
  title: {
    default: siteTitle,
    template: '%s | Desert Skies Aviation',
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Desert Skies Aviation',
    title: siteTitle,
    description: siteDescription,
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Desert Skies Aviation',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@desertskiesav',
    images: ['/images/twitter-image.jpg'],
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
};

export function getMetadata(
  title?: string,
  description?: string,
  images?: string[]
): Metadata {
  return {
    ...defaultMetadata,
    ...(title && { 
      title,
      openGraph: {
        ...defaultMetadata.openGraph,
        title,
      },
      twitter: {
        ...defaultMetadata.twitter,
        title,
      },
    }),
    ...(description && { 
      description,
      openGraph: {
        ...defaultMetadata.openGraph,
        description,
      },
      twitter: {
        ...defaultMetadata.twitter,
        description,
      },
    }),
    ...(images && {
      openGraph: {
        ...defaultMetadata.openGraph,
        images: images.map((url) => ({
          url,
          width: 1200,
          height: 630,
          alt: title || siteTitle,
        })),
      },
      twitter: {
        ...defaultMetadata.twitter,
        images,
      },
    }),
  };
} 