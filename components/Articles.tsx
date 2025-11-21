"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Articles() {
  const publications = [
    {
      title: "A comprehensive and systematic study in smart drip and sprinkler irrigation systems",
      publisher: "Elsevier",
      type: "Journal Article",
      link: "#"
    },
    {
      title: "Milk Quality Prediction Using Machine Learning",
      publisher: "EBSCO",
      type: "Journal Article",
      link: "#"
    },
    {
      title: "Dental caries detection using transfer learning & gradient-based class activation mapping",
      publisher: "Springer",
      type: "Journal Article",
      link: "#"
    },
    {
      title: "The Intersection of Industry 4.0 with Formula 1 and Other Motorsports: Future of Racing",
      publisher: "Springer",
      type: "Journal Article",
      link: "#"
    },
    {
      title: "AI-Based Air Quality Forecasting using LSTM and SARIMA",
      publisher: "Accepted",
      type: "Journal Article",
      link: "#"
    }
  ];

  const displayedPublications = publications.slice(0, 2);

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Publications
        </h2>
        <div className="space-y-8">
          {displayedPublications.map((pub, index) => (
            <div key={index} className="bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Published in {pub.publisher}
              </p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 font-normal transition-colors text-sm"
                >
                  Read More <ExternalLink className="ml-1" size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/publications"
            className="inline-block px-6 py-2 text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-normal transition-colors text-sm"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

