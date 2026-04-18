import React from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
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

export default function App() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  const isHome = pathname === '/'

  // Home = no nav, no shell chrome — just the full-bleed landing.
  if (isHome) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    )
  }

  // Every other page uses the shell + nav.
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

      <main className="page">
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
        © {new Date().getFullYear()} Sree Lekshmi Prasannan · Software Engineer
      </footer>
    </div>
  )
}
