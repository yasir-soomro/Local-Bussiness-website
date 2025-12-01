// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    
    // Show alert when form is submitted
    alert("✅ Your message has been submitted successfully!");
    
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Hide the success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-0 py-16">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          Have questions or want to collaborate? Fill out the form below and we&apos;ll get back to you.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        className="grid lg:grid-cols-2 gap-12"
      >
        {/* Contact Form */}
        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-4 p-4 bg-teal-100 text-teal-800 rounded-lg text-center font-medium"
            >
              ✅ Your message has been sent!
            </motion.div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info / Sidebar */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center space-y-6 bg-gray-50 p-8 rounded-2xl shadow-inner"
        >
          <h2 className="text-2xl font-bold text-gray-900">Contact Info</h2>
          <p className="text-gray-700">We are here to help you. Reach out to us via email or phone.</p>
          <div className="space-y-2">
            <p className="text-gray-800"><span className="font-medium">Email:</span> support@prosperix.com</p>
            <p className="text-gray-800"><span className="font-medium">Phone:</span> +1 (555) 123-4567</p>
            <p className="text-gray-800"><span className="font-medium">Address:</span> 123 Prosperix Blvd, Suite 100, New York, NY</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}