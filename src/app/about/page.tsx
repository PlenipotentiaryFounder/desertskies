import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-sky-600">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">Our Story</h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Building dreams and shaping the future of aviation through excellence in training.
          </p>
        </div>
      </section>

      {/* Meet Thomas Ferrier */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/founder.jpg"
                alt="Thomas Ferrier"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Meet Thomas Ferrier
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  With over two decades of aviation experience, Thomas Ferrier founded Desert Skies Aviation with a vision to transform flight training in Arizona. His journey from a passionate private pilot to a seasoned flight instructor has shaped our unique approach to aviation education.
                </p>
                <p>
                  Thomas's commitment to safety, excellence, and personalized instruction has helped countless students achieve their aviation dreams, whether pursuing recreational flying or professional careers.
                </p>
                <p>
                  His innovative teaching methods and deep understanding of both general aviation and commercial operations have made Desert Skies Aviation a leading flight school in the Southwest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Mission and Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is to provide exceptional flight training that empowers individuals to achieve their aviation goals safely and efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in training, safety, and aircraft maintenance to ensure our students receive the best possible education.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a supportive environment where students can learn, grow, and connect with fellow aviation enthusiasts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety</h3>
              <p className="text-gray-600">
                Safety is our top priority, integrated into every aspect of our training programs and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building a Community */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Building a Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Desert Skies Aviation, we're more than just a flight school - we're a community of passionate aviators.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Support Network</h3>
              <p className="text-gray-600">
                Our students benefit from a strong support network of instructors, fellow students, and industry professionals. Regular events, workshops, and social gatherings create opportunities for learning and networking.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly safety seminars and workshops
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Student mentorship programs
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Industry networking events
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/community.jpg"
                alt="Desert Skies Aviation Community"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 