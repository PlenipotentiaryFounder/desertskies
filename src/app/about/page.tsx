import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Thomas Ferrier</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  From mortgage industry professional to passionate flight instructor, my journey to aviation is a testament that it's never too late to pursue your dreams.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/FlightPhotos/founder2.JPG"
              alt="Thomas Ferrier"
              width={1432}
              height={1442}
              priority
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">My Story</h2>
                <p className="mt-6">
                  I grew up about four miles northeast of the departure end of 04R at Falcon Field in Mesa, where the sound of planes climbing into the sky was a constant backdrop to my childhood. I spent countless days staring up at them, imagining what it would feel like to be at the controls. That dream stayed with me, but for years, it felt out of reach. Life took me into the mortgage industry—a career that paid the bills but never lit a fire in me. Every day felt the same, and deep down, I knew I wanted more. Then I discovered flying, and everything changed.
                </p>
                <p className="mt-6">
                  The first time I took off, I knew I'd found what I was meant to do. Flying isn't just about getting from point A to B—it's a thrilling combination of challenge, freedom, and purpose. I started Desert Skies Aviation to share that passion with others and to help people like you turn your own dreams of flying into reality.
                </p>
                <p className="mt-6">
                  What sets Desert Skies apart is simple: I know that no two pilots are the same. Some of you are here to launch a career in the airlines, while others are chasing the pure joy of flying on weekends. Maybe you're a first-time pilot, or maybe you're switching careers like I did, balancing family or other commitments. That's why I don't believe in cookie-cutter training. At Desert Skies, every lesson is designed around you—your goals, your challenges, and your unique journey.
                </p>
                <p className="mt-6">
                  I bring more to the table than just my certifications. I've been in your shoes, wondering if this dream was even possible. My training through the American Airlines Cadet Academy was a fast-paced, highly demanding path, and it taught me not only how to master flying but how to adapt to every hurdle along the way. As a Certified Flight Instructor, I combine that experience with a deep understanding of what it takes to succeed, whether you're here to build hours for the airlines or simply experience the joy of flight.
                </p>
                <p className="mt-6">
                  Every time I take off over the desert, I'm reminded of why I started this journey: to help pilots of all walks of life unlock their potential. So, whether you're here to explore the skies for fun or take the first steps toward a career, you'll find a personalized approach, an unwavering commitment to your success, and an instructor who's just as invested in your dream as you are.
                </p>
                <p className="mt-6 font-semibold">
                  Ready to take off? Let's get started. Your journey begins here.
                </p>
                <div className="mt-16 text-sm text-gray-500">
                  <p className="italic">
                    Disclaimer: Desert Skies Aviation provides flight instruction services under FAR Part 61. Thomas Ferrier operates as an independent Certified Flight Instructor (CFI) and does not hold an Air Carrier or Operating Certificate. Flight instruction is provided using aircraft rented from FAA-certified facilities or student-provided aircraft that meet all applicable regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 