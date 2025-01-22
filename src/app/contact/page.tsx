'use client';

import { useState } from 'react';
import Image from 'next/image';

const locations = [
  { id: 'KSDL', name: 'Scottsdale Airport', address: '15000 N Airport Dr, Scottsdale, AZ 85260' },
  { id: 'KCHD', name: 'Chandler Municipal Airport', address: '2380 S Stinson Way, Chandler, AZ 85286' },
  { id: 'KIWA', name: 'Phoenix-Mesa Gateway Airport', address: '5835 S Sossaman Rd, Mesa, AZ 85212' },
  { id: 'KFFZ', name: 'Falcon Field Airport', address: '4800 E Falcon Dr, Mesa, AZ 85215' },
  { id: 'KDVT', name: 'Phoenix Deer Valley Airport', address: '702 W Deer Valley Rd, Phoenix, AZ 85027' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-sky-600">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">Contact Us</h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Get in touch with our team to start your aviation journey or learn more about our programs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                    I'm interested in
                  </label>
                  <select
                    name="interest"
                    id="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  >
                    <option value="general">General Information</option>
                    <option value="discovery">Discovery Flight</option>
                    <option value="private">Private Pilot Training</option>
                    <option value="career">Career Pilot Program</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
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

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Main Office</h3>
                  <p className="text-gray-600">
                    15000 N Airport Dr<br />
                    Scottsdale, AZ 85260
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Details</h3>
                  <div className="space-y-3">
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
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours of Operation</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Train at any of our convenient locations across the Phoenix metropolitan area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.id} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{location.name}</h3>
                <p className="text-gray-600">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 