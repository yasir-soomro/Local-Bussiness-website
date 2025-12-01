"use client"

import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, DollarSign } from 'lucide-react';

const FinancialHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Navigating the{' '}
                <span className="text-teal-600 relative inline-block">
                  Global
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M0 8C50 4 150 4 200 8" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                {' '}financial landscape
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              Empowering your journey to global financial success through customized and personalized financial Consulting for every client
            </p>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap text-sm sm:text-base">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Content - Charts */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 left-8 sm:left-12 w-12 h-12 sm:w-14 sm:h-14 bg-red-400 rounded-full flex items-center justify-center shadow-lg animate-float">
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            
            <div className="absolute top-20 sm:top-24 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-teal-400 rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>

            <div className="absolute top-16 sm:top-20 right-8 sm:right-12 w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-float-slow">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>

            {/* Bar Chart Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-500">Investments</h3>
              </div>
              <div className="flex items-end justify-between h-32 sm:h-40 gap-3 sm:gap-4">
                {[
                  { height: '40%', color: 'bg-yellow-400', label: '100', delay: '0ms' },
                  { height: '65%', color: 'bg-red-400', label: '200', delay: '100ms' },
                  { height: '85%', color: 'bg-green-400', label: '300', delay: '200ms' },
                  { height: '100%', color: 'bg-teal-400', label: '400', delay: '300ms' }
                ].map((bar, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className={`w-full ${bar.color} rounded-t-lg transition-all duration-1000 ease-out`}
                      style={{ 
                        height: isVisible ? bar.height : '0%',
                        transitionDelay: bar.delay
                      }}
                    />
                    <span className="text-xs text-gray-400">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Line Chart Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Data Points */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-red-400 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg animate-pulse">
                24.08
              </div>
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-teal-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '500ms' }}>
                48.09
              </div>

              {/* SVG Line Chart */}
              <svg className="w-full h-40 sm:h-48" viewBox="0 0 700 200" preserveAspectRatio="none">
                {/* Grid Lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={40 * i}
                    x2="700"
                    y2={40 * i}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}

                {/* Gradient Fill */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>

                {/* Area under line */}
                <path
                  d="M 50 150 L 150 130 L 250 160 L 350 110 L 450 140 L 550 90 L 650 50 L 650 200 L 50 200 Z"
                  fill="url(#lineGradient)"
                  className="animate-draw-fill"
                />

                {/* Main Line */}
                <path
                  d="M 50 150 L 150 130 L 250 160 L 350 110 L 450 140 L 550 90 L 650 50"
                  stroke="#14b8a6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw-line"
                  style={{
                    strokeDasharray: 1000,
                    strokeDashoffset: isVisible ? 0 : 1000,
                    transition: 'stroke-dashoffset 2s ease-out'
                  }}
                />

                {/* Data Points */}
                {[
                  { x: 50, y: 150 },
                  { x: 150, y: 130 },
                  { x: 250, y: 160 },
                  { x: 350, y: 110 },
                  { x: 450, y: 140 },
                  { x: 550, y: 90 },
                  { x: 650, y: 50 }
                ].map((point, index) => (
                  <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="#14b8a6"
                    className="animate-scale-in"
                    style={{
                      transformOrigin: `${point.x}px ${point.y}px`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                ))}

                {/* Vertical Line at highlight point */}
                <line
                  x1="650"
                  y1="50"
                  x2="650"
                  y2="200"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
              </svg>

              {/* X-axis Labels */}
              <div className="flex justify-between text-xs text-gray-400 mt-2 px-2">
                {['10', '20', '30', '40', '50', '60', '70'].map((label, index) => (
                  <span key={index}>{label}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes scale-in {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FinancialHero;