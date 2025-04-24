"use client";
// components/MoveWithLoopFreights.js
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const carouselItems = [
  { src: '/roadImg.jpeg', alt: 'Cargo on Road', title: 'Cross-Border & International', description: 'Cargo Ships, Aircraft Cargo' },
  { src: '/DeliveryTruck3.jpeg', alt: 'Warehousing Solutions', title: 'Warehousing Solutions', description: 'Secure and efficient storage facilities.' },
  { src: '/DeliveryTruck6.jpeg', alt: 'Last-Mile Delivery', title: 'Last-Mile Delivery', description: 'Fast and reliable final delivery to your customers.' },
  { src: '/Shipment.jpeg', alt: 'Customs Clearance', title: 'Customs Clearance', description: 'Navigating international regulations with ease.' },
];

export default function MoveWithLoopFreights () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformValue, setTransformValue] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideWidth = carouselRef.current?.offsetWidth * 0.9 || 300;
    setTransformValue(-currentIndex * slideWidth);
  }, [currentIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="py-16 mt-10">
      <div className="container mx-auto px-4 flex flex-col ml-2 md:grid md:grid-cols-2 gap-12 items-start">

        {/* Carousel Section */}
        <div className="relative overflow-hidden w-full md:w-[60%] md:ml-28 order-2 md:order-1">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${transformValue}px)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="w-[90%] flex-shrink-0 mr-4 relative">
                <div className="relative aspect-video">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    style={{ filter: 'brightness(0.6)' }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 text-white p-4 w-full">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-lg font-semibold">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4">
            <div className="bg-white px-4 py-2 rounded-full shadow-md flex space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-cyan-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full text-left order-1 md:order-2 space-x-0">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
            <span className="bg-blue-100">What</span> You Can Move with Loop Freights
          </h2>
          <p className="text-black text-base md:text-lg leading-relaxed mb-8 ml-2">
            Loop Freights facilitates shipping for everything from small local packages to complex international cargo.
            We handle diverse freight, including e-commerce, industrial equipment, and temperature-controlled goods,
            ensuring reliable delivery worldwide. Our platform offers real-time tracking, transparent pricing, and
            expert support, simplifying logistics for shipments of any size or destination. We connect you with a
            network of trusted carriers, optimizing routes and costs. Experience seamless, stress-free shipping with
            Loop Freights, tailored to your specific needs.
          </p>
          <Link href="/services" className="inline-flex items-center bg-[#1FDCF1] hover:bg-[#03BFD7] text-white font-light py-2 px-5 rounded focus:outline-none focus:shadow-outline">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </Link>
        </div>

      </div>
    </div>
  );
};


