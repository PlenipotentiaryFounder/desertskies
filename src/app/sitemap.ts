import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://desertskiesaviationaz.com',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/discovery-flight',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/training',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/training/general-aviation',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/blog/journey-to-professional-pilot',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/blog/cost-of-flight-training-arizona',
      lastModified: new Date(),
    },
    {
      url: 'https://desertskiesaviationaz.com/blog/best-flight-schools-arizona',
      lastModified: new Date(),
    },
  ];
} 