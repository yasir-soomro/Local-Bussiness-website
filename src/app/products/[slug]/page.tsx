"use client";

import { products, Product } from "@/components/data/products";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = params;

  const product: Product | undefined = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Link */}
      <Link href="/products" className="text-teal-600 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        />

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>

          {/* Benefits */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Benefits</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.benefits.map((b, i) => (
                <li key={i} className="transition-all hover:text-teal-600">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Solutions</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.solutions.map((s, i) => (
                <li key={i} className="transition-all hover:text-teal-600">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Contact Us */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Contact Us?</h2>
            <p className="text-gray-600">{product.whyContactUs}</p>
          </div>

          {/* More Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">More Information</h2>
            <p className="text-gray-600">{product.moreInfo}</p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg w-max font-semibold transition-all"
          >
            {product.cta}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
