// All of the site's content lives in this file. Edit it to update the site.
// A project only shows up once it has a "code" link to its GitHub repo.

const GITHUB = "https://github.com/Drashti0913";

export const profile = {
  name: "Drashti Bhavsar",
  role: "AI/ML engineer and researcher",
  status:
    "Open to internships and full-time roles in AI/ML and data science. Graduating May 2027.",
  location: "Boston, MA",
  // Put your resume PDF in the repo root and set this to its file name,
  // for example "Drashti-Bhavsar-Resume.pdf". Leave empty to hide the button.
  resume: "",
  intro:
    "MS Computer Science student at Northeastern University. I turn research into working software: RAG pipelines, search engines, reinforcement learning and computer vision, with research experience at ISB, IIT Roorkee and ISRO.",
  highlights: [
    { value: "3", label: "research internships: ISB, IIT Roorkee, ISRO" },
    { value: "4", label: "publications in Springer, Elsevier and EBSCO" },
    { value: "10,000+", label: "patent records analyzed with BERT" },
    { value: "3.9", label: "GPA at Northeastern, out of 4.0" },
  ],
  bio: [
    "I'm a graduate student at Northeastern University, pursuing my passion for Artificial Intelligence and Machine Learning, where I focus on building practical, high-impact intelligent systems. Over the past few years, I've worked with institutions like ISB, IIT Roorkee, and ISRO, contributing to projects in autonomous systems, patent analytics, and atmospheric prediction, giving me a unique blend of research depth and engineering execution.",
    "I'm especially drawn to innovation at the intersection of AI, automation, and scalable systems, and I've published multiple papers in journals and books from Elsevier, Springer, and EBSCO.",
    "Alongside my technical work, I love exploring emerging AI developments, experimenting with new tools, and contributing to the open-source ecosystem. I aim to build technology that makes complex problems easier, smarter, and more human-centric.",
  ],
  email: "drashtibhavsar09@gmail.com",
  github: GITHUB,
  linkedin: "https://www.linkedin.com/in/drashtibhavsar9/",
  scholar: "https://scholar.google.com/citations?user=qf2SqPsAAAAJ&hl=en&oi=ao",
};

export const skillGroups = [
  {
    label: "LLMs and NLP",
    blurb: "Retrieval, search and language models that stay grounded.",
    items: ["RAG", "LangChain", "HuggingFace", "Qdrant", "pgvector", "spaCy"],
  },
  {
    label: "Deep learning and RL",
    blurb: "Vision, sequence models and agents that learn by doing.",
    items: [
      "PyTorch",
      "TensorFlow",
      "BERT",
      "YOLOv5",
      "DDPG",
      "TD3",
      "CARLA",
      "Grad-CAM",
    ],
  },
  {
    label: "Machine learning",
    blurb: "Classical models, forecasting and explainability.",
    items: [
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "SVM",
      "SHAP",
      "LSTM",
      "SARIMA",
    ],
  },
  {
    label: "Data and tooling",
    blurb: "The everyday toolkit behind every project.",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
      "Docker",
      "Git",
    ],
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "llm", label: "LLMs and RAG" },
  { id: "deep", label: "Deep learning and RL" },
  { id: "ml", label: "ML and data" },
  { id: "build", label: "Other builds" },
];

