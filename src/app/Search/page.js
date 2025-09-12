"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";
import { useStore } from "@/Store/states";
import { productData } from "@/Assets/AllData";
import ProductCard from "@/components/ProductCard";

export default function SearchPage() {
  const { search } = useStore(); // current search term from store
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (search && search.trim() !== "") {
      const filter = productData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredResults(filter);
    } else {
      setFilteredResults([]); // reset if no search
    }
  }, [search]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero / Title */}
      <section className="relative bg-blue-950 text-white py-20 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Find What You Need
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The search results for&nbsp;
          <span className="font-semibold text-white">
            {search || "..."}
          </span>
          &nbsp;are shown below.
        </motion.p>
      </section>

      {/* Results */}
      <section className="py-16 px-6 lg:px-20">
        <SectionHeading
          first="Search"
          second="Results"
          paragraph={
            search
              ? `Showing results for ${search}`
              : "Use the search bar in the navbar to find products."
          }
        />

        {search && filteredResults.length === 0 ? (
          <p className="text-center text-gray-600 mt-10">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredResults.map((v, id) => (
              <ProductCard
                key={id}
                name={v.name}
                image={v.image}
                article={v.Articel}
                category={v.category}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
