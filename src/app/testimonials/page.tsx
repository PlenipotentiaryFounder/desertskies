import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Private Pilot',
    image: '/images/testimonial-1.jpg',
    quote: 'Desert Skies provided me with the perfect environment to achieve my dream of becoming a pilot. The instructors are knowledgeable and supportive.',
    achievement: 'Completed PPL in 4 months',
  },
  {
    name: 'Michael Chen',
    title: 'Commercial Pilot',
    image: '/images/testimonial-2.jpg',
    quote: 'The structured career program at Desert Skies gave me the foundation I needed to launch my aviation career. Now I\'m flying for a major airline.',
    achievement: 'Now flying for American Airlines',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Student Pilot',
    image: '/images/testimonial-3.jpg',
    quote: 'The personalized attention and flexible scheduling make it possible to pursue my pilot\'s license while maintaining a full-time job.',
    achievement: 'Solo flight completed in 3 weeks',
  },
  {
    name: 'David Thompson',
    title: 'Flight Instructor',
    image: '/images/testimonial-4.jpg',
    quote: 'After completing my training at Desert Skies, I joined their team as an instructor. The quality of education here is unmatched.',
    achievement: 'CFI, CFII, MEI certified',
  },
  {
    name: 'Lisa Martinez',
    title: 'Private Pilot',
    image: '/images/testimonial-5.jpg',
    quote: 'From my first discovery flight to earning my license, the team at Desert Skies made every step of the journey enjoyable and rewarding.',
    achievement: 'Instrument rating in progress',
  },
  {
    name: 'James Wilson',
    title: 'ATP Pilot',
    image: '/images/testimonial-6.jpg',
    quote: 'Desert Skies\' career program prepared me thoroughly for airline operations. Their airline partnerships made the transition seamless.',
    achievement: 'Flying for regional carrier',
  },
];

const statistics = [
  { label: 'Certified Pilots', value: '500+' },
  { label: 'Years of Experience', value: '20+' },
  { label: 'Aircraft Fleet', value: '15' },
  { label: 'Student Satisfaction', value: '98%' },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-sky-600">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">Student Success Stories</h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Hear from our graduates about their journey from aspiring pilots to aviation professionals.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sky-600">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-5 h-5 text-sky-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {testimonial.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Hear From Our Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our students share their experiences and achievements at Desert Skies Aviation.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/images/video-testimonial-placeholder.jpg"
              alt="Student Testimonials"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition duration-150">
                <svg className="w-8 h-8 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 font-montserrat">
            Start Your Success Story
          </h2>
          <p className="text-lg mb-12 text-sky-100">
            Join our community of successful pilots and begin your aviation journey today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-sky-600 transition duration-150"
          >
            Schedule Your Discovery Flight
          </a>
        </div>
      </section>
    </div>
  );
} 