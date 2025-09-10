'use client'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Wrench, BadgeCheck, Truck, Headphones } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function ServicesTimeline() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  })

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: i * 0.3 },
    }),
  }

  const services = [
    {
      step: '01',
      title: 'Custom Solutions',
      subtitle: 'Tailored Engineering',
      description:
        'We work closely with healthcare professionals, dentists, barbers, and beauty experts to create instruments that meet exact specifications. Every product is carefully designed and crafted from premium stainless steel.',
      icon: <Wrench className="h-8 w-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      borderColor: 'border-blue-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      step: '02',
      title: 'Quality Assurance',
      subtitle: 'Certified & Tested',
      description:
        'Each instrument passes through rigorous inspection stages and meets international standards such as ISO 13485, CE Mark, and FDA certifications.',
      icon: <BadgeCheck className="h-8 w-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      borderColor: 'border-blue-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      step: '03',
      title: 'Global Logistics',
      subtitle: 'Worldwide Delivery',
      description:
        'We deliver to over 150 countries with a reliable logistics network, real-time tracking, and guaranteed on-time shipments.',
      icon: <Truck className="h-8 w-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      borderColor: 'border-blue-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      step: '04',
      title: 'Ongoing Support',
      subtitle: 'Lifetime Partnership',
      description:
        'Our clients receive continuous after-sales support, training, and maintenance assistance, ensuring long-term trust and collaboration.',
      icon: <Headphones className="h-8 w-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      borderColor: 'border-blue-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Section Heading */}
      <SectionHeading first={'Our'} second={'Process'} paragraph={
        'A step-by-step approach to delivering precision, quality, and support for every client. From initial consultation to ongoing partnership, our process ensures your needs are met at every stage.'} />
      {/* Timeline */}
      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 h-full">
          <div className="w-1 h-full bg-gray-200 rounded-full"></div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full origin-top"
            initial={{ scaleY: 0 }}
          />
        </div>

        {/* Timeline Items */}
        <div className="relative flex flex-col gap-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                idx % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-md shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 w-full lg:w-5/12"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${service.bgLight} ${service.borderColor} border-2 rounded-md flex items-center justify-center mr-4`}
                  >
                    <span
                      className={`font-black text-lg ${service.textColor}`}
                    >
                      {service.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold ${service.textColor} uppercase tracking-wider`}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </p>
              </motion.div>

              {/* Center Icon */}
              <div className="lg:absolute left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white mx-auto lg:mx-0`}
                >
                  {service.icon}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
