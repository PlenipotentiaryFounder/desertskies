'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const careerPath = [
  {
    stage: 'Private Pilot License (PPL)',
    duration: '4-6 months',
    hours: '40-60 hours',
    description: 'Master the fundamentals of flight and earn your initial pilot certification.',
    costs: {
      aircraft: '$180-200/hr',
      instructor: '$75/hr',
      ground: '$65/hr',
      total: '$12,000-15,000',
      details: [
        'Aircraft rental with fuel',
        'One-on-one instruction',
        'Ground school and materials',
        'Written test and checkride fees'
      ]
    }
  },
  {
    stage: 'Instrument Rating (IR)',
    duration: '3-4 months',
    hours: '40-50 hours',
    description: 'Learn to fly safely in various weather conditions using only instrument references.',
    costs: {
      aircraft: '$180-200/hr',
      instructor: '$75/hr',
      ground: '$65/hr',
      total: '$10,000-12,000',
      details: [
        'Aircraft rental with fuel',
        'Instrument instruction',
        'Simulator sessions',
        'Test preparation and fees'
      ]
    }
  },
  {
    stage: 'Commercial Pilot License (CPL)',
    duration: '4-6 months',
    hours: '190-250 hours',
    description: 'Develop advanced flying skills and learn to operate aircraft for compensation.',
    costs: {
      aircraft: '$180-200/hr',
      instructor: '$75/hr',
      ground: '$65/hr',
      total: '$25,000-30,000',
      details: [
        'Complex aircraft rental',
        'Commercial maneuvers training',
        'Cross-country flights',
        'Certification fees'
      ]
    }
  },
  {
    stage: 'Multi-Engine Rating',
    duration: '2-3 weeks',
    hours: '10-15 hours',
    description: 'Gain certification to fly multi-engine aircraft, expanding your career opportunities.',
    costs: {
      aircraft: '$350-400/hr',
      instructor: '$85/hr',
      ground: '$65/hr',
      total: '$6,000-8,000',
      details: [
        'Multi-engine aircraft rental',
        'Specialized instruction',
        'Systems training',
        'Checkride fees'
      ]
    }
  },
  {
    stage: 'Flight Instructor (CFI)',
    duration: '2-3 months',
    hours: '25-35 hours',
    description: 'Learn to teach others while building hours towards airline minimums.',
    costs: {
      aircraft: '$180-200/hr',
      instructor: '$85/hr',
      ground: '$65/hr',
      total: '$8,000-10,000',
      details: [
        'Aircraft rental for teaching practice',
        'Advanced instruction techniques',
        'Teaching materials',
        'Multiple certification fees'
      ]
    }
  },
  {
    stage: 'Airline Transport Pilot (ATP)',
    duration: 'Varies',
    hours: '1,500 hours',
    description: 'Achieve the highest level of pilot certification and qualify for airline positions.',
    costs: {
      program: '$5,000-7,000',
      details: [
        'ATP certification program',
        'Type rating (if required)',
        'Final certification fees'
      ]
    }
  },
];

export default function CareerPilots() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '-50px', // Slight offset to trigger before fully in view
      }
    );

    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-sky-600">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">Career Pilot Training</h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Launch your professional aviation career with our structured training programs and industry partnerships.
          </p>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-sky-600 transition duration-150"
            >
              Start Your Career Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Career Path Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Your Path to the Airlines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured pathway from zero experience to airline-ready professional pilot.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-sky-600/0 via-sky-600 to-sky-600/0" />
            <div className="space-y-12">
              {careerPath.map((step, index) => (
                <div 
                  key={step.stage} 
                  className={`timeline-item relative opacity-0 transition-all duration-700 ease-out
                    ${index % 2 === 0 ? 'md:flex-row translate-x-[-100px]' : 'md:flex-row-reverse translate-x-[100px]'}
                    [&.animate-in]:translate-x-0 [&.animate-in]:opacity-100`}
                >
                  <div className="flex items-start">
                    <div className={`flex md:w-1/2 ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md w-full
                        transition-all duration-500 hover:shadow-lg hover:border-sky-100 hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{step.stage}</h3>
                          <span className="px-3 py-1 text-sm text-sky-600 bg-sky-50 rounded-full">
                            {step.hours}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <p className="text-sm text-gray-500">Duration: {step.duration}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border-4 border-sky-600 bg-white
                        transition-transform duration-500 hover:scale-125 hover:border-sky-400" />
                    </div>
                    <div className={`flex md:w-1/2 ${index % 2 === 0 ? 'md:justify-start md:pl-8' : 'md:justify-end md:pr-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md w-full
                        transition-all duration-500 hover:shadow-lg hover:border-sky-100 hover:-translate-y-1">
                        <div className="flex flex-col h-full">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Estimated Costs</h3>
                          
                          {step.costs.aircraft ? (
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                              <div className="text-gray-600">Aircraft Rental:</div>
                              <div className="text-gray-900 font-medium text-right">{step.costs.aircraft}</div>
                              <div className="text-gray-600">Instructor Time:</div>
                              <div className="text-gray-900 font-medium text-right">{step.costs.instructor}</div>
                              <div className="text-gray-600">Ground Training:</div>
                              <div className="text-gray-900 font-medium text-right">{step.costs.ground}</div>
                            </div>
                          ) : (
                            <div className="mb-4" />
                          )}

                          <div className="mt-auto">
                            <div className="border-t pt-4">
                              <div className="flex justify-between items-center mb-3">
                                <span className="text-gray-600 font-medium">Total Investment:</span>
                                <span className="text-lg font-bold text-sky-600">
                                  {step.costs.total || step.costs.program}
                                </span>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-3">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
                                <ul className="text-sm text-gray-600 space-y-1.5">
                                  {step.costs.details.map((detail, i) => (
                                    <li key={i} className="flex items-start">
                                      <svg className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Program Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our career program is designed to prepare you for success in the airline industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Airline Partnerships</h3>
              <p className="text-gray-600">
                Direct pathway programs with regional airlines for qualified graduates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Structured Curriculum</h3>
              <p className="text-gray-600">
                Comprehensive ground and flight training following airline-oriented procedures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Support</h3>
              <p className="text-gray-600">
                Interview preparation, resume building, and networking opportunities with airlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Financing Options
              </h2>
              <p className="text-gray-600 mb-8">
                We understand that flight training is a significant investment. That's why we offer various financing options to help make your aviation career accessible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flight Training Loans</h4>
                    <p className="text-gray-600">Competitive rates through our lending partners</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Payment Plans</h4>
                    <p className="text-gray-600">Flexible payment options to fit your budget</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scholarship Programs</h4>
                    <p className="text-gray-600">Merit-based scholarships for qualified candidates</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/financing.jpg"
                alt="Financing Options"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 font-montserrat">
            Ready to Launch Your Aviation Career?
          </h2>
          <p className="text-lg mb-12 text-sky-100">
            Contact us to learn more about our career pilot program and financing options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-sky-600 transition duration-150"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 