import React from 'react'

export default function Contact() {
  return (
    <>
      {/* ══ WRAP HERO ══ */}
      <div className="wrap-hero">
        <span className="wrap-and">and</span>
        <span className="wrap-thats">that's</span>
        <span className="wrap-awrap">a wrap.</span>
      </div>

      {/* ══ CONTACT DETAILS ══ */}
      <div className="contact-wrap">
        <div>
          <p className="page-lead" style={{ marginBottom: 20 }}>
            Open to roles in AI engineering, applied ML, and backend platforms. Let's build something useful together.
          </p>
          <div className="contact-list">
            <a className="contact-row" href="mailto:sreelekshmip2@gmail.com">
              <span className="ico">✉</span>
              <span>sreelekshmip2@gmail.com</span>
            </a>
            <a className="contact-row" href="https://www.linkedin.com/in/sree-lekshmi-prasannan/" target="_blank" rel="noreferrer">
              <span className="ico">in</span>
              <span>linkedin.com/in/sree-lekshmi-prasannan</span>
            </a>
            <a className="contact-row" href="https://github.com/Sree-lekshmi99" target="_blank" rel="noreferrer">
              <span className="ico">gh</span>
              <span>github.com/Sree-lekshmi99</span>
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
          <a className="btn primary" href="mailto:sreelekshmip2@gmail.com">
            Send me an email →
          </a>
        </aside>
      </div>
    </>
  )
}
