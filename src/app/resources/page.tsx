// app/resources/page.tsx
import React from "react";
import Link from "next/link";
import { BookOpen, ClipboardList, Code, HelpCircle } from "lucide-react";

// ------------------------
// Mock Categories
// ------------------------
const categories = [
  {
    title: "Blog",
    description: "Stay up-to-date with our latest news and insights.",
    link: "/resources/blog",
    icon: <BookOpen className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Case Studies",
    description: "See how our platform has helped businesses succeed.",
    link: "/resources/case-studies",
    icon: <ClipboardList className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and API references.",
    link: "/resources/docs",
    icon: <Code className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Help Center",
    description: "Find answers to frequently asked questions.",
    link: "/resources/help",
    icon: <HelpCircle className="w-6 h-6 text-teal-600" />,
  },
];

// ------------------------
// Resources Index Page
// ------------------------
export default function ResourcesIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-0 py-12">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          📚 Resource Center
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our knowledge base, articles, case studies, and documentation to get the most out of Prosperix.
        </p>
      </header>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.link}
            className="group block p-6 border border-gray-200 rounded-2xl hover:border-teal-500 hover:shadow-lg transition duration-300 bg-white"
          >
            <div className="flex items-center mb-4 space-x-3">
              {category.icon}
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                {category.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <span className="inline-block text-teal-600 font-medium group-hover:underline">
              View All &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
