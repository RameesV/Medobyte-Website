import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-16 md:px-20 rounded-2xl shadow-xl">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md break-words">
            <h3 className="text-lg font-semibold mb-2 text-white">Head Office</h3>
            <p className="text-gray-400 text-sm">
              No:2/3 Ekrajpura Hoskote Banglore 562114
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-xl text-white shadow-md break-words">
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-sm break-words">contact@medobyte.in</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md break-words">
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-gray-400">India: +91 8547864741</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-red-600 text-sm font-semibold mb-2 tracking-widest">GET IN TOUCH</h2>
          <h1 className="text-3xl font-extrabold mb-6 leading-tight text-white">
            Don't hesitate to contact us for more information.
          </h1>
          <form className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="p-3 rounded bg-gray-800 text-white placeholder-gray-500" />
              <input type="text" placeholder="Company" className="p-3 rounded bg-gray-800 text-white placeholder-gray-500" />
              <input type="tel" placeholder="Phone" className="p-3 rounded bg-gray-800 text-white placeholder-gray-500" />
              <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white placeholder-gray-500" />
            </div>
            <input type="text" placeholder="Subject" className="p-3 rounded bg-gray-800 text-white placeholder-gray-500" />
            <textarea placeholder="Message" rows="5" className="p-3 rounded bg-gray-800 text-white placeholder-gray-500"></textarea>
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold transition duration-300">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-16 text-left">
        <p className="mb-4 text-gray-400">Follow Our Social Network</p>
        <div className="flex flex-wrap gap-4 text-white text-xl">
          <a href="#" className="bg-red-600 hover:bg-red-700 transition p-3 rounded-full">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="bg-red-600 hover:bg-red-700 transition p-3 rounded-full">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="bg-red-600 hover:bg-red-700 transition p-3 rounded-full">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="bg-red-600 hover:bg-red-700 transition p-3 rounded-full">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