// category is one of the ids above. extra is an optional list of
// { label, href } links, for example to a published paper.
export const projects = [
  {
    id: "docmind",
    title: "DocMind: PDF question answering",
    category: "llm",
    summary:
      "A RAG pipeline that answers questions from PDF documents, grounding every answer in retrieved chunks. Reaches 90% document comprehension accuracy with BGE embeddings stored in Qdrant.",
    tags: ["LangChain", "HuggingFace", "Qdrant", "Docker"],
    code: `${GITHUB}/Question-Answering-Model-from-PDF-Documents`,
    extra: [],
  },
  {
    id: "email-rag",
    title: "Personal Email RAG",
    category: "llm",
    summary:
      "A local, private CLI that ingests email and attachments, retrieves passages with PostgreSQL and pgvector, and writes cited answers with Mistral through Ollama. Adds Gmail OAuth, row-level security and repeatable benchmarks.",
    tags: ["Python", "pgvector", "Ollama", "Mistral"],
    code: `${GITHUB}/Email-RAG`,
    extra: [],
  },
  {
    id: "patent-search",
    title: "Patent claim hybrid search engine",
    category: "llm",
    summary:
      "Search over vehicle patent applications with free-text queries, find-patents-like-this-one, and metadata filters. Blends BM25 with semantic scores, surfaces the best-matching claim, and includes a design for scaling to 10M patents.",
    tags: ["Python", "BM25", "Semantic search"],
    code: `${GITHUB}/Patent-Claim-Hybrid-Search-Engine`,
    extra: [],
  },
  {
    id: "simplification",
    title: "Audience-aware scientific simplification",
    category: "llm",
    summary:
      "Rewrites dense scientific abstracts for middle-school, general and undergraduate readers. Compares fine-tuned seq2seq models with an instruction-tuned LLM and measures the readability and faithfulness trade-off.",
    tags: ["LLMs", "Prompt optimization", "Evaluation"],
    code: `${GITHUB}/audience-aware-scientific-simplification`,
    extra: [],
  },
  {
    id: "autodrive",
    title: "AutoDrive-HRL: autonomous overtaking",
    category: "deep",
    summary:
      "Hierarchical deep reinforcement learning for lane changes and overtaking in the CARLA simulator, built at IIT Roorkee. Reaches a 94% success rate in simulated urban scenarios, with a 25% gain in decision accuracy.",
    tags: ["PyTorch", "DDPG", "TD3", "CARLA"],
    code: `${GITHUB}/Autonomous-Vehicle-Lane-Change-Maneuver-in-CARLA-Simulator`,
    extra: [],
  },
  {
    id: "dentai",
    title: "DentAI: dental caries detection",
    category: "deep",
    summary:
      "Compares five CNN architectures with transfer learning to detect dental caries from images, and uses Grad-CAM so the model's decisions can be inspected. Published in Springer.",
    tags: ["TensorFlow", "Transfer learning", "Grad-CAM"],
    code: `${GITHUB}/Teeth-Caries-Detection-using-Transfer-Learning`,
    extra: [
      {
        label: "Paper",
        href: "https://link.springer.com/article/10.1007/s12652-024-04795-x",
      },
    ],
  },
  {
    id: "delivery",
    title: "Traffic-aware delivery dispatch",
    category: "deep",
    summary:
      "A Northeastern AI course project: a dispatch system that learns order assignment and traffic-aware routing from experience on a 5x5 city grid with three drivers and 30-minute deadlines.",
    tags: ["Python", "Reinforcement learning", "Routing"],
    code: `${GITHUB}/Dynamic-Multi-Order-Delivery-Optimization-with-Traffic-Aware-Routing`,
    extra: [],
  },
  {
    id: "platevision",
    title: "PlateVision: license plate recognition",
    category: "deep",
    summary:
      "Detects and reads license plates from surveillance video using YOLOv5, Haar cascades and Tesseract OCR, and identifies the Indian state from the plate pattern.",
    tags: ["YOLOv5", "OpenCV", "Tesseract"],
    code: `${GITHUB}/PlateVision-Real-Time-License-Plate-Detection-OCR-for-Surveillance-Cameras`,
    extra: [],
  },
  {
    id: "scriptnet",
    title: "ScriptNet: handwriting recognition",
    category: "deep",
    summary:
      "A 26.9M-parameter CRNN with a five-layer BiLSTM and CTC loss that reads handwritten words from the IAM dataset, trained end to end with no segmentation.",
    tags: ["TensorFlow", "CRNN", "CTC"],
    code: `${GITHUB}/Handwritten-Text-Prediction-using-Deep-Learning`,
    extra: [],
  },
  {
    id: "airsense",
    title: "AirSense: air quality forecasting",
    category: "ml",
    summary:
      "Forecasts air quality from five years of real data (2019 to 2023), comparing LSTM with SARIMA to show when deep learning beats classical statistics. Reaches 85% prediction accuracy.",
    tags: ["LSTM", "SARIMA", "Time series"],
    code: `${GITHUB}/Air-Quality-Forecasting-using-real-time-models-LSTM-and-SARIMA`,
    extra: [],
  },
  {
    id: "milkguard",
    title: "MilkGuard: milk quality prediction",
    category: "ml",
    summary:
      "Classifies milk quality across 1,000+ samples with SVM, decision tree and random forest models, cutting manual testing time by 70%. Published in EBSCO and covered by Gujarat Samachar.",
    tags: ["Scikit-learn", "SVM", "Random Forest"],
    code: `${GITHUB}/Milk-Quality-Prediction-using-SVM-Decision-Tree-and-Random-Forest`,
    extra: [],
  },
  {
    id: "flaretrader",
    title: "FlareTrader: multi-asset DeFi platform",
    category: "build",
    summary:
      "Built in 24 hours at the EasyA Hackathon: a trading interface for crypto, stocks and metals powered by live Flare FTSO price oracles on the Coston2 testnet.",
    tags: ["Web3", "Ethers.js", "Flare FTSO"],
    code: `${GITHUB}/Multi-Asset-DeFi-Platform-on-Flare-Netwo`,
    extra: [],
  },
  {
    // Add the repo link in "code" and this project will appear on the site.
    id: "credit-risk",
    title: "Credit card risk modeling",
    category: "ml",
    summary:
      "A classifier that flags high-risk credit card applicants with 93% default prediction accuracy, using SHAP to keep financial decisions interpretable.",
    tags: ["XGBoost", "SHAP", "Logistic regression"],
    code: "",
    extra: [],
  },
];

