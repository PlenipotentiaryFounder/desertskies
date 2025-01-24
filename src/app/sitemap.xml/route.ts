import { MetadataRoute } from 'next';

async function generateSitemapXml(): Promise<string> {
  const baseUrl = 'https://desertskiesaviationaz.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/discovery-flight',
    '/training',
    '/training/general-aviation',
    '/blog',
  ];

  // Blog posts
  const blogPosts = [
    'journey-to-professional-pilot',
    'cost-of-flight-training-arizona',
    'best-flight-schools-arizona',
  ];

  const urls = [
    ...staticPages.map(route => ({
      loc: `${baseUrl}${route}`,
      lastmod: new Date().toISOString(),
      changefreq: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? '1.0' : '0.8',
    })),
    ...blogPosts.map(slug => ({
      loc: `${baseUrl}/blog/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.6',
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('')}
</urlset>`;
}

export async function GET() {
  const xml = await generateSitemapXml();
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
} 