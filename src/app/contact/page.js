'use client';
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center my-6 justify-center min-h-screen p-4">
      <div className=" rounded-xl p-8 max-w-4xl w-full text-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h1 className="text-4xl font-extrabold mb-6">
          Contact Us
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
                       placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white 
                       transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
                       placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white 
                       transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
                       placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white 
                       transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg text-lg font-bold text-white bg-green-600 hover:bg-green-700 
                       dark:bg-green-700 dark:hover:bg-green-800 shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-lg mt-6 text-gray-900 dark:text-white">
            Thank you for your message! We will get back to you soon.
          </p>
        )}
        <div className="mt-8">
          <p className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Additional Contact Information
          </p>
          <p className="text-md mb-2">
            Email: <a href="mailto:support@foodie.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@foodie.com</a>
          </p>
          <p className="text-md">
            Twitter: <a href="https://twitter.com/foodie" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter@foodie</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;