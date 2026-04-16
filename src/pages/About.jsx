import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* ===================== EDITORIAL HERO ===================== */}
      <div className="meet-editorial">

        {/* Label + HUMAN grouped left, photo right, arrow spanning between */}
        <div className="meet-big">
          <div className="meet-big-left">
            <span className="meet-label">meet the</span>
            <h1 className="meet-big-title">HUMAN</h1>
          </div>

          {/* Looping arrow from label → photo */}
          <svg
            className="meet-arrow"
            viewBox="0 0 340 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* looping wiggly path */}
            <path
              d="M 10 80
                 C 30 30,  80 10,  90 60
                 C 100 110, 60 140, 100 120
                 C 140 100, 160 40, 180 70
                 C 200 100, 170 140, 210 125
                 C 250 110, 270 50,  300 75
                 C 315 88,  325 95,  330 100"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* arrowhead */}
            <path
              d="M 330 100 L 314 92 M 330 100 L 318 112"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <div className="meet-cutout">
            <img src="/photo.jpeg" alt="Sree Lekshmi" />
          </div>
        </div>
      </div>

      {/* ===================== BODY TEXT ===================== */}
      <div className="meet-content">
        <div className="meet-intro-col">
          <h2 className="meet-hello">
            I'm <span className="meet-name">Sree</span>
          </h2>

          <div className="meet-body">
            <p>
              If AI, machine learning, or data brought you here, you've absolutely
              hit the jackpot. I'm Sree, a <strong>software and AI engineer</strong> with
              4+ years of experience building AI agents, retrieval systems, backend
              services, and data pipelines and I love turning complex ideas into
              systems that are <em>dependable, thoughtful, and ready for the real world.</em>
            </p>
            <p>
              Off duty, I'm obsessed with reading, video games, baking, and catching sunsets.
            </p>
            <p className="meet-outro">
              <Link to="/skills" className="outro-link">
                <span className="outro-highlight">Still here?</span>
                <span className="outro-rest"> Nice. We'll get along.</span>
              </Link>
            </p>

            <Link to="/skills" className="table-teaser">
              <span className="table-teaser-text">What I bring to the table? Quite a bit, actually.</span>
              <span className="table-teaser-cue">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2 L8 14 M3 9 L8 14 L13 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                skills
              </span>
            </Link>
          </div>
        </div>

        {/* Location — no card, just illustration + pin */}
        <div className="location-simple">
          <img className="sf-art" src="/sf.png" alt="San Francisco illustration" />
          <div className="location-info">
            <span className="location-pin">📍</span>
            <div>
              <span className="location-city">San Francisco</span>
              <span className="location-sub">the sunset part is serious.</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}