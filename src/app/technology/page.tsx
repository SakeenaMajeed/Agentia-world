"use client";

import { FaDocker, FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { motion } from "framer-motion";

export default function Technologies() {
  const technologies = [
    { icon: FaDocker, title: "Docker", description: "Containerized deployment for seamless scalability." },
    { icon: SiFastapi, title: "FastAPI", description: "High-performance backend with asynchronous capabilities." },
    { icon: FaPython, title: "Python", description: "Powerful scripting and AI-driven solutions." },
  ];

  return (
    <div
      id="technology"
      className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-6 py-32 md:py-40"
    >
      <h2 className="text-4xl sm:text-5xl pb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text text-center mt-12 sm:mt-16">
        Technologies We Use
      </h2>
      <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-3xl text-center">
        Powering Agentia World with cutting-edge technologies for AI-driven excellence.
      </p>

      {/* Technology Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900/40 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-sm flex flex-col items-center text-center hover:bg-gray-800/50 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <tech.icon className="w-16 h-16 text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold text-purple-300">{tech.title}</h3>
            <p className="text-gray-300 mt-2">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
