import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
  title: 'Recommendation Microservice',
  summary: 'Serverless AI recommendation engine that matches users to products in real-time — built with RAG, tool-calling, and safety guardrails in production at Profile DM.',
  stack: ['LangChain', 'LangGraph', 'FastAPI', 'AWS Lambda', 'DynamoDB', 'Redis'],
  tags: ['production-ready', 'shipped', 'backend-heavy'],
  detail: 'Built an AI-powered recommendation microservice using a serverless LLM and RAG on AWS Lambda and FastAPI. Orchestrated retrieval and tool-calling workflows with LangChain and LangGraph, combining user and item data from internal APIs to generate grounded recommendations. Reduced p95 latency by 25% through prompt optimization, token trimming, and faster context retrieval with DynamoDB and Redis. Established safety guardrails, validation checks, and prompt controls to keep recommendations on-brand, reduced hallucinations, and aligned with business rules. Designed ranking and prompt-evaluation workflows to improve recommendation quality, measuring impact through latency, acceptance rate, and engagement signals.',
}

const projects = [
  {
    id: 1, category: 'AI Projects',
    title: 'ECG Anomaly Detection',
    stack: ['PyTorch', 'LSTM Autoencoder'],
    tags: ['research-y', 'experimental'],
    blurb: 'LSTM autoencoder trained on healthy ECG signals to flag anomalies using reconstruction error — improved sensitivity by 5%.',
    detail: 'Built an ECG anomaly detection model in PyTorch using an LSTM autoencoder trained on healthy ECG signals. Compared new signals against the model\'s reconstructed output using reconstruction error to identify abnormal patterns. Tuned reconstruction-loss thresholds and applied signal normalization and anomaly segmentation, improving detection sensitivity by 5%.',
  },
  {
    id: 2, category: 'AI Projects',
    title: 'Reinforcement Learning Taxi-v3',
    stack: ['Python', 'OpenAI Gym', 'Q-Learning'],
    tags: ['experimental', 'research-y'],
    blurb: 'Q-learning agent built from scratch across 10,000 episodes — went from negative rewards to consistent task completion.',
    detail: 'Implemented the Q-learning algorithm from scratch using OpenAI Gym\'s Taxi-v3. Designed and tuned epsilon-greedy exploration, Q-table updates, learning rate, discount factor, and exploration decay across 10,000 episodes. Evaluated and visualized learning using episode reward tracking, demonstrating steady improvement from negative initial rewards to consistent successful task completion.',
  },
  {
    id: 3, category: 'Full Stack',
    title: 'Vendor eGate Pass & Slot Booking',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    tags: ['shipped', 'real-world use', 'backend-heavy'],
    blurb: 'Self-service gate pass system handling 400+ daily vehicle entries, with CNN-based QR verification that cut checkpoint time by 50%.',
    detail: 'Implemented a vendor self-service eGate pass and slot-booking system at Steel Authority of India. Structured workflows for slot scheduling, shipment visibility, QR-based pass issuance, and gate checkpoint verification. Containerized a CNN-based QR/code verification service with Docker, improving checkpoint speed by 50%. Connected to Oracle ERP via REST APIs for real-time updates.',
  },
  {
    id: 4, category: 'Full Stack',
    title: 'Carbon Emission Analyzer',
    stack: ['Node.js', 'React', 'AWS Lambda', 'DynamoDB', 'Elasticsearch'],
    tags: ['shipped', 'production-ready'],
    blurb: 'Serverless app with an AWS Lex chatbot for logging purchases and calculating carbon footprint, visualized in Kibana.',
    detail: 'Developed an API-driven serverless backend using AWS Lambda and API Gateway. Implemented a chatbot using AWS Lex to log purchased products and calculate carbon emissions. Integrated DynamoDB with Elasticsearch to visualize metrics in Kibana — product vs. emission comparisons. Set up CI/CD via AWS Amplify.',
  },
  {
    id: 5, category: 'Data Analysis',
    title: 'Sponsor Targeting & Propensity Modeling',
    stack: ['PySpark', 'Snowflake', 'XGBoost', 'Random Forest', 'FastAPI'],
    tags: ['shipped', 'real-world use', 'backend-heavy'],
    blurb: 'End-to-end ML pipeline that grew the sponsor pipeline by 40% and raised reply rates by 45% — contributed to 30% more donations.',
    detail: 'Developed an end-to-end sponsor targeting and propensity modeling workflow using PySpark, Snowflake, XGBoost, Random Forest, and Decision Trees. Grew the sponsor pipeline by 40% by scraping external company data and engineering features from industry, location, and engagement history. Raised sponsor reply rates by 45% and contributed to 30% more donations than the previous cycle.',
  },
  {
    id: 6, category: 'Data Analysis',
    title: 'Student Performance Analytics',
    stack: ['Python', 'MATLAB', 'XGBoost', 'K-Means', 'MySQL', 'Flask'],
    tags: ['research-y', 'real-world use'],
    blurb: 'ML models on LMS data to identify weak subjects and segment cohorts — contributed to a 30% boost in program outcomes.',
    detail: 'Trained ML models using Random Forest, XGBoost, and K-Means on student performance and LMS data to identify weak subjects, segment cohorts, and drive targeted interventions. Engineered feature pipelines from LMS logs, assessments, and historical grades across 8 subjects stored in MySQL. Built Flask REST APIs and introduced diagnostics to flag weak areas at subject and topic level.',
  },
  {
    id: 7, category: 'Power BI',
    title: 'Student Cohort Dashboard',
    stack: ['Power BI', 'SQL', 'Python', 'MySQL'],
    tags: ['dashboard-heavy', 'real-world use'],
    blurb: 'Interactive dashboard surfacing cohort-level performance trends and intervention signals for academic stakeholders.',
    detail: 'Built Power BI dashboards to deliver cohort, cluster, and performance insights at the University at Buffalo. Connected live MySQL data sources with DAX measures to surface weak subjects, cohort comparisons, and intervention outcomes. Designed for both researchers and administrators, balancing analytical depth with readability.',
  },
  {
    id: 8, category: 'Power BI',
    title: 'Performance Insights Dashboard',
    stack: ['Power BI', 'Streamlit', 'SQL', 'A/B Testing'],
    tags: ['dashboard-heavy', 'research-y'],
    blurb: 'A/B testing results and performance metrics visualized for program leads — executive summaries alongside technical deep-dives.',
    detail: 'Built companion Streamlit apps and Power BI reports to make A/B testing outcomes and student performance metrics accessible to program leads. Analyzed new vs. existing student performance using SQL, pandas, and A/B testing. Designed side-by-side views for technical deep-dives and executive summaries.',
  },
]

