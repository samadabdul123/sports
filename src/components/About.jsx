import React from 'react';

const About = () => (
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <h2 className="text-4xl font-bold mb-4">About Electronic Shop</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At Electronic Shop, we believe in bringing quality electronics to your doorstep—seamlessly.
          With years of experience and a passion for innovation, our mission is to offer
          the best products paired with exceptional service.
        </p>
        <p className="text-gray-700">
          From smart devices to home essentials, we curate every item
          to ensure reliability, value, and convenience.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg"
          alt="About us"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  </section>
);

export default About;
