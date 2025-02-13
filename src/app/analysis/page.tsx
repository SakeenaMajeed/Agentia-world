"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Analysis = () => {
  return (
    <div
      id="analysis"
      className="relative min-h-screen flex flex-col items-center justify-start text-center bg-black overflow-hidden px-6 py-32 md:py-40"
    >
      {/* Title Section */}
      <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text mt-12 sm:mt-16">
        AI Usage Statistics
      </h2>
      <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-3xl">
        Track AI performance and growth over time with real-time data visualization.
      </p>

      {/* Line Chart */}
      <div className="mt-10 w-full max-w-6xl h-[500px] text-white bg-gray-900/30 border border-purple-500/20 rounded-xl shadow-lg p-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B0082" />
            <XAxis dataKey="month" stroke="#A855F7" tick={{ fill: "#A855F7" }} tickSize={10} />
            <YAxis stroke="#A855F7" tick={{ fill: "#A855F7" }} domain={[0, 6000]} />
            <Tooltip contentStyle={{ backgroundColor: "#1F1B24", borderColor: "#A855F7" }} />
            <Line type="monotone" dataKey="groq" stroke="#00FF7F" strokeWidth={4} dot={{ r: 8, fill: "#00FF7F" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// **Default export fix**
export default Analysis;

const chartData = [
  { month: "Jan", groq: 800 },
  { month: "Feb", groq: 1300 },
  { month: "Mar", groq: 2000 },
  { month: "Apr", groq: 2700 },
  { month: "May", groq: 3500 },
  { month: "Jun", groq: 4500 },
];
