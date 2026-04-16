import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [imgOk, setImgOk] = React.useState(true)

  return (
    <div className="home-wrap">
      <div className="home-stage">
        <div className="home-text">
          <h1 className="home-title">
            Oh.<br />
            <span className="accent">You actually</span><br />
            clicked<span className="q">.</span>
          </h1>

          <p className="home-sub">
            I have to say<span className="bang">!</span> Good choice.
          </p>

          <div className="home-cta">
            <Link to="/contact" className="btn primary">Come say hi →</Link>
            <Link to="/about"   className="btn ghost">Meet the human</Link>
          </div>
        </div>

        <div className="home-art">
          {imgOk ? (
            <img
              className="peek-girl"
              src="/peek-girl.png"
              alt="Peeking illustration"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="peek-fallback">
              Save your peek-girl image as<br />
              <strong>public/peek-girl.png</strong><br />
              and refresh 🍒
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
