// All of the site's content lives in this file. Edit it to update the site.
// Skill ids in each project must match an id in the skills list, or that
// skill won't show up in the sky map or the project filter.

export const profile = {
  name: "Drashti Bhavsar",
  role: "AI/ML researcher and data scientist",
  intro:
    "Graduate student in Computer Science at Northeastern University, focused on building intelligent systems, advancing machine learning research, and creating solutions that drive real-world impact.",
  bio: [
    "I'm a graduate student at Northeastern University, pursuing my passion for Artificial Intelligence and Machine Learning, where I focus on building practical, high-impact intelligent systems. Over the past few years, I've worked with institutions like ISB, IIT Roorkee, and ISRO, contributing to projects in autonomous systems, patent analytics, and atmospheric prediction, giving me a unique blend of research depth and engineering execution.",
    "I'm especially drawn to innovation at the intersection of AI, automation, and scalable systems, and I've published multiple papers in top-tier journals including Elsevier, Springer, and EBSCO.",
    "Alongside my technical work, I love exploring emerging AI developments, experimenting with new tools, and contributing to the open-source ecosystem. I aim to build technology that makes complex problems easier, smarter, and more human-centric.",
  ],
  email: "drashtibhavsar09@gmail.com",
  contact: [
    {
      label: "Email",
      href: "mailto:drashtibhavsar09@gmail.com",
      text: "drashtibhavsar09@gmail.com",
    },
    {
      label: "University",
      href: "mailto:bhavsar.dr@northeastern.edu",
      text: "bhavsar.dr@northeastern.edu",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/drashtibhavsar9",
      text: "linkedin.com/in/drashtibhavsar9",
    },
    {
      label: "GitHub",
      href: "https://github.com/Drashti0913",
      text: "github.com/Drashti0913",
    },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=qf2SqPsAAAAJ&hl=en&oi=ao",
      text: "Google Scholar profile",
    },
    {
      label: "X",
      href: "https://x.com/BhavsarDrashti2",
      text: "@BhavsarDrashti2",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/_drashti09",
      text: "@_drashti09",
    },
  ],
};

export const skills = [
  { id: "python", label: "Python" },
  { id: "ml", label: "Machine learning" },
  { id: "llm", label: "LLMs" },
  { id: "nlp", label: "NLP and RAG" },
  { id: "vector", label: "Vector search" },
  { id: "docker", label: "Docker" },
  { id: "xai", label: "Explainable AI" },
  { id: "deep", label: "Deep learning" },
  { id: "timeseries", label: "Time series" },
  { id: "dataviz", label: "Data visualization" },
];

// Add a GitHub or demo link to a project by filling in "code" or "demo".
export const projects = [
  {
    id: "mini-gpt",
    title: "Mini GPT: QA Model from PDF",
    category: "AI/ML, RAG and NLP",
    summary:
      "Architected a QA pipeline leveraging RAG and vector search to extract insights from PDF documents. Boosted document comprehension accuracy to 90% by embedding Qdrant vector stores with HuggingFace models.",
    tools: "LangChain, HuggingFace, Qdrant, Docker, pyPDF",
    skills: ["python", "nlp", "llm", "vector", "docker"],
    code: "",
    demo: "",
  },
  {
    id: "credit-risk",
    title: "Credit Card Risk Modeling",
    category: "Machine learning, finance",
    summary:
      "Developed a binary classification model to identify high-risk credit card applicants using demographic and transaction data, improving default prediction accuracy to 93%. Applied SHAP analysis to enhance interpretability and transparency in financial decision-making models.",
    tools: "Logistic Regression, XGBoost, SHAP, LLM chatbot",
    skills: ["python", "ml", "xai", "llm"],
    code: "",
    demo: "",
  },
  {
    id: "milk-quality",
    title: "Milk Quality Prediction",
    category: "Data science, classification",
    summary:
      "Engineered supervised learning models to classify milk quality, automating testing for 1,000+ samples. Reduced manual testing time by 70%, streamlining quality assurance processes for potential use in dairy production.",
    tools: "SVM, Decision Tree, Random Forest, Jupyter Notebook",
    skills: ["python", "ml"],
    code: "",
    demo: "",
  },
  {
    id: "air-quality",
    title: "Real-time Air Quality Prediction",
    category: "Time series, forecasting",
    summary:
      "Trained time-series forecasting models to monitor air pollution trends using LSTM and SARIMA. Delivered 85% prediction accuracy on unstructured data, enabling proactive planning in high-density urban regions.",
    tools: "LSTM, SARIMA, Pandas, Scikit-learn, Matplotlib, NumPy",
    skills: ["python", "ml", "deep", "timeseries", "dataviz"],
    code: "",
    demo: "",
  },
];

