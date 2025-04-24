import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer () {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 flex flex-col space-y-12 md:grid md:grid-cols-4 md:space-y-0 md:gap-12 mb-12">
        {/* Company Info */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Loop Freights</h4>
          <p className="text-base text-gray-300 leading-relaxed max-w-sm">
            Move Anything, Anywhere – Smarter, Faster, and More Efficiently.
          </p>
        </div>

        {/* Explore & Legal - Mobile View */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li><Link href="/about" className="hover:text-cyan-500">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-cyan-500">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-cyan-500">Blog</Link></li>
              <li><Link href="/services" className="hover:text-cyan-500">Services</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li><Link href="/terms" className="hover:text-cyan-500">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-cyan-500">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Explore - Desktop View */}
        <div className="hidden md:block">
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-300 text-base">
            <li><Link href="/about" className="hover:text-cyan-500">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-cyan-500">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-500">Blog</Link></li>
            <li><Link href="/services" className="hover:text-cyan-500">Services</Link></li>
          </ul>
        </div>

        {/* Legal - Desktop View */}
        <div className="hidden md:block">
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-300 text-base">
            <li><Link href="/terms" className="hover:text-cyan-500">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-cyan-500">Privacy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Social Media</h4>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <Image src="/socials/facebook.png" width={25} height={25} alt="Facebook" />
            </Link>
            <Link href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <Image src="/socials/x.png" width={25} height={25} alt="X" />
            </Link>
            <Link href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <Image src="/socials/insta.png" width={25} height={25} alt="Instagram" />
            </Link>
            <Link href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <Image src="/socials/linkedin.png" width={25} height={25} alt="LinkedIn" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 pt-6 px-6">
        <p className="text-center text-sm text-gray-400">
          ©copyrights Loopfreights. All rights reserved
        </p>
      </div>
    </footer>
  );
};

