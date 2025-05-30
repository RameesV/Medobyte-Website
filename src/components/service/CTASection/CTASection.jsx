import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Launch Your Next Project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
        >
          We turn your vision into reality with expert website development, powerful eCommerce solutions, and strategic digital marketing. Get in touch today for a free consultation and take the first step toward digital success!
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center bg-red-800 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
