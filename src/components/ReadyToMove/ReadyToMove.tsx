"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ReadyToMoveSection () {
  const sectionRef = useRef<HTMLDivElement>(null);
  const readyToMoveRef = useRef<HTMLHeadingElement>(null);
  const textDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContainer = textDivRef.current;
    const heading = readyToMoveRef.current;

    const cyan = '#00e0ff';

    const keyframes = `
      @keyframes moveThroughText {
        0% { background-position: -100% 50%; }
        100% { background-position: 200% 50%; }
      }

      @keyframes borderMoveTopRightBottom {
        0% { background-position: 0% 0%, 100% 0%, 100% 100%, 0% 100%; }
        100% { background-position: 400% 0%, 500% 0%, 500% 100%, 400% 100%; }
      }
    `;

    const styleId = 'readyMoveStyles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = keyframes;
      document.head.appendChild(style);
    }

    // Animated gradient text
    if (heading) {
      heading.style.background = `linear-gradient(90deg, white, ${cyan}, white)`;
      heading.style.backgroundSize = '200% 100%';
      heading.style.backgroundClip = 'text';
      heading.style.webkitBackgroundClip = 'text';
      heading.style.color = 'transparent';
      heading.style.animation = 'moveThroughText 4s linear infinite';
    }

    // Add animated border on text container (Top, Right, Bottom only)
    if (textContainer) {
      textContainer.classList.add('relative', 'overflow-hidden');

      const borderDiv = document.createElement('div');
      borderDiv.className = 'absolute top-0 left-0 w-full h-full pointer-events-none z-0';
      borderDiv.style.background = `linear-gradient(to right, ${cyan}, transparent, ${cyan}, transparent, ${cyan}),
                                   linear-gradient(to bottom, ${cyan}, transparent, ${cyan}, transparent, ${cyan}),
                                   linear-gradient(to left, ${cyan}, transparent, ${cyan}, transparent, ${cyan})`;
      borderDiv.style.backgroundSize = '200% 2px, 2px 200%, 200% 2px';
      borderDiv.style.backgroundPosition = '0 0, 100% 0, 100% 100%';
      borderDiv.style.backgroundRepeat = 'no-repeat';
      borderDiv.style.animation = 'borderMoveTopRightBottom 4s linear infinite';
      borderDiv.style.padding = '2px';
      borderDiv.style.borderRadius = '1rem';
      textContainer.prepend(borderDiv);
    }

    if (section) {
      section.style.backgroundColor = '#0f0f0f';
    }

    return () => {
      if (heading) {
        heading.removeAttribute('style');
      }
      if (textContainer?.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
      }
      document.getElementById('readyMoveStyles')?.remove();
      if (section) {
        section.style.backgroundColor = '';
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0f0f0f] text-white border-b-1 border-gray-300">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-[90%] mt-6 md:mt-0 h-[400px] md:h-[800px] relative">
        <Image
          src="/WarehouseWorkers.jpeg"
          alt="Warehouse logistics team"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Right Side - Text & Buttons */}
      <div
        ref={textDivRef}
        className="md:w-1/2 w-full p-10 flex flex-col justify-center items-center md:items-start bg-[#0f0f0f] rounded-xl z-10"
      >
        <h2
          ref={readyToMoveRef}
          className="text-2xl md:text-6xl font-bold mb-4 relative z-10"
        >
          Ready to Move Smarter?
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8 text-center md:text-left relative z-10">
          Ship smarter, move faster, and optimize your logistics with Loop Freights.
        </p>

        <div className="flex space-x-8 relative z-10">
          <Link href="/get-started">
            <div className="bg-[#57EDFB] hover:bg-[#1FDCF1] text-white py-2 px-5 rounded transition-all duration-200">
              Get Started
            </div>
          </Link>
          <Link href="/book-shipment">
            <div className="border border-cyan-400 bg-[#CEFDFF] hover:bg-[#1FDCF1] text-blue-400 py-2 px-5 rounded transition-all duration-200">
              Book a Shipment
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
