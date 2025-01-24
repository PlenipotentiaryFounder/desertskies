import React from 'react';
import Hero from '@/components/sections/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/sedonaVideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Begin Your Aviation Journey
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Personalized flight instruction in Arizona with Thomas Ferrier, Certified Flight Instructor (CFI). 
            Experience the thrill of flying with one-on-one training tailored to your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-lg 
              font-medium rounded-md text-white hover:bg-white hover:text-sky-900 
              transition-all duration-300"
          >
            Book Discovery Flight
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Choose Desert Skies Aviation?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-600 mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Personalized Instruction
              </h3>
              <p className="text-gray-600">
                One-on-one training tailored to your learning style and schedule. Progress at your own pace with focused attention from your instructor.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-600 mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Experienced Instruction
              </h3>
              <p className="text-gray-600">
                Learn from an experienced CFI who prioritizes safety and provides comprehensive ground and flight instruction.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-600 mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Flexible Training
              </h3>
              <p className="text-gray-600">
                Training conducted under FAR Part 61 allows for a flexible approach that adapts to your goals and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Flying?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a discovery flight to experience the thrill of flying and learn more about the training process.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-lg 
              font-medium rounded-md text-white hover:bg-white hover:text-sky-900 
              transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center italic">
            Disclaimer: Flight instruction is provided under FAR Part 61. As an independent Certified Flight Instructor (CFI), 
            I do not hold an Air Carrier or Operating Certificate. Training is conducted using aircraft rented from FAA-certified 
            facilities or student-provided aircraft that meet all applicable regulations.
          </p>
        </div>
      </section>
    </main>
  );
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Private Pilot',
    image: '/images/testimonial-1.jpg',
    quote: 'Desert Skies provided me with the perfect environment to achieve my dream of becoming a pilot. The instructors are knowledgeable and supportive.',
  },
  {
    name: 'Michael Chen',
    title: 'Commercial Pilot',
    image: '/images/testimonial-2.jpg',
    quote: "The structured career program at Desert Skies gave me the foundation I needed to launch my aviation career. Now I'm flying for a major airline.",
  },
  {
    name: 'Emily Rodriguez',
    title: 'Student Pilot',
    image: '/images/testimonial-3.jpg',
    quote: 'The personalized attention and flexible scheduling make it possible to pursue my pilot\'s license while maintaining a full-time job.',
  },
]; 