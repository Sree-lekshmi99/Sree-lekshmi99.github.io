import React from 'react'

const jobs = [
  {
    role: 'Software Engineer (AI Engineer)',
    company: 'Profile DM Inc · Novi, Michigan',
    date: 'Jul 2025 – Present',
    bullets: [
      'Launched an AI-powered recommendation microservice using a serverless LLM and RAG on AWS Lambda + FastAPI.',
      'Orchestrated retrieval and tool-calling workflows with LangChain and LangGraph, combining user and catalog data from internal APIs.',
      'Reduced p95 latency by 25% via prompt optimization, token trimming, and faster context retrieval with DynamoDB and Redis.',
      'Established safety guardrails, validation checks, and prompt controls to keep recommendations on-brand and reduce hallucinations.',
      'Strengthened production reliability with unit and integration tests and automated regression checks in GitHub Actions and Jenkins.',
    ],
  },
  {
    role: 'Software Engineer (Data Engineer)',
    company: 'Community School of Arts Foundation · Los Angeles, CA',
    date: 'Jun 2024 – Jun 2025',
    bullets: [
      'Developed an end-to-end sponsor targeting and propensity modeling workflow using PySpark, Snowflake, XGBoost, Random Forest.',
      'Grew the sponsor pipeline by 40% and raised sponsor reply rates by 45% via model-driven outreach prioritization.',
      'Built resilient Python ingestion workers with versioned auditability in PostgreSQL and Snowflake Streams + Salesforce APIs.',
      'Delivered secure FastAPI services with JWT, RBAC, pagination, rate limiting, containerized with Docker and deployed to ECS.',
      'Monitored ETL and service reliability via Prometheus and Grafana, reducing MTTR by 30%.',
    ],
  },
  {
    role: 'Research Aide (Machine Learning Engineer)',
    company: 'University at Buffalo · Buffalo, NY',
    date: 'Oct 2023 – Jun 2024',
    bullets: [
      'Trained ML models (Random Forest, XGBoost, K-Means) on student performance and LMS data, contributing to a 30% boost in outcomes.',
      'Engineered feature pipelines from LMS logs, assessments, and historical grades across 8 subjects, stored in MySQL.',
      'Analyzed new vs. existing student performance using SQL, pandas, and A/B testing.',
      'Built Flask REST APIs, Power BI dashboards, and Streamlit apps for technical and non-technical stakeholders.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Steel Authority of India · Chhattisgarh, India',
    date: 'Jun 2021 – Dec 2022',
    bullets: [
      'Implemented a vendor self-service eGate pass and slot-booking system using React, Node/Express, and PostgreSQL — 400+ daily vehicle entries.',
      'Connected shipment data from internal systems and Oracle ERP via REST APIs and batch pipelines for near real-time updates.',
      'Containerized a CNN-based QR/code verification service with Docker, improving checkpoint validation speed by 50%.',
      'Forecasted daily gate traffic via Prophet to improve slot planning and operational readiness.',
    ],
  },
]

export default function Experience() {
  return (
    <>
      <div className="page-head">
        <span className="page-eyebrow">03 · Experience</span>
        <h1 className="page-title">Work</h1>
      </div>
      <p className="page-lead">
        A timeline of roles across AI engineering, data engineering, machine learning, and full-stack development.
      </p>

      <div className="timeline">
        {jobs.map(j => (
          <article className="job" key={j.company + j.date}>
            <div className="job-head">
              <span className="job-role">{j.role}</span>
              <span className="job-date">{j.date}</span>
            </div>
            <div className="job-company">{j.company}</div>
            <ul>
              {j.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </>
  )
}
