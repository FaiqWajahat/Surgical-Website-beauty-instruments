"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";

const FeaturedProducts = () => {
  // Dummy product data
  const products = [
    {
      name: "Straight Operating Scissors",
      description: "Routine tissue cutting surgical scissors.",
      detail:
        "Precision straight operating scissors for routine tissue cutting and dissections, available in sharp/sharp, sharp/blunt, and blunt/blunt tip configurations.",
      sku: "SURG-001",
      imageUrl: "/img04.jpg",
    },
    {
      name: "Surgical Scissors",
      description: "Straight, blunt surgical.",
      detail:
        "High-quality stainless steel surgical scissors with straight, blunt tips and a 60 mm cutting edge—ideal for precise tissue manipulation in surgeries.",
      sku: "SURG-002",
      imageUrl: "/img04.jpg",
    },
    {
      name: "Stitch Surgical Scissors (5″)",
      description: "German stainless steel suture scissors.",
      detail:
        "FDA-approved Spencer stitch scissors made from German stainless steel; designed for clean suture removal in surgical settings.",
      sku: "SURG-003",
      imageUrl: "/img04.jpg",
    },
    {
      name: "Autoclavable Surgical",
      description: "Sharp/blunt stainless ",
      detail:
        "6-inch sharp-point/blunt-point stainless steel surgical scissors, durable and autoclavable for repeated medical use.",
      sku: "SURG-004",
      imageUrl: "/img04.jpg",
    },
    {
      name: "Barber Scissors",
      description: "Ergonomic hair-cutting scissors.",
      detail:
        "Premium salon-grade barber scissors made with sharp stainless steel blades for smooth, precise cuts and ergonomic comfort.",
      sku: "SALN-001",
      imageUrl: "/img04.jpg",
    },
    {
      name: "Facial Steamer",
      description: "Portable salon facial steamer.",
      detail:
        "Professional facial steamer that opens pores, deeply cleanses skin, and enhances facial treatments—ideal for beauty salons and home care.",
      sku: "BEAU-002",
      imageUrl: "/img04.jpg",
    },
    {
      name: "Tweezers Set",
      description: "Precision stainless steel tweezers.",
      detail:
        "Includes multiple tweezers designed for beauty care and medical environments—precise, durable stainless steel construction.",
      sku: "BEAU-003",
      imageUrl: "/img04.jpg",
    },
    {
      name: "Hair Clippers",
      description: "Rechargeable electric hair clippers.",
      detail:
        "High-performance, cordless hair clippers with adjustable cutting lengths—ideal for professional barbers and salon use.",
      sku: "SALN-002",
      imageUrl: "/img04.jpg",
    },
  ];

  const handleAddToQuote = (product) => {
    console.log(`Added ${product.name} to quote`);
  };

  const handleViewDetails = (product) => {
    console.log(`View Details: ${product.name}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-10 py-16">
      {/* Section Header */}
      <SectionHeading
        first={"Featured"}
        second={"Products"}
        paragraph={
          " Explore our premium range of surgical, beauty, and salon equipment designed with precision, durability, and professional care in mind."
        }
      />

      {/* Products Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        grabCursor={true}
        spaceBetween={32}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <motion.div className="bg-white border border-gray-200 rounded-md shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Product Image */}
              <div className="relative h-60 overflow-hidden bg-gray-50">
                <motion.img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.08 }}
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between p-5 flex-1 ">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-700 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto space-y-2">
                  <motion.button
                    onClick={() => handleAddToQuote(product)}
                    className="w-full py-2.5 px-4 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Quote
                  </motion.button>

                  <motion.button
                    onClick={() => handleViewDetails(product)}
                    className="w-full py-2.5 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
