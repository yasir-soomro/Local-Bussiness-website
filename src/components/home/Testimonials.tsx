"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeCard, setActiveCard] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: 'Grace Turner',
      role: 'Director',
      image: '/home/carter.png',
      testimonial: 'Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community',
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      quoteColor: 'text-teal-600',
      avatarBg: 'bg-gradient-to-br from-pink-400 to-red-400'
    },
    {
      id: 2,
      name: 'Linda Carter',
      role: 'Analyst',
      image: '/home/lina.jpg',
      testimonial: "Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.",
      bgColor: 'bg-teal-700',
      textColor: 'text-white',
      quoteColor: 'text-white',
      featured: true,
      avatarBg: 'bg-gradient-to-br from-orange-400 to-pink-400'
    },
    {
      id: 3,
      name: 'Alex Walker',
      role: 'Attorney',
      image: '/home/walker.webp',
      testimonial: "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure",
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      quoteColor: 'text-teal-600',
      avatarBg: 'bg-gradient-to-br from-blue-400 to-cyan-400'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="text-teal-600 font-semibold text-sm sm:text-base tracking-wide uppercase">
              Testimonials
            </span>
            <div className="h-0.5 w-12 sm:w-16 bg-teal-600"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            What Our Customers Say
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl ${
                testimonial.featured 
                  ? 'transform lg:scale-105 lg:-translate-y-4' 
                  : 'hover:-translate-y-2'
              } ${testimonial.bgColor}`}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                opacity: activeCard === index ? 1 : 0.95
              }}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Card Content */}
              <div className="p-6 sm:p-8 h-full flex flex-col">
                
                {/* Header with Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ${
                      testimonial.featured ? 'ring-4 ring-white' : 'ring-4 ring-teal-500'
                    } shadow-lg`}>
                      <div className="relative w-full h-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 56px, 64px"
                          onError={(e) => {
                            // Fallback to gradient if image fails to load
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.classList.add(testimonial.avatarBg);
                            }
                          }}
                        />
                      </div>
                    </div>
                    {/* Online indicator */}
                    <div className={`absolute bottom-0 right-0 w-4 h-4 ${
                      testimonial.featured ? 'bg-green-400' : 'bg-teal-500'
                    } border-2 border-white rounded-full animate-pulse`}></div>
                  </div>

                  {/* Name and Role */}
                  <div className="flex-1">
                    <h3 className={`font-bold text-base sm:text-lg ${
                      testimonial.featured ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h3>
                    <p className={`text-sm ${
                      testimonial.featured ? 'text-teal-100' : 'text-gray-500'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow">
                  <p className={`text-sm sm:text-base leading-relaxed ${testimonial.textColor} mb-6`}>
                    {testimonial.testimonial}
                  </p>
                </div>

                {/* Quote Icon */}
                <div className="flex justify-end">
                  <div className={`${
                    testimonial.featured ? 'bg-teal-800' : 'bg-teal-50'
                  } p-3 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md`}>
                    <Quote className={`w-6 h-6 sm:w-8 sm:h-8 ${testimonial.quoteColor} fill-current`} />
                  </div>
                </div>
              </div>

              {/* Decorative elements for featured card */}
              {testimonial.featured && (
                <>
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-teal-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-cyan-400 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`transition-all duration-300 rounded-full ${
                activeCard === index 
                  ? 'w-8 h-3 bg-teal-600' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current drop-shadow-sm" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">4.9/5.0</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">Average Rating</p>
          </div>

          <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">500+</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">Happy Clients</p>
          </div>

          <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">98%</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;