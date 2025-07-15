import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          <div>
            <img className='w-[200px]' src="/images/MB-Nav-Logo.png" alt="" />
          </div>
          <div className='grid grid-cols-2'>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">E-commerce Solutions</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BwtX9z58R/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b62f6] hover:bg-[#0b62f6]/50 transition p-3 rounded-full"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/medobyte.tech?igshid=MTNlcDR3eHl5MTZhcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e1306c] hover:bg-[#e1306c]/50 transition p-3 rounded-full"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918547864741"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] hover:bg-[#25d366]/50 transition p-3 rounded-full"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/medobyte-technologies?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d63bc] hover:bg-[#0d63bc]/50 transition p-3 rounded-full"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Medobyte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 