"use client";

import { ExternalLink } from "lucide-react";

export default function ProjectsFull() {
  const projects = [
    {
      title: "Mini GPT: QA Model from PDF",
      description:
        "Architected a QA pipeline leveraging RAG and vector search to extract insights from PDF documents. Boosted document comprehension accuracy to 90% by embedding Qdrant vector stores with HuggingFace models.",
      technologies: ["RAG", "LangChain", "HuggingFace", "Qdrant Vector database", "Docker", "pyPDF"],
      link: "#",
      github: "#"
    },
    {
      title: "Credit Card Risk Modeling",
      description:
        "Developed a binary classification model to identify high-risk credit card applicants using demographic and transaction data, improving default prediction accuracy to 93%. Applied SHAP analysis to enhance interpretability and transparency in financial decision-making models.",
      technologies: ["Logistic Regression", "XGBoost", "SHAP", "Python", "LLM", "Chatbot"],
      link: "#",
      github: "#"
    },
    {
      title: "Milk Quality Prediction",
      description:
        "Engineered supervised learning models to classify milk quality, automating testing for 1,000+ samples. Reduced manual testing time by 70%, streamlining quality assurance processes for potential use in dairy production.",
      technologies: ["SVM", "Decision Tree", "Random Forest", "Jupyter Notebook"],
      link: "#",
      github: "#"
    },
    {
      title: "Real-time Air Quality Prediction",
      description:
        "Trained time-series forecasting models to monitor air pollution trends using LSTM and SARIMA. Delivered 85% prediction accuracy on unstructured data, enabling proactive planning in high-density urban regions.",
      technologies: ["LSTM", "SARIMA", "Pandas", "Scikit-learn", "Matplotlib", "Numpy"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-20 bg-white pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg hover:shadow-gray-400 transition-all overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 font-normal transition-colors text-sm"
                  >
                    Read More <ExternalLink className="ml-1" size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

