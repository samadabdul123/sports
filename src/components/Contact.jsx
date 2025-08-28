import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => (
  <section className="bg-gray-50 py-12">
    <div className="container mx-auto px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-start">
      {/* Info Block */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          We’d love to hear from you! Whether it’s feedback, questions, or support, our team is here to help.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="text-red-600 mr-3" />
            <span>support@e-shop.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-red-600 mr-3" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>

      {/* Form Block */}
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" rows={4} placeholder="How can we help?" />
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
