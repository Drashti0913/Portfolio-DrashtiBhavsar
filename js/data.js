// All of the site's content lives in this file. Edit it to update the site.
// Projects without a public repo leave "code" empty and show no Code link.

const GITHUB = "https://github.com/Drashti0913";
const SCHOLAR =
  "https://scholar.google.com/citations?user=qf2SqPsAAAAJ&hl=en&oi=ao";

export const profile = {
  name: "Drashti Bhavsar",
  role: "Software, data and AI/ML engineer",
  status: "Available Jan–Aug 2027 for internships and co-ops",
  location: "Boston, MA",
  // PDFs in the repo root. Remove an entry to hide its button.
  resumes: [
    { label: "SDE resume", file: "Drashti-Bhavsar-SDE-Resume.pdf" },
    { label: "ML resume", file: "Drashti-Bhavsar-ML-Resume.pdf" },
  ],
  // The hero headline cycles through these words.
  rotating: [
    "RAG pipelines",
    "real-time apps",
    "RL agents",
    "ML platforms",
    "search engines",
    "LLM ensembles",
  ],
  intro:
    "MS Computer Science at Northeastern, where I research health misinformation with LLM ensembles and lead events for ACM. Before that I shipped ML serving 10K+ requests a day at LOTI AI, trained self-driving agents at IIT Roorkee and built models for ISRO. My research has been cited 164 times.",
  highlights: [
    { value: 10, suffix: "K+", label: "daily requests on ML systems I built" },
    { value: 164, suffix: "", label: "citations on Google Scholar" },
    { value: 9, suffix: "", label: "research and industry roles" },
    { value: 5, suffix: "", label: "papers: Springer, Elsevier, EAI, AAAI" },
    { value: 25, suffix: "+", label: "projects shipped on GitHub" },
  ],
  bio: [
    "I'm a Computer Science grad student at Northeastern University in Boston, and I like problems that are a little bit crazy: teaching a car to overtake on its own, keeping 50 people in sync in one code editor, predicting the 2026 World Cup with 10,000 simulations.",
    "As an ML Engineer Intern at LOTI AI, I built a production inference platform that handled 10K+ requests a day at 99% uptime, and cut deployments from 2 hours to 15 minutes with Docker, Kubernetes and CI/CD. Before that, I trained deep RL agents for autonomous driving as a Google ExploreCSR fellow at IIT Roorkee, mapped Indian AI innovation from 10,000+ patents at ISB, and shipped a real-time satellite-signal classifier at ISRO.",
    "At Northeastern I'm a research assistant building a 28-model LLM framework to catch health misinformation (now an ICWSM 2026 paper) and Head of Events for ACM. My research has been published by Springer, Elsevier, EAI and AAAI, and one paper has been cited 111 times. I want to bring that mix of research depth and production engineering to a team that ships.",
  ],
  email: "drashtiabhavsar9@gmail.com",
  phone: "+1 857-397-6380",
  github: GITHUB,
  linkedin: "https://www.linkedin.com/in/drashtibhavsar9/",
  scholar: SCHOLAR,
  twitter: "https://x.com/BhavsarDrashti2",
};

// Words for the scrolling ticker under the hero.
export const ticker = [
  "Python",
  "Java",
  "TypeScript",
  "React",
  "Node.js",
  "FastAPI",
  "PyTorch",
  "TensorFlow",
  "LangChain",
  "LangGraph",
  "RAG",
  "Kubernetes",
  "Docker",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "AWS",
  "CARLA",
  "Deep RL",
  "MLflow",
];

