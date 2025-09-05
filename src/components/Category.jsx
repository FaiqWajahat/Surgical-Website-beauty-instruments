'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "General Surgical",
      description: "Comprehensive surgical procedures with state-of-the-art equipment and experienced surgeons.",
    buttonText:"View Products",
      image: "/hero-02.jpeg",
      badge: "Medical"
    },
    {
      id: 2,
      title: "Beauty & Salon",
      description: "Premium beauty treatments and salon services to enhance your natural radiance.",
    buttonText:"View Products",
       image: "/hero-04.jpg",
      badge: "Beauty"
    },
    {
      id: 3,
      title: "Dental",
      description: "Complete dental care with modern technology for your oral health and beautiful smile.",
    buttonText:"View Products",
        image: "/hero-03.jpeg",
      badge: "Healthcare"
    },
    {
      id: 4,
      title: "Custom",
      description: "Tailored solutions designed specifically for your unique needs and requirements.",
    buttonText:"View Products",
      image: "/hero-02.jpeg",
      badge: "Bespoke"
    }
  ];

  const handleCardClick = (category) => {
    console.log(`Clicked on ${category.title}`);
  };

  const handleViewAllClick = () => {
    console.log("View all categories clicked");
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
          <img
            src={category.image}
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  return (
    <div className="lg:px-10 mx-auto px-4 py-12 relative">
      {/* Header Section (unchanged as per request) */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
          {["What", "We","Offer"].map((word, index) => (
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

      {/* View All Button with Motion */}
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <button 
          onClick={handleViewAllClick}
          className="inline-flex items-center bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            View All Categories
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-md opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-100 rounded-md opacity-30"></div>
    </div>
  );
};

export default Category;
