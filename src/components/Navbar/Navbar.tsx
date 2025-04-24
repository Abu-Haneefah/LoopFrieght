"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 mt-0">
      <div className="flex items-center justify-between bg-none md:bg-white p-0 md:px-6 md:py-5 w-[90%] md:w-[78%] mx-auto rounded-full border-l-4 lg:border-l-4 md:border-r-4 border-blue-400 ">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image width={150} height={200} src="/Logo/logo2.png" alt="Loopfreight Logo" className='w-40 h-auto md:w-50' />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 font-semibold text-lg text-black">
          <Link href="/home" className="hover:text-[#1FDCF1]">Home</Link>
          <Link href="/about" className="hover:text-[#1FDCF1]">About Us</Link>
          <Link href="/services" className="hover:text-[#1FDCF1]">Services</Link>
          <Link href="/contact" className="hover:text-[#1FDCF1]">Contact Us</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="bg-[#57EDFB] hover:bg-[#03BFD7] text-white font-extralight text-lg py-3 px-3 rounded focus:outline-none focus:shadow-outline mr-4"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-blue-500 focus:outline-none "
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white rounded-lg mt-2 w-[90%] mx-auto py-4 px-6 shadow-md border border-gray-200 space-y-4 text-center text-gray-800 font-medium">
          <Link href="/home" className="block text-black hover:text-[#1FDCF1]">Home</Link>
          <Link href="/about" className="block text-black hover:text-[#1FDCF1]">About Us</Link>
          <Link href="/services" className="block text-black hover:text-[#1FDCF1]">Services</Link>
          <Link href="/contact" className="block text-black hover:text-[#1FDCF1]">Contact Us</Link>
          <Link
            href="/get-started"
            className="inline-block bg-[#57EDFB] hover:bg-blue-300 text-white py-2 px-4 rounded text-sm"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
