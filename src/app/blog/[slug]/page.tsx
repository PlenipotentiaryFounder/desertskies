import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';

// This would typically come from a CMS or database
const posts = {
  'journey-to-professional-pilot': {
    title: 'The Journey to Becoming a Professional Pilot',
    excerpt: 'Discover the path from your first flight to a rewarding career in aviation. Learn about the requirements, challenges, and rewards of becoming a professional pilot.',
    content: `
      <p>Embarking on a journey to become a professional pilot is both exciting and challenging. This comprehensive guide will walk you through the essential steps, requirements, and considerations for turning your aviation dreams into reality.</p>

      <h2>Getting Started: Private Pilot License (PPL)</h2>
      <p>The first step in your professional pilot journey is obtaining your Private Pilot License. This foundational certification teaches you the basic principles of flight, navigation, and aircraft operations. Key requirements include:</p>
      <ul>
        <li>Being at least 17 years old</li>
        <li>Passing a medical examination</li>
        <li>Completing ground school training</li>
        <li>Logging minimum flight hours</li>
        <li>Passing written and practical tests</li>
      </ul>

      <h2>Building Experience: Instrument Rating</h2>
      <p>After obtaining your PPL, the next crucial step is earning your Instrument Rating. This qualification allows you to fly in various weather conditions and is essential for professional pilots. You'll learn:</p>
      <ul>
        <li>Advanced navigation techniques</li>
        <li>Weather pattern analysis</li>
        <li>Instrument flight procedures</li>
        <li>Emergency operations</li>
      </ul>

      <h2>Commercial Pilot License (CPL)</h2>
      <p>The Commercial Pilot License is your gateway to flying professionally. This certification requires:</p>
      <ul>
        <li>250 hours of flight time</li>
        <li>Complex aircraft experience</li>
        <li>Advanced maneuver training</li>
        <li>Commercial operations knowledge</li>
      </ul>

      <h2>Additional Ratings and Certifications</h2>
      <p>To enhance your career prospects, consider obtaining:</p>
      <ul>
        <li>Multi-Engine Rating</li>
        <li>Certified Flight Instructor (CFI) certificate</li>
        <li>Airline Transport Pilot License (ATP)</li>
      </ul>

      <h2>Career Opportunities</h2>
      <p>Professional pilots have various career paths available:</p>
      <ul>
        <li>Regional airlines</li>
        <li>Major airlines</li>
        <li>Corporate aviation</li>
        <li>Flight instruction</li>
        <li>Cargo operations</li>
      </ul>
    `,
    image: '/images/blog/featured-post.jpg',
    author: {
      name: 'Thomas Ferrier',
      role: 'Chief Flight Instructor',
      image: '/images/founder.jpg',
    },
    date: 'March 15, 2024',
    readTime: '8 min read',
    relatedPosts: [
      'understanding-weather-patterns',
      'first-solo-flight-tips',
      'aviation-career-opportunities',
    ],
  },
  'cost-of-flight-training-arizona': {
    title: 'How Much Does Flight Training Cost in Arizona? Complete 2024 Guide',
    excerpt: 'A detailed breakdown of flight training costs in Arizona, including PPL, instrument rating, and commercial pilot license expenses. Compare prices and find affordable options.',
    content: `
      <p>One of the most common questions aspiring pilots ask is about the cost of flight training. In this comprehensive guide, we'll break down all the expenses involved in becoming a pilot in Arizona.</p>

      <h2>Private Pilot License (PPL) Costs</h2>
      <p>The total cost for obtaining your PPL in Arizona typically ranges from $10,000 to $15,000. This includes:</p>
      <ul>
        <li>Flight instruction: $55-75 per hour</li>
        <li>Aircraft rental: $130-180 per hour</li>
        <li>Ground school: $500-1000</li>
        <li>Study materials: $200-400</li>
        <li>Medical examination: $150-200</li>
        <li>Written test: $160</li>
        <li>Checkride: $800</li>
      </ul>

      <h2>Ways to Reduce Training Costs</h2>
      <p>Several strategies can help minimize your flight training expenses:</p>
      <ul>
        <li>Block pricing discounts</li>
        <li>Flying frequently to retain knowledge</li>
        <li>Self-study for ground knowledge</li>
        <li>Taking advantage of discovery flight specials</li>
      </ul>
    `,
    image: '/images/blog/cost-breakdown.jpg',
    author: {
      name: 'Thomas Ferrier',
      role: 'Chief Flight Instructor',
      image: '/images/founder.jpg',
    },
    date: 'March 20, 2024',
    readTime: '6 min read',
  },
  'best-flight-schools-arizona': {
    title: 'Top 10 Flight Schools in Arizona: 2024 Comparison Guide',
    excerpt: 'Compare the best flight schools in Arizona based on pricing, aircraft fleet, instructor experience, and student reviews. Make an informed decision for your pilot training.',
    content: `
      <p>Choosing the right flight school is crucial for your success as a pilot. This guide compares the top flight schools in Arizona to help you make an informed decision.</p>

      <h2>What to Look for in a Flight School</h2>
      <ul>
        <li>Instructor qualifications and experience</li>
        <li>Aircraft fleet condition and availability</li>
        <li>Training costs and payment options</li>
        <li>Location and facilities</li>
        <li>Student success rates</li>
      </ul>

      <h2>Top Flight Schools Comparison</h2>
      <p>Here's how the leading flight schools in Arizona compare:</p>
      <ul>
        <li>Desert Skies Aviation: Personalized instruction, competitive rates</li>
        <li>Other schools and their unique offerings...</li>
      </ul>
    `,
    image: '/images/blog/flight-schools.jpg',
    author: {
      name: 'Thomas Ferrier',
      role: 'Chief Flight Instructor',
      image: '/images/founder.jpg',
    },
    date: 'March 18, 2024',
    readTime: '7 min read',
  },
  // Add more blog posts here
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://desertskiesaviationaz.com${post.image}`,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "image": `https://desertskiesaviationaz.com${post.author.image}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Desert Skies Aviation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://desertskiesaviationaz.com/images/desert skies aviation logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://desertskiesaviationaz.com/blog/${params.slug}`
    }
  };

  return (
    <div className="flex flex-col">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
      </head>
      {/* Hero Section */}
      <section className="relative py-24 bg-sky-600">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-600 opacity-90" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-sky-100">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex items-center mb-12">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-gray-600 text-sm">{post.author.role}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>
        </div>
      </article>

      {/* Share and Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              ← Back to Blog
            </Link>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-sky-600">
                Share on Twitter
              </button>
              <button className="text-gray-600 hover:text-sky-600">
                Share on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-sky-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6 font-montserrat">
              Stay Updated
            </h2>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest aviation news, training tips, and industry insights.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md px-4 py-3 text-gray-900"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-sky-600 rounded-md font-medium hover:bg-sky-50 transition duration-150"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 