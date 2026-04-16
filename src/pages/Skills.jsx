import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── All doodles: same cream stroke, strokeWidth 2, ~24px ── */
const Sparkles = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 1 L12.5 9 L20 11 L12.5 13 L11 21 L9.5 13 L2 11 L9.5 9 Z"
      stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>
)
const Arrow = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
    <path d="M2 9 C7 3, 13 15, 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M18 9 L14 5 M18 9 L14 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const Cloud = () => (
  <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
    <path d="M6 15 Q3 15 3 11 Q3 7 7 7 Q8 3 12 3 Q16 1 19 5 Q22 4 23 8 Q26 8 26 12 Q26 15 22 15 Z"
      stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>
)
const Database = () => (
  <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
    <ellipse cx="11" cy="6" rx="9" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M2 6 L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 6 L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 14 Q2 18 11 18 Q20 18 20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M2 14 L2 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 14 L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 20 Q2 24 11 24 Q20 24 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
)
const Terminal = () => (
  <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
    <rect x="1" y="1" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M5 7 L9 10 L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 13 L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const Graph = () => (
  <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
    <path d="M2 18 L2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 18 L24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 14 L9 8 L14 11 L19 5 L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="24" cy="7" r="2" fill="currentColor"/>
  </svg>
)

const folders = [
  {
    id: 'languages',
    label: 'Languages',
    icon: <Terminal />,
    items: ['Python', 'TypeScript', 'SQL', 'JavaScript', 'Java'],
    peek: ['Python', 'TypeScript', 'SQL'],
  },
  {
    id: 'ai',
    label: 'AI / Agents',
    icon: <Sparkles />,
    items: ['LangChain', 'LangGraph', 'RAG', 'Tool-calling', 'Prompt Engineering', 'Prompt Eval', 'Embeddings', 'Pinecone', 'ChromaDB'],
    peek: ['LangChain', 'RAG', 'Embeddings'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <Arrow />,
    items: ['FastAPI', 'Flask', 'REST APIs', 'Microservices', 'Async Services', 'JWT', 'OAuth2', 'RBAC', 'Redis'],
    peek: ['FastAPI', 'REST APIs', 'Redis'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    icon: <Cloud />,
    items: ['AWS Lambda', 'API Gateway', 'S3', 'DynamoDB', 'ECS/ECR', 'CloudWatch', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
    peek: ['AWS Lambda', 'Docker', 'Kubernetes'],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    icon: <Graph />,
    items: ['PySpark', 'Snowflake', 'ETL/ELT', 'Feature Engineering', 'A/B Testing', 'Power BI', 'Streamlit'],
    peek: ['PySpark', 'Snowflake', 'A/B Testing'],
  },
  {
    id: 'datastores',
    label: 'Datastores',
    icon: <Database />,
    items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Prometheus', 'Grafana', 'OpenTelemetry'],
    peek: ['PostgreSQL', 'Redis', 'Prometheus'],
  },
]

export default function Skills() {
  const [open, setOpen] = useState(null)

  return (
    <div className="skills-page">
      <div className="skills-head">
        <div className="skills-doodle-row" aria-hidden="true">
          <Arrow />
          <Cloud />
          <Arrow />
        </div>
        <h1 className="skills-title">Stuff I can make<br />computers do</h1>

        {/* squiggle underline accent */}
        <svg className="skills-squiggle" viewBox="0 0 180 14" fill="none" aria-hidden="true">
          <path d="M2 7 C18 2, 34 12, 50 7 C66 2, 82 12, 98 7 C114 2, 130 12, 146 7 C158 3, 168 9, 178 7"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>

        <p className="skills-sub">Click a folder to open it.</p>
      </div>

      <div className="folder-grid">
        {folders.map(f => {
          const isOpen = open === f.id
          return (
            <div
              key={f.id}
              className={`folder ${isOpen ? 'folder-open' : ''}`}
              onClick={() => setOpen(isOpen ? null : f.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setOpen(isOpen ? null : f.id)}
            >
              {/* Tab sits above the card */}
              <div className="folder-tab">
                <span className="folder-icon">{f.icon}</span>
                <span className="folder-label">{f.label}</span>
                <span className="folder-caret">{isOpen ? '▴' : '▾'}</span>
              </div>

              {/* Card body */}
              <div className="folder-body">
                {/* peek chips always visible when closed */}
                {!isOpen && (
                  <>
                    <div className="folder-peek">
                      {f.peek.map(p => <span className="f-chip" key={p}>{p}</span>)}
                      <span className="f-chip-more">+{f.items.length - f.peek.length}</span>
                    </div>
                    <span className="folder-hint" aria-hidden="true">
                      {f.icon}
                    </span>
                  </>
                )}
                {isOpen && (
                  <div className="folder-pills">
                    {f.items.map(item => (
                      <span className="f-pill" key={item}>{item}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <Link to="/projects" className="table-teaser">
        <span className="table-teaser-text">Want proof? Here's what I built.</span>
        <span className="table-teaser-cue">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2 L8 14 M3 9 L8 14 L13 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          things i've built
        </span>
      </Link>
    </div>
  )
}
