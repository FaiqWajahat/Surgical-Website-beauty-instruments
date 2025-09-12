'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FileText, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { productData } from '@/Assets/AllData'
import { useStore } from '@/Store/states'
import { useRouter } from 'next/navigation'


export default function ProductPage() {
  const [product,setProduct]=useState("")
  const pathName = usePathname();
    const categoryName = pathName.split("/")[1]?.replaceAll("-", " ") || "";
    const name = pathName.split("/")[2]?.replaceAll("-", " ") || "";
    const article=pathName.split("/")[3] ||""

    useEffect(()=>{
      const filteredProduct=productData.filter((v)=>v.Articel===article)
      setProduct(filteredProduct[0])
    },[article])
  

  const {setArticle}=useStore()
    const router = useRouter();

    const  handleAddToQuote=()=>{
      setArticle(article)
      router.push("/GetQuote")
      window.scrollTo(0,0)
    }
  return (
     <div className='min-h-screen'>
           <section className="relative bg-blue-950 text-white py-24 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
        {name}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
           Our precision-crafted {name} designed to provide unmatched performance and comfort for healthcare professionals worldwide.
        </motion.p>
      </section>

       {/* Bread Crump */}
        <div className="breadcrumbs text-md max-w-6xl mx-auto px-4 py-4 lg:px-20 bg-gray-100 mt-10 rounded-md">
  <ul >
    <li>Home</li>
   
    <li>{categoryName}</li>
     <li>{name}</li>
    <li>{article}</li>
   
  </ul>
  </div>
    <div className="py-16 ">

      {
        product===""?
         <p className='text-center flex justify-center items-center text-2xl font-semibold'>
          <Loader2 className='animate-spin text-blue-700 h-12 w-12 min-h-screen' />
          </p>
        :
        <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Product Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/4] rounded-md overflow-hidden shadow-sm  group">
              <Image
                src={product.image}
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

            {/* Article */}
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Articel:</span> {product.Articel}
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
      }
    </div>
    </div>
  )
}
