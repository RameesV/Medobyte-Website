import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const contents = [
    {
      text: "Custom Website Development"
    },
    {
      text: "Scalable E-Commerce Solutions"
    },
    {
      text: "Results-Driven Digital Marketing"
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
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div 
        className="relative bg-cover bg-center h-[300px] md:h-[400px]"
        style={{
          backgroundImage: 'url("images/Bg5.webp")'
        }}
      >
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-gray-900/20" />
        
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
              <h1 className="text-4xl font-bold mb-2">{contents[currentIndex].text}</h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Banner; 