export const experience = [
  {
    title: "AI/ML Research Intern",
    where: "Indian School of Business (ISB), Hyderabad, India",
    when: "Feb. 2025 to Jul. 2025",
    points: [
      "Developed and analyzed a 10,000+ entry Indian patent dataset using Python, BERT, spaCy, and Pandas to classify AI vs. non-AI innovations and identify patterns by gender, industry, and timeline, achieving 92% accuracy.",
      "Built an end-to-end analytics report using Matplotlib, Seaborn, and Excel, identifying dominant innovation sectors such as healthcare and real estate, and highlighting trends across 20+ years of innovation data.",
    ],
  },
  {
    title: "Junior Research Fellow",
    where: "IIT Roorkee, Google ExploreCSR, Roorkee, India",
    when: "Jan. 2024 to Jun. 2024",
    points: [
      "Designed and implemented a hierarchical deep reinforcement learning (DRL) framework to automate overtaking maneuvers in autonomous vehicles, segmented into lane-change and straight-driving sub-tasks.",
      "Applied DDPG and TD3 algorithms to enable precise continuous control (steering, throttle, braking) in complex, dynamic traffic scenarios using the CARLA Simulator, improving overtaking decision accuracy by 25%.",
      "Validated model performance through high-fidelity simulations, demonstrating safe navigation in complex traffic scenarios involving multiple moving and stationary obstacles.",
    ],
  },
  {
    title: "Data Science Research Intern",
    where: "Indian Space Research Organisation (ISRO), Ahmedabad, India",
    when: "Jun. 2023 to Aug. 2023",
    points: [
      'Contributed to the project "Weather Prediction using NavIC S-band Signals" by implementing Random Forest, Decision Tree, and Linear Regression, achieving 99.5% accuracy in detecting storm disruption on satellite signals.',
      "Analyzed ionospheric disturbances in NavIC and GPS signals (S1, L1, L5, CLKB) during storms, revealed significant correlations between S-band anomalies and storm activity, improving forecasting accuracy and signal reliability.",
    ],
  },
];

export const education = [
  {
    title: "Master of Science in Computer Science",
    where: "Northeastern University, Boston, USA",
    when: "Expected May 2027",
    summary: "GPA 3.9/4.0",
  },
  {
    title: "Nanodegree, AI Programming with Python",
    where: "Udacity, online",
    when: "Completed",
    summary: "",
  },
  {
    title: "Bachelor of Technology in Computer Engineering",
    where: "Pandit Deendayal Energy University, India",
    when: "May 2024",
    summary: "GPA 3.77/4.0",
  },
];

export const research = [
  {
    title: "Classifying AI innovation in Indian patents",
    meta: "Indian School of Business, 2025",
    summary:
      "Used BERT, spaCy and Pandas on a 10,000+ entry patent dataset to separate AI from non-AI innovations and study patterns by gender, industry and timeline, reaching 92% accuracy.",
    url: "",
  },
  {
    title: "Hierarchical reinforcement learning for autonomous overtaking",
    meta: "IIT Roorkee, Google ExploreCSR, 2024",
    summary:
      "Built a hierarchical DRL framework with DDPG and TD3 in the CARLA Simulator, splitting overtaking into lane-change and straight-driving sub-tasks and improving decision accuracy by 25%.",
    url: "",
  },
  {
    title: "Weather prediction using NavIC S-band signals",
    meta: "ISRO, 2023",
    summary:
      "Applied Random Forest, Decision Tree and Linear Regression to detect storm disruption on satellite signals with 99.5% accuracy, and linked S-band anomalies to storm activity.",
    url: "",
  },
];

export const articles = [
  {
    title:
      "A comprehensive and systematic study in smart drip and sprinkler irrigation systems",
    meta: "Published in Elsevier",
    summary: "",
    url: "https://www.sciencedirect.com/science/article/pii/S2772375523001326",
  },
  {
    title: "Milk Quality Prediction Using Machine Learning",
    meta: "Published in EBSCO",
    summary: "",
    url: "https://openurl.ebsco.com/EPDB%3Agcd%3A10%3A25038298/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A183567171&crl=c&link_origin=scholar.google.com",
  },
  {
    title:
      "AI-enabled Dental caries detection using transfer learning & gradient-based class activation mapping",
    meta: "Published in Springer",
    summary: "",
    url: "https://link.springer.com/article/10.1007/s12652-024-04795-x",
  },
  {
    title:
      "The Intersection of Industry 4.0 with Formula 1 and Other Motorsports: Future of Racing",
    meta: "Published in Springer",
    summary: "",
    url: "https://link.springer.com/chapter/10.1007/978-981-97-3173-2_12",
  },
  {
    title: "AI-Based Air Quality Forecasting using LSTM and SARIMA",
    meta: "Accepted",
    summary: "",
    url: "",
  },
];
