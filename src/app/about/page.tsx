import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why I Started Desert Skies Aviation</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  From mortgage industry professional to passionate flight instructor, my journey to aviation is a testament that it's never too late to pursue your dreams.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/images/founder3.JPG"
              alt="Thomas Ferrier - Desert Skies Aviation Founder"
              width={1200}
              height={1200}
              priority
              quality={100}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="mt-6">
                  I grew up just four miles northeast of the departure end of 04R at Falcon Field in Mesa, where the sound of planes overhead fueled a lifelong dream. For years, flying felt out of reach. Instead, I built a career in the mortgage industry—a path that paid the bills but never inspired me. Everything changed when I discovered flying. The moment I took off, I knew I'd found my purpose.
                </p>
                <p className="mt-6">
                  I started Desert Skies Aviation to share that experience with others. No two pilots are the same—some of you are chasing a career in the airlines, others are here for the joy of flying. That's why I customize every lesson to match your goals and challenges, whether you're just starting out or balancing a second career. At Desert Skies, it's all about helping you reach your fullest potential.
                </p>
                <p className="mt-6">
                  As a Certified Flight Instructor with experience in the American Airlines Cadet Academy, I know what it takes to succeed in this demanding field. My journey taught me how to overcome obstacles and adapt to every challenge. Now, I'm here to guide you—whether your goal is weekend flights or a lifelong career in aviation.
                </p>
                <p className="mt-6">
                  Every time I fly over the desert, I'm reminded of how lucky I am to live this dream. If you've ever felt that same pull toward the skies, let's make it happen together. Your journey starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 