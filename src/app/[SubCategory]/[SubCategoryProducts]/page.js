'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { usePathname } from 'next/navigation'
import { productData } from '@/Assets/AllData'
import { Loader2 } from 'lucide-react'

const SubCategoryProducts = () => {

  const pathName = usePathname();
  const categoryName = pathName.split("/")[1]?.replaceAll("-", " ") || "";
  const subCategoryName = pathName.split("/")[2]?.replaceAll("-", " ") || "";
  const [products, setProducts]=useState([])
  console.log(products)

useEffect(() => {
const filteredProducts = productData.filter(v => v.subcategory.toLowerCase() === subCategoryName.toLowerCase());
setProducts(filteredProducts??[]);

}, [subCategoryName]);
  

  return (
    <div className='min-h-screen'>
           <section className="relative bg-blue-950 text-white py-24 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
         {subCategoryName??""}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Explore our precision-crafted {subCategoryName??""} designed to provide unmatched performance and comfort for healthcare professionals worldwide.
        </motion.p>
      </section>

       {/* Bread Crump */}
        <div className="breadcrumbs text-md max-w-6xl mx-auto px-4 py-4 lg:px-20 bg-gray-100 mt-10 rounded-md">
  <ul >
    <li>Home</li>
    <li>{categoryName??""}</li>
    <li>{subCategoryName??""}</li>
   
  </ul>
  </div>

      {
        products.length===0 ?
        <p className='text-center flex justify-center items-center text-2xl font-semibold'>
          <Loader2 className='animate-spin text-blue-700 h-12 w-12 min-h-screen' />
          </p>:
        <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {
          products.map((v,id)=>{
          return(
            <ProductCard key={id} name={v.name} image={v.image} article={v.Articel} category={v.category}  />
          )
          
          })
        }



      </section>
      }
    </div>
  )
}

export default SubCategoryProducts;