// app/resources/[category]/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// --- Mock Data (Replace with real data fetching in a production app) ---
const MOCK_RESOURCES = [
  { category: "blog", slug: "boosting-conversion", title: "10 Ways to Boost Your SaaS Conversion Rate", content: "Details on boosting conversion...", date: "October 25, 2025" },
  { category: "blog", slug: "nextjs-tips", title: "Advanced Next.js Tips & Tricks", content: "Details about Next.js features...", date: "November 1, 2025" },
];

// --- Data Fetching (Simulated) ---
const getData = ({ category, slug }: { category: string; slug: string }) =>
  MOCK_RESOURCES.find((r) => r.category === category && r.slug === slug);

// --- 1. Static Site Generation (SSG) ---
// Tells Next.js which paths to pre-render at build time.
export async function generateStaticParams() {
  return MOCK_RESOURCES.map((r) => ({
    category: r.category,
    slug: r.slug,
  }));
}

// --- 2. Dynamic Metadata Generation ---
// Creates unique <title> and other head tags for each resource page.
export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const { category, slug } = params;
  const resource = getData({ category, slug });

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.title,
    description: resource.content.substring(0, 150) + "...", // Use a snippet of the content
    openGraph: {
      title: resource.title,
      description: resource.content.substring(0, 150) + "...",
      url: `/resources/${category}/${slug}`,
      type: "article",
    },
  };
}

// --- 3. Page component (Server Component) ---
export default function DynamicResourcePage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;
  const resource = getData({ category, slug });

  if (!resource) notFound();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="mb-4 text-sm text-blue-600 font-medium uppercase">
        {category}
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {resource.title}
      </h1>
      <p className="text-md text-gray-500 mb-6 border-b pb-4">
        Published on: **{resource.date}**
      </p>
      {/* Resource Content Placeholder */}
      <div className="prose lg:prose-lg text-gray-700">
        <p className="text-lg leading-relaxed">{resource.content}</p>
        <p className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md italic">
            This is where the full, detailed content of the resource would be rendered.
        </p>
      </div>
    </div>
  );
}