function TagChip({ label }) {
  return <span className="proj-tag">{label}</span>
}

function ProjectCard({ p, onContext }) {
  return (
    <article className="proj-card">
      <div className="proj-card-top">
        <span className="proj-cat">
          <span className="cat-icon">{catIcon[p.category]}</span>
          {p.category}
        </span>
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
      <button className="proj-context" onClick={() => onContext(p)}>
        Need more context? →
      </button>
    </article>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All')
  const [modal, setModal] = useState(null)

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab)
  const showFeatured = activeTab === 'All' || activeTab === 'AI Projects'

  return (
    <div className="skills-page">
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
            {/* icon cluster doodle */}
            <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
              {/* database */}
              <ellipse cx="110" cy="54" rx="38" ry="14" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <path d="M72 54 L72 100" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <path d="M148 54 L148 100" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <path d="M72 100 Q72 114 110 114 Q148 114 148 100" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="none"/>
              {/* sparkle top right */}
              <path d="M180 20 L183 32 L195 35 L183 38 L180 50 L177 38 L165 35 L177 32 Z"
                stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity="0.55" fill="none"/>
              {/* arrow loop */}
              <path d="M30 140 C50 120, 80 160, 100 140 C120 120, 150 155, 170 140"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none"/>
              <path d="M170 140 L162 134 M170 140 L163 147"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
              {/* tiny star bottom left */}
              <path d="M45 170 L47 176 L53 178 L47 180 L45 186 L43 180 L37 178 L43 176 Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.45" fill="none"/>
              {/* squiggle */}
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
            <span className="proj-cat" style={{ marginBottom: 8, display:'flex', alignItems:'center', gap:6 }}>
              <span className="cat-icon">{catIcon[modal.category]}</span>
              {modal.category}
            </span>
            <h2 className="modal-title">{modal.title}</h2>
            <div className="proj-chips" style={{ margin: '10px 0 18px' }}>
              {(modal.stack || []).map(s => <span className="f-chip" key={s}>{s}</span>)}
            </div>
            <p className="modal-detail">{modal.detail}</p>
          </div>
        </div>
      )}

      {/* ── transition ── */}
      <Link to="/contact" className="table-teaser">
        <span className="table-teaser-text">Like what you see? Let's actually talk.</span>
        <span className="table-teaser-cue">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2 L8 14 M3 9 L8 14 L13 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          let's talk
        </span>
      </Link>
    </div>
  )
}
