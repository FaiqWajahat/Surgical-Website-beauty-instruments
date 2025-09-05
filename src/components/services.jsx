'use client'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Wrench, BadgeCheck, Truck, Headphones } from 'lucide-react'

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
        'We collaborate closely with healthcare professionals, dentists, barbers, and beauty experts to design instruments that match exact specifications. Every product is meticulously engineered using premium-grade stainless steel.',
      icon: <Wrench className="h-8 w-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      borderColor: 'border-blue-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      step: '02',
      title: 'Quality Assurance',
      subtitle: 'Rigorous Testing Standards',
      description:
        'Each instrument undergoes comprehensive multi-stage inspection protocols, maintaining certifications like ISO 13485, CE Mark, and FDA approvals.',
      icon: <BadgeCheck className="h-8 w-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      borderColor: 'border-blue-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      step: '03',
      title: 'Global Logistics',
      subtitle: 'Worldwide Delivery Network',
      description:
        'Our logistics infrastructure ensures secure delivery to over 150 countries, with real-time tracking and guaranteed punctuality.',
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
        'We provide after-sales training, maintenance protocols, and rapid response support, building long-term trust with our clients.',
      icon: <Headphones className="h-8 w-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      borderColor: 'border-blue-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
    

     <motion.div
             className="text-center mb-16"
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
           >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
               {["Explore", "Our","Process"].map((word, index) => (
                 <motion.span
                   key={word}
                   initial={{ y: 100, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ 
                     duration: 0.8, 
                     delay: 0.4 + index * 0.1,
                     ease: [0.25, 0.46, 0.45, 0.94]
                   }}
                   viewport={{ once: true }}
                   className="inline-block mr-4 bg-black bg-clip-text text-transparent"
                 >
                   {word}
                 </motion.span>
               ))}
             </h1>
     
             <motion.div
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
               className="h-1 w-48 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg origin-center mb-6"
             />
     
             <motion.p
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 1 }}
               viewport={{ once: true }}
               className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
             >
               We are a collective of dreamers, builders, and innovators, united by a passion for transforming ideas into reality.
             </motion.p>
           </motion.div>
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
              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-whiterounded-md shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 w-full lg:w-5/12"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${service.bgLight} ${service.borderColor} border-2rounded-md flex items-center justify-center mr-4`}
                  >
                    <span className={`font-black text-lg ${service.textColor}`}>{service.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p
                      className={`text-sm font-semibold ${service.textColor} uppercase tracking-wider`}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
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
