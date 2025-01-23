'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes?: string;
};

export default function DiscoveryFlightPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/discovery-flight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Your discovery flight has been booked! Check your email for confirmation.',
      });
      reset(); // Clear form
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit booking',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-sky-600">
        <Image
          src="/images/discovery-flight.jpg"
          alt="Discovery Flight"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discovery Flight</h1>
            <p className="text-xl text-sky-100 max-w-2xl">
              Experience the thrill of flying with a certified flight instructor. Perfect for
              those considering a career in aviation or pursuing flying as a hobby.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <div className="prose prose-lg">
                <p>
                  Your discovery flight is a one-hour introduction to the world of aviation.
                  You'll experience:
                </p>
                <ul>
                  <li>Pre-flight aircraft inspection</li>
                  <li>Basic flight controls and instruments</li>
                  <li>Takeoff and landing procedures</li>
                  <li>Hands-on flying experience</li>
                </ul>
                <div className="bg-sky-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-sky-900 mb-4">
                    Flight Details
                  </h3>
                  <ul className="space-y-2 text-sky-800">
                    <li>Duration: 1 hour</li>
                    <li>Cost: $250</li>
                    <li>Includes ground instruction</li>
                    <li>Certificate of completion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Book Your Flight
                </h2>

                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-md ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[\d\s-+()]*$/,
                          message: 'Invalid phone number',
                        },
                      })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      min={today}
                      {...register('date', { required: 'Date is required' })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      {...register('time', { required: 'Time is required' })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      {...register('notes')}
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Booking...' : 'Book Discovery Flight'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What should I bring?
                </h3>
                <p className="text-gray-600">
                  Bring a valid photo ID, comfortable clothing, and sunglasses. We'll provide
                  everything else needed for the flight.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a weight limit?
                </h3>
                <p className="text-gray-600">
                  Yes, there are weight restrictions based on the aircraft. Please contact us
                  if you have specific concerns.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I bring a friend?
                </h3>
                <p className="text-gray-600">
                  The discovery flight is a one-on-one experience with your instructor.
                  Friends or family can watch from our viewing area.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What if I need to reschedule?
                </h3>
                <p className="text-gray-600">
                  We understand plans change. Contact us at least 24 hours in advance to
                  reschedule your flight at no additional cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 