export const skillGroups = [
  {
    label: "Languages and frontend",
    blurb: "The languages I think in, from systems code to UIs.",
    items: [
      "Python",
      "Java",
      "C++",
      "TypeScript",
      "JavaScript",
      "SQL",
      "R",
      "React",
    ],
  },
  {
    label: "Backend and systems",
    blurb: "APIs and services that stay fast under real traffic.",
    items: [
      "FastAPI",
      "Node.js",
      "Django",
      "Express.js",
      "GraphQL",
      "WebSockets",
      "Kafka",
      "Redis",
    ],
  },
  {
    label: "Cloud and DevOps",
    blurb: "Shipping, scaling and monitoring what I build.",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    label: "LLMs and GenAI",
    blurb: "Retrieval, agents and language models that stay grounded.",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Transformers",
      "Fine-tuning",
      "Prompt engineering",
      "Qdrant",
      "pgvector",
      "Milvus",
      "ColBERT",
    ],
  },
  {
    label: "ML, vision and RL",
    blurb: "Models that see, predict and learn by doing.",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "OpenCV",
      "CARLA",
      "Deep RL",
      "EfficientNet",
      "Vision Transformers",
    ],
  },
  {
    label: "Data and MLOps",
    blurb: "Pipelines, databases and dashboards around the models.",
    items: [
      "PySpark",
      "Airflow",
      "MLflow",
      "PostgreSQL",
      "MongoDB",
      "Elasticsearch",
      "Tableau",
      "Power BI",
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
    id: "code-editor",
    title: "Real-time collaborative code editor",
    category: "build",
    featured: true,
    metric: "50+ live users",
    summary:
      "A Google-Docs-style code editor where 50+ people can type at once with about 100 ms latency. Operational transformation keeps everyone's copy consistent 99.9% of the time, and a Redis and PostgreSQL backend on AWS EC2 cut database load by 60%.",
    tags: ["React", "Node.js", "WebSockets", "Redis", "PostgreSQL"],
    code: "",
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
    id: "world-cup",
    title: "FIFA 2026 World Cup predictor",
    category: "ml",
    metric: "10,000 simulations",
    summary:
      "An ensemble of three XGBoost models and a random forest trained on 35,304 matches and 97 features (0.826 log loss, 0.018 calibration error), fed into 10,000 Monte Carlo tournament runs. Served with FastAPI and Next.js.",
    tags: ["XGBoost", "Monte Carlo", "FastAPI", "Next.js"],
    code: "",
    extra: [],
  },
  {
    id: "patent-search",
    title: "Patent claim hybrid search engine",
    category: "llm",
    featured: true,
    metric: "Scales to 10M patents",
    summary:
      "Search over vehicle patent applications with free-text queries, find-patents-like-this-one, and metadata filters. Blends BM25 with semantic scores, surfaces the best-matching claim, and ships a two-phase recall and re-rank design for scaling to 10 million patents.",
    tags: ["Python", "BM25", "Embeddings", "System design"],
    code: `${GITHUB}/Patent-Claim-Hybrid-Search-Engine`,
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
    id: "delivery",
    title: "Traffic-aware delivery optimization",
    category: "deep",
    metric: "Q-learning + DQN",
    summary:
      "Compares A*, Dijkstra, greedy best-first search and TSP heuristics on dynamic delivery scenarios, then trains Q-learning and DQN agents that adapt routes to live traffic. Scored on travel time, customer wait and completed deliveries.",
    tags: ["Python", "A*", "Dijkstra", "DQN"],
    code: `${GITHUB}/Dynamic-Multi-Order-Delivery-Optimization-with-Traffic-Aware-Routing`,
    extra: [],
  },
  {
    id: "thumbnail-bot",
    title: "YouTube thumbnail analyzer bot",
    category: "build",
    metric: "100+ users",
    summary:
      "A Telegram bot that pulls YouTube thumbnails through three external APIs with OAuth, scores them in parallel with asyncio (20 thumbnails in 60 seconds) and replies in several languages, at 99% uptime.",
    tags: ["Python", "asyncio", "Telegram API", "YouTube API"],
    code: "",
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
    extra: [{ label: "Paper", href: "https://doi.org/10.4108/eetiot.4501" }],
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
];

// Roles with points get a full card. Roles with only a summary get a short one.
export const experience = [
  {
    title: "Research Assistant, AI/ML and Health Misinformation",
    where: "Northeastern University",
    place: "Boston, MA",
    when: "Jan 2026 – May 2026",
    win: "ICWSM 2026 paper",
    tags: ["RoBERTa", "Llama 3", "Mistral", "BioMistral", "UMAP", "HDBSCAN"],
    points: [
      "Researched health misinformation in online Hidradenitis Suppurativa patient communities with NLP, transformer models and multi-model LLM ensembles.",
      "Helped build and evaluate a 28-model framework: RoBERTa sentiment and emotion analysis, UMAP/HDBSCAN clustering, NLI zero-shot classification, and open-source LLMs including Llama 3, Mistral, Flan-T5, BioMistral and GatorTron.",
      "Analyzed 9,838 Reddit posts and comments for cure claims, pseudoscience and commercial promotion, and contributed to the HS Misinformation Index (HSMI) that scores misinformation risk.",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    where: "LOTI AI Inc.",
    place: "Seattle, WA",
    when: "Aug 2024 – Jul 2025",
    win: "10K+ requests/day",
    tags: ["PyTorch", "BGE", "Qwen", "EfficientNet", "Milvus", "Kubernetes"],
    points: [
      "Engineered a production Python inference platform with error handling, rate limiting and monitoring, sustaining 99% uptime across 10K+ daily requests.",
      "Built a Multi-Scale Unified Network (MSUN) in PyTorch that keeps image classification accurate across input sizes, reaching 85–90% on COCO-2017 and beating MS-CNN and SNIPER.",
      "Engineered a semantic search and ranking system that filters rules for AI prompts, benchmarking BGE, Qwen and MPNet embeddings to reach a 75% F1 score and 97% recall.",
      "Developed a hybrid deepfake detector that ensembles EfficientNet and Molmo over full frames and face crops, with a multiprocessing pipeline for real-time video.",
      "Benchmarked TF-IDF and BM25 against SPLADE, ColBERT and SBERT on Milvus, and cut deployments from 2 hours to 15 minutes with Docker, Kubernetes and CI/CD.",
    ],
  },
  {
    title: "AI/ML Research Intern",
    where: "Indian School of Business (ISB)",
    place: "Hyderabad, India",
    when: "Feb 2025 – Jul 2025",
    win: "92% accuracy",
    tags: ["BERT", "spaCy", "SQL", "R", "Pandas"],
    points: [
      "Cleaned and structured 10,000+ Indian government patent records from scratch and classified filings by AI relevance and gender representation with BERT and spaCy, at 92% accuracy.",
      "Automated data collection and transformation, cutting manual ETL effort by 50%, and built dashboards that show technology trends across sectors such as healthcare and real estate.",
    ],
  },
  {
    title: "Junior Research Fellow, Google ExploreCSR",
    where: "IIT Roorkee",
    place: "Uttarakhand, India",
    when: "Jan 2024 – Jun 2024",
    win: "94% success · <50 ms",
    tags: ["PyTorch", "OpenCV", "Deep RL", "DDPG", "TD3", "CARLA"],
    points: [
      "Selected as one of the top 50 students for Google's exploreCSR research mentorship program.",
      "Developed hierarchical deep reinforcement learning models in CARLA for lane changing and overtaking, using depth-camera inputs and obstacle-detection modules.",
      "Engineered state features and reward functions that improved navigation decision accuracy by 25%, reaching a 94% task-success rate with inference under 50 ms.",
    ],
  },
  {
    title: "Data Analyst",
    where: "Virtual Reality Systems",
    place: "Gandhinagar, India",
    when: "Feb 2024 – Apr 2024",
    win: "800 → 200 ms",
    tags: [
      "React",
      "FastAPI",
      "Django",
      "Docker",
      "GitHub Actions",
      "Power BI",
    ],
    points: [
      "Built a full-stack web app with a React frontend and FastAPI/Django backend, cutting API latency from 800 ms to 200 ms and serving 500+ daily active users.",
      "Set up CI/CD with GitHub Actions and Docker, and shipped features in two-week Agile sprints on a microservices architecture.",
      "Built a Power BI dashboard and a rule-based chatbot that converses in three regional languages.",
    ],
  },
  {
    title: "Data Science Research Intern",
    where: "Space Applications Centre, ISRO",
    place: "Ahmedabad, India",
    when: "Jun 2023 – Aug 2023",
    win: "98% accuracy",
    tags: ["Random Forest", "LSTM", "FastAPI", "NavIC", "Time series"],
    points: [
      "Predicted thunderstorms and signal anomalies from NavIC S-band and L-band (L1, L5) satellite data, showing that S-band is more sensitive to atmospheric conditions.",
      "Trained and tuned Random Forest and LSTM models to 98% and 97% accuracy, and deployed a real-time L5-signal classifier with FastAPI that improved positioning accuracy by 23%.",
    ],
  },
  {
    title: "Research Intern",
    where: "India Meteorological Department (IMD)",
    place: "Bhopal, India",
    when: "Jun 2023 – Aug 2023",
    win: "2,000+ radar images",
    tags: ["ConvLSTM", "Vision Transformers", "Autoencoders", "Wradlib"],
    points: [
      "Built a weather-radar dataset from raw IMD files, extracting reflectivity (dBZ) with Wradlib and generating 2,000+ PPI and RHI images.",
      "Explored ConvLSTM, autoencoders and Vision Transformers for spatio-temporal forecasting of radar sequences.",
    ],
  },
  {
    title: "Frontend Developer",
    where: "Nextun Technology",
    place: "Ahmedabad, India",
    when: "May 2023 – Jul 2023",
    win: "~50% more engagement",
    tags: ["JavaScript", "UI/UX"],
    summary:
      "Improved an interactive web app's UI and UX, lifting user engagement by about 50%, working remotely with a cross-functional team.",
  },
  {
    title: "Web Development and Design Intern",
    where: "The Sparks Foundation",
    place: "Remote",
    when: "Mar 2023 – May 2023",
    win: "",
    tags: ["PHP", "HTML", "CSS"],
    summary:
      "Built and designed web projects, including a basic banking system website.",
  },
];

export const education = [
  {
    degree: "Master of Science, Computer Science",
    where: "Northeastern University",
    place: "Boston, USA",
    when: "Aug 2025 – Dec 2027 (expected)",
    note: "GPA 3.9 / 4.0",
  },
  {
    degree: "Bachelor of Technology, Computer Engineering",
    where: "Pandit Deendayal Energy University",
    place: "Gandhinagar, India",
    when: "Graduated May 2024",
    note: "GPA 3.77 / 4.0",
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
    title: "Top 50, Google ExploreCSR",
    org: "IIT Roorkee · Google",
    text: "Selected from a competitive pool for Google's research mentorship, and featured in my university newsletter for it.",
  },
  {
    title: "Merit and research scholarship",
    org: "Academic award",
    text: "Awarded for academic merit and research.",
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

export const leadership = [
  {
    title: "Head of Events",
    where: "ACM at Northeastern University",
    when: "Jan 2026 – present",
    text: "Lead events for Northeastern's ACM student chapter.",
  },
  {
    title: "Mentee, ACM India Summer School",
    where: "IIT Gandhinagar",
    when: "Jun 2025",
    text: "Summer school on AI for Social Good.",
  },
  {
    title: "Mentee, ACM India Winter School",
    where: "IIT Patna",
    when: "Dec 2023",
    text: "Winter school on recent trends in AI and ML for Industry 4.0.",
  },
];

export const certifications = [
  "IBM Data Science (Coursera)",
  "Introduction to Generative AI",
  "ChatGPT Prompt Engineering",
  "Foundations of Responsible AI",
  "AI Programming with Python (Udacity)",
  "English Proficiency Certificate",
];

export const languages = [
  "English (professional)",
  "Hindi (professional)",
  "Gujarati (native)",
];

// cites is the Google Scholar count. Leave it at 0 to hide it.
export const publications = [
  {
    title:
      "Health Misinformation Detection in Hidradenitis Suppurativa Communities Using Multi-Model LLM Ensembles",
    venue: "ICWSM 2026 Workshops (MisD), AAAI",
    year: 2026,
    cites: 0,
    url: "https://workshop-proceedings.icwsm.org/abstract.php?id=2026_44",
  },
  {
    title:
      "A comprehensive and systematic study in smart drip and sprinkler irrigation systems",
    venue: "Smart Agricultural Technology, Elsevier",
    year: 2023,
    cites: 111,
    url: "https://doi.org/10.1016/j.atech.2023.100303",
  },
  {
    title: "Milk Quality Prediction Using Machine Learning",
    venue: "EAI Endorsed Transactions on Internet of Things",
    year: 2024,
    cites: 24,
    url: "https://doi.org/10.4108/eetiot.4501",
  },
  {
    title:
      "AI-enabled dental caries detection using transfer learning and gradient-based class activation mapping",
    venue: "Journal of Ambient Intelligence and Humanized Computing, Springer",
    year: 2024,
    cites: 19,
    url: "https://doi.org/10.1007/s12652-024-04795-x",
  },
  {
    title:
      "The Intersection of Industry 4.0 with Formula 1 and Other Motorsports: Future of Racing",
    venue: "Springer book chapter",
    year: 2023,
    cites: 10,
    url: "https://doi.org/10.1007/978-981-97-3173-2_12",
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
