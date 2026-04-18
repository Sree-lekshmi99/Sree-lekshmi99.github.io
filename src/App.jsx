import React, { useEffect, useRef } from 'react'
import { Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

const navItems = [
  { to: '/',            label: 'home' },
  { to: '/about',       label: 'human' },
  { to: '/skills',      label: 'skills' },
  { to: '/projects',    label: "things i've built" },
  { to: '/experience',  label: 'experience' },
  { to: '/contact',     label: "let's talk" },
]

// Pages in scroll order (home is excluded — it's full-bleed)
const pageOrder = ['/about', '/skills', '/projects', '/experience', '/contact']

export default function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const locked = useRef(false)

  // Scroll to top on every route change
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  // Scroll-to-navigate: wheel past the bottom → next page, past the top → prev page
  useEffect(() => {
    if (pathname === '/') return   // home handles itself

    const handleWheel = (e) => {
      if (locked.current) return

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const atBottom = scrollTop + clientHeight >= scrollHeight - 60
      const atTop    = scrollTop <= 5
      const idx      = pageOrder.indexOf(pathname)

      if (e.deltaY > 30 && atBottom && idx < pageOrder.length - 1) {
        locked.current = true
        navigate(pageOrder[idx + 1])
        setTimeout(() => { locked.current = false }, 1100)
      } else if (e.deltaY < -30 && atTop && idx > 0) {
        locked.current = true
        navigate(pageOrder[idx - 1])
        setTimeout(() => { locked.current = false }, 1100)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [pathname, navigate])

  const isHome = pathname === '/'

  if (isHome) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    )
  }

  const currentIdx = pageOrder.indexOf(pathname)
  const nextPage   = pageOrder[currentIdx + 1]
  const nextLabel  = navItems.find(n => n.to === nextPage)?.label

  return (
    <div className="shell">
      <header className="topbar">
        <nav className="navlinks">
          {navItems.map(i => (
            <NavLink
              key={i.to}
              to={i.to}
              end={i.to === '/'}
              className={({ isActive }) => 'navlink' + (isActive ? ' active' : '')}
            >
              {i.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* key={pathname} remounts <main> on every nav → re-fires the CSS entrance animation */}
      <main className="page" key={pathname}>
        <Routes>
          <Route path="/about"      element={<About />} />
          <Route path="/skills"     element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects"   element={<Projects />} />
          <Route path="/contact"    element={<Contact />} />
          <Route path="*"           element={<About />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Sree Lekshmi Prasannan · Software Engineer</span>
        {nextLabel && (
          <span className="footer-next">
            scroll for <em>{nextLabel}</em>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </footer>
    </div>
  )
}
