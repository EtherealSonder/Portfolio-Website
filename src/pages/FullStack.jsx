import React, { useEffect, useMemo, useState } from 'react'
import '../styles/FullStack.css'

// arrows
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

// Lupiq slideshow media
import lupiq1 from '../assets/lupiq-1.png'
import lupiq2 from '../assets/lupiq-2.gif'
import lupiq3 from '../assets/lupiq-3.gif'
import lupiq4 from '../assets/lupiq-4.gif'
import lupiq5 from '../assets/lupiq-5.png'

// GreyLupa single image
import greylupa1 from '../assets/greylupa-1.png'

// Consistent colors for pills
const TAG_COLORS = {
    React: '#41C9E2',
    TailwindCSS: '#94a3b8',
    JavaScript: '#a855f7',
    Python: '#ef4444',
    PostgreSQL: '#2563eb',
    AWS: '#f59e0b',

    Vite: '#fbbf24',
    TypeScript: '#3178c6',
    SCSS: '#c6538c',
    EmailJS: '#10b981',

    _defaultBg: '#d1d5db',
    _defaultText: '#111111',
}

const CARDS = [
    {
        title: 'Lupiq',
        coverSet: [lupiq1, lupiq2, lupiq3, lupiq4, lupiq5],
        description:
            'Developed for the AI SaaS startup GreyLupa, Lupiq is an AI-powered resume screening platform that automatically parses and evaluates resumes against job profiles. It provides recruiters with a sortable dashboard, detailed candidate views, and analytics on applicant quality. The system scores each candidate, highlights strengths and weaknesses, and supports CSV/PDF exports for quick reporting. Its flagship feature is AskLupiq — a smart NLP assistant for reviewing candidates.',
        tags: ['React', 'TailwindCSS', 'JavaScript', 'Python', 'PostgreSQL', 'AWS'],
        ctaText: 'More details',
        ctaHref: 'https://lupiq.vercel.app/',
    },
    {
        title: 'GreyLupa Website',
        coverSet: [greylupa1],
        description:
            'I built the GreyLupa website as a modern, animated SPA showcasing the company’s AI products and philosophy. The stack includes React + Vite with TypeScript, SCSS modules, and animation via Framer Motion/GSAP. Features: fullscreen video intro, scroll-driven section transitions, responsive layouts, and a validated EmailJS contact form. Deployed on Vercel with custom domain and Zoho Mail.',
        tags: ['React', 'Vite', 'TypeScript', 'SCSS', 'EmailJS'],
        ctaText: 'More details',
        ctaHref: 'https://greylupa.com',
    },
]

export default function FullStack() {
    const [index, setIndex] = useState(0)
    const [frame, setFrame] = useState(0)

    const current = CARDS[index]
    const media = current.coverSet

    // slideshow
    useEffect(() => {
        setFrame(0)
        const id = setInterval(() => {
            setFrame((f) => (f + 1) % media.length)
        }, 2500)
        return () => clearInterval(id)
    }, [index, media.length])

    const pillStyle = (tag) => {
        const bg = TAG_COLORS[tag] || TAG_COLORS._defaultBg
        const isDark = ['#ef4444', '#2563eb', '#a855f7', '#111111', '#3178c6', '#c6538c'].includes(
            bg.toLowerCase ? bg.toLowerCase() : bg
        )
        return { background: bg, color: isDark ? '#ffffff' : '#111111' }
    }

    const goPrev = () => setIndex((i) => (i - 1 + CARDS.length) % CARDS.length)
    const goNext = () => setIndex((i) => (i + 1) % CARDS.length)

    const dots = useMemo(() => Array.from({ length: CARDS.length }), [])

    return (
        <section className="fullstack-wrap" aria-label="Full Stack projects">
            <div className="fs-carousel">
                <button className="fs-arrow left" onClick={goPrev} aria-label="Previous">
                    <img src={arrowLeft} alt="" />
                </button>

                {/* key on article triggers the fade/slide when index changes */}
                <article key={index} className="fs-card fade-slide">
                    {/* LEFT: media (mirrors Unity 30%) */}
                    <div className="fs-media">
                        <img
                            className="fs-image"
                            src={media[frame]}
                            alt={`${current.title} preview ${frame + 1}`}
                            loading="lazy"
                        />
                    </div>

                    {/* RIGHT: content (mirrors Unity 70%) */}
                    <div className="fs-content">
                        <h2 className="fs-title">{current.title}</h2>

                        <div className="fs-tags">
                            {current.tags.map((t) => (
                                <span key={t} className="fs-pill" style={pillStyle(t)}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <p className="fs-desc">{current.description}</p>

                        <a className="more-btn" href={current.ctaHref} target="_blank" rel="noopener noreferrer">
                            {current.ctaText}
                        </a>
                    </div>
                </article>

                <button className="fs-arrow right" onClick={goNext} aria-label="Next">
                    <img src={arrowRight} alt="" />
                </button>
            </div>

            {/* Dots (same size/behavior as Unity) */}
            <div className="fs-dots" role="tablist" aria-label="Select card">
                {dots.map((_, i) => (
                    <button
                        key={i}
                        className={`dot-nav ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Show card ${i + 1}`}
                        aria-selected={i === index}
                    />
                ))}
            </div>
        </section>
    )
}
