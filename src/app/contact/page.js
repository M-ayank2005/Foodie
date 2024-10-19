'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { useDarkMode } from '../DarkModeContext';

const Contact = () => {
  const { darkMode } = useDarkMode();
  console.log(darkMode);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Data:', formData);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-r ${darkMode ? 'from-gray-800 to-gray-900' : 'from-gray-100 to-gray-300'}`}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-5xl font-bold ${darkMode ? "text-white" : "text-black"} mb-8`}
        >
          Contact Us
        </motion.h1>
        <motion.form
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`p-8 rounded-lg shadow-lg w-full max-w-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'text-gray-700'} leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div>
          <div className="mb-6">
            <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'text-gray-700'} leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div>
          <div className="mb-6">
            <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`shadow appearance-none border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'text-gray-700'} leading-tight focus:outline-none focus:shadow-outline`}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${darkMode ? 'bg-blue-600 hover:bg-blue-800 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
