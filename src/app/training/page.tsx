import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Split Design */}
      <section className="relative h-[90vh] flex">
        {/* Left Side - General Aviation */}
        <div className="relative w-1/2 group cursor-pointer overflow-hidden">
          <Link href="/training/general-aviation" className="block h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10 
              transition-opacity duration-500 group-hover:opacity-75" />
            <Image
              src="/images/general-aviation.JPG"
              alt="General Aviation Training"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                General Aviation
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-lg">
                Perfect for recreational flying, business travel, or pursuing aviation as a hobby.
                Start your journey with private pilot training.
              </p>
              <span className="inline-flex items-center px-6 py-3 border-2 border-white text-lg 
                font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300">
                Explore General Aviation
              </span>
            </div>
          </Link>
        </div>

        {/* Right Side - Career Pilots */}
        <div className="relative w-1/2 group cursor-pointer overflow-hidden">
          <Link href="/training/career-pilots" className="block h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10 
              transition-opacity duration-500 group-hover:opacity-75" />
            <Image
              src="/images/career-pilots.JPG"
              alt="Career Pilot Training"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Career Pilots
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-lg">
                Structured program designed to take you from zero experience to airline-ready.
                Your path to becoming a professional pilot starts here.
              </p>
              <span className="inline-flex items-center px-6 py-3 border-2 border-white text-lg 
                font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300">
                Explore Career Path
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Choose Your Path
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* General Aviation Path */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                General Aviation Path
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Flexible training schedule</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Train at your own pace</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Perfect for recreational flying</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Ideal for business travel capabilities</span>
                </li>
              </ul>
              <Link 
                href="/training/general-aviation"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base 
                  font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Career Path */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Career Pilot Path
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Structured career program</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Airline partnerships</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Fast track to airline career</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Professional mentorship</span>
                </li>
              </ul>
              <Link 
                href="/training/career-pilots"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base 
                  font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Path to Choose?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a discovery flight with one of our experienced instructors to learn more about both paths
            and find the perfect fit for your aviation goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-lg 
              font-medium rounded-md text-white hover:bg-white hover:text-sky-900 transition-all duration-300"
          >
            Book Discovery Flight
          </Link>
        </div>
      </section>
    </main>
  );
} 