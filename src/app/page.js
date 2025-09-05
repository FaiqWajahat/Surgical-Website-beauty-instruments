import About from '@/components/About'
import Category from '@/components/Category'
import ProductCategories from '@/components/Category'
import Contactus from '@/components/Contactus'

import FeaturedProducts from '@/components/FeaturedProducts'
import Hero from '@/components/Hero'
import Services from '@/components/services'
import Stats from '@/components/Stats'
import React from 'react'

const page = () => {
  return (
    <>
<Hero/>


<About/>


<Category/>
<FeaturedProducts/>
<Stats/>
<Services/>
<Contactus/>
</>
  )
}

export default page