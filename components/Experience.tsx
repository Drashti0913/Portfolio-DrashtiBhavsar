"use client";

import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      title: "AI/ML Research Intern",
      company: "Indian School of Business (ISB)",
      location: "Hyderabad, India",
      period: "Feb. 2025 – Jul. 2025",
      technologies: ["Python", "BERT", "Spacy", "Pandas", "Matplotlib", "Seaborn", "NLP"],
      achievements: [
        "Developed and analyzed a 10,000+ entry Indian patent dataset using Python, BERT, spaCy, and Pandas to classify AI vs. non-AI innovations and identify patterns by gender, industry, and timeline, achieving 92% accuracy.",
        "Built an end-to-end analytics report using Matplotlib, Seaborn, and Excel, identifying dominant innovation sectors such as healthcare and real estate, and highlighting trends across 20+ years of innovation data."
      ]
    },
    {
      title: "Junior Research Fellow",
      company: "IIT Roorkee - GoogleExploreCSR",
      location: "Roorkee, India",
      period: "Jan. 2024 – Jun. 2024",
      technologies: ["Autonomous Vehicles", "DRL", "CARLA Simulator", "DDPG", "TD3"],
      achievements: [
        "Designed and implemented a hierarchical deep reinforcement learning (DRL) framework to automate overtaking maneuvers in autonomous vehicles, segmented into lane-change and straight-driving sub-tasks.",
        "Applied DDPG and TD3 algorithms to enable precise continuous control (steering, throttle, braking) in complex, dynamic traffic scenarios using the CARLA Simulator, improving overtaking decision accuracy by 25%.",
        "Validated model performance through high-fidelity simulations, demonstrating safe navigation in complex traffic scenarios involving multiple moving and stationary obstacles."
      ]
    },
    {
      title: "Data Science Research Intern",
      company: "Indian Space Research Organisation (ISRO)",
      location: "Ahmedabad, India",
      period: "Jun. 2023 – Aug. 2023",
      technologies: ["Random Forest", "Linear Regression", "Data Analytics", "Excel"],
      achievements: [
        "Contributed to the project \"Weather Prediction using NavIC S-band Signals\" by implementing Random Forest, Decision Tree, and Linear Regression, achieving 99.5% accuracy in detecting storm disruption on satellite signals.",
        "Analyzed ionospheric disturbances in NavIC and GPS signals (S1, L1, L5, CLKB) during storms, revealed significant correlations between S-band anomalies and storm activity, improving forecasting accuracy and signal reliability."
      ]
    }
  ];

  const displayedExperiences = experiences.slice(0, 2);

  return (
    <section
      id="experience"
      className="py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Experience
        </h2>
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Work</h3>
        </div>
        <div className="space-y-10">
          {displayedExperiences.map((exp, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {exp.title}, {exp.company}
              </h3>
              <ul className="space-y-3 mb-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-base text-gray-700 flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600">{exp.period}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/experience"
            className="inline-block px-6 py-2 text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-normal transition-colors text-sm"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

