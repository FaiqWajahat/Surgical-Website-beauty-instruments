'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play, ArrowRight } from 'lucide-react'

export default function Hero({handleGetQuote ,handleExploreProducts }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative max-h-screen py-16 px-8 w-full flex items-center lg:h-screen   justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.create.vista.com/api/media/medium/101069624/stock-video-surgical-nurse-puts-medical-surgery-tools-on-table?token.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-950/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
  className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Premium Instruments for{" "}
  <span className="block text-blue-500">Beauty & Care</span>
</motion.h1>

<motion.p
  className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  From{" "}
  <span className="font-semibold text-blue-400">beauty instruments</span> trusted by professionals to{" "}
  <span className="font-semibold text-blue-400">scissors, tweezers, and razors</span> for everyday precision,  
  we craft high-quality tools exported to{" "}
  <span className="font-semibold text-blue-400">150+ countries worldwide</span>.
</motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button  onClick={handleExploreProducts}
           className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-4 text-lg font-semibold rounded-md shadow-md flex items-center gap-2 transition-all">
            Featured Products <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={handleGetQuote}
           className="border-2 border-white text-white cursor-pointer hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-md shadow-md transition-all">
            Request a Quote
          </button>
        </motion.div>
      </div>

      {/* Video Controls */}
      <motion.button
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur rounded-md text-white flex items-center justify-center transition-colors z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </motion.button>
    </div>
  )
}
