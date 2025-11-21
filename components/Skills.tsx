"use client";

import { useState } from "react";
import Image from "next/image";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    { name: "Machine Learning", color: "from-orange-500 to-red-500", accentColor: "bg-orange-500" },
    { name: "Deep Learning", color: "from-green-500 to-emerald-500", accentColor: "bg-green-500" },
    { name: "NLP", color: "from-orange-500 to-red-600", accentColor: "bg-orange-600" },
    { name: "Data Science", color: "from-purple-500 to-indigo-500", accentColor: "bg-purple-500" },
    { name: "Computer Vision", color: "from-pink-500 to-rose-500", accentColor: "bg-pink-500" },
    { name: "Data Engineering", color: "from-blue-500 to-cyan-500", accentColor: "bg-blue-500" },
    { name: "Cloud Infrastructure", color: "from-orange-500 to-yellow-500", accentColor: "bg-orange-500" },
    { name: "AI Research", color: "from-purple-500 to-pink-500", accentColor: "bg-purple-500" },
    { name: "MLOps", color: "from-orange-500 to-red-600", accentColor: "bg-orange-600" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Technical Skills
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Designing better products,<br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            ONE SKILL AT A TIME.
          </span>
        </p>

          

          {/* Skills Grid - Center */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-lg p-6 transition-all duration-300 cursor-pointer ${
                  hoveredIndex === index
                    ? `${skill.accentColor} text-white scale-105 shadow-2xl`
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {hoveredIndex !== index && (
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.color} rounded-bl-full opacity-80 transition-opacity`}></div>
                )}
                <h3 className="text-lg font-semibold relative z-10">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

