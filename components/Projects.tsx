"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Mini GPT: QA Model from PDF",
      category: "AI/ML • RAG & NLP",
      link: "#",
      isDark: false
    },
    {
      title: "Credit Card Risk Modeling",
      category: "Machine Learning • Finance",
      link: "#",
      isDark: true
    },
    {
      title: "Milk Quality Prediction",
      category: "Data Science • Classification",
      link: "#",
      isDark: false
    },
    {
      title: "Real-time Air Quality Prediction",
      category: "Time Series • Forecasting",
      link: "#",
      isDark: true
    }
  ];

  const displayedProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="relative">
      {/* Header Section with Blurred Background */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/content-writing2.jpg"
            alt="Projects Header"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 leading-tight">
            SCALING YOUR VISION INTO REALITY,<br />
            <span className="text-white">ONE PRODUCT AT A TIME.</span>
          </h2>
        </div>
      </div>

      {/* Content Cards Section */}
      <div className="bg-blue-950 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`${
                  project.isDark ? "bg-gray-200 text-white" : "bg-gray-200 text-black"
                } p-8 shadow-lg hover:shadow-xl transition-all`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${
                  project.isDark ? "text-gray-900" : "text-gray-900"
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-6 ${
                  project.isDark ? "text-gray-900" : "text-gray-900"
                }`}>
                  {project.category}
                </p>
                {project.link && (
                  <div className="text-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-6 py-2 border-2 transition-colors ${
                        project.isDark
                          ? "bg-blue-900 border-white text-white hover:bg-blue-800"
                          :  "bg-blue-900 border-white text-white hover:bg-blue-800"
                      }`}
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block px-6 py-2 text-white border-2 border-white hover:bg-white hover:text-blue-950 font-normal transition-colors text-sm"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

