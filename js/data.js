// All of the site's content lives in this file. Edit it to update the site.
// A project only shows up once it has a "code" link to its GitHub repo.

const GITHUB = "https://github.com/Drashti0913";
const SCHOLAR =
  "https://scholar.google.com/citations?user=qf2SqPsAAAAJ&hl=en&oi=ao";

export const profile = {
  name: "Drashti Bhavsar",
  role: "Software, data and AI/ML engineer",
  status: "Open to 2027 full-time roles and Spring 2027 internships",
  location: "Boston, MA",
  // Put your resume PDF in the repo root and set this to its file name,
  // for example "Drashti-Bhavsar-Resume.pdf". Leave empty to hide the button.
  resume: "",
  // The hero headline cycles through these words.
  rotating: [
    "RAG pipelines",
    "search engines",
    "RL agents",
    "vision models",
    "LLM ensembles",
    "data products",
  ],
  intro:
    "MS Computer Science at Northeastern. Published researcher with 164 citations, three research internships at ISB, IIT Roorkee and ISRO, and 25+ projects shipped across LLMs, reinforcement learning, computer vision and data.",
  highlights: [
    { value: 164, suffix: "", label: "citations on Google Scholar" },
    { value: 5, suffix: "", label: "papers: Springer, Elsevier, EAI, AAAI" },
    { value: 3, suffix: "", label: "research internships: ISB, IITR, ISRO" },
    { value: 25, suffix: "+", label: "projects shipped on GitHub" },
    { value: 3.9, suffix: "", label: "GPA at Northeastern" },
  ],
  bio: [
    "I'm a Computer Science grad student at Northeastern University in Boston, and I like problems that are a little bit crazy: teaching a car to overtake on its own, designing search for millions of patents, catching health misinformation with a panel of LLMs.",
    "Before Boston, I trained deep RL agents for autonomous driving as a Google ExploreCSR fellow at IIT Roorkee, mapped 20 years of Indian AI innovation from 10,000+ patents at ISB, and predicted storm disruptions from NavIC satellite signals at ISRO with 99.5% accuracy.",
    "My work has been published by Springer, Elsevier, EAI and an AAAI workshop, and one of my papers has been cited 111 times. Now I want to bring that research depth to a team that ships real software.",
  ],
  email: "drashtibhavsar09@gmail.com",
  github: GITHUB,
  linkedin: "https://www.linkedin.com/in/drashtibhavsar9/",
  scholar: SCHOLAR,
  twitter: "https://x.com/BhavsarDrashti2",
};

// Words for the scrolling ticker under the hero.
export const ticker = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "LangChain",
  "HuggingFace",
  "RAG",
  "pgvector",
  "Qdrant",
  "BERT",
  "YOLOv5",
  "CARLA",
  "Deep RL",
  "Docker",
  "Flask",
  "SQL",
  "Java",
  "Power BI",
  "AWS",
];

export const skillGroups = [
  {
    label: "LLMs and NLP",
    blurb: "Retrieval, search and language models that stay grounded.",
    items: [
      "RAG",
      "LangChain",
      "HuggingFace",
      "Ollama",
      "Qdrant",
      "pgvector",
      "BM25",
      "spaCy",
    ],
  },
  {
    label: "Deep learning and RL",
    blurb: "Vision, sequence models and agents that learn by doing.",
    items: [
      "PyTorch",
      "TensorFlow",
      "BERT",
      "YOLOv5",
      "Stable Diffusion",
      "DDPG",
      "TD3",
      "CARLA",
    ],
  },
  {
    label: "Data and ML",
    blurb: "Classical models, forecasting, dashboards and explainability.",
    items: [
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "LSTM",
      "SARIMA",
      "Pandas",
      "Power BI",
      "SQL",
    ],
  },
  {
    label: "Software engineering",
    blurb: "The everyday toolkit that gets models into people's hands.",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "Flask",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
      "Git",
    ],
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "llm", label: "LLMs and search" },
  { id: "deep", label: "Deep learning and RL" },
  { id: "ml", label: "Data and ML" },
  { id: "build", label: "Software builds" },
];

