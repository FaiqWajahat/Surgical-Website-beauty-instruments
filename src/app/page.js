'use client'
import Category from "@/components/Category";

import Contactus from "@/components/Contactus";

import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import Stats from "@/components/Stats";
import { useRef } from "react";

const Page = () => {

  const ExploreProduts = useRef(null);
  const  GetQuote= useRef(null);

  const HandleExploreProducts = () => {
    if (ExploreProduts.current) {
      ExploreProduts.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    const HandleGetQuote = () => {
    if (GetQuote.current) {
      GetQuote.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Hero handleGetQuote={HandleGetQuote} handleExploreProducts={HandleExploreProducts} />
      <Category  />
      <FeaturedProducts exploreProduts={ExploreProduts}/>
      <Stats />
      <Services />
      <Contactus getQuote={GetQuote} />
     
    </>
  );
};

export default Page;
