import Image from 'next/image';
import Link from 'next/link';
import { getMetadata } from '../metadata';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = getMetadata({
  title: 'Aviation Blog & Resources',
  description: 'Stay updated with the latest insights, tips, and stories from the world of aviation.'
});

const featuredPost = {
  title: 'The Journey to Becoming a Professional Pilot',
  excerpt: 'Discover the path from your first flight to a rewarding career in aviation. Learn about the requirements, challenges, and rewards of becoming a professional pilot.',
  image: '/images/blog/featured-post.jpg',
  author: {
    name: 'Thomas Ferrier',
    role: 'Chief Flight Instructor',
    image: '/images/founder.jpg',
  },
  date: 'March 15, 2024',
  readTime: '8 min read',
  slug: 'journey-to-professional-pilot',
};

const posts = [
  {
    title: 'Understanding Weather Patterns for Pilots',
    excerpt: 'Essential knowledge about weather patterns and their impact on flight planning and safety.',
    image: '/images/blog/weather.jpg',
    category: 'Safety',
    date: 'March 10, 2024',
    readTime: '6 min read',
    slug: 'understanding-weather-patterns',
  },
  {
    title: 'Tips for Your First Solo Flight',
    excerpt: 'Preparation guidelines and what to expect during your first solo flight experience.',
    image: '/images/blog/solo-flight.jpg',
    category: 'Training',
    date: 'March 5, 2024',
    readTime: '5 min read',
    slug: 'first-solo-flight-tips',
  },
  {
    title: 'Aviation Technology Trends 2024',
    excerpt: 'Latest developments in aviation technology and their impact on flight training.',
    image: '/images/blog/technology.jpg',
    category: 'Technology',
    date: 'March 1, 2024',
    readTime: '7 min read',
    slug: 'aviation-technology-trends',
  },
  {
    title: 'Choosing the Right Flight School',
    excerpt: 'Key factors to consider when selecting a flight school for your aviation training.',
    image: '/images/blog/flight-school.jpg',
    category: 'Advice',
    date: 'February 25, 2024',
    readTime: '6 min read',
    slug: 'choosing-flight-school',
  },
  {
    title: 'Career Opportunities in Aviation',
    excerpt: 'Explore various career paths available in the aviation industry beyond airline pilots.',
    image: '/images/blog/careers.jpg',
    category: 'Careers',
    date: 'February 20, 2024',
    readTime: '8 min read',
    slug: 'aviation-career-opportunities',
  },
  {
    title: 'Maintaining Work-Life Balance as a Pilot',
    excerpt: 'Tips for managing your personal life while pursuing a career in aviation.',
    image: '/images/blog/work-life.jpg',
    category: 'Lifestyle',
    date: 'February 15, 2024',
    readTime: '5 min read',
    slug: 'pilot-work-life-balance',
  },
];

const categories = [
  'All',
  'Safety',
  'Training',
  'Technology',
  'Careers',
  'Lifestyle',
  'Advice',
];

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative py-24 bg-sky-600">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-600 opacity-90" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">Aviation Blog & Resources</h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and stories from the world of aviation.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 font-montserrat">Featured Article</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center mb-6">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{featuredPost.author.name}</p>
                    <p className="text-gray-600 text-sm">{featuredPost.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-8">
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition duration-150"
                >
                  Read More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Categories */}
      <AnimatedSection>
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    category === 'All'
                      ? 'bg-sky-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-sky-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={0.1 * (index + 1)}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-50 text-sky-600">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sky-600 hover:text-sky-700 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <AnimatedSection>
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
      </AnimatedSection>
    </div>
  );
} 