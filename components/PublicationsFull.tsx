"use client";

import { ExternalLink } from "lucide-react";

export default function PublicationsFull() {
  const publications = [
    {
      title: "A comprehensive and systematic study in smart drip and sprinkler irrigation systems",
      publisher: "Elsevier",
      type: "Journal Article",
      link: "https://www.sciencedirect.com/science/article/pii/S2772375523001326"
    },
    {
      title: "Milk Quality Prediction Using Machine Learning",
      publisher: "EBSCO",
      type: "Journal Article",
      link: "https://openurl.ebsco.com/EPDB%3Agcd%3A10%3A25038298/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A183567171&crl=c&link_origin=scholar.google.com"
    },
    {
      title: "AI-enabled Dental caries detection using transfer learning & gradient-based class activation mapping",
      publisher: "Springer",
      type: "Journal Article",
      link: "https://link.springer.com/article/10.1007/s12652-024-04795-x"
    },
    {
      title: "The Intersection of Industry 4.0 with Formula 1 and Other Motorsports: Future of Racing",
      publisher: "Springer",
      type: "Journal Article",
      link: "https://link.springer.com/chapter/10.1007/978-981-97-3173-2_12"
    }
  ];

  return (
    <section className="py-20 bg-white pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Publications
        </h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
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
      </div>
    </section>
  );
}

