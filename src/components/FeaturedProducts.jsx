"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { productData } from "@/Assets/AllData";

const FeaturedProducts = ({ exploreProduts }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Shuffle productData and pick 12 items
    const shuffled = [...productData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 12);
    setProduct(selected);
  }, []); // ✅ run only once

  return (
    <div ref={exploreProduts} className="max-w-6xl mx-auto px-10 py-16">
      {/* Section Header */}
      <SectionHeading
        first={"Featured"}
        second={"Products"}
        paragraph={
          "Explore our premium range of surgical, beauty, and salon equipment designed with precision, durability, and professional care in mind."
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
        {product.map((v, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              image={v.image}
              name={v.name}
              article={v.Articel} 
              category={v.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
