import React from 'react';
import ContactForm from '../components/contact/ContactUs/ContactForm';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 py-20 text-white">
      {/* Section Heading & Info */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Fill out the form below and our team will get back to you within 24 hours. We are always happy to help you with your needs and queries.
        </p>
      </section>

      {/* Contact Form */}
      <main className="px-6 md:px-20 pb-15">
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
