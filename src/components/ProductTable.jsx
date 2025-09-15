'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Trash2, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/Store/states'

export default function ProductTable({
 
  products=[] ,
  

  itemsPerPage = 6,
}) {
  const [currentPage, setCurrentPage] = useState(1)
 const router=useRouter()
  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, products.length)
  const currentItems = products.slice(startIndex, endIndex)
   const {deleteProduct}=useStore()

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
  }
  
  const onDelete=async (productId)=>{
 
 
    if(productId)
    {
      await deleteProduct(productId)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-18 rounded-md shadow-xl border border-blue-100 bg-white/90 backdrop-blur-md overflow-hidden"
    >
      {/* Header with Add Button */}
      <div className="flex items-center justify-between bg-blue-700 px-6 py-4">
        <h2 className="lg:text-2xl text-lg font-semibold text-white tracking-wide">Products</h2>
        <button onClick={()=>router.push("/admin/AddProduct")}
         
          className="flex items-center gap-2 bg-white text-blue-700 font-medium px-4 py-2 rounded-md shadow hover:bg-slate-100 cursor-pointer active:scale-95 transition"
        >
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50/80 text-blue-700 uppercase text-sm tracking-wide">
              <th className="px-6 py-3">No</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">SubCategory</th>
              <th className="px-6 py-3">SKU</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-blue-50 transition-colors border-b border-gray-100"
                >
                  {/* No */}
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                    {startIndex + index + 1}
                  </td>

                  {/* Image */}
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 relative rounded-md overflow-hidden border border-gray-200 shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {product.name}
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>

                  {/* SubCategory */}
                  <td className="px-6 py-4 text-gray-600">{product.subcategory}</td>

                  {/* SKU */}
                  <td className="px-6 py-4 text-gray-600">{product.article}</td>

                  {/* Action */}
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onDelete(product._id)}
                      className="p-2 cursor-pointer rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition active:scale-95"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-8 text-center text-gray-500 text-sm italic"
                >
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border text-sm font-medium ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed border-gray-200'
                : 'text-blue-600 border-blue-200 hover:bg-blue-50'
            }`}
          >
            Previous
          </button>

          {/* Showing X to Y of Z */}
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
            <span className="font-medium">{endIndex}</span> of{' '}
            <span className="font-medium">{products.length}</span> products
          </p>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border text-sm font-medium ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed border-gray-200'
                : 'text-blue-600 border-blue-200 hover:bg-blue-50'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </motion.div>
  )
}
