"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center px-6 py-16">
      {/* Header Section */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
     <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600 drop-shadow-lg pb-4">
  Agentia World Pricing
</h1>

        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the perfect plan for your AI-powered journey.
        </p>
      </motion.header>

      {/* Pricing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {["Free", "Pro", "Enterprise"].map((plan, index) => (
          <motion.div
            key={index}
            className="relative p-10 rounded-2xl shadow-xl border border-purple-500/30 bg-gray-900/40 backdrop-blur-xl overflow-hidden transform hover:scale-105 transition duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 blur-3xl"></div>
            <h2 className="relative text-3xl font-bold text-purple-300">{plan}</h2>
            <p className="relative mt-2 text-gray-400">
              {plan === "Free" && "Get started with basic AI features."}
              {plan === "Pro" && "Unlock advanced AI capabilities."}
              {plan === "Enterprise" && "Tailored solutions for businesses."}
            </p>
            <p className="relative mt-4 text-5xl font-bold text-white">
              {plan === "Free" ? "$0" : plan === "Pro" ? "$29" : "Custom"}
              <span className="text-lg text-gray-400">{plan !== "Enterprise" ? "/month" : ""}</span>
            </p>
            <ul className="relative mt-6 space-y-3 text-gray-300">
              {plan === "Free" && (
                <>
                  <li>✓ Access to Basic AI Agent</li>
                  <li>✓ Limited Queries</li>
                  <li>✓ Community Support</li>
                </>
              )}
              {plan === "Pro" && (
                <>
                  <li>✓ Advanced AI Agent</li>
                  <li>✓ Unlimited Queries</li>
                  <li>✓ Priority Support</li>
                  <li>✓ Custom AI Models</li>
                </>
              )}
              {plan === "Enterprise" && (
                <>
                  <li>✓ Dedicated AI Agents</li>
                  <li>✓ Custom Integrations</li>
                  <li>✓ 24/7 Premium Support</li>
                  <li>✓ Scalable Infrastructure</li>
                </>
              )}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative mt-6 w-full py-3 text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all"
            >
              {plan === "Free" ? "Get Started" : plan === "Pro" ? "Upgrade to Pro" : "Contact Us"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
