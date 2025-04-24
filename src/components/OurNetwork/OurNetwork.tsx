'use client';

// components/OurNetwork/OurNetwork.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OurNetworkSection (){
  const [activeTab, setActiveTab] = useState('fleetPartners');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="text-center mb-2">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-3 md:mt-40"><span className='bg-[#ECFFFF]'>Our</span> Network: The Power of Partners</h2>
        <p className="text-gray-600 text-base md:text-lg">Join our growing ecosystem of fleet owners and operators.</p>
      </div>
      <div className="bg-white py-12 mt-8 border-1 border-gray-400 rounded-lg shadow-md mx-auto max-w-7xl">
        <div className="container mx-auto px-6">
          {/* Tabs */}
          <div className="flex justify-left border-b border-gray-200 mb-6">
            <button
              className={`py-2 px-4 font-semibold text-sm ${
                activeTab === 'fleetPartners' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => handleTabClick('fleetPartners')}
            >
              For Fleet Partners
            </button>
            <button
              className={`py-2 px-4 font-semibold text-sm ${
                activeTab === 'operators' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => handleTabClick('operators')}
            >
              For Operators
            </button>
          </div>

          {/* Content for Fleet Partners */}
          {activeTab === 'fleetPartners' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="md:order-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Own a Fleet? Monetize Your Vehicles.</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Transform your fleet into a revenue-generating powerhouse by partnering with Loop Freights. Our platform
                  provides a streamlined solution to optimize vehicle utilization, reduce empty miles, and increase your
                  overall profitability. List your vehicles with ease and gain access to a curated selection of shipments
                  that align with your fleet’s capacity and operational capabilities. Leverage our advanced technology to
                  manage your bookings, track your shipments in real-time, and access transparent pricing, ensuring
                  complete control over your earnings. Benefit from our dedicated support team, who are committed to your
                  success, and join a thriving community of fleet owners who are experiencing significant growth and
                  expansion with Loop Freights.
                </p>
           
              </div>
              <div className="flex relative justify-center md:order-2">
                <div className="rounded-lg shadow-md overflow-hidden relative z-10 border-2 border-gray-300">
                  <Image src='/DeliveryTeam.jpeg' alt="Partners working together" width={380} height={200} objectFit="cover" className='w-full'/>
                </div>
                <div className="rounded-lg shadow-md overflow-hidden z-10 absolute left-6 -top-4 border-2 border-gray-300">
                  <Image src='/DeliveryGuy2.jpeg' alt="Delivery Guy" width={90} height={90} objectFit="cover" />
                </div>
                <div className="rounded-lg shadow-md overflow-hidden absolute z-10 -right-2 -bottom-10 border-2 border-gray-300">
                  <Image src='/Team4.jpeg' alt="Fleet of vehicles" width={130} height={130} objectFit="cover" />
                </div>
                <div className="rounded-full shadow-md overflow-hidden z-0 absolute right-2 md:-left-1 -left-4 -bottom-12 border-2 border-gray-300">
                  <Image src='/DeliveryTruck5.jpeg' alt="trucks" width={110} height={110} objectFit="cover" />
                </div>
              </div>
            </div>
          )}

          {/* Content for Operators */}
          {activeTab === 'operators' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="md:order-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Drive Your Success with Loop Freights..</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                As an operator in our network, you&apos;ll gain access to a consistent stream of reliable and lucrative shipment opportunities, designed to maximize your earning potential and optimize your time on the road. We provide the tools and resources you need to streamline your operations, including efficient route planning, real-time updates, and seamless communication with shippers. Our user-friendly platform simplifies the process of accepting and managing shipments, giving you the flexibility and control you need to succeed. Enjoy competitive rates, prompt payments, and dedicated support from our team, who are committed to your professional growth. Whether you&apos;re an independent contractor seeking to expand your client base or part of a larger fleet looking for stable and profitable opportunities, Loop Freights empowers you to take control of your career and achieve your financial goals.
                </p>
                <Link href="/operators" className="inline-flex items-center bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </Link>
              </div>
              <div className="flex relative justify-center md:order-2">
                <div className="rounded-lg shadow-md overflow-hidden relative z-10 border-2 border-gray-300">
                  <Image src='/team.jpeg' alt="Partners working together" width={400} height={200} objectFit="cover" />
                </div>
                <div className="rounded-lg shadow-md overflow-hidden z-10 absolute left-6 -top-4 border-2 border-gray-300">
                  <Image src='/YogaPartners.jpeg' alt="yoga partners" width={90} height={90} objectFit="cover" />
                </div>
                <div className="rounded-lg shadow-md overflow-hidden absolute z-10 -right-2 -bottom-10 border-2 border-gray-300">
                  <Image src='/Partners.jpeg' alt="two partners" width={130} height={130} objectFit="cover" />
                </div>
                <div className="rounded-full shadow-md overflow-hidden z-0 absolute right-2 -left-1 -bottom-12 border-2 border-gray-300 ">
                  <Image src='/professionals.jpeg' alt="Business handshake" width={110} height={110} objectFit="cover" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Partner With Us Button */}
      <div className="mt-8 text-center mb-24">
        <Link href="/partner-with-us" className="inline-flex items-center bg-[#1FDCF1] hover:bg-[#03BFD7] text-white py-3 px-5 rounded focus:outline-none focus:shadow-outline text-sm">
          Partner With Us
        </Link>
      </div>
    </>
  );
};

