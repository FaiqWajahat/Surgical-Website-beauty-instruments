'use client'
import React from 'react'
import Image from 'next/image'
import { FileText } from 'lucide-react'
import { motion } from 'framer-motion'
const product = {
  id: 1,
  name: "Premium Surgical Scissor",
  description:
    "High-quality stainless steel surgical scissor designed for precision and durability. Ergonomic grip ensures comfort during long procedures.",
  sku: "SC-2025-XL",
  category: "Surgical Instruments",
  image: "/product-01.jpg", 
}

export default function ProductPage() {
  const handleAddToQuote = () => {
    const quoteItem = {
      productId: product.id,
      name: product.name,
      sku: product.sku,
      category: product.category,
    }
    console.log("Added to Quote:", quoteItem)
    alert(`Product (SKU: ${product.sku}) added to your quote request!`)
  }

  return (
     <div className='min-h-screen'>
           <section className="relative bg-blue-950 text-white py-24 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
        Scissors
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Explore our precision-crafted Scissors designed to provide unmatched performance and comfort for healthcare professionals worldwide.
        </motion.p>
      </section>

       {/* Bread Crump */}
        <div className="breadcrumbs text-md max-w-6xl mx-auto px-4 py-4 lg:px-20 bg-gray-100 mt-10 rounded-md">
  <ul >
    <li>Home</li>
    <li>Home</li>
    <li>Scissors</li>
     <li>Titanium</li>
    <li>SCi-101</li>
   
  </ul>
  </div>
    <div className="py-16 ">

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Product Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/4] rounded-md overflow-hidden shadow-sm  group">
              <Image
                src={"https://www.brandingobeauty.com/pictures/220428615_1379_pic_3.jpg"}
                alt={product.name}
               fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            {/* Product Name + underline */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 leading-snug">
                {product.name}
              </h1>
              <div className="w-32 h-1 bg-blue-700 mt-3 rounded-full"></div>
            </div>

            {/* SKU */}
            <p className="text-lg text-gray-700">
              <span className="font-semibold">SKU:</span> {product.sku}
            </p>

            {/* Category */}
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Category:</span> {product.category}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Add to Quote Button */}
            <button
              onClick={handleAddToQuote}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 transition-transform hover:scale-105 cursor-pointer"
            >
              <FileText size={20} />
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
