"use client";

import React from "react";
import Link from "next/link";
import { products } from "@/components/data/products";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-teal-600">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="list-disc list-inside text-gray-500 mb-4">
                {product.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <button className="text-white bg-teal-600 px-4 py-2 rounded-md hover:bg-teal-700 transition-all">
                {product.cta}
              </button>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}
