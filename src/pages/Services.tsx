import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  TrendingUp,
  Globe,
  Search,
  Mail,
  Share2
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-black" />,
      title: 'E-commerce Solutions',
      description: 'Custom online stores, payment integration, and inventory management systems.',
      features: ['Custom Store Design', 'Payment Gateway Integration', 'Inventory Management', 'Mobile Commerce']
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-black" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
    },
    {
      icon: <Search className="h-12 w-12 text-black" />,
      title: 'SEO Services',
      description: 'Improve your search engine rankings and drive organic traffic.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: <Mail className="h-12 w-12 text-black" />,
      title: 'Email Marketing',
      description: 'Engage your customers with targeted email campaigns.',
      features: ['Campaign Design', 'List Management', 'A/B Testing', 'Performance Analytics']
    },
    {
      icon: <Share2 className="h-12 w-12 text-black" />,
      title: 'Social Media Management',
      description: 'Build and maintain your brand presence across social platforms.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Performance Tracking']
    },
    {
      icon: <Globe className="h-12 w-12 text-black" />,
      title: 'Web Development',
      description: 'Custom website development with modern technologies.',
      features: ['Responsive Design', 'Custom Development', 'CMS Integration', 'Performance Optimization']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> {/* bullet color changed to black */}
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;