import React from 'react';
import Hero from '@/components/sections/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-montserrat">
              Welcome to Desert Skies Aviation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              At Desert Skies Aviation, we turn aviation dreams into reality. Our experienced instructors and modern fleet provide the perfect environment for your flight training journey.
            </p>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16 font-montserrat">
            Choose Your Path
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* General Aviation Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/general-aviation.JPG"
                  alt="General Aviation Training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Aviation</h3>
                <p className="text-gray-600 mb-6">
                  Experience the freedom of recreational flying with our flexible training programs designed for aviation enthusiasts.
                </p>
                <Link
                  href="/training/general-aviation"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700"
                >
                  Learn more
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Career Pilots Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/career-pilots.JPG"
                  alt="Career Pilot Training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Pilots</h3>
                <p className="text-gray-600 mb-6">
                  Launch your professional aviation career with our structured training programs and industry partnerships.
                </p>
                <Link
                  href="/training/career-pilots"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700"
                >
                  Learn more
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16 font-montserrat">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
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
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Services */}
      <section className="py-24 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 font-montserrat">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-12 text-sky-100">
            Take the first step towards your aviation dreams with a Discovery Flight.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-sky-600 transition duration-150"
          >
            Book Your Flight Today
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 font-montserrat">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our training programs? Our team is here to help you navigate your aviation journey.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (480) 555-0123
                </p>
                <p className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@desertskiesaviation.com
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white py-3 px-4 rounded-md hover:bg-sky-700 transition duration-150"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
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