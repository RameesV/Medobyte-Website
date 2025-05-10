import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerSection = () => {

  return (
    <div
      className="relative mt-16 bg-cover bg-center bg-no-repeat h-[550px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/images/servicepagebannerimage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center py-16 lg:py-24">
        <div className="w-full lg:w-2/3 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Empowering Your Business with Innovative Digital Solutions
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            From custom website development to scalable eCommerce platforms and data-driven digital marketing, MedoByte delivers tailored services designed to fuel your online growth and success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
