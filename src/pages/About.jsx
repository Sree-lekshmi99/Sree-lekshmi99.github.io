import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ── Confetti burst ── */
function ConfettiBurst({ active }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['#BAD797', '#F6EED9', '#670626', '#8FAE6A', '#ffffff', '#D5E5BF']
    const pieces = Array.from({ length: 120 }, () => ({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2 + (Math.random() - 0.5) * 100,
      r: Math.random() * 7 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 14,
      vy: -(Math.random() * 14 + 6),
      gravity: 0.45,
      opacity: 1,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 8,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      pieces.forEach(p => {
        p.x += p.vx
        p.vy += p.gravity
        p.y += p.vy
        p.rot += p.rotV
        p.opacity -= 0.013
        if (p.opacity > 0) {
          alive = true
          ctx.save()
          ctx.globalAlpha = Math.max(0, p.opacity)
          ctx.translate(p.x, p.y)
          ctx.rotate((p.rot * Math.PI) / 180)
          ctx.fillStyle = p.color
          if (p.shape === 'rect') {
            ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r)
          } else {
            ctx.beginPath()
            ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2)
            ctx.fill()
          }
          ctx.restore()
        }
      })
      if (alive) animRef.current = requestAnimationFrame(draw)
    }
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [active])

  if (!active) return null
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999,
      }}
    />
  )
}

export default function About() {
  const [highFived, setHighFived] = useState(false)
  const [confetti, setConfetti] = useState(false)

  const handleHighFive = () => {
    setHighFived(true)
    setConfetti(true)
    setTimeout(() => setConfetti(false), 3200)
  }

  return (
    <>
      <ConfettiBurst active={confetti} />

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

            {/* ── High Five ── */}
            <div className="highfive-wrap">
              {!highFived ? (
                <button className="highfive-btn" onClick={handleHighFive}>
                  High Five? 🖐️
                </button>
              ) : (
                <div className="highfive-result">
                  <span className="highfive-emoji">🙌</span>
                  <span className="highfive-msg">you are officially one of the cool ones</span>
                </div>
              )}
            </div>

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
