// components/SmartLogistics.js
import React from 'react';
import Image from 'next/image';
import MoveWithLoopFreights from '../MoveWithFrieght/MoveWithFrieght';

export default function SmartLogistics() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:mb-32">
        
        {/* Text Block: comes first on mobile, left on desktop */}
        <div className="order-1 md:order-1 text-left w-full md:ml-18">
          <h2 className="text-2xl md:text-4xl  font-bold text-black mb-6">
            Smart Logistics For Every Industry
          </h2>
          <p className="text-sm md:text-lg text-black leading-relaxed tracking-wider mb-8 md:mx-0 md:w-[75%]">
            We connect fleet partners and operators to create a seamless logistics network that optimizes deliveries
            across various industries. Whether you're a business moving inventory or an individual shipping goods,
            Loop Freights ensures fast, cost-effective, and reliable deliveries.
          </p>
        </div>

        {/* Image: comes last on mobile, right on desktop */}
        <div className="order-2 md:order-2 flex justify-center md:mr-28">
          <Image
            src="/deliveryMan.png"
            alt="Delivery Rider"
            className="rounded-lg shadow-md"
            width={500}
            height={400}
          />
        </div>
      </div>

      <MoveWithLoopFreights />
    </div>
  );
}
