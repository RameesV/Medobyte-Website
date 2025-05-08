import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    {
      number: "Full Stack",
      text: "Robust full-stack web and app development using modern technologies."
    },
    {
      number: "Content",
      text: "Engaging content strategy, creation, and copywriting services."
    },
    {
      number: "Maintenance",
      text: "Ongoing application support, updates, and performance optimization."
    },
    {
      number: "Marketing",
      text: "Comprehensive digital and broadcast marketing solutions to boost your reach."
    },
    {
      number: "UI/UX",
      text: "User-centric UI/UX design to enhance experience and engagement."
    },
    {
      number: "Mobile Apps",
      text: "Custom mobile app development for iOS and Android platforms."
    },
    {
      number: "DevOps",
      text: "DevOps and automation services to streamline your development pipeline."
    },
    {
      number: "QA Testing",
      text: "End-to-end QA and software testing for bug-free product delivery."
    },
    {
      number: "SEO",
      text: "Result-driven digital marketing and SEO strategies for better visibility."
    },
    {
      number: "E-commerce",
      text: "Custom e-commerce development with Shopify, BigCommerce & WooCommerce."
    },
    {
      number: "Custom Software",
      text: "Tailor-made software solutions for businesses of all sizes."
    },
    {
      number: "Support",
      text: "24/7 technical support and helpdesk services for your business continuity."
    },
    {
      number: "API",
      text: "Custom API development and seamless third-party integrations."
    },
    {
      number: "Database",
      text: "Secure and scalable database design, optimization, and management."
    },
    {
      number: "Migration",
      text: "Legacy system migration and modernization services to stay future-ready."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative mt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/images/servicepagebannerimage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center py-16 lg:py-24">
        <div className="w-full lg:w-2/3 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Comprehensive IT & Digital Services Tailored to Your Business
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            We specialize in full-stack development, mobile apps, UI/UX design, marketing, and scalable enterprise solutions — everything your digital transformation needs.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{contents[currentIndex].number}</div>
              <div className="text-gray-300">{contents[currentIndex].text}</div>
            </motion.div>
          </AnimatePresence>

          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get a Free Consultation →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
