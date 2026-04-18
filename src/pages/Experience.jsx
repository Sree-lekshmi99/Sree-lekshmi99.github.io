import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const milestones = [
  {
    id: 1, x: 110, y: 170, side: 'left',
    years: '',
    title: 'B.TECH, CS',
    sub: 'Shri Shankaracharya Group of Institutions',
    note: 'where it all started',
    detail: {
      what: 'Four years building the foundation — algorithms, systems, and the first real taste of what software does in the world.',
      wins: [
        'Core CS fundamentals across data structures, OS, networks, and databases',
        'First exposure to real software development and engineering workflows',
        'Built early projects in Java and Python, laying the mindset for problem-solving',
        'Graduated and stepped straight into production at Steel Authority of India',
      ],
      tools: 'C · C++ · Java · Python · SQL · Data Structures & Algorithms',
    },
  },
  {
    id: 2, x: 650, y: 310, side: 'right',
    years: '2021 - 2022',
    title: 'SOFTWARE ENGINEER',
    sub: 'Steel Authority of India',
    hasProject: true, projectId: 5,
    note: 'saw the potential to dream big',
    detail: {
      what: "Digitized 400+ daily vehicle entries at one of India's largest steel producers. QR verification cut checkpoint time by 50%.",
      wins: [
        'Built eGate pass and slot-booking system with React, Node.js, and PostgreSQL',
        'CNN-based QR verification service cut checkpoint time by 50%',
        'Integrated Oracle ERP via REST APIs for near real-time shipment updates',
        'Saw the scale at which software can change real operations and wanted more',
      ],
      tools: 'React · Node.js · PostgreSQL · Docker · Oracle ERP · CNN · REST APIs',
    },
  },
  {
    id: 3, x: 110, y: 470, side: 'left',
    years: '2022 - 2024',
    title: 'M.S. DATA SCIENCE',
    sub: 'University at Buffalo, SUNY',
    note: 'the bet that changed everything',
    detail: {
      what: 'Moved countries and went all in on data science and ML — built the technical depth that now drives every AI engineering decision.',
      wins: [
        'Deep-dived into ML, statistics, time series, NLP, and distributed systems',
        'Graduated with hands-on research and production experience running in parallel',
        'Built the technical depth that now drives every AI engineering decision',
        'Proved I could rebuild from scratch and come out stronger',
      ],
      tools: 'Python · PyTorch · Scikit-learn · SQL · R · PySpark · Tableau · Power BI',
    },
  },
  {
    id: 4, x: 650, y: 630, side: 'right',
    years: '2023 - 2024',
    title: 'ML RESEARCH AIDE',
    sub: 'University at Buffalo',
    note: 'first time owning research end to end',
    hasProject: true, projectId: 8,
    detail: {
      what: 'ML on student LMS data to surface where learners struggled — contributed to a 30% boost in program outcomes.',
      wins: [
        'ML models on student data contributed to a 30% boost in program outcomes',
        'Built Flask APIs and Power BI dashboards for non-technical stakeholders',
        'ARIMA forecasting improved post-COVID student registration planning',
        'Learned what it means to own a full research pipeline, not just the model',
      ],
      tools: 'Python · XGBoost · K-Means · MySQL · Flask · Power BI · Streamlit · MATLAB',
    },
  },
  {
    id: 5, x: 110, y: 790, side: 'left',
    years: '2024 - 2025',
    title: 'DATA ENGINEER',
    sub: 'Community School of Arts Foundation',
    note: 'gained ownership',
    hasProject: true, projectId: 7,
    detail: {
      what: 'End-to-end ML pipeline turning scattered sponsor data into fundraising momentum — 40% pipeline growth, 30% more donations.',
      wins: [
        'Grew sponsor pipeline 40%, reply rates 45%, donations 30% over prior cycle',
        'FastAPI services with JWT + RBAC, deployed via Docker and ECS',
        'Near real-time sync via Snowflake Streams; reduced MTTR 30% with Prometheus',
        'First role where I owned the full stack: data in, decision out',
      ],
      tools: 'PySpark · Snowflake · XGBoost · FastAPI · Docker · ECS · Prometheus · Grafana',
    },
  },
  {
    id: 6, x: 590, y: 970, side: 'right',
    years: '2025 - Now',
    title: 'AI ENGINEER',
    sub: 'Profile DM Inc',
    note: 'still writing this chapter',
    featured: true,
    hasProject: true, projectId: 0,
    detail: {
      what: 'Production AI recommendations combining user signals, catalog context, and LLM orchestration — cut p95 latency 25% in production.',
      wins: [
        'RAG pipeline on AWS Lambda + FastAPI with LangChain and LangGraph',
        'Cut p95 latency 25% via prompt optimization and smarter context retrieval',
        'Safety guardrails, prompt controls, and automated regression checks in CI',
        'Shipping features users can feel: real recommendations, real impact',
      ],
      tools: 'LangChain · LangGraph · FastAPI · AWS Lambda · DynamoDB · Redis · GitHub Actions',
    },
  },
]

