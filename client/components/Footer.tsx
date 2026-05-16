'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#670626] text-white pt-12 pb-6">
      {/* Top Section with Background Accent */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFBDC5]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#FFBDC5] rounded-lg flex items-center justify-center">
                  <span className="text-[#670626] font-bold text-lg">P</span>
                </div>
                <span className="font-bold text-xl">Piked Events</span>
              </div>
              <p className="text-[#F9CBD6] text-sm leading-relaxed">
                Your premier destination for discovering, booking, and managing unforgettable events.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#FFBDC5]">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/events" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors text-sm">
                    Browse Events
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors text-sm">
                    My Bookings
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors text-sm">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors text-sm">
                    Admin Panel
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#FFBDC5]">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors text-sm">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#FFBDC5]">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Mail size={18} className="text-[#FFBDC5] mt-0.5 flex-shrink-0" />
                  <span className="text-[#F9CBD6] text-sm">support@pikedevents.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone size={18} className="text-[#FFBDC5] mt-0.5 flex-shrink-0" />
                  <span className="text-[#F9CBD6] text-sm">+234 80 123-4567</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={18} className="text-[#FFBDC5] mt-0.5 flex-shrink-0" />
                  <span className="text-[#F9CBD6] text-sm">123 Event Street, City, ST 12345</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#FFBDC5] my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-[#F9CBD6] text-sm text-center md:text-left">
              <p>&copy; {currentYear} Piked Events. All rights reserved.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#FFBDC5] rounded-full flex items-center justify-center text-[#670626] hover:bg-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#FFBDC5] rounded-full flex items-center justify-center text-[#670626] hover:bg-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#FFBDC5] rounded-full flex items-center justify-center text-[#670626] hover:bg-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#FFBDC5] rounded-full flex items-center justify-center text-[#670626] hover:bg-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-4 text-sm">
              <Link href="#" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors">
                Sitemap
              </Link>
              <span className="text-[#FFBDC5]">|</span>
              <Link href="#" className="text-[#F9CBD6] hover:text-[#FFBDC5] transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
