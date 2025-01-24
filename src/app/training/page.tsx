import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TrainingPage() {
  return (
    <main className="flex-1">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Flight Training Programs</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As a Certified Flight Instructor (CFI), I offer personalized one-on-one flight instruction to help you achieve your aviation goals. Whether you're pursuing flying as a hobby or planning a career in aviation, I'll work with you to create a training program that fits your schedule and learning style.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Training Options</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                I provide comprehensive flight instruction under FAR Part 61, offering flexibility in scheduling and personalized attention to help you progress efficiently through your training.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">What's included</h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  One-on-one instruction
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Flexible scheduling
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Ground instruction
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Test preparation
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-sm text-gray-500">
            <p className="italic">
              Disclaimer: Flight instruction is provided under FAR Part 61. As an independent Certified Flight Instructor (CFI), I do not hold an Air Carrier or Operating Certificate. Training is conducted using aircraft rented from FAA-certified facilities or student-provided aircraft that meet all applicable regulations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 