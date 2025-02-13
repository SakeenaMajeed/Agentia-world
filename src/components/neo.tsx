"use client"

import { motion } from "framer-motion"
import { FaGlobe, FaUserSecret, FaBrain, FaCodeBranch } from "react-icons/fa"
import { useEffect, useState } from "react"

export function AgentiaWorld() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
 
    setIsMounted(true)
  }, [])

  useEffect(() => {
   
    if (!isMounted) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMounted])

  const features = [
    { icon: FaGlobe, title: "Global AI Network", description: "Connect with AI-driven innovations worldwide." },
    { icon: FaUserSecret, title: "Secure AI Agents", description: "Privacy-focused AI ensuring top-notch security." },
    { icon: FaBrain, title: "Neural Intelligence", description: "Next-level AI thinking beyond automation." },
    { icon: FaCodeBranch, title: "Seamless Integration", description: "Integrate AI solutions effortlessly." },
  ]

  // Set a default background if not mounted
  const backgroundStyle = isMounted 
    ? {
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 43, 226, 0.2) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 60%)`,
      }
    : {
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.2) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 60%)',
      }

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-[#0a0a0a] overflow-hidden">
      {/* Dynamic Light Effects */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={backgroundStyle}
      />

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 max-w-4xl px-6 py-12"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
        Neo <span className="text-purple-400">  Agentia </span>
        </h2>
        <p className="text-gray-300 text-lg mt-6">
          The ultimate AI-driven ecosystem redefining the future.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, staggerChildren: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800/40 border border-purple-500/30 rounded-xl shadow-lg backdrop-blur-lg hover:bg-gray-700/50 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 20, 147, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}