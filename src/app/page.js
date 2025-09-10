
import Category from "@/components/Category";

import Contactus from "@/components/Contactus";

import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import Stats from "@/components/Stats";
import StickyWhatsAppButton from "@/components/StickyWhatsappButton";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Category />
      <FeaturedProducts />
      <Stats />
      <Services />
      <Contactus />
      <StickyWhatsAppButton/>
    </>
  );
};

export default page;
