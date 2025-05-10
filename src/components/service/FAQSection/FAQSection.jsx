import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: `The time it takes to build a website can vary based on its complexity, features, and client requirements.

1. Basic Website (3–5 pages): 1 to 3 weeks  
2. Business Website with Custom Design: 3 to 6 weeks  
3. eCommerce Website: 4 to 8 weeks or more  
4. Complex or Custom Web Applications: 2 to 6 months

Factors that affect the timeline include content readiness, feedback turnaround, the number of revisions, and integrations (e.g., payment gateways, APIs).`
    },
    {
      question: "What is the cost of your service?",
      answer: `At MedoByte, our pricing is flexible and tailored to the unique needs of each project. The cost depends on factors such as the type of service (website development, eCommerce, or digital marketing), project complexity, required features, and timelines. 

We offer transparent, value-driven pricing with no hidden fees. To get an accurate quote, we recommend scheduling a free consultation so we can understand your goals and provide a customized proposal.`
    },
    {
      question: "Do you offer ongoing support after the project is completed?",
      answer: `We offer comprehensive ongoing support and maintenance services even after your project is completed. 

Whether it's technical updates, performance monitoring, security patches, content changes, or marketing support, our team is here to ensure your website or digital solution continues to run smoothly and stays up-to-date. 

We also offer flexible support plans based on your specific needs.`
    },
    {
      question: "Will my site work seamlessly on all screen sizes?",
      answer: `We prioritize responsive design to ensure your website looks and functions perfectly across all devices—whether it’s a smartphone, tablet, laptop, or desktop.

We build sites that automatically adjust to different screen sizes, providing a consistent, user-friendly experience that enhances engagement and performance.`
    },
    {
      question: "Do you provide SEO support for websites?",
      answer: `We offers complete SEO support to help your website rank higher in search engine results and attract the right audience. Our SEO services include on-page optimization, keyword research, technical SEO, content strategy, and performance tracking. Whether you're launching a new site or want to improve an existing one, we ensure it's fully optimized to drive organic traffic and deliver measurable results.`
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
                <div className="px-6 sm:px-8 pb-6 text-gray-300 text-base leading-relaxed whitespace-pre-line">
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
