"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const HeroSection = () => {
  // Chart data for the services score
  const chartData = [
    { name: 'Score', value: 58 },
    { name: 'Remaining', value: 42 }
  ];
  
  // Chart colors - green for score, light gray for remaining
  const COLORS = ['#10B981', '#E5E7EB'];

  // --- Animation Variants ---

  // 1. Container variant to control the overall entry and staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Reduced stagger for faster flow
        delayChildren: 0.1
      }
    }
  };

  
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[1400px]"
      >
        {/* Main Teal Container */}
        <div className="bg-gradient-to-br from-teal-600 via-teal-600 to-teal-700 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 p-8 sm:p-10 lg:p-12 xl:p-16">
            
            {/* LEFT SECTION - Content */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
              
              {/* Start Now Label */}
              <motion.div
                // variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-16 bg-teal-300/70"></div>
                <span className="text-teal-100 text-xs font-medium tracking-[0.2em] uppercase">
                  Start Now
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                // variants={itemVariants}
                className="text-white font-bold leading-[1.15]"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                Get Started For Free No Credit Card Required
              </motion.h1>

              {/* Email Form */}
              <motion.div
                // variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-700 placeholder-gray-400 text-base bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 shadow-md transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-teal-900 font-semibold rounded-xl transition-all text-base whitespace-nowrap shadow-lg"
                >
                  Get Started
                </motion.button>
              </motion.div>

              {/* Contact Text */}
              <motion.p
                // variants={itemVariants}
                className="text-teal-50 text-base"
              >
                Want to contact our team and book a call?{' '}
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className="text-white font-medium underline decoration-2 decoration-teal-300 underline-offset-4 inline-block transition-transform"
                >
                  Try it now
                </motion.a>
              </motion.p>
            </div>

            {/* RIGHT SECTION - Image & Chart Card */}
            <motion.div
              // variants={imageVariants}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                
                {/* Main Team Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/home/images.png"
                      alt="Team collaborating in office"
                      fill
                      priority // Use priority since this is a hero image
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                  </div>
                </div>

                {/* Floating Services Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
                    transition: { duration: 0.3 }
                  }}
                  className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 lg:-left-10 bg-white rounded-2xl shadow-2xl p-5 sm:p-6 w-48 sm:w-56 z-20"
                >
                  {/* Services Header */}
                  <h3 className="text-gray-900 font-bold text-sm mb-4">
                    Services
                  </h3>

                  {/* Donut Chart Container */}
                  <div className="relative h-28 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius="62%"
                          outerRadius="88%"
                          startAngle={90}
                          endAngle={450}
                          dataKey="value"
                          animationBegin={800}
                          animationDuration={1400}
                          animationEasing="ease-out"
                        >
                          {chartData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={COLORS[index]} 
                              strokeWidth={0}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    
                    {/* Center Score Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold mb-0.5"
                      >
                        SCORE
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
                        className="text-gray-900 text-2xl font-bold"
                      >
                        58%
                      </motion.span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-between text-[10px] font-medium">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <span className="text-gray-500">STORE</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-gray-500">STOCK</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-gray-500">BRAND</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;