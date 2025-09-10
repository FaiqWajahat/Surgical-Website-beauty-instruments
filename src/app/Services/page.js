'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Wrench, Settings } from 'lucide-react'
import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'
import labeling from '@/Assets/Images/labeling.jpg'
import manufacturing from '@/Assets/Images/manufacturing.jpg'
import delivery from '@/Assets/Images/delivery.jpg'


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 mt-20">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white py-24 px-6 lg:px-20 text-center overflow-hidden">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
         What We Offer
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Delivering premium solutions across surgical, dental, and beauty industries, tailored to
          meet the needs of professionals worldwide.
        </motion.p>
      </section>

      {/* Intro Paragraphs */}
      <section className="py-16 px-6 lg:px-20 max-w-6xl mx-auto text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          At our core, we are driven by a passion for innovation and excellence. Over the years, we
          have specialized in producing world-class instruments that support healthcare providers,
          beauty experts, and dental professionals across the globe. Every tool we manufacture is
          designed to make a difference in the hands of skilled professionals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          Our services go beyond manufacturing—we provide tailored solutions, reliable global
          distribution, and continuous innovation to meet the ever-evolving needs of our clients.
          Whether it’s precision surgical instruments, advanced dental tools, or salon essentials,
          we aim to deliver products that inspire confidence and enhance performance.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-20">
        <SectionHeading
          first="Our"
          second='Services'
          paragraph="Comprehensive solutions designed to empower professionals worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
        
            {
              icon: <Wrench className="w-12 h-12 text-blue-600 mx-auto" />,
              title: 'Custom Manufacturing',
              desc: 'Tailor-made solutions built to meet unique client requirements, from modifications to new designs.',
              image:manufacturing,
            },
            {
              icon: <Settings className="w-12 h-12 text-blue-600 mx-auto" />,
              title: 'OEM & Private Label',
              desc: 'We offer private labeling and OEM solutions, helping businesses grow with branded instruments.',
              image: labeling,
            },
            {
              icon: <Globe className="w-12 h-12 text-blue-600 mx-auto" />,
              title: 'Global Distribution',
              desc: 'Our worldwide network ensures timely delivery and support for professionals across 150+ countries.',
              image: delivery,
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                {service.icon}
                <h3 className="text-xl font-semibold text-center mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Why Choose <span className='text-blue-700'>Us ?</span></h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            With decades of experience and a commitment to excellence, we are more than just a
            manufacturer—we are a trusted partner for professionals worldwide. From product design
            to after-sales support, we focus on delivering value that lasts.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            By choosing us, you gain access to a dedicated team, global distribution networks, and
            solutions that adapt to your unique requirements. Your success is our ultimate mission.
          </p>
        </div>
      </section>
    </div>
  )
}
