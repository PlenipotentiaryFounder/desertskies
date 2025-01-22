'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasError, setHasError] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        const progress = Math.min(scrollPosition / (heroHeight * 0.8), 1);
        setScrollProgress(progress);

        if (videoRef.current) {
          videoRef.current.volume = Math.max(0, 1 - progress * 1.5);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      videoRef.current.muted = newMutedState;
      if (!newMutedState) {
        const progress = scrollProgress;
        videoRef.current.volume = Math.max(0, 1 - progress * 1.5);
      }
    }
  };

  return (
    <div ref={heroRef} className="relative h-[120vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="object-cover w-full h-full scale-110"
          style={{
            transform: `scale(${1.1 + scrollProgress * 0.1})`,
          }}
          onLoadedData={() => setHasError(false)}
          onError={() => {
            setHasError(true);
            console.error('Error loading video');
          }}
        >
          <source src="/videos/sedonaVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/40"
        style={{
          opacity: 0.4 + scrollProgress * 0.3,
        }}
      />

      {/* Content */}
      <div 
        className="relative h-full flex items-center justify-center text-center text-white"
        style={{
          transform: `translateY(${scrollProgress * -100}px)`,
        }}
      >
        <div className="max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Journey to the Skies Begins Here
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the freedom of flight with Desert Skies Aviation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/training/general-aviation"
              className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold px-8 py-4 rounded-lg transition duration-300"
            >
              Start Flying Today
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition duration-300"
            >
              Book Discovery Flight
            </Link>
          </div>
        </div>
      </div>

      {/* Sound Control Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 p-2 rounded-full bg-black/50 hover:bg-black/60 transition-all duration-300 backdrop-blur-sm"
        style={{
          opacity: Math.max(0, 1 - scrollProgress * 2),
        }}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </div>
  );
} 