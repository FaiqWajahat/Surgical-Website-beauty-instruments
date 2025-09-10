import React from 'react'
import { motion } from 'framer-motion'
import{ useRouter } from 'next/navigation'
const ProductCard = () => {
  const router = useRouter();
  return (
    <>
        <motion.div
      
      className="bg-white border border-gray-200 rounded-md shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
    >
      {/* Product Image with Badge */}
      <div className="relative h-60 overflow-hidden bg-gray-50">
        <motion.img
          src={"https://www.brandingobeauty.com/pictures/220428615_1379_pic_3.jpg"}
          alt={""}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
          
          onError={(e) => (e.currentTarget.src = "/fallback.png")}
        />

        {/* Badge */}
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
          SCI-104
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between p-5 flex-1">
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-2">
            Lorem, ipsum dolor.
          </h3>
          <p className="text-sm text-slate-600 mb-3"><span>Category</span> Surgial</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto space-y-2">
          <motion.button
            onClick={() => handleAddToQuote(product)}
            className="w-full py-2.5 px-4 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-sm cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            Add to Quote
          </motion.button>

          <motion.button
            onClick={() => router.push('/Surgical/Scissors/SCI-104')}
            className="w-full py-2.5 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default ProductCard