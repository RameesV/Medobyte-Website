import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const contents = [
    {
      number: "24/7",
      text: "Round-the-clock support for your digital needs"
    },
    {
      number: "100%",
      text: "Satisfaction guaranteed on all our services"
    },
    {
      number: "500+",
      text: "Successful projects delivered worldwide"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div 
        className="relative bg-cover bg-center h-[300px] md:h-[400px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center p-4 text-white"
            >
              <div className="text-4xl font-bold mb-2">{contents[currentIndex].number}</div>
              <div className="text-lg">{contents[currentIndex].text}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Banner; 