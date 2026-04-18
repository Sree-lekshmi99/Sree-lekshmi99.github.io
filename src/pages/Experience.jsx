import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const jobs = [
  {
    id: 'profiledm',
    era: '2025 — Now',
    role: 'AI Engineer',
    company: 'Profile DM Inc',
    location: 'Novi, MI',
    tagline: 'Built AI recommendation systems for production use.',
    detail: {
      what: 'AI-powered recommendation service embedded in a skincare profile UX — combining user signals, catalog context, and LLM orchestration.',
      wins: [
        'RAG pipeline on AWS Lambda + FastAPI with LangChain and LangGraph',
        'Cut p95 latency by 25% via prompt optimization and smarter context retrieval with DynamoDB and Redis',
        'Added safety guardrails, prompt controls, and automated regression checks',
      ],
      tools: 'LangChain · LangGraph · FastAPI · AWS Lambda · DynamoDB · Redis · GitHub Actions',
    },
  },
  {
    id: 'csaf',
    era: '2024 — 2025',
    role: 'Data Engineer',
    company: 'Community School of Arts Foundation',
    location: 'Los Angeles, CA',
    tagline: 'Sponsor targeting pipeline that moved the fundraising needle.',
    detail: {
      what: 'End-to-end ML pipeline to identify high-potential sponsors for K–12 arts fundraising campaigns.',
      wins: [
        'Grew sponsor pipeline 40%, reply rates 45%, donations 30% over prior cycle',
        'Near real-time sync via Snowflake Streams and Salesforce APIs',
        'Secure FastAPI services with JWT + RBAC; reduced MTTR 30% with Prometheus monitoring',
      ],
      tools: 'PySpark · Snowflake · XGBoost · Random Forest · FastAPI · Docker · ECS · Prometheus',
    },
  },
  {
    id: 'ub',
    era: '2023 — 2024',
    role: 'ML Research Aide',
    company: 'University at Buffalo',
    location: 'Buffalo, NY',
    tagline: 'ML on student data to understand who was struggling and why.',
    detail: {
      what: 'Built ML models on LMS logs and assessment data to flag weak subjects and segment cohorts across 8 subjects.',
      wins: [
        '30% boost in program outcomes from model-driven intervention targeting',
        'Flask REST APIs and Streamlit apps made insights accessible to non-technical stakeholders',
        'ARIMA forecasting improved post-COVID student registration planning',
      ],
      tools: 'Python · XGBoost · K-Means · MySQL · Flask · Power BI · Streamlit · MATLAB',
    },
  },
  {
    id: 'sail',
    era: '2021 — 2022',
    role: 'Software Engineer',
    company: 'Steel Authority of India',
    location: 'Chhattisgarh, India',
    tagline: 'Production logistics platform for a 400+ vehicle/day steel plant.',
    detail: {
      what: 'Digitized vendor gate passes, slot booking, and shipment dispatch for one of India\'s largest steel producers.',
      wins: [
        'eGate pass system handling 400+ daily entries with Oracle ERP integration',
        'CNN-based QR verification service cut checkpoint time by 50%',
        'Prophet-based traffic forecasting improved slot planning and readiness',
      ],
      tools: 'React · Node.js · PostgreSQL · Docker · Oracle ERP · CNN · REST APIs',
    },
  },
]

function JobCard({ job, isOpen, onToggle }) {
  return (
    <article className={`tl-card${isOpen ? ' tl-card-open' : ''}`}>

      {/* ── Closed face ── */}
      <div className="tl-front" onClick={onToggle}>
        <div className="tl-front-text">
          <span className="tl-era">{job.era}</span>
          <h3 className="tl-role">{job.role}</h3>
          <p className="tl-place">{job.company} <span className="tl-loc">· {job.location}</span></p>
          <p className="tl-tagline">{job.tagline}</p>
        </div>
        <button className="tl-peek-btn" aria-expanded={isOpen}>
          {isOpen ? 'close ↑' : 'what I did here →'}
        </button>
      </div>

      {/* ── Expanded detail ── */}
      {isOpen && (
        <div className="tl-detail">
          <p className="tl-what">{job.detail.what}</p>
          <ul className="tl-wins">
            {job.detail.wins.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
          <p className="tl-tools">{job.detail.tools}</p>
        </div>
      )}
    </article>
  )
}

export default function Experience() {
  const [openId, setOpenId] = useState(null)
  const toggle = id => setOpenId(prev => prev === id ? null : id)

  return (
    <div className="exp-page">

      {/* ── Header ── */}
      <div className="exp-head">
        <h1 className="exp-main-title">Experience</h1>
        <p className="exp-main-sub">the plot points behind the engineer</p>
      </div>

      {/* ── Timeline ── */}
      <div className="tl-wrap">
        <div className="tl-line" />

        {/* NOW */}
        <div className="tl-chapter-label">Now</div>
        <div className="tl-row">
          <div className="tl-slot">
            <JobCard job={jobs[0]} isOpen={openId === jobs[0].id} onToggle={() => toggle(jobs[0].id)} />
          </div>
          <div className="tl-spine">
            <span className="tl-pill">{jobs[0].era}</span>
            <span className="tl-dot" />
          </div>
          <div className="tl-slot" />
        </div>

        {/* BEFORE THAT */}
        <div className="tl-chapter-label">Before that</div>

        {/* Data Engineer — right */}
        <div className="tl-row">
          <div className="tl-slot" />
          <div className="tl-spine">
            <span className="tl-pill">{jobs[1].era}</span>
            <span className="tl-dot" />
          </div>
          <div className="tl-slot">
            <JobCard job={jobs[1]} isOpen={openId === jobs[1].id} onToggle={() => toggle(jobs[1].id)} />
          </div>
        </div>

        {/* ML Research — left */}
        <div className="tl-row">
          <div className="tl-slot">
            <JobCard job={jobs[2]} isOpen={openId === jobs[2].id} onToggle={() => toggle(jobs[2].id)} />
          </div>
          <div className="tl-spine">
            <span className="tl-pill">{jobs[2].era}</span>
            <span className="tl-dot" />
          </div>
          <div className="tl-slot" />
        </div>

        {/* Software Engineer — right */}
        <div className="tl-row">
          <div className="tl-slot" />
          <div className="tl-spine">
            <span className="tl-pill">{jobs[3].era}</span>
            <span className="tl-dot" />
          </div>
          <div className="tl-slot">
            <JobCard job={jobs[3]} isOpen={openId === jobs[3].id} onToggle={() => toggle(jobs[3].id)} />
          </div>
        </div>

        {/* WHERE IT STARTED */}
        <div className="tl-chapter-label">Where it started</div>
        <div className="tl-row">
          <div className="tl-slot">
            <article className="tl-card tl-edu">
              <span className="tl-era">2022 — 2024</span>
              <h3 className="tl-role">M.S. in Data Science</h3>
              <p className="tl-place">University at Buffalo, SUNY</p>
              <p className="tl-edu-note">where I fell in love with ML</p>
            </article>
          </div>
          <div className="tl-spine">
            <span className="tl-pill">2022 — 2024</span>
            <span className="tl-dot" />
          </div>
          <div className="tl-slot" />
        </div>

      </div>

      {/* ── Teaser ── */}
      <Link to="/contact" className="table-teaser" style={{ marginTop: 56 }}>
        <span className="table-teaser-text">Sounds good? Let's actually talk.</span>
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
