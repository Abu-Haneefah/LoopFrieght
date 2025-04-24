// components/HeroSection.js
import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function HeroSection () {
  return (
    <section className="bg-cover bg-center space-y-6 py-6 md:h-[700px] relative mt-4">
      <Navbar />

      <div className="container mx-auto mt-8 px-4 text-white">
        <div className="space-y-6 max-w-xl mx-auto md:ml-40 md:space-y-8">
          {/* Text Overlay background */}
     {/* Text Overlay background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/15 via-black/20 to-transparent z-0 pointer-events-none" />


          {/* Top Label */}
          <div className='bg-gray-900 text-white w-fit border-l-4 border-blue-400 px-2 py-1'>
            <p className='text-sm md:text-base font-extralight'>
              Logistics & Supply Chain Solutions
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-base md:text-6xl font-bold text-[#ECFFFF]">
            Powering Intelligent Logistics
          </h1>

          {/* Paragraph */}
          <p className="text-sm md:text-lg leading-relaxed tracking-wide font-extralight text-[#ECFFFF]">
            Move Anything, Anywhere – Smarter, Faster, and More Efficiently. <br />
            From bikes to trucks, shipping vessels to aircraft cargo, Loop Freights powers seamless, data-driven logistics for businesses and individuals. Whether it&apos;s intra-city, interstate, or international, we match the right vehicle to your delivery needs. Backed by real-time tracking, advanced supply chain intelligence, and our Bolt-powered integration.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-6 md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4">
            <button className="bg-[#57EDFB] hover:bg-[#1FDCF1] text-white text-xs md:text-base font-extralight px-6 md:px-8 h-12 rounded cursor-pointer">
              Get Started
            </button>
            <button className="bg-[#CEFDFF] hover:bg-[#1FDCF1] text-blue-400 text-xs md:text-base font-bold h-12 px-6 rounded cursor-pointer">
              Book a Shipment
            </button>
          </div>
        </div>
      </div>

      {/* Background Video */}
      <video
        src="/logistics.mp4"
        autoPlay
        muted
        loop
        className='absolute top-0 left-0 z-[-1] w-full h-full object-cover'
      />
    </section>
  );
};
