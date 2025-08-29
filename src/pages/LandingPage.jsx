import React, { useState, useEffect } from 'react'
import '../styles/LandingPage.css';
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const roles = [
    'Game Programmer',
    'Game Designer',
    'Unity Developer',
    'Full Stack Developer',
    'Web Designer',
    'AI Programmer',
]

export default function LandingPage() {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="landing-container">
            <video className="landing-video" autoPlay loop muted playsInline preload="auto" poster="/videos/landing-poster.jpg">
                <source src="/videos/landingpagebg.mp4" type="video/mp4" />
            </video>

            <div className="glass-box">
                <p className="intro-text">Hi, I am</p>
                <h1 className="name-text">Gunabalan Lingam</h1>

                <div className="animated-role-box">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={index}
                            className="role-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                        >
                            {roles[index]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <p className="tagline">
                    I'm a game programmer, AI enthusiast, and full-stack developer inspired by the intersection of systems, design, and intelligence to build meaningful interactive experiences.
                </p>

                <div className="cta-buttons">
                    <button onClick={() => navigate('/projects')}>Game Projects</button>
                    <button onClick={() => navigate('/fullstack')}>Full Stack</button>
                    <button onClick={() => navigate('/aiprojects')}>AI/ML Projects</button>
                </div>
            </div>
        </div>
    )
}
