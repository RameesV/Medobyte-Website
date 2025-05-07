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

import ServiceCard from '../components/service/ServiceCards/ServiceCard';
import BannerSection from '../components/service/BannerSection/BannerSection';
import WhyChooseUs from '../components/service/WhychooseUs/WhyChooseUs';
import FAQSection from '../components/service/FAQSection/FAQSection';
import CTASection from '../components/service/CTASection/CTASection';
import ServiceCarousel from '../components/service/ServiceCarousel/ServiceCarousel';

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-red-600" />,
      title: 'E-commerce Solutions',
      description: 'Custom online stores, payment integration, and inventory management systems.',
      features: ['Custom Store Design', 'Payment Gateway Integration', 'Inventory Management', 'Mobile Commerce']
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-red-600" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
    },
    {
      icon: <Search className="h-12 w-12 text-red-600" />,
      title: 'SEO Services',
      description: 'Improve your search engine rankings and drive organic traffic.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: <Mail className="h-12 w-12 text-red-600" />,
      title: 'Email Marketing',
      description: 'Engage your customers with targeted email campaigns.',
      features: ['Campaign Design', 'List Management', 'A/B Testing', 'Performance Analytics']
    },
    {
      icon: <Share2 className="h-12 w-12 text-red-600" />,
      title: 'Social Media Management',
      description: 'Build and maintain your brand presence across social platforms.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Performance Tracking']
    },
    {
      icon: <Globe className="h-12 w-12 text-red-600" />,
      title: 'Web Development',
      description: 'Custom website development with modern technologies.',
      features: ['Responsive Design', 'Custom Development', 'CMS Integration', 'Performance Optimization']
    }
  ];

  return (
    <>
    <div className='servicepage-section overflow-x-hidden'>
      <BannerSection />

      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-extrabold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <ServiceCarousel />
      <FAQSection />
      <CTASection />
      </div>
    </>
  );
};

export default Services;
