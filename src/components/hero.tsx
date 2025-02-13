"use client";

import { motion } from "framer-motion";
import { GiRobotAntennas, GiClockwork, GiMoneyStack, GiArtificialIntelligence } from "react-icons/gi";
import { useState, useEffect } from "react";

export function Hero() {
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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />

      <div className="relative max-w-6xl px-6 py-16 z-10">
        {/* Main Heading */}
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

        {/* Benefits Card Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, staggerChildren: 0.1 }}
        >
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900/30 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <card.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-purple-300">{card.title}</h3>
              <p className="text-gray-300 mt-2">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent text-purple-400 font-semibold rounded-full border-2 border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