export const experience = [
  {
    title: "AI/ML Research Intern",
    where: "Indian School of Business (ISB), Hyderabad, India",
    when: "Feb. 2025 to Jul. 2025",
    tags: ["BERT", "spaCy", "Pandas", "Matplotlib"],
    points: [
      "Developed and analyzed a 10,000+ entry Indian patent dataset using Python, BERT, spaCy, and Pandas to classify AI vs. non-AI innovations and identify patterns by gender, industry, and timeline, achieving 92% accuracy.",
      "Built an end-to-end analytics report using Matplotlib, Seaborn, and Excel, identifying dominant innovation sectors such as healthcare and real estate, and highlighting trends across 20+ years of innovation data.",
    ],
  },
  {
    title: "Junior Research Fellow",
    where: "IIT Roorkee, Google ExploreCSR, Roorkee, India",
    when: "Jan. 2024 to Jun. 2024",
    tags: ["Deep RL", "DDPG", "TD3", "CARLA"],
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
    tags: ["Random Forest", "Regression", "NavIC"],
    points: [
      'Contributed to the project "Weather Prediction using NavIC S-band Signals" by implementing Random Forest, Decision Tree, and Linear Regression, achieving 99.5% accuracy in detecting storm disruption on satellite signals.',
      "Analyzed ionospheric disturbances in NavIC and GPS signals (S1, L1, L5, CLKB) during storms, revealed significant correlations between S-band anomalies and storm activity, improving forecasting accuracy and signal reliability.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    where: "Northeastern University, Boston, USA",
    when: "Expected May 2027",
    note: "GPA 3.9/4.0",
  },
  {
    degree: "Nanodegree",
    field: "AI Programming with Python",
    where: "Udacity, online",
    when: "Completed",
    note: "",
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Engineering",
    where: "Pandit Deendayal Energy University, India",
    when: "May 2024",
    note: "GPA 3.77/4.0",
  },
];

export const achievements = [
  {
    title: "Published researcher",
    text: "Four papers and chapters in Springer, Elsevier and EBSCO.",
  },
  {
    title: "Google ExploreCSR fellow",
    text: "Junior Research Fellow at IIT Roorkee on autonomous driving.",
  },
  {
    title: "In the press",
    text: "MilkGuard, my milk quality model, was covered by Gujarat Samachar.",
  },
];

export const publications = [
  {
    title:
      "A comprehensive and systematic study in smart drip and sprinkler irrigation systems",
    venue: "Elsevier",
    url: "https://www.sciencedirect.com/science/article/pii/S2772375523001326",
  },
  {
    title: "Milk Quality Prediction Using Machine Learning",
    venue: "EBSCO",
    url: "https://openurl.ebsco.com/EPDB%3Agcd%3A10%3A25038298/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A183567171&crl=c&link_origin=scholar.google.com",
  },
  {
    title:
      "AI-enabled Dental caries detection using transfer learning & gradient-based class activation mapping",
    venue: "Springer",
    url: "https://link.springer.com/article/10.1007/s12652-024-04795-x",
  },
  {
    title:
      "The Intersection of Industry 4.0 with Formula 1 and Other Motorsports: Future of Racing",
    venue: "Springer",
    url: "https://link.springer.com/chapter/10.1007/978-981-97-3173-2_12",
  },
  {
    title: "AI-Based Air Quality Forecasting using LSTM and SARIMA",
    venue: "Accepted",
    url: "",
  },
];
