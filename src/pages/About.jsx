import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-950">
      {/* About Medobyte Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full pt-16 sm:pt-20"
      >
        <div 
          className="relative shadow-xl px-4 sm:px-8 py-12 sm:py-20 w-full text-center overflow-hidden min-h-[400px] sm:min-h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: "url('https://i.pinimg.com/1200x/19/75/1d/19751d804d0bf3793cd2faad8443ecb8.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-gray-900/60 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-[#FF3333]/3"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">About Us</h1>
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-[#FF3333] hidden sm:block"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                MedoByte is a digital solutions provider specializing in custom website development, eCommerce, and digital marketing services. We empower businesses by delivering innovative, scalable, and results-driven strategies tailored to your needs. With a client-focused approach, we ensure seamless communication and a transparent, collaborative process. Our mission is to help you achieve long-term online success through expert digital solutions.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF3333] to-transparent"></div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* About Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {/* Top Right Card */}
          <div className="group relative rounded-2xl bg-red-500 text-white p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div>
              <span className="font-semibold uppercase text-xs sm:text-sm tracking-wider">Our Mission</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 mb-2">Managed IT Mastery: Enhancing Operations with Expert Support</h3>
              <p className="text-sm sm:text-base">Our mission is to develop Websites and Software that are most reliable and cost-efficient in a timely manner and to provide customized services which suit all your designing and developing needs.</p>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-black/30 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M7 7h10v10' /></svg>
              </div>
            </div>
          </div>
          {/* Bottom Right Card */}
          <div className="group relative rounded-2xl bg-gray-900 text-white p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div>
              <span className="font-semibold uppercase text-xs sm:text-sm tracking-wider">Our Vision</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 mb-2">Crafting Tomorrow's Solutions: Medobyte Web Development Insights</h3>
              <p className="text-sm sm:text-base">Our passion for what we do led us here. Our vision is to provide the world with the best IT consulting and software development services while taking care of our people and honoring our values.</p>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-red-500 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M7 7h10v10' /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Client Focus Card */}
            <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-500/10 rounded-full p-3 sm:p-4 mb-4">
                <Users className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400 group-hover:text-blue-600 transition" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Client Focus</h3>
              <p className="text-sm sm:text-base text-gray-300">We take the time to understand your specific goals and challenges, ensuring that every solution is tailored to meet your unique needs. Our dedicated team works closely with you throughout the entire process, providing clear communication and delivering results that align with your vision. Your success is our priority.</p>
            </div>
            {/* Innovation Card */}
            <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-purple-500/10 rounded-full p-3 sm:p-4 mb-4">
                <Target className="h-8 w-8 sm:h-12 sm:w-12 text-purple-400 group-hover:text-purple-600 transition" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-300">We continuously explore the latest technologies and trends to create cutting-edge solutions that drive business growth. By combining creativity with technical expertise, we deliver forward-thinking strategies that help you stay ahead of the competition and achieve your digital goals.</p>
            </div>
            {/* Excellence Card */}
            <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-pink-500/10 rounded-full p-3 sm:p-4 mb-4">
                <Award className="h-8 w-8 sm:h-12 sm:w-12 text-pink-400 group-hover:text-pink-600 transition" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-300">We are committed to delivering excellence in every project we undertake. From design to development, our team strives for the highest standards, ensuring top-quality solutions that exceed expectations. We focus on precision, attention to detail, and continuous improvement to ensure your business achieves lasting success in the digital world.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;