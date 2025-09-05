'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
   const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  return (
    <section className="relative py-20 px-6 lg:px-10 ">
         <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            {["Who", "We","Are"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="inline-block mr-4 bg-black bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 w-48 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md shadow-lg origin-center mb-6"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          >
           We are a collective of dreamers, builders, and innovators, united by a passion for transforming ideas into reality.
          </motion.p>
        </motion.div>
        
  
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-full h-[350px] rounded-md overflow-hidden shadow-2xl">
            <Image
              src="/about.jpg" 
              alt="About us"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
         
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
  With years of expertise in the surgical instruments industry, we specialize in
  manufacturing and supplying premium-quality instruments that meet
  international standards. Every product is crafted with precision, durability,
  and safety in mind, ensuring that healthcare professionals can perform with
  confidence and accuracy.
</p>

<p className="text-lg text-gray-600 leading-relaxed mb-8">
  Our commitment goes beyond production — we continuously invest in advanced
  technology, rigorous quality control, and innovative designs to deliver
  
</p>

       <motion.div
               variants={buttonVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className=""
             >
               <button 
                
                 className="inline-flex items-center bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
               >
                 <span className="relative z-10 flex items-center">
                   Read More
                   <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </button>
             </motion.div>
       
        </motion.div>
      </div>
    </section>
  )
}

export default About