// category is one of the ids above. metric is the one number that sells the
// project. featured projects get a wide card. extra is an optional list of
// { label, href } links, for example to a published paper.
export const projects = [
  {
    id: "patent-search",
    title: "Patent claim hybrid search engine",
    category: "llm",
    featured: true,
    metric: "10M-patent design",
    summary:
      "Search over vehicle patent applications with free-text queries, find-patents-like-this-one, and metadata filters. Blends BM25 with semantic scores, surfaces the best-matching claim, and ships a two-phase recall and re-rank design for scaling to 10 million patents.",
    tags: ["Python", "BM25", "Embeddings", "System design"],
    code: `${GITHUB}/Patent-Claim-Hybrid-Search-Engine`,
    extra: [],
  },
  {
    id: "autodrive",
    title: "AutoDrive-HRL: a car that overtakes on its own",
    category: "deep",
    featured: true,
    metric: "94% success",
    summary:
      "Hierarchical deep reinforcement learning for lane changes and overtaking in the CARLA simulator, built at IIT Roorkee. DDPG and TD3 agents control steering, throttle and braking, with a 25% gain in decision accuracy in dense urban traffic.",
    tags: ["PyTorch", "DDPG", "TD3", "CARLA"],
    code: `${GITHUB}/Autonomous-Vehicle-Lane-Change-Maneuver-in-CARLA-Simulator`,
    extra: [],
  },
  {
    id: "email-rag",
    title: "Personal Email RAG",
    category: "llm",
    metric: "100% local",
    summary:
      "A private CLI that ingests email and attachments, retrieves passages with PostgreSQL and pgvector, and writes cited answers with Mistral through Ollama. Gmail OAuth, row-level security and repeatable benchmarks included.",
    tags: ["Python", "pgvector", "Ollama", "Mistral"],
    code: `${GITHUB}/Email-RAG`,
    extra: [],
  },
  {
    id: "docmind",
    title: "DocMind: ask your PDFs anything",
    category: "llm",
    metric: "90% accuracy",
    summary:
      "A RAG pipeline that answers questions from PDF documents and grounds every answer in retrieved chunks, using BGE embeddings stored in Qdrant.",
    tags: ["LangChain", "HuggingFace", "Qdrant", "Docker"],
    code: `${GITHUB}/Question-Answering-Model-from-PDF-Documents`,
    extra: [],
  },
  {
    id: "simplification",
    title: "Audience-aware scientific simplification",
    category: "llm",
    metric: "3 reading levels",
    summary:
      "Rewrites dense scientific abstracts for middle-school, general and undergraduate readers, with automatic prompt optimization and self-refinement to keep the facts straight.",
    tags: ["LLMs", "Prompt optimization", "Evaluation"],
    code: `${GITHUB}/audience-aware-scientific-simplification`,
    extra: [],
  },
  {
    id: "dentai",
    title: "DentAI: dental caries detection",
    category: "deep",
    metric: "Springer",
    summary:
      "Compares five CNN architectures with transfer learning to detect cavities from dental images, with Grad-CAM heatmaps so dentists can see why the model decided.",
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
    metric: "RL agent",
    summary:
      "A dispatch system that learns order assignment and traffic-aware routing from experience on a city grid, with three drivers racing 30-minute deadlines.",
    tags: ["Python", "Reinforcement learning", "Routing"],
    code: `${GITHUB}/Dynamic-Multi-Order-Delivery-Optimization-with-Traffic-Aware-Routing`,
    extra: [],
  },
  {
    id: "platevision",
    title: "PlateVision: license plates in real time",
    category: "deep",
    metric: "Real time",
    summary:
      "Detects and reads license plates from surveillance video with YOLOv5, Haar cascades and Tesseract OCR, then works out the Indian state from the plate pattern.",
    tags: ["YOLOv5", "OpenCV", "Tesseract"],
    code: `${GITHUB}/PlateVision-Real-Time-License-Plate-Detection-OCR-for-Surveillance-Cameras`,
    extra: [],
  },
  {
    id: "scriptnet",
    title: "ScriptNet: handwriting recognition",
    category: "deep",
    metric: "26.9M params",
    summary:
      "A CRNN with a five-layer BiLSTM and CTC loss that reads handwritten words from the IAM dataset, trained end to end with no character segmentation.",
    tags: ["TensorFlow", "CRNN", "CTC"],
    code: `${GITHUB}/Handwritten-Text-Prediction-using-Deep-Learning`,
    extra: [],
  },
  {
    id: "stable-diffusion",
    title: "Text-to-image with Stable Diffusion",
    category: "deep",
    metric: "GenAI",
    summary:
      "Turns text prompts into detailed images with Stable Diffusion, from a command line or a small GUI, with tunable generation parameters.",
    tags: ["Stable Diffusion", "PyTorch", "GenAI"],
    code: `${GITHUB}/Text-to-Image-Generation-with-Stable-Diffusion`,
    extra: [],
  },
  {
    id: "airsense",
    title: "AirSense: air quality forecasting",
    category: "ml",
    metric: "85% accuracy",
    summary:
      "Forecasts air quality from five years of real data, comparing LSTM with SARIMA to show when deep learning actually beats classical statistics.",
    tags: ["LSTM", "SARIMA", "Time series"],
    code: `${GITHUB}/Air-Quality-Forecasting-using-real-time-models-LSTM-and-SARIMA`,
    extra: [],
  },
  {
    id: "milkguard",
    title: "MilkGuard: milk quality prediction",
    category: "ml",
    metric: "70% faster testing",
    summary:
      "Classifies milk quality across 1,000+ samples with SVM, decision tree and random forest models. Published by EAI and covered in the newspaper Gujarat Samachar.",
    tags: ["Scikit-learn", "SVM", "Random Forest"],
    code: `${GITHUB}/Milk-Quality-Prediction-using-SVM-Decision-Tree-and-Random-Forest`,
    extra: [],
  },
  {
    id: "road-safety",
    title: "Road safety analytics dashboard",
    category: "ml",
    metric: "Power BI",
    summary:
      "An interactive dashboard that links accident severity to weather, road surface, vehicle type and day of week, with z-score outlier handling.",
    tags: ["Power BI", "Data cleaning", "Visualization"],
    code: `${GITHUB}/Road_Safety_DataAnalysis`,
    extra: [],
  },
  {
    id: "semanticscore",
    title: "SemanticScore: text similarity API",
    category: "build",
    metric: "Deployed API",
    summary:
      "A Flask REST API that scores how similar two paragraphs are with TF-IDF and cosine similarity, and measures exactly how much preprocessing changes the result.",
    tags: ["Flask", "TF-IDF", "AWS EC2"],
    code: `${GITHUB}/TextSimilarityScore`,
    extra: [],
  },
  {
    id: "flaretrader",
    title: "FlareTrader: multi-asset DeFi platform",
    category: "build",
    metric: "24-hour hackathon",
    summary:
      "Built at the EasyA Hackathon: a trading interface for crypto, stocks and metals powered by live Flare FTSO price oracles on the Coston2 testnet.",
    tags: ["Web3", "Ethers.js", "Flare FTSO"],
    code: `${GITHUB}/Multi-Asset-DeFi-Platform-on-Flare-Netwo`,
    extra: [],
  },
  {
    id: "schedsim",
    title: "SchedSim: CPU scheduling visualizer",
    category: "build",
    metric: "4 algorithms",
    summary:
      "A Python GUI that runs FCFS, SJF, Round Robin and Priority scheduling side by side and compares wait, turnaround and response times.",
    tags: ["Python", "Tkinter", "Operating systems"],
    code: `${GITHUB}/SchedSim-CPU-Scheduling-Algorithm-Visualizer-Performance-Analyzer`,
    extra: [],
  },
  {
    id: "password-audit",
    title: "Leaked password database audit",
    category: "build",
    metric: "Security",
    summary:
      "A Goldman Sachs job simulation: cracked an MD5 password dump, measured how weak the policy was, and recommended salting, bcrypt and a stronger policy.",
    tags: ["Hashcat", "Cryptography", "Security"],
    code: `${GITHUB}/Goldman-Sachs-Crack-Leaked-Password-Database`,
    extra: [],
  },
  {
    // Add the repo link in "code" and this project will appear on the site.
    id: "credit-risk",
    title: "Credit card risk modeling",
    category: "ml",
    metric: "93% accuracy",
    summary:
      "A classifier that flags high-risk credit card applicants, using SHAP to keep financial decisions interpretable.",
    tags: ["XGBoost", "SHAP", "Logistic regression"],
    code: "",
    extra: [],
  },
];

