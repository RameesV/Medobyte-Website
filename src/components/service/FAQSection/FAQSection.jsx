import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically, our web development projects take 4-8 weeks, depending on complexity and client requirements."
    },
    {
      question: "What is the cost of your services?",
      answer: "The cost varies depending on the scope and complexity of the project. We provide custom quotes tailored to each client."
    },
    {
      question: "Do you offer ongoing support after the project is completed?",
      answer: "Yes, we offer maintenance and support packages to ensure your website continues running smoothly after launch."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all of our websites are responsive and optimized for mobile devices."
    },
    {
      question: "Can you help with SEO?",
      answer: "Absolutely! We provide SEO services to help improve your website's visibility and drive organic traffic."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl transition duration-300 overflow-hidden ${
                isOpen ? 'bg-gray-700' : 'bg-gray-800'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 sm:p-8 text-left focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="text-red-600 w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-300 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 sm:px-8 pb-6 text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
