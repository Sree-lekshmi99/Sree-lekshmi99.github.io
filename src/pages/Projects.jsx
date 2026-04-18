import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ── Category icons ── */
const AISpark = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1 L8 6 L13 7 L8 8 L7 13 L6 8 L1 7 L6 6 Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
  </svg>
)
const WindowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M1 5 L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="3.5" cy="3" r="0.8" fill="currentColor"/>
    <circle cx="6" cy="3" r="0.8" fill="currentColor"/>
  </svg>
)
const ChartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 12 L2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 12 L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 9 L6 5 L8 7 L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="3" r="1.2" fill="currentColor"/>
  </svg>
)
const BarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 12 L2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 12 L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="3" y="7" width="2" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <rect x="6.5" y="4" width="2" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <rect x="10" y="6" width="2" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
)

const catIcon = { 'AI Projects': <AISpark />, 'Full Stack': <WindowIcon />, 'Data Analysis': <ChartIcon />, 'Power BI': <BarIcon /> }

/* ── Shared doodles ── */
const Squiggle = () => (
  <svg className="skills-squiggle" viewBox="0 0 180 14" fill="none" aria-hidden="true">
    <path d="M2 7 C18 2, 34 12, 50 7 C66 2, 82 12, 98 7 C114 2, 130 12, 146 7 C158 3, 168 9, 178 7"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
  </svg>
)
const Arrow = ({ flip }) => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" style={flip ? { transform:'scaleX(-1)' } : {}}>
    <path d="M2 9 C7 3, 13 15, 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M18 9 L14 5 M18 9 L14 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const StarDoodle = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 1 L12.5 9 L20 11 L12.5 13 L11 21 L9.5 13 L2 11 L9.5 9 Z"
      stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>
)

const tabs = [
  { label: 'All', icon: null },
  { label: 'AI Projects', icon: <AISpark /> },
  { label: 'Full Stack', icon: <WindowIcon /> },
  { label: 'Data Analysis', icon: <ChartIcon /> },
  { label: 'Power BI', icon: <BarIcon /> },
]

const featured = {
  id: 0,
  category: 'AI Projects',
  title: 'AI Skincare Recommendation - Profile DM',
  summary: 'Production AI recommendation service for a skincare-focused profile UX, combining user signals, behavior, and product catalog context with LLM orchestration to deliver grounded, contextual recommendations.',
  stack: ['LangChain', 'LangGraph', 'FastAPI', 'AWS Lambda', 'DynamoDB', 'Redis'],
  tags: ['Production AI', 'RAG', 'Agentic AI', 'shipped'],
  detail: `At Profile DM Inc, I worked on an AI-powered skincare recommendation service embedded into the profile UX experience, where the goal was to help users discover the most relevant products based on who they are, how they behave, and what the catalog can support. The problem was not just to "recommend a product," but to make the recommendation feel grounded in the user's ongoing profile journey, including their preferences, engagement patterns, and product context, while still keeping the experience fast, reliable, and aligned with business rules.

The implementation combined FastAPI, AWS Lambda, and a serverless LLM + RAG workflow to fetch and assemble data from internal APIs, including user and item context, and then orchestrate recommendation generation through LangChain and LangGraph. Rather than relying on the LLM alone, the system was designed as a grounded recommendation pipeline: profile signals, behavioral context, and catalog information were retrieved first, and the LLM layer was used to help structure, reason over, and present the recommendation logic. I also worked on ranking and prompt-evaluation workflows so that the service was not only generating responses, but doing so in a measurable way tied to product relevance and user engagement.

A large part of the work was about making the service production-ready. I added safety guardrails, validation checks, and prompt controls so recommendations stayed on-brand, reduced hallucinations, and aligned with customer-facing quality expectations. I also improved performance by optimizing prompts, trimming tokens, and speeding up context retrieval using DynamoDB and Redis, reducing p95 latency by 25% in production. The final result was a user-facing recommendation capability that felt more contextual inside the profile UX while still meeting the operational standards of a production AI service.`,
}

