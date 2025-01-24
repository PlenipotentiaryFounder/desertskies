import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Desert Skies Aviation | Flight Training in Arizona',
  description: 'Premier flight training school in Arizona offering personalized programs for recreational and career pilots. Start your aviation journey with Desert Skies Aviation.',
  keywords: 'flight school, pilot training, aviation school, flight training Arizona, career pilot program, discovery flight',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://desertskiesaviationaz.com",
              "name": "Desert Skies Aviation",
              "image": "https://desertskiesaviationaz.com/images/desert skies aviation logo.png",
              "description": "Expert flight training in Arizona at competitive rates. Get your pilot's license with personalized instruction from a certified CFI. Offering discovery flights starting at $199.",
              "url": "https://desertskiesaviationaz.com",
              "telephone": "(480) 555-0123",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15000 N Airport Dr",
                "addressLocality": "Scottsdale",
                "addressRegion": "AZ",
                "postalCode": "85260",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.6225,
                "longitude": -111.9108
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "06:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "07:00",
                  "closes": "20:00"
                }
              ],
              "sameAs": [
                "https://twitter.com/desertskiesav"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 