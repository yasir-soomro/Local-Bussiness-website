"use client";

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; 

// --- 1. MOCK DATA ---
const MOCK_RESOURCES = [
  { category: "blog", slug: "boosting-conversion", title: "10 Ways to Boost Your SaaS Conversion Rate", date: "October 25, 2025" },
  { category: "blog", slug: "nextjs-tips", title: "Advanced Next.js Tips for Better Performance", date: "November 1, 2025" },
  { category: "case-studies", slug: "acme-corp", title: "Acme Corp Achieves 300% ROI with Prosperix", date: "September 1, 2025" },
  { category: "docs", slug: "api-setup", title: "Getting Started with the Prosperix API", date: "Jan 1, 2024" },
  { category: "blog", slug: "future-trends", title: "The Future of AI in Web Development", date: "December 1, 2025" },
  { category: "case-studies", slug: "globex", title: "Globex Doubles User Retention with Our Platform", date: "October 15, 2025" },
];

// --- 2. UTILITY FUNCTIONS ---
const getResourcesByCategory = (category: string) => {
  return MOCK_RESOURCES.filter((r) => r.category === category);
};

// Function to convert category slug (e.g., 'case-studies') to a display title
const getCategoryTitle = (category: string) => {
  switch (category) {
    case "blog": return "Blog";
    case "case-studies": return "Case Studies";
    case "docs": return "Documentation";
    default: return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
};

// --- 3. ANIMATION VARIANTS (Framer Motion) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the appearance of each resource card
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// --- 4. MAIN COMPONENT ---
export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const resources = getResourcesByCategory(category);

  // If the category is invalid or has no resources, trigger the Next.js 404 page
  if (!resources || resources.length === 0) notFound();

  const categoryTitle = getCategoryTitle(category);

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      // Initial page-level fade-in and slight slide-up animation
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <header className="mb-10">
        {/* Breadcrumb Navigation for clarity */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <Link href="/resources" className="hover:text-blue-600 transition">
            Resources
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-600 font-medium">{categoryTitle}</span>
        </nav>

        {/* Header Content */}
        <h1 className="text-5xl font-extrabold text-gray-900">
          {categoryTitle} Insights
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Explore all our curated resources, from detailed guides to industry analysis.
        </p>
      </header>

      {/* Resource List with Staggered Animations */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {resources.map((res) => (
          <motion.div 
            key={res.slug} 
            variants={itemVariants}
          >
            <Link
              href={`/resources/${res.category}/${res.slug}`}
              // Enhanced styling and hover effects
              className="group block h-full p-6 border border-gray-200 rounded-xl transition-all duration-300 shadow-sm hover:shadow-2xl hover:border-blue-500 bg-white"
            >
              <span className="text-xs font-semibold uppercase text-blue-600">
                {getCategoryTitle(res.category)}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {res.title}
              </h2>
              <div className="flex items-center justify-between pt-2 border-t border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">{res.date}</p>
                {/* Animated arrow icon */}
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}