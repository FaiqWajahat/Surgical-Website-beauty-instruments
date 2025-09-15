import React from 'react'

const ProductSkeleton = () => {
  return (
   <>
   <div className="bg-white border border-gray-200 rounded-md shadow-md overflow-hidden flex flex-col h-full animate-pulse">
    {/* Image Placeholder */}
    <div className="relative h-60 bg-gray-200"></div>

    {/* Content */}
    <div className="flex flex-col justify-between p-5 flex-1">
      <div>
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="mt-auto space-y-2">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
   </>
  )
}

export default ProductSkeleton