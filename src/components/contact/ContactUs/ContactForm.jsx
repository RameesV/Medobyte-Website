import React, { useEffect } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const validateForm = (data) => {
    const errors = {};
    
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!data.email.trim() || !data.email.includes('@')) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!data.phone.trim() || !/^\d{10}$/.test(data.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form[0].value,
      company: form[1].value,
      phone: form[2].value,
      email: form[3].value,
      subject: form[4].value,
      message: form[5].value,
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      alert('Please fix the following errors:\n' + 
            Object.values(errors).join('\n'));
      return;
    }

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxVSMVId7eldvQ9lrlXs3EF3uc4o-9E30yKLn4YB5Tq-9SHIIAAdZ3gOo7bit6ANIEH/exec', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.result === 'success') {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-900 text-white px-6 py-16 md:px-20 rounded-2xl shadow-xl">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md break-words">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Head Office
            </h3>
            <p className="text-gray-400 text-sm">
              No:2/3 Ekrajpura Hoskote Banglore 562114
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-xl text-white shadow-md break-words">
            <h3 className="text-lg font-semibold mb-2">
              Email Support
            </h3>
            <a
              href="mailto:contact@medobyte.com"
              className="text-sm break-words underline"
            >
              contact@medobyte.com
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md break-words">
            <h3 className="text-lg font-semibold mb-2">
              Call Us
            </h3>
            <p className="text-sm text-gray-400">
              India: +91 8547864741
            </p>
          </div>
          {/* Social Links */}
          <div className="mt-16 text-left">
            <p className="mb-4 text-gray-400">
              Follow Our Social Network
            </p>
            <div className="flex flex-wrap gap-4 text-white text-xl">
              <a
                href="https://www.facebook.com/share/1BwtX9z58R/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 transition p-3 rounded-full"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/medobyte.tech?igshid=MTNlcDR3eHl5MTZhcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 transition p-3 rounded-full"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918547864741"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-red-700 transition p-3 rounded-full"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/medobyte-technologies?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 transition p-3 rounded-full"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div>
          <p className="text-2xl font-extrabold mb-6 leading-tight text-white">
            Get in touch with Medobyte for innovative digital solutions that drive your business forward.
          </p>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-500"
                required
              />
              <input
                type="text"
                placeholder="Company"
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-500"
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
