"use client"

import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Home, Briefcase } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const [percentage, setPercentage] = useState(0);
  const targetPercentage = 88.7;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetPercentage / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetPercentage) {
        setPercentage(targetPercentage);
        clearInterval(timer);
      } else {
        setPercentage(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: DollarSign,
      title: 'Financial Planning',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      link  : "/",
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      link  : "/",

    },
    {
      icon: Home,
      title: 'Estate Planning',
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      link  : "/",

    },
    {
      icon: Briefcase,
      title: 'Wealth Management',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      link  : "/",

    }
  ];

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Side - Dashboard Illustration */}
          <div className="relative order-2 lg:order-1">
            {/* Background gradient blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-100 rounded-3xl transform -rotate-3"></div>
            
            {/* Main container */}
            <div className="relative bg-gradient-to-br from-teal-50 to-cyan-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
              
              {/* Browser window mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser header */}
                <div className="bg-teal-600 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-4 sm:p-6 lg:p-8 space-y-6">
                  
                  {/* Top section with avatar and progress bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full animate-pulse shadow-lg"></div>
                    
                    <div className="flex-1 ml-4 space-y-2">
                      <div className="h-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-full w-3/4 animate-shimmer"></div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 ml-auto animate-float shadow-lg"></div>
                    </div>
                  </div>

                  {/* Color indicators */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-cyan-400 rounded-full w-1/4"></div>
                        <div className="h-2 bg-cyan-300 rounded-full w-1/3"></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-pink-400 rounded-full w-1/5"></div>
                        <div className="h-2 bg-pink-300 rounded-full w-1/4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Investment growth card */}
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 animate-slideUp">
                    <h4 className="text-sm font-semibold text-gray-700 mb-4">Investment growth</h4>
                    
                    {/* Circular progress */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                        <svg className="transform -rotate-90 w-full h-full">
                          {/* Background circle */}
                          <circle
                            cx="50%"
                            cy="50%"
                            r="45"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                            fill="none"
                          />
                          {/* Progress circle */}
                          <circle
                            cx="50%"
                            cy="50%"
                            r="45"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-1000 ease-out"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#14b8a6" />
                              <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        
                        {/* Center text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                              {percentage.toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress labels */}
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>0%</span>
                      <span className="text-gray-400">Based on interest rate</span>
                      <span>100%</span>
                    </div>

                    {/* Color indicators at bottom */}
                    <div className="flex justify-center gap-4 mt-4">
                      <div className="h-1.5 w-12 bg-green-400 rounded-full"></div>
                      <div className="h-1.5 w-12 bg-cyan-400 rounded-full"></div>
                      <div className="h-1.5 w-12 bg-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="text-teal-600 font-semibold text-sm sm:text-base tracking-wide uppercase">
                Our Services
              </span>
              <div className="h-0.5 w-12 sm:w-16 bg-teal-600"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Our Services Can Help You Grow Your Investments and Wealth
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Embark on a journey to unlock a world of financial opportunities, grow your investment with our comprehensive and expert services
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.link}>

                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                  
                >
                    
                  <div className={`${service.bgColor} p-3 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  
                  >

                    <service.icon className={ ` w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor}`} />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {service.title}
                  </span>
                </div>
                </Link>

              ))}
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm sm:text-base group">
              Explore Services
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;