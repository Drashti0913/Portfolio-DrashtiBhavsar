"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-blue-50 pt-20"
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-8 lg:px-12 py-12 lg:py-20">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-4 leading-tight">
                Hey,<br />
                I am Drashti
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-normal">
                AI/ML Researcher & Data Scientist
              </h2>
            </div>
          </div>

          {/* Right side - Photo - Full size */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[500px] lg:h-screen lg:min-h-[800px]">
              <Image
                src="/images/1000190584.jpg"
                alt="Drashti Bhavsar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