const annotations = [
  { x: 390, y: 218, text: 'first step into the field', rotate: -3 },
  { x: 390, y: 390, text: 'took the leap · took a risk', rotate: 4 },
  { x: 390, y: 550, text: 'the important learning curve', rotate: -3 },
  { x: 390, y: 710, text: 'remembering my potential', rotate: 3 },
  { x: 355, y: 888, text: 'and then it clicked', rotate: -3 },
  { x: 340, y: 1070, text: 'still writing this part...', rotate: -2 },
]

export default function Experience() {
  const [selected, setSelected]           = useState(null)
  const [introComplete, setIntroComplete] = useState(false)
  const navigate = useNavigate()

  const toggle = (id) => {
    setIntroComplete(true)              // skip remaining intro if user clicks early
    setSelected(prev => prev === id ? null : id)
  }
  const close = () => setSelected(null)
  const active = milestones.find(m => m.id === selected)

  // Spotlight position — rests at top-right corner, jumps to active dot
  const beamX = active ? (active.x / 760) * 100 : 91
  const beamY = active ? (active.y / 1220) * 100 : 2

  return (
    <div className="journey-page">

      {/* ── Header ── */}
      <div className="journey-header">
        <p className="journey-eyebrow">the journey of</p>
        <h1 className="journey-title">Growth</h1>
        <p className="journey-hint">tap a point on the path to see what happened there</p>
      </div>

      {/* ── Row: map left, side panel right ── */}
      <div className="journey-content-row">

      {/* Map wrapper */}
      <div className="journey-map-wrap">

        {/* Spotlight layer */}
        <div className="journey-spotlight-wrap" aria-hidden="true">
          <div
            className={[
              'journey-spotlight-beam',
              !introComplete ? 'journey-spotlight-beam--intro' : '',
              active         ? 'journey-spotlight-beam--on'    : '',
            ].join(' ')}
            style={introComplete ? { left: `${beamX}%`, top: `${beamY}%` } : undefined}
            onAnimationEnd={!introComplete ? () => setIntroComplete(true) : undefined}
          />
        </div>

        <svg viewBox="0 0 760 1220" className="journey-svg" aria-hidden="true">

          {/* Winding path — glow layer + crisp line */}
          <path
            d="M 110 170 C 110 240, 650 250, 650 310 C 650 375, 110 405, 110 470 C 110 535, 650 565, 650 630 C 650 695, 110 725, 110 790 C 110 875, 590 905, 590 970 C 590 1035, 110 1060, 110 1130"
            stroke="rgba(186,215,151,0.12)"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 110 170 C 110 240, 650 250, 650 310 C 650 375, 110 405, 110 470 C 110 535, 650 565, 650 630 C 650 695, 110 725, 110 790 C 110 875, 590 905, 590 970 C 590 1035, 110 1060, 110 1130"
            stroke="rgba(246,238,217,0.70)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />

          {/* Annotations */}
          {annotations.map((a, i) => (
            <g key={i} transform={`rotate(${a.rotate}, ${a.x}, ${a.y})`}>
              <text x={a.x} y={a.y} textAnchor="middle"
                fontFamily="Caveat, cursive" fontSize="21"
                fill="none" stroke="#4a0419" strokeWidth="6"
                strokeLinejoin="round" fontStyle="italic">
                {a.text}
              </text>
              <text x={a.x} y={a.y} textAnchor="middle"
                fontFamily="Caveat, cursive" fontSize="21"
                fill="rgba(186,215,151,1)" fontStyle="italic" fontWeight="700">
                {a.text}
              </text>
            </g>
          ))}

          {/* Clickable milestone dots */}
          {milestones.map(m => {
            const isLeft = m.side === 'left'
            const tx = isLeft ? m.x - 22 : m.x + 22
            const anchor = isLeft ? 'end' : 'start'
            const isActive = selected === m.id
            return (
              <g
                key={m.id}
                onClick={() => toggle(m.id)}
                style={{ cursor: 'pointer' }}
                aria-hidden="false"
                role="button"
                aria-label={`${m.title} at ${m.sub}`}
              >
                {/* Invisible hit target */}
                <circle cx={m.x} cy={m.y} r="26" fill="rgba(0,0,0,0.001)" />

                {/* Pulse ring when not active */}
                {!isActive && (
                  <circle cx={m.x} cy={m.y} r="10"
                    className="dot-pulse"
                    fill="none"
                    stroke={m.featured ? 'rgba(186,215,151,0.6)' : 'rgba(246,238,217,0.45)'}
                    strokeWidth="1.5"
                    style={{ animationDelay: `${m.id * 0.35}s` }}
                  />
                )}

                {/* Active ring */}
                {isActive && (
                  <circle cx={m.x} cy={m.y} r="15" fill="none"
                    stroke="rgba(186,215,151,0.55)" strokeWidth="2.5" />
                )}

                {/* Featured ellipse */}
                {m.featured && (
                  <ellipse cx={m.x} cy={m.y} rx="105" ry="40" fill="none"
                    stroke={isActive ? 'rgba(246,238,217,0.8)' : 'rgba(246,238,217,0.45)'}
                    strokeWidth="1.5" />
                )}

                {/* Main dot */}
                <circle cx={m.x} cy={m.y} r={m.featured ? 8 : 6}
                  fill={isActive ? '#BAD797' : m.featured ? '#BAD797' : 'rgba(246,238,217,0.85)'} />

                {/* Labels */}
                {m.years && (
                  <text x={tx} y={m.y - 22} textAnchor={anchor}
                    fontFamily="Caveat, cursive" fontSize="14"
                    fill={isActive ? 'rgba(186,215,151,1)' : 'rgba(186,215,151,0.7)'} fontWeight="700">
                    {m.years}
                  </text>
                )}
                <text x={tx} y={m.y - 5} textAnchor={anchor}
                  fontFamily="Inter, sans-serif" fontSize="13"
                  fill={isActive ? '#ffffff' : 'rgba(246,238,217,0.92)'}
                  fontWeight="800" letterSpacing="0.6">
                  {m.title}
                </text>
                <text x={tx} y={m.y + 12} textAnchor={anchor}
                  fontFamily="Inter, sans-serif" fontSize="10.5"
                  fill={isActive ? 'rgba(186,215,151,0.9)' : 'rgba(186,215,151,0.55)'}>
                  {m.sub}
                </text>
              </g>
            )
          })}

          {/* What's next — dashed */}
          <circle cx="110" cy="1130" r="42" fill="none"
            stroke="rgba(246,238,217,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="110" cy="1130" r="5" fill="rgba(246,238,217,0.30)" />
          <text x="165" y="1118" textAnchor="start"
            fontFamily="Caveat, cursive" fontSize="14" fill="rgba(186,215,151,0.5)" fontWeight="700">
            next chapter
          </text>
          <text x="165" y="1136" textAnchor="start"
            fontFamily="Inter, sans-serif" fontSize="13"
            fill="rgba(246,238,217,0.40)" fontWeight="700" letterSpacing="0.8">
            WHAT'S NEXT?
          </text>
          <text x="165" y="1153" textAnchor="start"
            fontFamily="Caveat, cursive" fontSize="13" fill="rgba(186,215,151,0.32)">
            page still loading...
          </text>
        </svg>

      </div>{/* end map-wrap */}

      {/* Side panel — always in DOM so width can transition smoothly */}
      <div className={`journey-side-panel${active ? ' journey-side-panel--open' : ''}`}>
        {active && (
          <div className="journey-side-content" key={active.id}>
            <button className="journey-detail-card-close" onClick={close} aria-label="Close">×</button>

            {active.years && <span className="journey-detail-card-years">{active.years}</span>}
            <h3 className="journey-detail-card-role">{active.title}</h3>
            <p className="journey-detail-card-company">{active.sub}</p>
            {active.note && <span className="journey-detail-card-note">{active.note}</span>}

            <p className="journey-detail-card-tools">{active.detail.tools}</p>

            <p className="journey-detail-card-what">{active.detail.what}</p>

            {active.hasProject && (
              <button
                className="journey-projects-btn"
                onClick={() => navigate('/projects', { state: { openProjectId: active.projectId } })}
              >
                see what I built here
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M7 2l4.5 4.5L7 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      </div>{/* end content-row */}

      <Link to="/contact" className="table-teaser" style={{ marginTop: 48 }}>
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
