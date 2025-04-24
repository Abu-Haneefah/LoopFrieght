"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive';

const WhyChooseBlock = ({
  imageSrc,
  altText,
  title,
  description,
  linkHref,
  index,
  isMobile,
}) => {
  
  const isImageLeftDesktop = index % 2 !== 0; // ✅ So index 0 shows image left

  const highlightLetters = (text, count, position = 'first') => {
    if (text.length <= count) {
      return <span className="bg-[#ECFFFF] text-black px-1 py-0.5 rounded">{text}</span>;
    }

    if (position === 'first') {
      const highlightedPart = text.substring(0, count);
      const remainingPart = text.substring(count);
      return (
        <>
          <span className="bg-[#ECFFFF] text-black px-1 py-0.5 rounded">{highlightedPart}</span>
          {remainingPart}
        </>
      );
    } else if (position === 'last') {
      const highlightedPart = text.substring(text.length - count);
      const remainingPart = text.substring(0, text.length - count);
      return (
        <>
          {remainingPart}
          <span className="bg-[#ECFFFF] text-black px-1 py-0.5 rounded">{highlightedPart}</span>
        </>
      );
    }
    return text; // Fallback
  };

  return (
    <div className={`w-full ${isMobile ? "mb-16" : "py-24 border-t border-gray-200 bg-[#f6fdff]"}`}>
      {isMobile ? (
        // ✅ Mobile Layout - Text top, image middle, button bottom with added margin
        <div className="flex flex-col items-center text-center px-4">
          {/* Text Div with spacing */}
          <div className="mb-10 w-full">
            <h3 className="text-2xl font-bold text-black mb-6">
              {highlightLetters(title, 6, index === 1 ? 'last' : 'first')}
            </h3>
            <p className="text-gray-700 text-base mb-8 text-left leading-relaxed">
              {description.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Image Div with spacing */}
          <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden mb-10 shadow-md">
            <Image
              src={imageSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Button Div with spacing */}
          {linkHref && (
            <div className="w-full flex justify-center mt-6">
              <Link
                href={linkHref}
                className="inline-flex items-center bg-[#1FDCF1] hover:bg-[#03BFD7] text-white font-medium py-2 px-5 rounded-md transition duration-200 text-sm"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      ) : (
        // 🖥️ Desktop Layout with spacing
        <div className="container mx-auto px-2 flex items-center gap-20 max-w-6xl">
          {isImageLeftDesktop ? (
            <>
              {/* Text & Button Div (Left) with spacing */}
              <div className="w-full md:w-1/2 flex flex-col gap-10">
                <h3 className="text-3xl tracking-wider font-stretch font-light[10%] text-black mb-4">
                  {highlightLetters(title, 6, index === 1 ? 'last' : 'first')}
                </h3>
                <p className="text-black text-xl leading-relaxed mb-8">
                  {description}
                </p>
                <div className="flex justify-start">
                  <Link
                    href={linkHref}
                    className="inline-flex items-center bg-[#1FDCF1] hover:bg-[#03BFD7] text-white font-medium py-3 px-6 rounded-md transition duration-200 text-lg"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Image Div (Right) */}
              <div className="w-full md:w-1/2">
                <Image
                  src={imageSrc}
                  alt={altText}
                  width={600}
                  height={480}
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
              </div>
            </>
          ) : (
            <>
              {/* Image Div (Left) */}
              <div className="w-full md:w-1/2 order-1">
                <Image
                  src={imageSrc}
                  alt={altText}
                  width={600}
                  height={480}
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
              </div>
              {/* Text & Button Div (Right) with spacing */}
              <div className="w-full md:w-1/2 order-2 flex flex-col gap-10 text-right">
                <h3 className="text-3xl tracking-wider font-stretch font-light[10%] text-black mb-4">
                  {highlightLetters(title, 6, index === 1 ? 'last' : 'first')}
                </h3>
                <p className="text-black text-xl leading-relaxed mb-8">
                  {description}
                </p>
                <div className="flex justify-end">
                  <Link
                    href={linkHref}
                    className="inline-flex items-center bg-[#1FDCF1] hover:bg-[#03BFD7] text-white font-medium py-3 px-6 rounded-md transition duration-200 text-lg"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WhyChooseBlock;