import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/programmer-night_23-2151948231.jpg?t=st=1746631007~exp=1746634607~hmac=f01416a3677444b90f246e408b158d99a36f78f06b8a58721a258a8df08ea53a&w=1380",
    "https://img.freepik.com/free-photo/beautiful-office-space-cartoon-style_23-2151043333.jpg?t=st=1746635350~exp=1746638950~hmac=cca7c4804340b7683c7958d51b81f8edd43b403f8d04c5abf7a1fa12f5fd5e99&w=1380",
    "https://img.freepik.com/free-photo/rendering-anime-doctors-work_23-2151151905.jpg?t=st=1746635507~exp=1746639107~hmac=1905d9a0d82bed744f74590e14c54de5b72192ba5cbe5ef00d63bab088c9c981&w=1480"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-950">
      {/* About Medobyte Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div 
          className="relative shadow-xl px-8 py-20 w-full text-center overflow-hidden min-h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url('${images[currentImage]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.3s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/75 to-gray-900/85"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">About Medobyte</h1>
            <p className="text-2xl text-gray-200">
              We are a team of passionate digital experts committed to helping businesses succeed in the digital world through innovative e-commerce solutions and strategic marketing.
            </p>
          </div>
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* About Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Left Card */}
          <div className="relative md:row-span-2 rounded-2xl overflow-hidden bg-gray-900 flex flex-col justify-end p-8 min-h-[340px] md:min-h-[480px] col-span-2">
            <div className="absolute inset-0 bg-black/98" 
            style={{
              backgroundImage: "url('https://img.freepik.com/free-photo/innovative-futuristic-classroom-students_23-2150906258.jpg?t=st=1746632223~exp=1746635823~hmac=1b130069bc671cff039112573d10b5984ec0770236ba3091c6f3f526ef1be85d&w=900')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
              <span className="text-[#FF3333] font-semibold uppercase text-sm tracking-wider">Our Value</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Your Digital Future, Our Expertise: Medobyte Delivers Excellence.</h2>
              <p className="text-white/90 mb-6">Our team of professional web designers, developers, and digital marketers bring their skills above and beyond the ordinary to each and every project to make your dream come true.</p>
              <button className="bg-[#FF3333] hover:bg-[#FF1A1A] text-white font-semibold px-6 py-2 rounded-full transition">Discover More</button>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-[#FF3333] rounded-full p-2">
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M7 7h10v10' /></svg>
              </div>
            </div>
          </div>
          {/* Top Right Card */}
          <div className="group relative rounded-2xl bg-red-500 text-white p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div>
              <span className="font-semibold uppercase text-sm tracking-wider">Our Mission</span>
              <h3 className="text-2xl font-bold mt-2 mb-2">Managed IT Mastery: Enhancing Operations with Expert Support</h3>
              <p>Our mission is to develop Websites and Software that are most reliable and cost-efficient in a timely manner and to provide customized services which suit all your designing and developing needs.</p>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-black/30 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M7 7h10v10' /></svg>
              </div>
            </div>
          </div>
          {/* Bottom Right Card */}
          <div className="group relative rounded-2xl bg-gray-900 text-white p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div>
              <span className="font-semibold uppercase text-sm tracking-wider">Our Vision</span>
              <h3 className="text-2xl font-bold mt-2 mb-2">Crafting Tomorrow's Solutions: Medobyte Web Development Insights</h3>
              <p>Our passion for what we do led us here. Our vision is to provide the world with the best IT consulting and software development services while taking care of our people and honoring our values.</p>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-red-500 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17L17 7M7 7h10v10' /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Client Focus Card */}
            <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-500/10 rounded-full p-4 mb-4">
                <Users className="h-12 w-12 text-blue-400 group-hover:text-blue-600 transition" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Client Focus</h3>
              <p className="text-gray-300">We put our clients' success at the heart of everything we do, building strong partnerships and delivering solutions tailored to their unique needs.</p>
            </div>
            {/* Innovation Card */}
            <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-purple-500/10 rounded-full p-4 mb-4">
                <Target className="h-12 w-12 text-purple-400 group-hover:text-purple-600 transition" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-gray-300">We embrace new technologies and creative solutions, continuously seeking ways to improve and provide cutting-edge services.</p>
            </div>
            {/* Excellence Card */}
            <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-pink-500/10 rounded-full p-4 mb-4">
                <Award className="h-12 w-12 text-pink-400 group-hover:text-pink-600 transition" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Excellence</h3>
              <p className="text-gray-300">We strive for excellence in every project we undertake, maintaining high standards of quality and professionalism in all aspects of our work.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 