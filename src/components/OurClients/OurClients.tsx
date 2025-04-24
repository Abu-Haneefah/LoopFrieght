"use client"
import React from 'react';
import Image from 'next/image';

export default function OurClients() {
  return (
    <div className="py-12 bg-[#ECFFFF] mb:10 md:mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 text-center">Our Clients</h2>

        {/* Mobile grid | Desktop flex */}
        <div className="grid grid-cols-3 gap-y-6 gap-x-4 md:flex md:flex-wrap md:justify-around md:items-center md:gap-4">
          
          <div className="flex justify-center">
            <Image 
              src='/Logo/miraton rosw 1.png' 
              alt="Miraton Rose" 
              height={60} 
              width={100} 
              className="md:h-12 md:w-auto object-contain"
            />
          </div>

          <div className="flex justify-center grayscale brightness-50 hover:grayscale-0 transition duration-300">
            <Image 
              src='/Logo/Ori.png' 
              alt="Shanonobank" 
              height={60} 
              width={100} 
              className="md:h-10 md:w-auto object-contain"
            />
          </div>

          <div className="flex justify-center grayscale hover:grayscale-0 transition duration-300">
            <Image 
              src='/Logo/Shanono-2-2.png' 
              alt="MARAFA" 
              height={60} 
              width={100} 
              className="md:h-10 md:w-auto object-contain"
            />
          </div>

          <div className="flex justify-center grayscale hover:grayscale-0 transition duration-300">
            <Image 
              src='/Logo/Shanono-3-3.png' 
              alt="T&T Deal Market" 
              height={60} 
              width={100} 
              className="md:h-10 md:w-auto object-contain"
            />
          </div>

          <div className="flex justify-center grayscale hover:grayscale-0 transition duration-300">
            <Image 
              src='/Logo/Shanono-4-4.png' 
              alt="ASTRA Electric" 
              height={60} 
              width={100} 
              className="md:h-10 md:w-auto object-contain"
            />
          </div>

          <div className="flex justify-center grayscale hover:grayscale-0 transition duration-300">
            <Image 
              src='/Logo/Shanono-5-5.png' 
              alt="Baadun Beach" 
              height={60} 
              width={100} 
              className="md:h-10 md:w-auto object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