const projects = [
  /* ── 1. Apply Pilot ── */
  {
    id: 15,
    category: 'Full Stack',
    categories: ['Full Stack', 'AI Projects'],
    note: 'something I made to make my life easier',
    title: 'Apply Pilot',
    video: '/apply_pilot.mp4',
    github: 'https://github.com/Sree-lekshmi99/Apply-pilot-automation',
    stack: ['React', 'Vite', 'OpenAI API', 'Recharts', 'Tailwind CSS', 'localStorage'],
    tags: ['LLM App', 'Full Stack', 'Developer Tools', 'AI Automation'],
    blurb: 'AI-powered job application web app that extracts job details, matches resumes, generates outreach messages, and tracks applications with a visual dashboard.',
    detail: `Apply Pilot brings the core parts of job hunting into one place. Instead of juggling tabs and spreadsheets, the app combines AI assistance, resume handling, outreach generation, tracking, and dashboard-based accountability into a single practical tool for job seekers.

The frontend is built with React 18 and Vite, styled with Tailwind CSS, and uses localStorage to save application records directly in the browser. Resumes are handled via PDF text extraction in the browser, so users can upload a resume and have its content available across the whole app.

The LLM layer runs on the OpenAI API and handles several real workflows: reading a job posting URL (via r.jina.ai for text extraction), pulling out the job title, company, and description, then comparing uploaded resumes to the role to surface the best match. It also generates resume improvement suggestions aligned with ATS screening, and drafts LinkedIn connection messages, follow-ups, referral requests, and common application question responses using the resume and job description as context.

The application tracker lets users save jobs, update statuses, add notes, and follow progress over time. The Recharts dashboard visualizes application activity month by month, making it easier to spot consistency, follow-up patterns, and momentum across the job search.`,
  },

  /* ── 2. ECG ── */
  {
    id: 1,
    category: 'AI Projects',
    note: 'this one kept me up at night',
    title: 'ECG Anomaly Detection',
    github: 'https://github.com/Sree-lekshmi99/LSTM_ECG_Autencoder',
    images: ['/lstm1.jpg', '/lstm2.jpg'],
    stack: ['PyTorch', 'LSTM Autoencoder', 'Python', 'NumPy', 'scikit-learn'],
    tags: ['Deep Learning', 'Healthcare AI', 'Time Series', 'Research Project'],
    blurb: 'LSTM autoencoder trained on 5,000 healthy ECG sequences to flag abnormal rhythms using reconstruction error. 212/219 correct on balanced evaluation.',
    detail: `This project explores ECG anomaly detection as a healthcare time-series problem using an LSTM autoencoder trained on normal heartbeat patterns. The dataset contains 5,000 ECG sequences of 140 timesteps, including normal, PVC, R-on-T, supra-ventricular/ectopic, and unclassified beats; the model was trained only on normal signals so that anomalies could be surfaced through elevated reconstruction loss.

The workflow included ARFF-to-pandas ingestion, reshaping for LSTM input, class distribution analysis, time-series visualization, normalization, tensor conversion, and threshold-based classification. The report shows a chosen threshold of 26, with 212/219 correct normal predictions and 213/219 correct anomaly predictions on balanced evaluation sets. The project uses Python, PyTorch, pandas, NumPy, Matplotlib, and scikit-learn.`,
  },

  /* ── 3. LLM Bug Brief ── */
  {
    id: 2,
    category: 'AI Projects',
    note: 'the first time I clawed my nails into LLM Open API',
    title: 'LLM Bug Brief',
    github: 'https://github.com/Sree-lekshmi99/LLM-Bug-Brief',
    video: '/bug-brief.mp4',
    stack: ['Python', 'OpenAI', 'Typer', 'python-dotenv'],
    tags: ['LLM App', 'Developer Tools', 'Prompt Engineering', 'CLI Tool'],
    blurb: 'CLI tool that converts messy bug reports into structured engineering briefs, GitHub-style issue templates, and priority labels, built with OpenAI and Typer.',
    detail: `LLM Bug Brief is a CLI-first LLM tool for turning messy bug reports into cleaner engineering artifacts. Built with Python, OpenAI, Typer, and python-dotenv, it summarizes reports, extracts structured JSON-style metadata, rewrites issues into GitHub-style templates, and suggests priority or labels.

It fits well as an applied-LLM developer tools project focused on triage automation and prompt design, demonstrating structured output generation, prompt chaining, and practical developer workflow automation.`,
  },

  /* ── 4. AI Medi ChatBot ── */
  {
    id: 3,
    category: 'AI Projects',
    note: 'pretty challenging, not gonna lie',
    title: 'AI Medi ChatBot (Meddy)',
    github: 'https://github.com/Sree-lekshmi99/AI_Medi_ChatBot',
    stack: ['Python', 'PyTorch', 'NLTK', 'scikit-learn', 'Flask'],
    tags: ['AI Chatbot', 'Healthcare AI', 'NLP', 'Classification'],
    blurb: 'Healthcare chatbot that predicts likely diseases from symptoms and returns descriptions and precautions through a conversational web interface.',
    detail: `Meddy is a symptom-based healthcare chatbot built with Python, PyTorch, NLTK, scikit-learn, Flask, pandas, and NumPy. It processes symptom input, classifies likely intents and disease categories, and responds with descriptions and precautionary guidance in a conversational format.

The system combines NLP-based intent recognition with a multi-class disease classification model, making it an applied NLP and ML healthcare assistant project. The Flask web interface allows users to interact naturally with the bot, which returns grounded health guidance rather than open-ended LLM responses.`,
  },

  /* ── 5. Used Car ── */
  {
    id: 9,
    category: 'Data Analysis',
    title: 'Used Car Price Predictor',
    github: 'https://github.com/Sree-lekshmi99/price-predictor-used-car-master',
    image: '/car_price.jpg',
    stack: ['Python', 'XGBoost', 'Random Forest', 'scikit-learn', 'pandas'],
    tags: ['Applied ML', 'Regression', 'Feature Engineering', 'Tabular Modeling'],
    blurb: 'ML regression pipeline on 370,000 used car listings. Best model hit R² of 0.86 and RMSE of 1,698 after engineered features and outlier handling.',
    detail: `This project predicts used-car prices from a dataset of 370,000 rows and 20 columns, using features such as mileage, brand, model, fuel type, gearbox, registration year, and repair status. The pipeline includes missing-value and duplicate removal, translation of German categorical values into English, one-hot encoding, feature engineering (age_of_car, mileage_per_year), MinMax scaling, log transformation, and outlier handling with IQR.

Multiple regressors were compared: Decision Tree, Random Forest, XGBoost, Support Vector Regressor, Lasso, Ridge, and Gradient Boosting. The best-performing models achieved R² up to 0.86 and RMSE as low as 1,698, making this a strong applied-ML and feature-engineering project in structured regression modeling.`,
  },

  /* ── 5. Finance Dashboard ── */
  {
    id: 14,
    category: 'Power BI',
    title: 'Finance Dashboard',
    github: 'https://github.com/Sree-lekshmi99/Finance_dashboard_PowerBI',
    image: '/finance.jpg',
    stack: ['Power BI', 'DAX', 'SQL'],
    tags: ['Power BI', 'Business Intelligence', 'Finance Analytics'],
    blurb: 'Interactive Power BI finance dashboard for KPI tracking and financial reporting, built for business stakeholders who need clear, drill-down visibility into key metrics.',
    detail: `A finance-focused Power BI dashboard project built for interactive reporting and KPI visualization. The dashboard provides business stakeholders with drill-down visibility into key financial metrics, combining DAX measures and SQL-backed data sources for a clean, interactive reporting experience.

Positioned as a visualization and reporting project centered on interactive financial analysis in Power BI, demonstrating BI design, DAX formula authoring, and the ability to translate financial data into clear executive-facing dashboards.`,
  },

  /* ── 6. Mortgage Rates ── */
  {
    id: 11,
    category: 'Data Analysis',
    title: 'Mortgage Rates & Home Loan Forecasting',
    github: 'https://github.com/Sree-lekshmi99/Impact_of_mortgage_rate_on_homeloans',
    images: ['/mortage3.png', '/mortage4.png', '/mortage5.png'],
    stack: ['R', 'RegARIMA', 'VAR', 'FRED Data', 'tidyverse', 'vars'],
    tags: ['Time Series', 'Financial Analytics', 'Forecasting', 'R'],
    blurb: 'RegARIMA model outperformed VAR (MAE 6.87 vs 13.68) in forecasting residential loan volumes using 30-year mortgage rates as an external regressor.',
    detail: `This project studies the relationship between 30-year fixed mortgage rates and residential real-estate loans from commercial banks. Using R, FRED economic data, and time-series packages including forecast, vars, fpp3, and tidyverse, the analysis covers decomposition, correlation analysis, stationarity testing, and model comparison.

The RegARIMA model with mortgage rates as an external regressor outperformed the VAR model, with MAE 6.87518 versus 13.68, positioning this as a financial forecasting study relevant to lending strategy, risk assessment, and market-trend analysis. The project demonstrates rigorous time-series methodology and economic data storytelling.`,
  },

  /* ── The rest ── */
  {
    id: 4,
    category: 'AI Projects',
    title: 'Reinforcement Learning Taxi-v3',
    stack: ['Python', 'OpenAI Gym', 'Q-Learning'],
    tags: ['Reinforcement Learning', 'Experimental', 'Research Project'],
    blurb: 'Q-learning agent built from scratch across 10,000 episodes, going from negative rewards to consistent task completion through epsilon-greedy tuning.',
    detail: `Implemented the Q-learning algorithm from scratch using OpenAI Gym's Taxi-v3. Designed and tuned epsilon-greedy exploration, Q-table updates, learning rate, discount factor, and exploration decay across 10,000 episodes.

Evaluated and visualized learning using episode reward tracking, demonstrating steady improvement from negative initial rewards to consistent successful task completion. The project explores core RL concepts: exploration vs. exploitation, reward shaping, and policy convergence, in a controlled grid-world environment.`,
  },
  {
    id: 5,
    category: 'Full Stack',
    title: 'eGate Pass & Dispatch Automation',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Oracle ERP', 'CNN'],
    tags: ['Production System', 'Logistics Tech', 'Computer Vision', 'shipped'],
    blurb: 'Production dispatch platform handling 400+ daily vehicle entries at Steel Authority of India. QR-based checkpoint verification cut processing time by 50%.',
    detail: `At Steel Authority of India, I worked on a production logistics platform that digitized the workflow around vendor goods pickup, dispatch coordination, and gate verification. Built with React, Node.js/Express, PostgreSQL, Docker, REST APIs, and Oracle ERP integration, the system supported 400+ daily vehicle entries and replaced manual steps with structured flows for slot scheduling, shipment visibility, truck and driver registration, QR-based pass issuance, and checkpoint validation.

A containerized CNN-based QR/code verification service improved checkpoint speed by 50%. I also helped solve integration and data-flow issues between in-house systems and Oracle ERP via REST APIs for real-time updates, reducing vendor wait times and increasing pickup efficiency across plant operations.`,
  },
  {
    id: 6,
    category: 'Full Stack',
    title: 'Carbon Footprint Tracker',
    github: 'https://github.com/Sree-lekshmi99/Carbon_emission_project',
    stack: ['React', 'Node.js', 'AWS Lambda', 'Amazon Lex', 'DynamoDB', 'Kibana'],
    tags: ['Cloud Project', 'Serverless', 'Sustainability Tech', 'AWS'],
    blurb: 'Serverless app with an AWS Lex chatbot for logging food purchases and tracking carbon emissions, visualized with Kibana dashboards and budget alerts via SNS.',
    detail: `This project is a cloud-native carbon footprint tracker focused on food consumption. Users can enter a food item and quantity through a chatbot, calculate emissions in kg CO2 equivalent, set an emission budget, and track whether they exceed their limit.

The stack includes React, Node.js, and several AWS services: Cognito, Lambda, Amplify, Amazon Lex, DynamoDB, AppSync, Elasticsearch, Kibana, CloudWatch, and SNS. The architecture demonstrates serverless design, chatbot interaction via Amazon Lex, real-time data storage in DynamoDB, and analytics/monitoring through Kibana dashboards and CloudWatch metrics. CI/CD was set up via AWS Amplify.`,
  },
  {
    id: 7,
    category: 'Data Analysis',
    title: 'Sponsor Targeting & Propensity Modeling',
    stack: ['PySpark', 'Snowflake', 'XGBoost', 'Random Forest', 'FastAPI', 'PostgreSQL'],
    tags: ['Applied ML', 'Fundraising Analytics', 'Nonprofit Tech', 'Production Backend'],
    blurb: 'ML pipeline for K–12 arts nonprofit that grew sponsor pipeline by 40%, raised reply rates by 45%, and contributed to 30% more donations than the previous cycle.',
    detail: `At Community School of Arts Foundation, I helped build a sponsor targeting and donor discovery workflow that turned scattered sponsor records, engagement history, and external company signals into a reliable system for identifying which organizations were most likely to support events and fundraising campaigns for K–12 arts access.

The end-to-end workflow used PySpark, Snowflake, SQL, XGBoost, Random Forest, Decision Trees, PostgreSQL, and FastAPI. The pipeline combined internal sponsor data with scraped external company information, then engineered features around industry, location, engagement history, and event fit to model high-potential sponsors. The system supported real decision-making with near real-time synchronization through Snowflake Streams and Salesforce APIs, keeping data updated with less than a 10-minute lag.

I delivered secure FastAPI services with JWT, RBAC, pagination, and rate limiting, then containerized and deployed them using Docker, ECR/ECS, and ALB for zero-downtime releases. Prometheus and Grafana monitoring helped reduce MTTR by 30%. The work translated into measurable impact: sponsor pipeline grew by 40%, reply rates increased by 45%, and the foundation saw 30% more donations than the previous cycle.`,
  },
  {
    id: 8,
    category: 'Data Analysis',
    title: 'Student Weakness Analysis',
    stack: ['Python', 'MATLAB', 'XGBoost', 'K-Means', 'MySQL', 'Flask'],
    tags: ['Research', 'Applied ML', 'Educational Analytics', 'Student Success'],
    blurb: 'ML models on LMS data to identify weak subjects and segment cohorts across 8 subjects, contributing to a 30% boost in program outcomes.',
    detail: `At University at Buffalo, I focused on using student performance and engagement data to understand where learners were struggling and how the program could respond more effectively. Using Python, MATLAB, Random Forest, XGBoost, K-Means, SQL, pandas, and MySQL, I built structured feature pipelines from LMS logs, assessments, and grade histories across eight subjects.

The models identified weak subjects, segmented students into meaningful cohorts, and analyzed how new versus existing students were performing. I also introduced diagnostics that flagged weak areas at the subject and topic level, giving stakeholders a more actionable view of where support was needed. The work expanded into program growth strategy, using predictive modeling and ARIMA-based forecasting to improve student registrations post-COVID.

To make results usable, I built Flask REST APIs, Power BI dashboards, and Streamlit apps so both technical and non-technical stakeholders could explore cohort trends and intervention outcomes. The practical result was a 30% boost in program outcomes and a data-driven foundation for smarter registration and outreach decisions.`,
  },
  {
    id: 10,
    category: 'Data Analysis',
    title: 'San Francisco Crime Analysis',
    github: 'https://github.com/Sree-lekshmi99/Crime_Analysis_San_Fransisco',
    stack: ['R', 'ggplot2', 'leaflet', 'forecast', 'ARIMA', 'ETS'],
    tags: ['Analytics', 'Time Series', 'Geospatial Analysis', 'Urban Data'],
    blurb: '15 years of SF crime data analyzed for temporal patterns, hotspot districts, and future trends using EDA, geospatial mapping, and ARIMA/ETS forecasting in R.',
    detail: `This project analyzes 15 years of San Francisco crime data to uncover temporal patterns, hotspot distributions, and future crime trends. The work uses R with libraries such as dplyr, tidyr, ggplot2, forecast, lubridate, and leaflet, combining data cleaning, EDA, geospatial mapping, and forecasting methods including ARIMA and ETS.

Key findings include the prevalence of theft, time-based concentration patterns, hotspot districts, and the practical value of comparing simple and complex forecasting models. The project is best framed as an analytical, research-style data science build focused on safety, forecasting, and spatial insights, with visualizations that communicate trends clearly to both technical and policy audiences.`,
  },
  {
    id: 12,
    category: 'Power BI',
    title: 'Student Cohort Dashboard',
    stack: ['Power BI', 'SQL', 'Python', 'MySQL', 'DAX'],
    tags: ['Dashboard', 'Educational Analytics', 'Real-world Use'],
    blurb: 'Interactive Power BI dashboard surfacing cohort-level performance trends, weak-subject signals, and intervention outcomes for academic stakeholders at UB.',
    detail: `Built Power BI dashboards to deliver cohort, cluster, and performance insights at the University at Buffalo. Connected live MySQL data sources with DAX measures to surface weak subjects, cohort comparisons, and intervention outcomes. Designed for both researchers and administrators, balancing analytical depth with readability.

The dashboard allowed stakeholders to drill into subject-level weakness signals, compare cohort performance over time, and track intervention outcomes, translating the ML model outputs from the Student Weakness Analysis project into an accessible, actionable interface.`,
  },
  {
    id: 13,
    category: 'Power BI',
    title: 'Performance Insights Dashboard',
    stack: ['Power BI', 'Streamlit', 'SQL', 'pandas', 'A/B Testing'],
    tags: ['Dashboard', 'A/B Testing', 'Research'],
    blurb: 'A/B testing results and student performance metrics visualized for program leads, with executive summaries alongside technical deep-dives in companion Streamlit apps.',
    detail: `Built companion Streamlit apps and Power BI reports to make A/B testing outcomes and student performance metrics accessible to program leads. Analyzed new vs. existing student performance using SQL, pandas, and A/B testing. Designed side-by-side views for technical deep-dives and executive summaries.

The work bridged the gap between data science outputs and stakeholder communication, making it easy for program leads to understand which interventions were working and where additional support was needed, without requiring them to dig into raw model outputs.`,
  },
]

