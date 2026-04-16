import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="page-head">
        <span className="page-eyebrow">05 · Contact</span>
        <h1 className="page-title">Get in Touch</h1>
      </div>
      <p className="page-lead">
        Open to roles in AI engineering, applied ML, and backend platforms.
        Let's build something useful together.
      </p>

      <div className="contact-wrap">
        <div>
          <div className="contact-list">
            <a className="contact-row" href="mailto:sreelekshmip9966@gmail.com">
              <span className="ico">✉</span>
              <span>sreelekshmip9966@gmail.com</span>
            </a>
            <a className="contact-row" href="tel:+17162535168">
              <span className="ico">☎</span>
              <span>+1 (716) 253-5168</span>
            </a>
            <a className="contact-row" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <span className="ico">in</span>
              <span>LinkedIn — update with your URL</span>
            </a>
            <a className="contact-row" href="https://github.com/" target="_blank" rel="noreferrer">
              <span className="ico">gh</span>
              <span>GitHub — update with your URL</span>
            </a>
            <div className="contact-row">
              <span className="ico">📍</span>
              <span>San Francisco, California</span>
            </div>
          </div>
        </div>

        <aside className="contact-card">
          <h3>Let's work together</h3>
          <p>
            I'm actively interviewing and happy to chat about AI engineering
            roles, technical deep-dives, or interesting side projects.
          </p>
          <a className="btn primary" href="mailto:sreelekshmip9966@gmail.com">
            Send me an email →
          </a>
        </aside>
      </div>
    </>
  )
}
