import React from 'react';
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
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "Reliable & Secure",
    description: "We deliver secure, scalable solutions with modern technologies."
  },
  {
    icon: <Clock className="w-8 h-8 text-red-600" />,
    title: "24/7 Support",
    description: "Our team is available anytime you need help or guidance."
  },
  {
    icon: <Code className="w-8 h-8 text-red-600" />,
    title: "Full-Stack Expertise",
    description: "From front-end to DevOps, we cover your entire tech stack."
  },
  {
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "Client-Focused",
    description: "Every project is built to align with your unique goals."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-red-600" />,
    title: "Results-Driven",
    description: "500+ successful projects for businesses across industries."
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-red-600" />,
    title: "Transparent Communication",
    description: "We ensure you're informed and in control throughout the project."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We combine technical excellence with customer-centric values to deliver digital solutions that drive business growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 text-left hover:bg-gray-700 transition shadow-md"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
