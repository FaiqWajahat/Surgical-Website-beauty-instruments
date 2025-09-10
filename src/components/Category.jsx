'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import category01 from '@/Assets/Images/category-01.jpg'
import category02 from '@/Assets/Images/category-02.jpeg'
import category03 from '@/Assets/Images/category-03.jpg'
import category04 from "../Assets/Images/category-04.jpg"

const Category = () => {
  const router = useRouter();
  const categories = 
    [
  {
    id: 1,
    title: "Surgical Instruments",
    description: "Comprehensive range of scalpels, forceps, scissors, retractors, and other precision surgical tools.",
    buttonText: "View Products",
    image: category01,
    badge: "Surgical",
    href: "/Surgical-Instruments"
  },
  {
    id: 2,
    title: "Scissors",
    description: "High-quality surgical and beauty scissors designed for accuracy, durability, and effortless cutting.",
    buttonText: "View Products",
    image: category02,
    badge: "Scissors",
    href: "/Scissors"
  },
  {
    id: 3,
    title: "Tweezers",
    description: "Premium tweezers for surgical, dental, and beauty applications, crafted with precision and comfort in mind.",
    buttonText: "View Products",
    image: category03,
    badge: "Tweezers",
    href: "/Tweezers"
  },
  {
    id: 4,
    title: "Razors",
    description: "Professional razors and blades engineered for clean, sharp, and reliable performance.",
    buttonText: "View Products",
    image: category04,
    badge: "Razors",
    href: "/Razors"
  }
];


  const handleCardClick = (category) => {
    router.push(category.href);
  };



  // Card Component
  const CategoryCard = ({ category }) => (
    <motion.div
  
      variants={cardVariants}
      className="flex justify-center"
    >
      <div className="card card-side bg-white shadow-lg hover:shadow-2xl transition-all duration-300 
                      w-full h-56 rounded-md overflow-hidden group border border-gray-100 relative">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white opacity-60"></div>
        
        {/* Content Side */}
        <div className="card-body w-[65%] flex flex-col justify-center p-5 relative z-10">
          <div className="inline-flex items-center mb-2">
            <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded-md">
              {category.badge}
            </span>
          </div>

          <h2 className="card-title text-slate-800 text-3xl font-bold mb-1 leading-tight group-hover:text-blue-800 transition-colors duration-300">
            {category.title}
          </h2>

          <p className="text-slate-600 text-md leading-snug mb-3 line-clamp-2">
            {category.description}
          </p>

          <div className="card-actions mt-auto">
            <button
              className="btn bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md hover:shadow-lg 
                         transform hover:-translate-y-0.5 transition-all duration-200 rounded-md font-medium text-md
                         px-4 py-2 group relative overflow-hidden"
              onClick={() => handleCardClick(category)}
            >
              <span className="relative z-10 flex items-center">
                {category.buttonText}
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            </button>
          </div>
        </div>

        {/* Image Side */}
        <figure className="w-[40%] h-full relative overflow-hidden">
          <Image
            src={category.image}
            fill
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </figure>

        {/* Side Accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-2 duration-300 animation-all bg-gradient-to-b from-blue-600 to-blue-700 opacity-80"></div>
      </div>
    </motion.div>
  );

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };



  return (
    <div className="md:px-16  mx-auto px-4 py-12 relative">
      {/* Header Section */}
      <SectionHeading first={"Produt"} second={"Categories"} paragraph={
        "Discover our diverse product categories, each designed to meet the highest standards of quality and precision for medical and beauty professionals."
      }/>
      {/* Categories Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </motion.div>

      
      
    </div>
  );
};

export default Category;