export const experience = [
  {
    title: "AI/ML Research Intern",
    where: "Indian School of Business (ISB)",
    place: "Hyderabad, India",
    when: "Feb 2025 – Jul 2025",
    win: "92% accuracy",
    tags: ["BERT", "spaCy", "Pandas", "Matplotlib"],
    points: [
      "Built and analyzed a 10,000+ entry Indian patent dataset with BERT, spaCy and Pandas to classify AI vs. non-AI innovations by gender, industry and timeline, reaching 92% accuracy.",
      "Delivered an end-to-end analytics report that surfaced the dominant innovation sectors, such as healthcare and real estate, across 20+ years of data.",
    ],
  },
  {
    title: "Junior Research Fellow, Google ExploreCSR",
    where: "IIT Roorkee",
    place: "Roorkee, India",
    when: "Jan 2024 – Jun 2024",
    win: "+25% decision accuracy",
    tags: ["Deep RL", "DDPG", "TD3", "CARLA"],
    points: [
      "Designed a hierarchical deep RL framework that splits autonomous overtaking into lane-change and straight-driving sub-tasks.",
      "Applied DDPG and TD3 for continuous control of steering, throttle and braking in CARLA, improving overtaking decision accuracy by 25%.",
      "Validated safe navigation in high-fidelity simulations with multiple moving and stationary obstacles.",
    ],
  },
  {
    title: "Data Science Research Intern",
    where: "Indian Space Research Organisation (ISRO)",
    place: "Ahmedabad, India",
    when: "Jun 2023 – Aug 2023",
    win: "99.5% accuracy",
    tags: ["Random Forest", "Regression", "NavIC", "GPS"],
    points: [
      "Predicted storm disruption on NavIC S-band satellite signals with Random Forest, Decision Tree and Linear Regression models at 99.5% accuracy.",
      "Analyzed ionospheric disturbances in NavIC and GPS signals during storms and found strong links between S-band anomalies and storm activity.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science, Computer Science",
    where: "Northeastern University",
    place: "Boston, USA",
    when: "2025 – 2027",
    note: "GPA 3.9 / 4.0",
  },
  {
    degree: "Bachelor of Technology, Computer Engineering",
    where: "Pandit Deendayal Energy University",
    place: "Gandhinagar, India",
    when: "2020 – 2024",
    note: "GPA 3.77 / 4.0",
  },
  {
    degree: "Nanodegree, AI Programming with Python",
    where: "Udacity",
    place: "Online",
    when: "Completed",
    note: "",
  },
];

export const achievements = [
  {
    title: "Published author",
    org: "Springer · Elsevier · EAI · AAAI",
    text: "Five papers and chapters, 164 citations and an h-index of 4 before finishing grad school.",
  },
  {
    title: "111 citations on one paper",
    org: "Smart Agricultural Technology, Elsevier",
    text: "My systematic study of smart drip and sprinkler irrigation became a go-to reference in the field.",
  },
  {
    title: "Google ExploreCSR fellow",
    org: "IIT Roorkee",
    text: "Selected as a Junior Research Fellow to work on autonomous driving with deep RL.",
  },
  {
    title: "In the newspaper",
    org: "Gujarat Samachar",
    text: "MilkGuard, my milk quality prediction model, was covered in the regional press.",
  },
  {
    title: "Hackathon builder",
    org: "EasyA Hackathon",
    text: "Shipped a working multi-asset DeFi trading platform in 24 hours.",
  },
];

// cites is the Google Scholar count. Leave it at 0 to hide it.
export const publications = [
  {
    title:
      "Health Misinformation Detection in Hidradenitis Suppurativa Communities Using Multi-Model LLM Ensembles",
    venue: "AAAI ICWSM Workshops",
    year: 2026,
    cites: 0,
    url: SCHOLAR,
  },
  {
    title:
      "A comprehensive and systematic study in smart drip and sprinkler irrigation systems",
    venue: "Smart Agricultural Technology, Elsevier",
    year: 2023,
    cites: 111,
    url: "https://www.sciencedirect.com/science/article/pii/S2772375523001326",
  },
  {
    title: "Milk Quality Prediction Using Machine Learning",
    venue: "EAI Endorsed Transactions on Internet of Things",
    year: 2024,
    cites: 24,
    url: "https://openurl.ebsco.com/EPDB%3Agcd%3A10%3A25038298/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A183567171&crl=c&link_origin=scholar.google.com",
  },
  {
    title:
      "AI-enabled dental caries detection using transfer learning and gradient-based class activation mapping",
    venue: "Journal of Ambient Intelligence and Humanized Computing, Springer",
    year: 2024,
    cites: 19,
    url: "https://link.springer.com/article/10.1007/s12652-024-04795-x",
  },
  {
    title:
      "The Intersection of Industry 4.0 with Formula 1 and Other Motorsports: Future of Racing",
    venue: "Springer book chapter",
    year: 2023,
    cites: 10,
    url: "https://link.springer.com/chapter/10.1007/978-981-97-3173-2_12",
  },
];

export const scholarStats = [
  { value: 164, label: "Citations" },
  { value: 4, label: "h-index" },
  { value: 4, label: "i10-index" },
];

// Photos for the "life outside the terminal" strip.
export const photos = [
  {
    src: "./images/life/husky-welcome.jpg",
    alt: "Drashti at the Northeastern Husky welcome event in front of Ell Hall",
    caption: "Day one as a Husky",
  },
  {
    src: "./images/life/boston-harbor.jpg",
    alt: "Drashti on the Boston waterfront at night",
    caption: "Boston Harbor nights",
  },
  {
    src: "./images/life/times-square.jpg",
    alt: "Drashti in Times Square at night",
    caption: "Times Square",
  },
  {
    src: "./images/life/east-river-sunset.jpg",
    alt: "Drashti by the East River at sunset",
    caption: "East River sunsets",
  },
  {
    src: "./images/life/campus-gate.jpg",
    alt: "Drashti in front of Northeastern University's Krentzman Quad",
    caption: "Krentzman Quad",
  },
  {
    src: "./images/life/times-square-steps.jpg",
    alt: "Drashti on the red steps in Times Square",
    caption: "The red steps",
  },
  {
    src: "./images/life/nyc-skyline.jpg",
    alt: "Drashti in front of the Manhattan skyline",
    caption: "Manhattan skyline",
  },
];
