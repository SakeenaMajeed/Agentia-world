"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GiRobotAntennas, GiClockwork, GiMoneyStack, GiArtificialIntelligence } from "react-icons/gi";
import { useState, useEffect } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const benefitCards = [
    { icon: GiClockwork, title: "Automation", description: "Automate repetitive tasks and improve efficiency." },
    {
      icon: GiRobotAntennas,
      title: "24/7 Assistance",
      description: "Always available AI-powered agents to support your business.",
    },
    {
      icon: GiMoneyStack,
      title: "Cost Reduction",
      description: "Reduce operational costs by utilizing AI-driven solutions.",
    },
    {
      icon: GiArtificialIntelligence,
      title: "Smart Decision Making",
      description: "Leverage AI analytics for data-driven decision making.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center text-center bg-black">
      {/* Dynamic background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(88, 28, 135, 0.15) 0%, rgba(15, 23, 42, 0.05) 40%, transparent 60%)`,
        }}
      />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          initial={{
            x: Math.random() * windowWidth,
            y: Math.random() * windowHeight,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * windowWidth,
            y: Math.random() * windowHeight,
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{ duration: 5 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      ))}

      <div className="relative max-w-6xl px-6 py-16 z-10">
        {/* Powered by text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center space-x-2 mt-12"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-medium">POWERED BY PANAVERSITY</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight text-white mt-6"
        >
          <span>Welcome To </span>
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">
            Agentia World
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-300 mt-6"
        >
          The Future of Modern AI Agents
        </motion.p>

        {/* AI Assistance Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative flex items-center max-w-lg mx-auto mt-10 p-6 bg-gray-900/50 border border-purple-500/30 rounded-2xl shadow-lg backdrop-blur-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-full"
          >
            <GiRobotAntennas className="w-8 h-8 text-white" />
          </motion.div>
          <p className="text-purple-200 ml-6 text-lg font-medium">I can help optimize your workflows with AI</p>
        </motion.div>

        {/* Benefits Card Section */}
        <motion.div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {benefitCards.map((card, index) => (
            <motion.div key={index} className="p-6 bg-gray-900/30 border border-purple-500/20 rounded-xl shadow-lg">
              <card.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-purple-300">{card.title}</h3>
              <p className="text-gray-300 mt-2">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
