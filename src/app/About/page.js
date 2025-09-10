'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Globe, Wrench } from 'lucide-react'
import aboutus02 from '@/Assets/Images/aboutus-02.jpg'
import aboutus01 from '@/Assets/Images/aboutus-01.jpg'
import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 ">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white py-24 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Who We Are
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Delivering precision-crafted surgical, dental, and beauty instruments trusted by
          professionals worldwide. We are more than a manufacturer—we are partners in advancing healthcare, grooming, and innovation.
        </motion.p>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 lg:px-20">
        <SectionHeading
          first={"About"} second={"Us"}
          paragraph="A trusted name in the global healthcare and beauty industry, blending tradition, craftsmanship, and modern innovation."
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-4">
              Our journey began with a small team of passionate artisans dedicated to creating precision instruments. Over the years, we’ve grown into an internationally recognized brand, supplying surgical, dental, and beauty tools to professionals across the globe.  
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We believe in excellence through attention to detail. Every instrument undergoes rigorous quality control and is designed to enhance performance, safety, and comfort. This commitment has earned us the loyalty of doctors, dentists, barbers, and stylists who rely on our products daily.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we proudly combine heritage craftsmanship with modern engineering, ensuring that our instruments meet the highest international standards while adapting to the evolving needs of professionals.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg"
          >
            <Image src={aboutus01} alt="Our Story" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <SectionHeading
          first="Our" second="Mission & Vision"
          paragraph="Guided by purpose, driven by innovation."
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg"
          >
            <Image src={aboutus02} alt="Our Mission" fill className="object-cover" />
          </motion.div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h3>
            <p className="text-lg leading-relaxed mb-6">
              To empower professionals worldwide by delivering instruments that combine precision, reliability, and innovation. We are committed to enabling doctors, dentists, and stylists to perform at their best, improving outcomes and enhancing everyday lives.
            </p>
            <h3 className="text-3xl font-bold mb-4 text-blue-700">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the world’s most trusted name in surgical, dental, and beauty instruments—known not only for exceptional quality but also for sustainable practices, continuous innovation, and personalized solutions for our clients’ unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 lg:px-20">
        <SectionHeading
          first="Our"
          second="Values"
          paragraph="The principles that guide us in every step of our journey."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <Award className="w-10 h-10 mx-auto text-blue-600" />,
              title: 'Quality',
              desc: 'Every product undergoes rigorous testing to ensure it meets international standards of precision and durability.',
            },
            {
              icon: <Globe className="w-10 h-10 mx-auto text-blue-600" />,
              title: 'Global Reach',
              desc: 'We proudly serve clients in over 150 countries, adapting to diverse markets and professional needs worldwide.',
            },
            {
              icon: <Wrench className="w-10 h-10 mx-auto text-blue-600" />,
              title: 'Innovation',
              desc: 'From customized instruments to advanced designs, we constantly innovate to meet evolving industry demands.',
            },
            {
              icon: <Users className="w-10 h-10 mx-auto text-blue-600" />,
              title: 'Expert Team',
              desc: 'Our team of skilled engineers, craftsmen, and researchers bring unmatched expertise to every instrument.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-center mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
