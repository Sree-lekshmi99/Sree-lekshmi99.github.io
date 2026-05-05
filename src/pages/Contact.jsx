import React, { useState, useRef } from 'react'
import ResumeModal from '../components/ResumeModal.jsx'

/* ─── Replace these three values after EmailJS setup ─── */
const EJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
/* ────────────────────────────────────────────────────── */


export default function Contact() {
  const [values, setValues]       = useState({ name: '', company: '', contact: '', message: '' })
  const [status, setStatus]       = useState('idle') // idle | sending | sent | error
  const [showResume, setShowResume] = useState(false)

  const handleChange = e =>
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  EJS_SERVICE_ID,
          template_id: EJS_TEMPLATE_ID,
          user_id:     EJS_PUBLIC_KEY,
          template_params: {
            from_name:    values.name,
            from_company: values.company,
            from_contact: values.contact,
            message:      values.message,
          },
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('sent')
      setValues({ name: '', company: '', contact: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
    {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    <div className="wrap-hero">

      {/* ── Top right deco ── */}
      <div className="wrap-topright">
        <span className="wrap-deco-and">and</span>
        <span className="wrap-deco-thats">that's a</span>
      </div>

      {/* ── Main content ── */}
      <div className="wrap-content">

        <div className="wrap-intro">
          <h2 className="wrap-headline">Let's build something useful together.</h2>
          <p className="wrap-support">Have an idea, a role, or just want to say hi? Fill in the form.</p>
        </div>

        {/* ── Contact form ── */}
        {status === 'sent' ? (
          <div className="cform-success">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" stroke="rgba(186,215,151,0.5)" strokeWidth="1.5"/>
              <path d="M11 18 L16 23 L25 13" stroke="#BAD797" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="cform-success-title">Message sent!</p>
            <p className="cform-success-sub">I'll get back to you soon.</p>
            <button className="cform-reset" onClick={() => setStatus('idle')}>
              send another
            </button>
          </div>
        ) : (
          <form className="cform" onSubmit={handleSubmit} noValidate>
            <div className="cform-row">
              <div className="cform-field">
                <label className="cform-label" htmlFor="cf-name">Name</label>
                <input
                  id="cf-name" name="name" type="text"
                  className="cform-input" placeholder="Sree Lekshmi"
                  value={values.name} onChange={handleChange} required
                />
              </div>
              <div className="cform-field">
                <label className="cform-label" htmlFor="cf-company">Company</label>
                <input
                  id="cf-company" name="company" type="text"
                  className="cform-input" placeholder="Acme Inc. (optional)"
                  value={values.company} onChange={handleChange}
                />
              </div>
            </div>

            <div className="cform-field">
              <label className="cform-label" htmlFor="cf-contact">Email / LinkedIn / Phone</label>
              <input
                id="cf-contact" name="contact" type="text"
                className="cform-input" placeholder="how should I reach you back?"
                value={values.contact} onChange={handleChange} required
              />
            </div>

            <div className="cform-field">
              <label className="cform-label" htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message" name="message"
                className="cform-input cform-textarea"
                placeholder="What's on your mind?"
                rows={4}
                value={values.message} onChange={handleChange} required
              />
            </div>

            {status === 'error' && (
              <p className="cform-error">Something went wrong. Try emailing me directly.</p>
            )}

            <button
              type="submit"
              className="cform-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="cform-spinner" />
                  sending…
                </>
              ) : (
                <>
                  send message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor"
                      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        )}

        {/* ── Social icons + resume ── */}
        <div className="wrap-socials">
          <a className="wrap-social-icon" href="https://www.linkedin.com/in/sree-lekshmi-prasannan/"
            target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.6" fill="none"/>
              <path d="M6 9.5v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
              <circle cx="6" cy="6.5" r="1.2" fill="currentColor"/>
              <path d="M11 18.5v-4.8c0-2.1 1.3-3.7 3.2-3.7 1.8 0 2.8 1.4 2.8 3.5v5"
                stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
            </svg>
            <span className="wrap-social-tip">where the professional lives</span>
          </a>

          <a className="wrap-social-icon" href="https://github.com/Sree-lekshmi99"
            target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            <span className="wrap-social-tip">where the code lives</span>
          </a>

          <a className="wrap-social-icon" href="https://leetcode.com/u/sreelekshmip/"
            target="_blank" rel="noreferrer" aria-label="LeetCode">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
            <span className="wrap-social-tip">side quest</span>
          </a>

          {/* Resume — opens same modal */}
          <button className="wrap-resume-btn" onClick={() => setShowResume(true)} aria-label="View resume">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="1" width="10" height="13" rx="2" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M5 5h6M5 8h6M5 11h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            resume
          </button>
        </div>

      </div>

      {/* ── Bottom deco ── */}
      <span className="wrap-deco-awrap">wrap.</span>

    </div>
    </>
  )
}
