import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Globe, Code, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Unlock Your Digital Potential with Medobyte";
  const typingSpeed = 100;
  const servicesRef = useRef(null);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(prevText => prevText + fullText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleExploreClick = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
        className="relative bg-black text-white min-h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={textVariants} className="text-4xl md:text-6xl font-bold mb-6">
            {typedText}
          </motion.h1>
          <motion.p variants={textVariants} className="text-xl mb-8">
            We craft bespoke e-commerce experiences and cutting-edge digital
            strategies, turning your vision into reality. From seamless online
            stores to impactful marketing campaigns, we're your partner in
            digital growth.
          </motion.p>
          <motion.div className="flex justify-center space-x-4">
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              onClick={handleExploreClick}
            >
              Explore Our Solutions
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black">
              Comprehensive Digital Services
            </h2>
            <p className="mt-4 text-gray-600">
              Tailored solutions to elevate your online presence and drive
              business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200"
            >
              <ShoppingCart className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-black">
                E-commerce Mastery
              </h3>
              <p className="text-gray-600">
                Build and optimize your online store for seamless customer
                experiences and increased conversions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200"
            >
              <TrendingUp className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-black">
                Data-Driven Marketing
              </h3>
              <p className="text-gray-600">
                Reach your target audience with strategic campaigns that deliver
                measurable results and growth.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200"
            >
              <Globe className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-black">
                Modern Web Solutions
              </h3>
              <p className="text-gray-600">
                Create responsive, high-performance websites that reflect your
                brand and engage your customers.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200"
            >
              <Code className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-black">
                Custom Development
              </h3>
              <p className="text-gray-600">
                Tailored software and application development to meet your
                unique business needs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200"
            >
              <Lightbulb className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-black">
                Innovative Strategies
              </h3>
              <p className="text-gray-600">
                Creative solutions and forward-thinking strategies to keep you
                ahead of the competition.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200"
            >
              <Users className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-black">
                User Experience Design
              </h3>
              <p className="text-gray-600">
                Focus on user-centered design to create intuitive and engaging
                digital experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Elevate Your Digital Journey?
            </h2>
            <Link to='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 