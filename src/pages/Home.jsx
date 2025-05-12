import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Globe, Code, Lightbulb, Users, Target, Heart, Eye, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Unlock Your Digital Potential with Medobyte";
  const typingSpeed = 100;
  const servicesRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  
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
    <div className="bg-black">
      <Banner />
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold text-white mb-4 text-center mb-16 pt-10"
      >
        Who We Are
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-base text-gray-300 px-8 mx-auto text-center"
      >
At MedoByte, we specialize in professional website development, eCommerce solutions, and digital marketing services designed to elevate your online presence and drive measurable results. Whether you're looking to build a high-performance website, launch a feature-rich online store, or boost your brand visibility through targeted SEO, PPC, and social media marketing, our expert team delivers customized strategies that align with your business goals. With a focus on responsive design, seamless user experience, and data-driven digital campaigns, we empower businesses to thrive in the competitive digital landscape. Let MedoByte be your trusted partner in transforming your online success.      </motion.p>

      <section ref={servicesRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              <ShoppingCart className="h-12 w-12 text-red-600 mx-auto mb-4" />,
              <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />,
              <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />,
              <Code className="h-12 w-12 text-red-600 mx-auto mb-4" />,
              <Lightbulb className="h-12 w-12 text-red-600 mx-auto mb-4" />,
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
            ].map((icon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15 * idx, type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{
                  backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity))",
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-900 p-8 rounded-lg shadow-lg text-center border border-gray-800 cursor-pointer"
              >
                {icon}
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {[
                    'E-commerce Mastery',
                    'Digital Marketing',
                    'Modern Web Solutions',
                    'Custom Development',
                    'Innovative Strategies',
                    'User Experience Design'
                  ][idx]}
                </h3>
                <p className="text-gray-300">
                  {[
                    'Build and optimize your online store for seamless customer experiences and increased conversions.',
                    'Reach your target audience with strategic campaigns that deliver measurable results and growth.',
                    'Create responsive, high-performance websites that reflect your brand and engage your customers.',
                    'Tailored software and application development to meet your unique business needs.',
                    'Creative solutions and forward-thinking strategies to keep you ahead of the competition.',
                    'Focus on user-centered design to create intuitive and engaging digital experiences.'
                  ][idx]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-0 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Guiding Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[320px] flex flex-col justify-end p-8"
              style={{backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)'}}
            >
              <div className="absolute inset-0 bg-black/70 z-0" />
              <div className="relative z-10">
                <span className="text-xl font-semibold text-red-500 mb-2">OUR VALUE</span>
                <p className="text-gray-300 text-lg mb-6">At MedoByte, our core value lies in delivering innovative, reliable, and client-focused digital solutions that drive real growth. We are committed to building long-term partnerships by understanding our clients' unique needs and providing transparent, high-quality service across web development, eCommerce, and digital marketing. Your success is our mission.</p>
              </div>
            </motion.div>
            <div className="flex flex-col gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative rounded-2xl bg-red-600 p-8 flex-1 flex flex-col justify-between shadow-lg"
              >
                <span className="text-xl font-semibold text-white mb-2">OUR MISSION</span>
                <p className="text-gray-300 text-lg">To deliver exceptional web development, eCommerce, and digital marketing services by combining innovation, technology, and strategy—helping our clients achieve measurable success and stand out in the digital marketplace.</p>
              </motion.div>
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative rounded-2xl bg-gray-900 p-8 flex-1 flex flex-col justify-between shadow-lg"
              >
                <span className="text-xl font-semibold text-white mb-2">OUR VISION</span>
                <p className="text-gray-300 text-lg">To empower businesses of all sizes with cutting-edge digital solutions that enhance online presence, drive sustainable growth, and foster lasting customer engagement in an ever-evolving digital world.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        {/* Banner Image with Overlay */}
        <div className="relative h-[400px] md:h-[400px] h-[600px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Why Choose Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center px-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
              <p className="text-base text-gray-200 max-w-3xl mx-auto">
                At Medobyte Technologies, we're passionate about empowering businesses through innovative e-commerce solutions and digital marketing strategies. Our team of experts combines creativity with technology to deliver tailored solutions that drive results. We prioritize transparency, collaboration, and customer satisfaction, ensuring seamless communication and measurable success. With a proven track record of boosting online sales, enhancing brand visibility, and fostering long-term growth, we help businesses thrive in the digital landscape. Whether you're looking to launch an e-commerce platform or amplify your online presence, choose us for expert guidance, innovative solutions, and unparalleled support
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Main Features */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-black p-8 rounded-2xl shadow-xl relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-[#818cf8]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Expert Team</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our team of certified professionals brings years of experience in e-commerce and digital marketing.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Certified professionals
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Industry expertise
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Continuous training
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-black p-8 rounded-2xl shadow-xl relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Lightbulb className="w-6 h-6 text-[#818cf8]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Innovative Solutions</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    We stay ahead of industry trends to deliver cutting-edge solutions that give you a competitive edge.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Latest technologies
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Creative approaches
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Future-proof solutions
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Main Features */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-black p-8 rounded-2xl shadow-xl relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-[#818cf8]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">24/7 Support</h3>
                  </div>
                  <p className="text-white mb-6">
                    Our dedicated support team is always ready to help you succeed in your digital journey.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center transition-transform duration-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      <span className="text-white">Round-the-clock assistance</span>
                    </li>
                    <li className="flex items-center  transition-transform duration-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      <span className="text-white">Quick response times</span>
                    </li>
                    <li className="flex items-center  transition-transform duration-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      <span className="text-white">Dedicated account managers</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black p-8 rounded-2xl shadow-xl relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-[#818cf8]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Proven Results</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    We deliver measurable results and ROI for our clients through data-driven strategies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Data-driven approach
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Measurable ROI
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Success metrics
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth
            </p>
          </motion.div>

          {/* E-commerce Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          >
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center mr-4">
                  <ShoppingCart className="w-6 h-6 text-[#818cf8]" />
                </div>
                <h3 className="text-3xl font-bold text-white">E-commerce Solutions</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Custom online stores with seamless shopping experiences and secure payment gateways. We build platforms that convert visitors into customers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Custom Development</h4>
                    <p className="text-gray-300">Tailored solutions for your unique business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Payment Integration</h4>
                    <p className="text-gray-300">Secure and seamless payment processing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Inventory Management</h4>
                    <p className="text-gray-300">Efficient stock control and order processing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Analytics & Insights</h4>
                    <p className="text-gray-300">Data-driven decisions for growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 overflow-hidden rounded-lg relative">
              <img 
                src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
                alt="E-commerce Solutions"
                className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 rounded-lg pointer-events-none" />
            </div>
          </motion.div>

          {/* Digital Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20"
          >
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-[#818cf8]" />
                </div>
                <h3 className="text-3xl font-bold text-white">Digital Marketing</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Strategic marketing campaigns to increase visibility and drive conversions. We help you reach and engage your target audience effectively.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">SEO Optimization</h4>
                    <p className="text-gray-300">Improve your search engine rankings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Social Media</h4>
                    <p className="text-gray-300">Engage with your audience effectively</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Content Strategy</h4>
                    <p className="text-gray-300">Create compelling content that converts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Analytics & Reporting</h4>
                    <p className="text-gray-300">Track and optimize your campaigns</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 overflow-hidden rounded-lg relative">
              <img 
                src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg"
                alt="Digital Marketing"
                className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 rounded-lg pointer-events-none" />
            </div>
          </motion.div>

          {/* Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-[#818cf8]" />
                </div>
                <h3 className="text-3xl font-bold text-white">Web Development</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Modern, responsive websites built with the latest technologies and best practices. We create digital experiences that engage and convert.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Custom Development</h4>
                    <p className="text-gray-300">Tailored to your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Responsive Design</h4>
                    <p className="text-gray-300">Perfect on all devices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Performance</h4>
                    <p className="text-gray-300">Lightning-fast loading times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h4 className="font-semibold text-white">Security</h4>
                    <p className="text-gray-300">Enterprise-grade protection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 overflow-hidden rounded-lg relative">
              <img 
                src="https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323528.jpg"
                alt="Web Development"
                className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 rounded-lg pointer-events-none" />
            </div>
          </motion.div>
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
                className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
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