function TagChip({ label }) {
  return <span className="proj-tag">{label}</span>
}

const ctaLabels = ['Read story →', 'Build notes →', 'Peek inside →']

function ProjectCard({ p, onContext }) {
  return (
    <article className={`proj-card${p.accent ? ' proj-card-accent' : ''}`}>
      {p.note && (
        <div className="proj-card-note">{p.note}</div>
      )}
      <div className="proj-card-top">
        {(p.categories || [p.category]).map(cat => (
          <span className="proj-cat" key={cat}>
            <span className="cat-icon">{catIcon[cat]}</span>
            {cat}
          </span>
        ))}
      </div>
      <h3 className="proj-title">{p.title}</h3>
      <p className="proj-blurb">{p.blurb}</p>
      <div className="proj-chips">
        {p.stack.slice(0, 4).map(s => <span className="f-chip" key={s}>{s}</span>)}
        {p.stack.length > 4 && <span className="f-chip-more">+{p.stack.length - 4}</span>}
      </div>
      <div className="proj-tags">
        {p.tags.map(t => <TagChip key={t} label={t} />)}
      </div>
      <div className="proj-card-actions">
        <button className="proj-context" onClick={() => onContext(p)}>
          {ctaLabels[p.id % 3]}
        </button>
        {p.github && (
          <a className="proj-github" href={p.github} target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C3.686 1 1 3.686 1 7c0 2.652 1.72 4.9 4.104 5.694.3.055.41-.13.41-.288 0-.142-.005-.518-.008-1.017-1.669.363-2.02-.804-2.02-.804-.273-.693-.666-0.878-.666-.878-.545-.372.04-.365.04-.365.602.043.92.619.92.619.535.917 1.404.652 1.746.499.054-.388.21-.652.38-.802-1.332-.152-2.732-.666-2.732-2.963 0-.655.234-1.19.617-1.61-.062-.151-.267-.761.059-1.587 0 0 .503-.161 1.648.614A5.74 5.74 0 017 4.58c.51.002 1.022.069 1.501.202 1.144-.775 1.646-.614 1.646-.614.327.826.122 1.436.06 1.587.384.42.616.955.616 1.61 0 2.304-1.403 2.81-2.74 2.958.216.186.408.552.408 1.113 0 .803-.007 1.452-.007 1.649 0 .16.108.347.413.288C11.282 11.898 13 9.65 13 7c0-3.314-2.686-6-6-6z"
                fill="currentColor"/>
            </svg>
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All')
  const [modal, setModal] = useState(null)
  const location = useLocation()

  // Auto-open a project modal when arriving from the Experience page
  useEffect(() => {
    const id = location.state?.openProjectId
    if (id === undefined || id === null) return
    // id 0 is the featured project
    if (id === 0) { setModal(featured); return }
    const found = projects.find(p => p.id === id)
    if (found) setModal(found)
  }, [location.state])

  const filtered = activeTab === 'All' ? projects : projects.filter(p =>
    p.categories ? p.categories.includes(activeTab) : p.category === activeTab
  )
  const showFeatured = activeTab === 'All' || activeTab === 'AI Projects'

  return (
    <div className="skills-page projects-page">
      {/* ── headline ── */}
      <div className="skills-head">
        <div className="skills-doodle-row" aria-hidden="true">
          <Arrow /><StarDoodle /><Arrow flip />
        </div>
        <h1 className="skills-title">What I've<br />Built</h1>
        <Squiggle />
        <p className="skills-sub">Filter by category, or browse everything.</p>
      </div>

      {/* ── filter tabs ── */}
      <div className="proj-tabs">
        <p className="proj-tabs-hint">pick your flavour</p>
        {tabs.map(t => (
          <button
            key={t.label}
            className={`proj-tab ${activeTab === t.label ? 'proj-tab-active' : ''}`}
            onClick={() => setActiveTab(t.label)}
          >
            {t.icon && <span className="tab-icon">{t.icon}</span>}
            {t.label}
          </button>
        ))}
      </div>

      {/* ── featured hero card ── */}
      {showFeatured && (
        <article className="proj-featured">
          <div className="featured-left">
            <div className="featured-label-row">
              <span className="featured-label">★ Featured Build</span>
              <span className="featured-fav-note">one of my favorite builds ✦</span>
              <span className="proj-cat">
                <span className="cat-icon"><AISpark /></span>
                AI Projects
              </span>
            </div>
            <h2 className="featured-title">{featured.title}</h2>
            <p className="featured-summary">{featured.summary}</p>
            <div className="proj-chips">
              {featured.stack.map(s => <span className="f-chip f-chip-featured" key={s}>{s}</span>)}
            </div>
            <div className="proj-tags" style={{ marginTop: 6 }}>
              {featured.tags.map(t => <TagChip key={t} label={t} />)}
            </div>
            <div className="featured-cta-row">
              <button className="featured-cta" onClick={() => setModal(featured)}>
                Read the full story →
              </button>
            </div>
          </div>
          <div className="featured-right" aria-hidden="true">
            <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
              <ellipse cx="110" cy="54" rx="38" ry="14" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <path d="M72 54 L72 100" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <path d="M148 54 L148 100" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <path d="M72 100 Q72 114 110 114 Q148 114 148 100" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="none"/>
              <path d="M180 20 L183 32 L195 35 L183 38 L180 50 L177 38 L165 35 L177 32 Z"
                stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity="0.55" fill="none"/>
              <path d="M30 140 C50 120, 80 160, 100 140 C120 120, 150 155, 170 140"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none"/>
              <path d="M170 140 L162 134 M170 140 L163 147"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
              <path d="M45 170 L47 176 L53 178 L47 180 L45 186 L43 180 L37 178 L43 176 Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.45" fill="none"/>
              <path d="M60 90 C70 84,80 96,90 90 C100 84,110 96,120 90"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" fill="none"/>
            </svg>
          </div>
        </article>
      )}

      {/* ── project grid ── */}
      <div className={`proj-grid ${activeTab === 'All' ? 'proj-grid-all' : ''}`}>
        {filtered.map((p, i) => (
          <div
            key={p.id}
            className={activeTab === 'All' && i === filtered.length - 1 && filtered.length % 2 !== 0
              ? 'proj-grid-wide'
              : ''}
          >
            <ProjectCard p={p} onContext={setModal} />
          </div>
        ))}
      </div>

      {/* ── modal ── */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)}>✕</button>
            <div style={{ display:'flex', gap:8, marginBottom:8, flexWrap:'wrap' }}>
              {(modal.categories || [modal.category]).map(cat => (
                <span className="proj-cat" key={cat} style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <span className="cat-icon">{catIcon[cat]}</span>
                  {cat}
                </span>
              ))}
            </div>
            <h2 className="modal-title">{modal.title}</h2>
            <div className="proj-chips" style={{ margin: '10px 0 12px' }}>
              {(modal.stack || []).map(s => <span className="f-chip" key={s}>{s}</span>)}
            </div>
            <div className="proj-tags" style={{ marginBottom: 16 }}>
              {(modal.tags || []).map(t => <TagChip key={t} label={t} />)}
            </div>
            {modal.github && (
              <a className="modal-github" href={modal.github} target="_blank" rel="noreferrer">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C3.686 1 1 3.686 1 7c0 2.652 1.72 4.9 4.104 5.694.3.055.41-.13.41-.288 0-.142-.005-.518-.008-1.017-1.669.363-2.02-.804-2.02-.804-.273-.693-.666-0.878-.666-.878-.545-.372.04-.365.04-.365.602.043.92.619.92.619.535.917 1.404.652 1.746.499.054-.388.21-.652.38-.802-1.332-.152-2.732-.666-2.732-2.963 0-.655.234-1.19.617-1.61-.062-.151-.267-.761.059-1.587 0 0 .503-.161 1.648.614A5.74 5.74 0 017 4.58c.51.002 1.022.069 1.501.202 1.144-.775 1.646-.614 1.646-.614.327.826.122 1.436.06 1.587.384.42.616.955.616 1.61 0 2.304-1.403 2.81-2.74 2.958.216.186.408.552.408 1.113 0 .803-.007 1.452-.007 1.649 0 .16.108.347.413.288C11.282 11.898 13 9.65 13 7c0-3.314-2.686-6-6-6z"
                    fill="currentColor"/>
                </svg>
                View on GitHub →
              </a>
            )}
            {modal.video && (
              <video className="modal-video" src={modal.video} controls playsInline />
            )}
            {modal.image && (
              <img src={modal.image} alt={modal.title} className="modal-img" />
            )}
            {modal.images && (
              <div className="modal-img-grid">
                {modal.images.map((src, i) => (
                  <img key={i} src={src} alt={`${modal.title} ${i + 1}`} className="modal-img" />
                ))}
              </div>
            )}
            <div className="modal-detail">
              {(modal.detail || '').split('\n\n').map((para, i) => (
                <p key={i} style={{ marginBottom: '1em' }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── transition ── */}
      <Link to="/experience" className="table-teaser">
        <span className="table-teaser-text">Want to know the origin story? Scroll for the lore ↓</span>
        <span className="table-teaser-cue">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2 L8 14 M3 9 L8 14 L13 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          experience
        </span>
      </Link>
    </div>
  )
}
