import Image from 'next/image';
import Link from 'next/link';

const programs = [
  {
    title: 'Private Pilot License (PPL)',
    description: 'Start your aviation journey with our comprehensive PPL program. Learn the fundamentals of flight, navigation, and aviation safety.',
    duration: '4-6 months',
    requirements: ['Be at least 17 years old', 'Hold a valid medical certificate', 'Be able to read, speak, and understand English'],
    image: '/images/ppl-training.jpg',
  },
  {
    title: 'Instrument Rating (IR)',
    description: 'Enhance your flying capabilities with instrument flight training. Master flying in various weather conditions and navigate using instruments.',
    duration: '3-4 months',
    requirements: ['Hold a Private Pilot License', 'Log required flight hours', 'Pass written examination'],
    image: '/images/ir-training.jpg',
  },
  {
    title: 'Multi-Engine Rating',
    description: 'Expand your skills to fly multi-engine aircraft. Learn advanced systems, emergency procedures, and performance characteristics.',
    duration: '2-3 weeks',
    requirements: ['Hold a Private Pilot License', 'Complete ground training', 'Pass practical test'],
    image: '/images/multi-engine-training.jpg',
  },
];

export default function GeneralAviation() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-sky-600">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">General Aviation Training</h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Experience the freedom of flight with our flexible training programs designed for recreational pilots.
          </p>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-sky-600 transition duration-150"
            >
              Schedule Your Discovery Flight
            </Link>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of comprehensive training programs tailored to your goals.
            </p>
          </div>
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div key={program.title} className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Program Duration:</h4>
                    <p className="text-gray-600">{program.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((requirement) => (
                        <li key={requirement} className="flex items-start text-gray-600">
                          <svg className="w-5 h-5 text-sky-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`relative h-[400px] ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Why Choose Desert Skies Aviation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our student-centered approach and modern training fleet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Train at your own pace with our flexible scheduling options, designed to accommodate your lifestyle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Facilities</h3>
              <p className="text-gray-600">
                Train in state-of-the-art facilities with advanced simulators and modern classrooms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from experienced instructors who are passionate about aviation and dedicated to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 font-montserrat">
            Ready to Start Your Aviation Journey?
          </h2>
          <p className="text-lg mb-12 text-sky-100">
            Take the first step towards becoming a pilot with a Discovery Flight.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-sky-600 transition duration-150"
          >
            Book Your Flight Today
          </Link>
        </div>
      </section>
    </div>
  );
} 