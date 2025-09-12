'use client'
import Category from "@/components/Category";

import Contactus from "@/components/Contactus";

import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import Stats from "@/components/Stats";
import { useRef } from "react";

const page = () => {

  const exploreProduts = useRef(null);
  const  getQuote= useRef(null);

  const handleExploreProducts = () => {
    if (exploreProduts.current) {
      exploreProduts.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    const handleGetQuote = () => {
    if (getQuote.current) {
      getQuote.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Hero handleGetQuote={handleGetQuote} handleExploreProducts={handleExploreProducts} />
      <Category  />
      <FeaturedProducts exploreProduts={exploreProduts}/>
      <Stats />
      <Services />
      <Contactus getQuote={getQuote} />
     
    </>
  );
};

export default page;
