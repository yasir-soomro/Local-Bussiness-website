"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const WealthManagement = () => {
  const [progressValues, setProgressValues] = useState({
    income: 0,
    utilities: 0,
    revenue: 0
  });

  useEffect(() => {
    // Animate progress bars on mount
    const timer = setTimeout(() => {
      setProgressValues({
        income: 80,
        utilities: 67,
        revenue: 40
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="text-teal-600 font-semibold text-sm sm:text-base tracking-wide uppercase">
                Our Expertise
              </span>
              <div className="h-0.5 w-12 sm:w-16 bg-teal-600"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Finances With Strategic Wealth Management
            </h2>

            {/* Description */}
            <div className="space-y-4 sm:space-y-5">
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Guiding you on your global financial success journey through customized & personalized financial consulting services. Achieve your goals with data-driven expertise and secure your financial future, successfully navigating the ever-changing finance.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                We&apos;re committed to providing you with expert guidance, proven strategies & personalized approach to ensure financial prosperity.
              </p>
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm sm:text-base">
              Explore Services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Side - Dashboard Card */}
          <div className="relative">
            {/* Floating Background Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-48 sm:h-48 bg-teal-100 rounded-full opacity-40 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-cyan-100 rounded-full opacity-40 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Main Card Container */}
            <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              
              {/* Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                
                {/* Floating Avatar Circle - Top Left */}
                <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-80 animate-float shadow-lg"></div>

                {/* Header with Avatar - Top Right */}
                <div className="absolute top-4 right-4 flex items-center gap-3 bg-white rounded-full px-3 py-2 shadow-lg animate-slideInRight">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-teal-400">
                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500"></div>
                  </div>
                </div>

                {/* Floating Progress Bar - Top */}
                <div className="mb-16 sm:mb-20 mt-8 sm:mt-12 animate-slideInLeft">
                  <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full rounded-full transition-all duration-2000 ease-out"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>

                {/* Red Dot Indicator */}
                <div className="absolute top-1/3 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></div>

                {/* Investment Growth Section */}
                <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Investment growth</h3>
                  
                  {/* Income Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Income</span>
                      <span className="text-xs sm:text-sm font-bold text-gray-900">{progressValues.income}%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 sm:h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-teal-400 h-full rounded-full transition-all duration-1500 ease-out"
                        style={{ width: `${progressValues.income}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Utilities Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Utilities</span>
                      <span className="text-xs sm:text-sm font-bold text-gray-900">{progressValues.utilities}%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 sm:h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-400 h-full rounded-full transition-all duration-1500 ease-out"
                        style={{ 
                          width: `${progressValues.utilities}%`,
                          transitionDelay: '0.2s'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Revenue Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Revenue</span>
                      <span className="text-xs sm:text-sm font-bold text-gray-900">{progressValues.revenue}%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2 sm:h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-pink-400 to-red-400 h-full rounded-full transition-all duration-1500 ease-out"
                        style={{ 
                          width: `${progressValues.revenue}%`,
                          transitionDelay: '0.4s'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Floating Elements */}
                <div className="flex justify-between items-end">
                  <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-lg p-3 sm:p-4 shadow-md animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-lg"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-lg p-2 sm:p-3 shadow-md animate-float" style={{ animationDelay: '1s' }}>
                    <div className="w-16 h-6 sm:w-20 sm:h-8 bg-gradient-to-r from-red-400 to-pink-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .duration-1500 {
          transition-duration: 1500ms;
        }

        .duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
    </section>
  );
};

export default WealthManagement;