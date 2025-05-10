import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 text-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:bg-gray-700 transition-shadow"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-300">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
