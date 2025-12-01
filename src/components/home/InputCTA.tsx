"use client"

import React from 'react';
import Image from 'next/image';

interface Brand {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const brands: Brand[] = [
  {
    name: 'Walmart',
    logo: '/brands/walmart.png',
    width: 140,
    height: 40,
  },
  {
    name: 'FedEx',
    logo: '/brands/fedex.png',
    width: 120,
    height: 40,
  },
  {
    name: 'Amazon',
    logo: '/brands/amazon.png',
    width: 120,
    height: 40,
  },
  {
    name: 'Stripe',
    logo: '/brands/stripe.png',
    width: 100,
    height: 40,
  },
  {
    name: 'Airbnb',
    logo: '/brands/airbnb.png',
    width: 120,
    height: 40,
  },
  {
    name: 'Ripple',
    logo: '/brands/ripple.png',
    width: 120,
    height: 40,
  },
];

export const TrustedBrands: React.FC = () => {
  return (
    <section className="w-full bg-white  pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of organizations that trust our solutions
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group flex items-center justify-center w-full h-16 sm:h-20 lg:h-24 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Animated Scroll Version */}
        <div className="mt-12 sm:mt-16 lg:mt-20 overflow-hidden">
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling Container */}
            <div className="flex gap-8 sm:gap-12 lg:gap-16 animate-scroll">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 h-16 sm:h-20"
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className="object-contain opacity-60 filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBrands;