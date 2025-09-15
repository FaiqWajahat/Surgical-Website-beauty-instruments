'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Layers, FolderTree, Package } from 'lucide-react'

export default function AdminStats({ category, subCategory, products}) {
  const stats = [
    {
      title: 'Total Categories',
      value: category,
      icon: <Layers className="w-7 h-7 text-blue-700" />,
      color: 'bg-white',
    },
    {
      title: 'Total Subcategories',
      value: subCategory,
      icon: <FolderTree className="w-7 h-7 text-blue-700" />,
      color: 'bg-white',
    },
    {
      title: 'Total Products',
      value: products,
      icon: <Package className="w-7 h-7 text-blue-700" />,
      color: 'bg-white',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className=" rounded-lg shadow-md border border-gray-100  bg-blue-700
                     hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6"
        >
          <div className="flex items-center gap-5">
            {/* Icon circle */}
            <div className={`p-4 rounded-md ${stat.color} shadow-md`}>
              {stat.icon}
            </div>
            {/* Text */}
            <div>
              <p className="text-md font-medium text-white uppercase tracking-wide">
                {stat.title}
              </p>
              <p className="text-3xl font-bold text-white">
                <CountUp end={stat.value} duration={2} separator="," />
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
