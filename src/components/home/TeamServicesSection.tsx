"use clinet"

import React from 'react';
import { GraduationCap, Shield, Grid3x3 } from 'lucide-react';

const TeamServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: GraduationCap,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      title: 'Expert Guidance',
      description: 'Rely on seasoned professionals for tailored financial advice and strategic planning aligned with your unique goals',
      linkText: 'Read more',
      linkColor: 'text-cyan-600',
      delay: '0s'
    },
    {
      id: 2,
      icon: Shield,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      title: 'Risk Management',
      description: 'We expertly handle and proactively mitigate financial risks, ensuring the safeguard of assets and overall stability',
      linkText: 'Read more',
      linkColor: 'text-cyan-600',
      delay: '0.2s'
    },
    {
      id: 3,
      icon: Grid3x3,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      title: 'Customized Solutions',
      description: 'Receive and Benefit from with financial solutions that tailored to your unique financial challenges and aspirations',
      linkText: 'Read more',
      linkColor: 'text-cyan-600',
      delay: '0.4s'
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Our Team Provides Valuable Services at Any Time in Any Situation
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${service.delay} both`
                }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 sm:mb-8">
                    <div 
                      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 ${service.iconBg} rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}
                    >
                      <IconComponent 
                        className={`w-8 h-8 sm:w-10 sm:h-10 ${service.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 ${service.linkColor} font-semibold text-sm sm:text-base hover:gap-3 transition-all duration-300 group/link`}
                  >
                    <span>{service.linkText}</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gray-100 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA (Optional) */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Need personalized assistance? Our team is ready to help you 24/7
          </p>
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #0d9488;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #0f766e;
        }
      `}</style>
    </section>
  );
};

export default TeamServicesSection;