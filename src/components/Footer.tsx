import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-900 py-12 px-4 sm:px-6 lg:px-8 mt-auto z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Hexa AI Logo"
            width={24}
            height={24}
            className="opacity-80"
          />
          <span className="text-gray-400 font-medium tracking-tight">
            Hexa AI
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <Link
            href="/about"
            className="text-sm text-gray-400 hover:text-[#00A3FF] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className="text-sm text-gray-400 hover:text-[#00A3FF] transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-400 hover:text-[#00A3FF] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-400 hover:text-[#00A3FF] transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-400 hover:text-[#00A3FF] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Hexa AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
