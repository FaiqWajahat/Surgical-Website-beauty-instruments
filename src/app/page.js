'use client'
import Category from "@/components/Category";

import Contactus from "@/components/Contactus";

import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import Stats from "@/components/Stats";
import { useEffect, useRef } from "react";
import { useStore } from "@/Store/states";



const Page = () => {

  const { getProduct, productData}=useStore()
  const ExploreProduts = useRef(null);
  const  GetQuote= useRef(null);
 const getData=async()=>{
await getProduct()
 }

  useEffect(()=>{
  if(productData.length===0)
  {
     getData()
  }
},[])
console.log(productData)

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
