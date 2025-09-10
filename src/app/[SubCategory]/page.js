'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { categorieData } from '@/Assets/AllData'

import SubCategoryCard from '@/components/SubCategoryCard'
import { Loader, Loader2 } from 'lucide-react'



export default function SubCategoryPage() {


  const pathName = usePathname();
 
  const categoryName= pathName.replace("/","").replace("-"," ");

  const [categories, setCategories] = React.useState([]);

useEffect(() => {
const filteredCategory = categorieData.filter(cat => cat.category.toLowerCase() === categoryName.toLowerCase());
setCategories(filteredCategory[0]?.subcategories || []);

}, []);

console.log(categories);
  

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white py-24 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
        {categoryName??""}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Experience the perfect balance of durability and comfort with our premium {categoryName??""}, trusted by professionals across the globe.
        </motion.p>
      </section>
        {/* Bread Crump */}
        <div className="breadcrumbs text-md max-w-6xl mx-auto px-4 py-4 lg:px-20 bg-gray-100 mt-10">
  <ul >
    <li>Home</li>
    <li>{categoryName?? ""}</li>
   
  </ul>
</div>
    <section className="w-full flex flex-wrap justify-center gap-8 bg-white my-20">
      {
        categories.length===0? <p className='text-center text-2xl font-semibold'>
          <Loader2 className='animate-spin text-blue-700 h-12 w-12 min-h-screen' />
        </p>
        :



      
      categories.map((cat) => (
        <SubCategoryCard key={cat.id} title={cat.name} image={cat.Image}  description={cat.description} />
      ))}
    </section>
  
    </div>
  )
}
