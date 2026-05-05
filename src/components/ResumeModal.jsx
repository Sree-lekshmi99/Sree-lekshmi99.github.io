import React, { useEffect } from 'react'

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      <div className="resume-overlay" onClick={onClose} />

      <div className="resume-modal" role="dialog" aria-label="One-page resume">

        {/* ── Top bar ── */}
        <div className="resume-modal-bar no-print">
          <span className="resume-modal-bar-label">resume · sree lekshmi prasannan</span>
          <div className="resume-modal-bar-actions">
            <a
              className="resume-dl-btn"
              href="/Sree_Prasannan_resume.pdf"
              download="Sree_Prasannan_Resume.pdf"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              download PDF
            </a>
            <button className="resume-close-btn" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        {/* ── Resume body ── */}
        <div className="resume-body">

          {/* Header */}
          <div className="rv-header">
            <div className="rv-name-block">
              <h1 className="rv-name">Sree Lekshmi Prasannan</h1>
              <p className="rv-title">Software Engineer · AI Engineer · Data Scientist</p>
            </div>
            <div className="rv-contact-block">
              <span>San Francisco, California</span>
              <span>+1 (716) 253-5168</span>
              <a href="mailto:sreelekshmip9966@gmail.com">sreelekshmip9966@gmail.com</a>
              <a href="https://linkedin.com/in/sree-lekshmi-prasannan" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Sree-lekshmi99" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <div className="rv-divider" />

          {/* Summary */}
          <section className="rv-section rv-summary-section">
            <h2 className="rv-section-title">Summary</h2>
            <p className="rv-summary">
              Software Engineer with over 4 years of experience building production AI agents, retrieval systems,
              statistical modeling, backend services, and big data pipelines. Shipped LLM-powered workflows,
              tool-calling systems, and customer-facing APIs with a focus on reliability, evaluation, and business impact.
            </p>
          </section>

          {/* Two-column layout */}
          <div className="rv-cols">

            {/* ── Left: Experience ── */}
            <div className="rv-left">
              <section className="rv-section">
                <h2 className="rv-section-title">Work Experience</h2>

                {/* Profile DM */}
                <div className="rv-job">
                  <div className="rv-job-head">
                    <span className="rv-job-role">Profile DM Inc</span>
                    <span className="rv-job-loc">Novi, Michigan</span>
                  </div>
                  <div className="rv-job-sub">
                    <span className="rv-job-subtitle">Software Engineer (Artificial Intelligence Engineer)</span>
                    <span className="rv-job-date">Jul 2025 – Present</span>
                  </div>
                  <ul className="rv-bullets">
                    <li>Launched an AI-powered recommendation microservice using a serverless LLM and RAG on AWS Lambda and FastAPI, matching users products based on profile, behavior, and catalog context.</li>
                    <li>Orchestrated retrieval and tool-calling workflows with LangChain and LangGraph through a three-stage pipeline of vector search, cross-encoder re-ranking, and LLM personalization.</li>
                    <li>Reduced p95 latency by 25% through prompt optimization, token trimming, and faster context retrieval with DynamoDB and Redis, improving responsiveness in production.</li>
                    <li>Introduced model routing for low-complexity queries, cutting API costs by 70% while retaining 95% of output quality.</li>
                    <li>Built a three-layer observability stack with input distribution tracking, statistical monitoring, LLM-as-Judge scoring, and user feedback loops to diagnose hallucination and relevance failures.</li>
                    <li>Enforced safety guardrails following OWASP LLM and NIST AI RMF, reducing hallucinations and aligning recommendations with business and quality standards.</li>
                    <li>Strengthened reliability with unit and integration tests for ranking and prompt templates, with CI/CD pipelines in GitHub Actions and Jenkins for automated regression checks.</li>
                  </ul>
                </div>

                {/* Community School */}
                <div className="rv-job">
                  <div className="rv-job-head">
                    <span className="rv-job-role">Community School of Arts Foundation</span>
                    <span className="rv-job-loc">Los Angeles, CA</span>
                  </div>
                  <div className="rv-job-sub">
                    <span className="rv-job-subtitle">Software Engineer (Data Engineer)</span>
                    <span className="rv-job-date">Jun 2024 – Jun 2025</span>
                  </div>
                  <ul className="rv-bullets">
                    <li>Developed an end-to-end sponsor big data targeting and propensity modeling workflow using PySpark, Snowflake, SQL, XGBoost, and Random Forest to score and prioritize high-potential sponsors.</li>
                    <li>Grew the sponsor pipeline by 40% by scraping external company data and engineering features from industry, location, engagement history, and event fit.</li>
                    <li>Raised sponsor reply rates by 45% via model-driven outreach prioritization, contributing to 30% more donations than the previous event cycle.</li>
                    <li>Built resilient Python ingestion workers with versioned auditability in PostgreSQL; used Snowflake Streams and Salesforce APIs for near real-time sync with less than 10-minute lag.</li>
                    <li>Delivered secure FastAPI services with JWT, RBAC, pagination, and rate limiting; containerized and deployed with Docker, ECR/ECS, and ALB for zero-downtime rolling releases.</li>
                    <li>Monitored ETL and service reliability via Prometheus and Grafana, reducing MTTR by 30%.</li>
                  </ul>
                </div>

                {/* University at Buffalo */}
                <div className="rv-job">
                  <div className="rv-job-head">
                    <span className="rv-job-role">University at Buffalo</span>
                    <span className="rv-job-loc">Buffalo, New York</span>
                  </div>
                  <div className="rv-job-sub">
                    <span className="rv-job-subtitle">Research Aide (Machine Learning Engineer)</span>
                    <span className="rv-job-date">Oct 2023 – Jun 2024</span>
                  </div>
                  <ul className="rv-bullets">
                    <li>Trained ML models using Random Forest, XGBoost, and K-Means on student performance and LMS data, contributing to a 30% boost in program outcomes.</li>
                    <li>Engineered feature pipelines from LMS logs, assessments, and historical grades across 8 subjects, storing structured features in MySQL.</li>
                    <li>Introduced diagnostics to flag weak areas at subject and topic level, enabling targeted remediation strategies.</li>
                    <li>Conducted ad-hoc statistical analysis using SQL, pandas, and A/B testing, improving intervention design and outcome tracking.</li>
                    <li>Built Flask REST APIs, Power BI dashboards, and Streamlit apps to deliver analytical reports to technical and non-technical stakeholders.</li>
                  </ul>
                </div>

                {/* Steel Authority */}
                <div className="rv-job">
                  <div className="rv-job-head">
                    <span className="rv-job-role">Steel Authority of India</span>
                    <span className="rv-job-loc">Chhattisgarh, India</span>
                  </div>
                  <div className="rv-job-sub">
                    <span className="rv-job-subtitle">Software Engineer</span>
                    <span className="rv-job-date">Jun 2021 – Dec 2022</span>
                  </div>
                  <ul className="rv-bullets">
                    <li>Implemented a vendor self-service eGate pass and slot-booking system using React, Node.js/Express, and PostgreSQL, digitizing dispatch operations and supporting 400+ daily vehicle entries.</li>
                    <li>Structured workflows for slot scheduling, shipment visibility, truck/driver registration, QR-based pass issuance, and gate checkpoint verification.</li>
                    <li>Connected internal systems and Oracle ERP via REST APIs and batch pipelines for near real-time updates on order completion and pickup status.</li>
                    <li>Containerized and deployed a CNN-based QR verification service with Docker, improving checkpoint speed by 50%.</li>
                    <li>Forecasted daily gate traffic via Prophet to improve slot planning based on historical vehicle movement patterns.</li>
                  </ul>
                </div>

              </section>
            </div>

            {/* ── Right: Education + Skills + Projects ── */}
            <div className="rv-right">

              {/* Education — MS only */}
              <section className="rv-section">
                <h2 className="rv-section-title">Education</h2>
                <div className="rv-job">
                  <div className="rv-job-head">
                    <span className="rv-job-role">State University of New York at Buffalo</span>
                  </div>
                  <div className="rv-job-sub">
                    <span className="rv-job-subtitle">M.S. in Data Science</span>
                    <span className="rv-job-date">Jan 2023 – Jun 2024</span>
                  </div>
                  <p className="rv-coursework">Machine Learning · NLP · Probability · Statistical Learning · Data Mining · Time Series · Deep Learning</p>
                </div>
              </section>

              {/* Skills */}
              <section className="rv-section">
                <h2 className="rv-section-title">Skills</h2>
                <div className="rv-skill-group">
                  <span className="rv-skill-cat">Languages</span>
                  <span className="rv-skill-list">Python · TypeScript · SQL · JavaScript · Java · MATLAB · R</span>
                </div>
                <div className="rv-skill-group">
                  <span className="rv-skill-cat">AI / Agents</span>
                  <span className="rv-skill-list">LangChain · LangGraph · RAG · tool-calling · prompt engineering · embeddings · vector DBs (Pinecone, ChromaDB) · LLM-as-Judge</span>
                </div>
                <div className="rv-skill-group">
                  <span className="rv-skill-cat">Backend</span>
                  <span className="rv-skill-list">FastAPI · Flask · REST APIs · microservices · JWT · OAuth2 · RBAC · Redis</span>
                </div>
                <div className="rv-skill-group">
                  <span className="rv-skill-cat">Data</span>
                  <span className="rv-skill-list">PySpark · Snowflake · ETL/ELT · feature engineering · A/B testing · Bayesian methods</span>
                </div>
                <div className="rv-skill-group">
                  <span className="rv-skill-cat">Cloud / Infra</span>
                  <span className="rv-skill-list">AWS (Lambda, API Gateway, S3, DynamoDB, ECS/ECR) · Docker · Kubernetes · CI/CD · GitHub Actions · Jenkins · Prometheus · Grafana</span>
                </div>
                <div className="rv-skill-group">
                  <span className="rv-skill-cat">Datastores</span>
                  <span className="rv-skill-list">PostgreSQL · MySQL · Snowflake · DynamoDB · Redis</span>
                </div>
              </section>

              {/* Projects */}
              <section className="rv-section">
                <h2 className="rv-section-title">Projects</h2>

                <div className="rv-project">
                  <div className="rv-project-head">
                    <span className="rv-project-name">Carbon Emission Analyzer</span>
                    <span className="rv-project-stack">Node.js · React · AWS</span>
                  </div>
                  <ul className="rv-bullets">
                    <li>Serverless backend via AWS Lambda and API Gateway; CI/CD with AWS Amplify.</li>
                    <li>Chatbot using AWS Lex to log products and calculate carbon emissions; DynamoDB + Elasticsearch visualized in Kibana.</li>
                  </ul>
                </div>

                <div className="rv-project">
                  <div className="rv-project-head">
                    <span className="rv-project-name">ECG Anomaly Detection</span>
                    <span className="rv-project-stack">PyTorch · LSTM Autoencoder</span>
                  </div>
                  <ul className="rv-bullets">
                    <li>LSTM autoencoder trained on healthy ECG signals; anomalies flagged via reconstruction error.</li>
                    <li>Tuned thresholds and signal normalization, improving detection sensitivity by 5%.</li>
                  </ul>
                </div>

                <div className="rv-project">
                  <div className="rv-project-head">
                    <span className="rv-project-name">Reinforcement Learning · Taxi-v3</span>
                    <span className="rv-project-stack">Python · OpenAI Gym</span>
                  </div>
                  <ul className="rv-bullets">
                    <li>Q-learning agent from scratch with epsilon-greedy exploration across 10,000 episodes.</li>
                    <li>Tracked episode rewards, demonstrating steady improvement to consistent task completion.</li>
                  </ul>
                </div>

              </section>

            </div>
          </div>

        </div>{/* end resume-body */}
      </div>
    </>
  )
}
