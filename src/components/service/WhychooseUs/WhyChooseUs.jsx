import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Clock,
  Code,
  Users,
  TrendingUp,
  PhoneCall
} from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-800" />,
    title: "Reliable & Secure",
    description: "We prioritize the reliability and security of every digital solution we deliver. From stable website performance to secure data handling and compliance with best practices, our team ensures your online presence is protected and consistently available—giving you and your customers peace of mind."
  },
  {
    icon: <Clock className="w-8 h-8 text-red-800" />,
    title: "24/7 Support",
    description: "We round-the-clock support to ensure your website and digital solutions are always running smoothly. Our team is available at any time to address any issues, provide assistance, and keep your business online without interruption."
  },
  {
    icon: <Code className="w-8 h-8 text-red-800" />,
    title: "Full-Stack Expertise",
    description: "Our full-stack expertise allows us to handle every aspect of your web development needs, from front-end design to back-end functionality. Whether it’s building dynamic websites, scalable eCommerce platforms, or complex web applications, our team of developers ensures seamless integration and high-performance solutions that drive results."
  },
  {
    icon: <Users className="w-8 h-8 text-red-800" />,
    title: "Client-Focused",
    description: "We put our clients at the heart of everything we do. We take the time to understand your unique business goals and challenges, delivering tailored digital solutions that align with your vision. Our collaborative approach ensures that you are always informed, involved, and satisfied with the results, fostering long-term partnerships built on trust and success."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-red-800" />,
    title: "Results-Driven",
    description: "We focus on delivering tangible, measurable results for your business. From improving online visibility through SEO to optimizing your website’s performance, every solution is designed with one goal in mind—driving growth and achieving success. We use data-driven strategies to ensure that each project delivers the impact and ROI you expect."
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-red-800" />,
    title: "Transparent Communication",
    description: "We believe in clear, honest, and open communication throughout every phase of your project. From initial consultation to project delivery and beyond, we ensure you're always informed about progress, timelines, and any challenges that may arise. Our goal is to build trust and foster a collaborative relationship, keeping you in the loop every step of the way."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 p-4">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 text-left shadow-md"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
