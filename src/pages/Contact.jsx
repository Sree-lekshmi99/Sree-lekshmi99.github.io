import React from 'react'

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
    <path d="M7 1C3.686 1 1 3.686 1 7c0 2.652 1.72 4.9 4.104 5.694.3.055.41-.13.41-.288 0-.142-.005-.518-.008-1.017-1.669.363-2.02-.804-2.02-.804-.273-.693-.666-.878-.666-.878-.545-.372.04-.365.04-.365.602.043.92.619.92.619.535.917 1.404.652 1.746.499.054-.388.21-.652.38-.802-1.332-.152-2.732-.666-2.732-2.963 0-.655.234-1.19.617-1.61-.062-.151-.267-.761.059-1.587 0 0 .503-.161 1.648.614A5.74 5.74 0 017 4.58c.51.002 1.022.069 1.501.202 1.144-.775 1.646-.614 1.646-.614.327.826.122 1.436.06 1.587.384.42.616.955.616 1.61 0 2.304-1.403 2.81-2.74 2.958.216.186.408.552.408 1.113 0 .803-.007 1.452-.007 1.649 0 .16.108.347.413.288C11.282 11.898 13 9.65 13 7c0-3.314-2.686-6-6-6z"
      fill="currentColor"/>
  </svg>
)

const LeetCodeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
)

export default function Contact() {
  return (
    <div className="wrap-hero">

      {/* ── Top right: "and that's a" ── */}
      <div className="wrap-topright">
        <span className="wrap-deco-and">and</span>
        <span className="wrap-deco-thats">that's a</span>
      </div>

      {/* ── Main contact content ── */}
      <div className="wrap-content">

        <div className="wrap-intro">
          <h2 className="wrap-headline">Let's build something useful together.</h2>
          <p className="wrap-support">Have an idea, a role, or just want to say hi? Drop me a message.</p>
        </div>

        {/* Primary email CTA */}
        <a className="wrap-contact-email" href="mailto:sreelekshmip2@gmail.com">
          <span className="wrap-contact-icon">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M1 5 L8 9.5 L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <div>
            <span className="wrap-contact-label">send me an email</span>
            <span className="wrap-contact-value">sreelekshmip2@gmail.com</span>
          </div>
          <span className="wrap-contact-arrow">→</span>
        </a>

        {/* Find me here too */}
        <div className="wrap-find">
          <span className="wrap-find-heading">Find me here too</span>
          <div className="wrap-find-links">
            <a className="wrap-find-row" href="https://www.linkedin.com/in/sree-lekshmi-prasannan/" target="_blank" rel="noreferrer">
              <span className="wrap-find-icon">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4 6.5 L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="4" cy="4.2" r="0.9" fill="currentColor"/>
                  <path d="M7.5 12 L7.5 9 C7.5 7.5 8.4 6.5 9.6 6.5 C10.8 6.5 11.5 7.4 11.5 9 L11.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="wrap-find-name">LinkedIn</span>
              <span className="wrap-find-desc">keep it professional</span>
            </a>
            <a className="wrap-find-row" href="https://github.com/Sree-lekshmi99" target="_blank" rel="noreferrer">
              <span className="wrap-find-icon"><GitHubIcon /></span>
              <span className="wrap-find-name">GitHub</span>
              <span className="wrap-find-desc">where the code lives</span>
            </a>
            <a className="wrap-find-row" href="https://leetcode.com/u/sreelekshmip/" target="_blank" rel="noreferrer">
              <span className="wrap-find-icon"><LeetCodeIcon /></span>
              <span className="wrap-find-name">LeetCode</span>
              <span className="wrap-find-desc">for my algorithm arc</span>
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom left: "wrap." ── */}
      <span className="wrap-deco-awrap">wrap.</span>

    </div>
  )
}
