import React, { useState } from 'react'
import '../styles/Topbar.css'
import { useNavigate, useLocation } from 'react-router-dom'

const mainNav = [
    { label: 'Game Projects', route: '/projects' },
    { label: 'Full Stack', route: '/fullstack' },
    { label: 'AI/ML Projects', route: '/aiprojects' },
    { label: 'Resume', route: '/resume' },
    { label: 'Contact', route: '/contact' },
]

export default function Topbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    if (location.pathname === '/') return null

    return (
        <>
            <nav className="topbar">
                <img
                    src="/logo.png"
                    alt="logo"
                    className="nav-logo nav-item"
                    onClick={() => navigate('/')}
                />

                {/* All 5 tabs on desktop */}
                <ul className="nav-links desktop-only">
                    {mainNav.map(({ label, route }) => (
                        <li
                            key={label}
                            onClick={() => navigate(route)}
                            className={`nav-item ${location.pathname === route ? 'active' : ''}`}
                        >
                            {label}
                        </li>
                    ))}
                </ul>

                {/* Only first 3 tabs on mobile */}
                <ul className="nav-links mobile-only">
                    {mainNav.slice(0, 3).map(({ label, route }) => (
                        <li
                            key={label}
                            onClick={() => navigate(route)}
                            className={`nav-item ${location.pathname === route ? 'active' : ''}`}
                        >
                            {label}
                        </li>
                    ))}
                </ul>

                <div className="nav-icons desktop-only">
                    <img
                        src="/github-logo.png"
                        alt="GitHub"
                        className="nav-icon nav-item"
                        onClick={() => window.open('https://github.com/EtherealSonder', '_blank')}
                    />
                    <img
                        src="/linkedin-logo.png"
                        alt="LinkedIn"
                        className="nav-icon nav-item"
                        onClick={() =>
                            window.open(
                                'https://www.linkedin.com/in/gunabalan-lingam-432b54186/',
                                '_blank'
                            )
                        }
                    />
                </div>

                <div className="hamburger mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
                    <div />
                    <div />
                    <div />
                </div>
            </nav>

            {menuOpen && (
                <div className="side-menu">
                    {mainNav.slice(3).map(({ label, route }) => (
                        <div
                            key={label}
                            className="side-link"
                            onClick={() => {
                                navigate(route)
                                setMenuOpen(false)
                            }}
                        >
                            {label}
                        </div>
                    ))}
                    <div
                        className="side-link"
                        onClick={() => window.open('https://github.com/EtherealSonder', '_blank')}
                    >
                        GitHub
                    </div>
                    <div
                        className="side-link"
                        onClick={() =>
                            window.open(
                                'https://www.linkedin.com/in/gunabalan-lingam-432b54186/',
                                '_blank'
                            )
                        }
                    >
                        LinkedIn
                    </div>
                </div>
            )}
        </>
    )
}
