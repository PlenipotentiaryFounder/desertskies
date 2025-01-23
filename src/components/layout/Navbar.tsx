'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Training', href: '/training', 
    submenu: [
      { name: 'General Aviation', href: '/training/general-aviation' },
      { name: 'Career Pilots', href: '/training/career-pilots' },
    ]
  },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6" aria-label="Global">
        <div className="flex h-14 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-bold text-gray-900">
              Desert Skies Aviation
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors py-1',
                    pathname === item.href ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
                  )}
                >
                  {item.name}
                  {item.submenu && (
                    <span className="ml-1 inline-block">
                      <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  )}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/discovery-flight"
              className="rounded-full bg-sky-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors"
            >
              Book Discovery Flight
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-1.5 inline-flex items-center justify-center rounded-md p-1.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          isMenuOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Background overlay */}
        <div 
          className={cn(
            'fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity',
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div
          className={cn(
            'fixed inset-y-0 right-0 w-full max-w-sm bg-white/95 backdrop-blur-md px-4 py-4 shadow-lg transition-transform duration-300',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/" 
              className="text-lg font-bold text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Desert Skies Aviation
            </Link>
            <button
              type="button"
              className="-m-1.5 rounded-md p-1.5 text-gray-900 hover:bg-white/40"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-1 flow-root">
            <div className="space-y-0.5">
              {navigation.map((item) => (
                <div key={item.name} className="text-right">
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-block rounded-lg py-1.5 px-3 text-base font-medium transition-colors',
                      pathname === item.href 
                        ? 'text-sky-600 bg-sky-100/80' 
                        : 'text-gray-900 hover:text-sky-600 hover:bg-white/60'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="mt-0.5 space-y-0.5 pr-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block text-right rounded-lg py-1.5 px-3 text-sm text-gray-800 hover:text-sky-600 hover:bg-white/60"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/discovery-flight"
                className="block w-full rounded-full bg-sky-600/90 px-3.5 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Discovery Flight
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 