"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GiRobotAntennas } from "react-icons/gi";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="nav-gradient fixed w-full z-50 border-b border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 relative">
                <motion.div
                  className="w-full h-full text-purple-400"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <GiRobotAntennas className="w-full h-full" />
                </motion.div>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">
                Agentia
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-1">
                  World
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex lg:flex xl:flex items-center space-x-8">
            {[
              { name: "Technology", path: "/technology" },
              { name: "Analysis", path: "/analysis" },
              { name: "Contact", path: "/#contact" },
            ].map((item) => (
              <Link key={item.name} href={item.path} className="nav-link text-gray-300 hover:text-white transition-colors flex items-center space-x-1 text-sm font-medium">
                <span>{item.name}</span>
              </Link>
            ))}
            <Link href="/">
              <button className="glow-button px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all">
              Discover More
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden lg:hidden xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden lg:hidden xl:hidden mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg bg-gray-900/90">
              {[
                { name: "Technology", path: "technology" },
                { name: "Analysis", path: "/analysis" },
                { name: "Contact", path: "/#contact" },
              ].map((item) => (
                <Link key={item.name} href={item.path} className="block px-3 py-2 text-gray-300 hover:bg-purple-500/20 hover:text-white rounded-lg transition-colors text-sm font-medium">
                  {item.name}
                </Link>
              ))}


              <div className="px-3 py-2">
                <Link href="/">
                  <button className="glow-button w-full px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all">
                  Discover More
                  </button>
                </Link>
              </div>
            </div>
           
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
