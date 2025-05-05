import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, BarChart, Target, Users, Code, Globe, Smartphone, Database } from 'lucide-react';

const WhoWeAre = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "E-Commerce Development",
      description: "We build powerful, scalable e-commerce platforms that drive sales and enhance customer experience. From custom storefronts to seamless checkout processes, we create solutions that convert visitors into customers."
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: "Digital Marketing",
      description: "Our data-driven marketing strategies help businesses reach their target audience effectively. We combine SEO, PPC, social media, and content marketing to create comprehensive campaigns that deliver results."
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Custom Development",
      description: "We create tailored solutions for your unique business needs. Our team specializes in building custom features, integrations, and functionalities that give you a competitive edge in the market."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description: "From responsive websites to progressive web apps, we build digital experiences that engage users and drive business growth. Our focus is on performance, security, and user experience."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile Solutions",
      description: "We develop mobile applications and responsive designs that ensure your business is accessible across all devices. Our mobile-first approach guarantees optimal user experience."
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Backend Services",
      description: "We provide robust backend solutions including API development, database management, and server optimization to ensure your digital platform runs smoothly and efficiently."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Who We Are
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We are a team of digital experts specializing in e-commerce development and digital marketing. Our mission is to help businesses thrive in the digital landscape by creating innovative solutions that drive growth and success.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            With years of experience in the industry, we understand the challenges businesses face in the digital world. Our team combines technical expertise with creative thinking to deliver solutions that not only meet but exceed our clients' expectations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre; 