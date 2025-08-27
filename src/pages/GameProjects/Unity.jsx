import React, { useState, useCallback, useEffect, useRef } from 'react'
import './unity.css'
import { UNITY_GAMES } from '../../data/games.unity'

// Map tag text -> css class, so colors stay consistent across cards
const TAG_COLORS = {
    'C#': 'tag-blue',
    'Procedural generation': 'tag-green',
    'Shader Programming': 'tag-purple',
    '3d math': 'tag-orange',
    'Prototype': 'tag-gray',
    'Unity': 'tag-black',
    'Puzzle': 'tag-pink',
    'MagicaVoxel': 'tag-teal',
    'Blender': 'tag-amber',

    // extra tags for card #2
    'Object-Oriented Programming': 'tag-navy',
    'Perlin Noise': 'tag-cyan',
    'Mesh Generation': 'tag-lime',

    'Python': 'tag-red',
    'AI': 'tag-violet',
    'ML-Agents': 'tag-emerald',
    'Deep Reinforcement Learning': 'tag-indigo',
    'TensorBoard': 'tag-yellow',

    'Game': 'tag-brown',
    'Stealth': 'tag-darkgreen',

    'Aesprite': 'tag-mint',
    'Hypercasual': 'tag-rose',
    'Horror': 'tag-turquoise',
    'QTE': 'tag-strawberry',
    'Photoshop': 'tag-fawn',
    '2D': 'tag-canary',
    'Platformer': 'tag-avacado',
    'GameJam': 'tag-periwinkle',
    'Educational': 'tag-black',
    'Top-Down': 'tag-khakhi',


}

export default function Unity() {
    const [index, setIndex] = useState(0)
    const total = UNITY_GAMES.length
    const wrap = useCallback((i) => (i + total) % total, [total])

    const goPrev = () => setIndex(i => wrap(i - 1))
    const goNext = () => setIndex(i => wrap(i + 1))
    const goTo = (i) => setIndex(() => i)

    // Keyboard nav (Left/Right when focused)
    const rootRef = useRef(null)
    useEffect(() => {
        const onKey = (e) => {
            if (!rootRef.current) return
            if (!rootRef.current.contains(document.activeElement)) return
            if (e.key === 'ArrowLeft') goPrev()
            if (e.key === 'ArrowRight') goNext()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    const current = UNITY_GAMES[index]

    return (
        <section className="unity-wrap" ref={rootRef} tabIndex={0} aria-label="Unity projects">
            <div className="carousel-container">
                <button className="arrow left" onClick={goPrev} aria-label="Previous">
                     <img src="/arrow-left.png" alt="Previous" />
                </button>

                {/* key on article triggers the fade/slide when index changes */}
                <article key={current.id} className="card fade-slide">
                    <img
                        className="card-image"
                        src={current.cover || '/placeholder-600x400.png'}
                        alt={current.title}
                        loading="lazy"
                    />
                    <div className="card-content">
                        <h2>{current.title}</h2>

                        <div className="tags">
                            {current.tags?.map(tag => (
                                <span
                                    key={tag}
                                    className={`tag ${TAG_COLORS[tag] || 'tag-default'}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {current.blurb && <p className="description">{current.blurb}</p>}

                        {/* Show button, but keep it non-clickable when link is null */}
                        {current.link ? (
                            <a className="more-btn" href={current.link} target="_blank" rel="noreferrer">
                                More details
                            </a>
                        ) : (
                            <button className="more-btn" type="button" disabled aria-disabled="true">
                                More details
                            </button>
                        )}
                    </div>
                </article>

                <button className="arrow right" onClick={goNext} aria-label="Next">
                     <img src="/arrow-right.png" alt="Next" />
                </button>
            </div>

            <div className="dots" role="tablist" aria-label="Select Unity project">
                {UNITY_GAMES.map((_, i) => (
                    <button
                        key={i}
                        className={`dot-nav ${i === index ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`Show card ${i + 1}`}
                        aria-selected={i === index}
                    />
                ))}
            </div>
        </section>
    )
}
