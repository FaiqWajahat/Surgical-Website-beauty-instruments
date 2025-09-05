'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play, ArrowRight } from 'lucide-react'

export default function Hero() {
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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/4488843/4488843-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Precision Instruments for{' '}
          <span className="block text-blue-500">Healthcare & Professionals</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          From <span className="font-semibold text-blue-400">surgical tools</span> used in operating rooms to{' '}
          <span className="font-semibold text-blue-400">barber & beauty essentials</span>, 
          we deliver world-class quality trusted in <span className="font-semibold text-blue-400">150+ countries</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-md shadow-md flex items-center gap-2 transition-all">
            Explore Products <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-md shadow-md transition-all">
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
