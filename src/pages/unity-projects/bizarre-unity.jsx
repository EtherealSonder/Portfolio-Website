// src/pages/unity-projects/bizarre-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    '2D': 'tag-canary',
    'Game': 'tag-brown',
    'Puzzle': 'tag-pink',
    'Aesprite': 'tag-mint',
    'Photoshop': 'tag-fawn'
}

export default function BizarreUnity() {
    const title = 'Bizarre'

    const tags = ['C#', '2D', 'Game', 'Puzzle', 'Aesprite', 'Photoshop']

    const description = [
        <>
            <strong>Bizarre</strong> is a <strong>2D detective puzzle</strong> game created for the
            “I Can’t Draw But Want to Make a Game” jam. The player takes on the role of
            <strong> Jhonny Reston</strong>, a detective tasked with uncovering the true owner of
            mysterious artworks. The game blends <strong>puzzle-solving</strong> with
            <strong> narrative exploration</strong>, supported by an <strong>art-focused visual style</strong>.
        </>,
        <>
            Gameplay is driven by <strong>WASD movement</strong>, <strong>environmental interaction</strong>,
            and <strong>conversations</strong> with characters. A unique mechanic allows the player to
            hover the mouse over objects to trigger a <strong>see-through ability</strong>, revealing hidden
            details in paintings or items. Conversations and story progression are handled through a simple
            <strong> dialogue system</strong> where pressing space advances lines, and escape exits from
            interactions or close-up views.
        </>,
        <>
            The design incorporates an <strong>inventory system</strong> accessible with the tab key,
            allowing the player to track collected evidence, while the <strong>pause menu</strong> is
            integrated into the same UI. A <strong>camera-follow system</strong> ensures smooth tracking of
            the player with <strong>boundary constraints</strong>, creating a polished movement experience
            across the 2D environment.
        </>,
        <>
            As a jam submission, <strong>Bizarre</strong> emphasizes <strong>narrative puzzles</strong>,
            <strong> interactive art inspection</strong>, and lightweight <strong>detective mechanics</strong>.
            The developers also plan to expand the concept with another protagonist and varied gameplay
            styles in future iterations.
        </>
    ]

    const screenshots = [
        'bizarre-1.png',
        'bizarre-2.png',
        'bizarre-3.png',
        'bizarre-4.png',
        'bizarre-5.png'
    ]

    const [lightboxIndex, setLightboxIndex] = useState(null)

    return (
        <div className="unitygamepage">
            {/* Header */}
            <div className="page-header">
                <h1>{title}</h1>
                <div className="engine-badge">
                    <img src={unityLogo} alt="Unity logo" className="engine-logo" />
                    <span className="engine-text">Unity</span>
                </div>
            </div>

            {/* Tags */}
            <div className="tags">
                {tags.map((tag) => (
                    <span key={tag} className={`tag ${TAG_COLORS[tag] || 'tag-default'}`}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Description */}
            <div className="game-description">
                {description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

            {/* Buttons */}
            <div className="btn-row">
                <a
                    href="/src/assets/builds/bizarre-unity-build.zip"
                    download
                    className="download-btn"
                >
                    Download Build
                </a>
                <a
                    href="https://itch.io/jam/icantdraw/rate/409527"
                    target="_blank"
                    rel="noreferrer"
                    className="download-btn"
                >
                    Game Jam
                </a>
            </div>

            {/* Screenshots */}
            <div className="screenshots">
                <h2>Screenshots</h2>
                <div className="screenshot-grid">
                    {screenshots.map((s, i) => (
                        <img
                            key={i}
                            src={`/src/assets/unity/bizarre-unity/${s}`}
                            alt={`Screenshot ${i + 1}`}
                            onClick={() => setLightboxIndex(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="lightbox">
                    <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>
                        ✕
                    </button>
                    <button
                        className="lightbox-arrow left"
                        onClick={() =>
                            setLightboxIndex((lightboxIndex - 1 + screenshots.length) % screenshots.length)
                        }
                    >
                        ‹
                    </button>
                    <img
                        src={`/src/assets/unity/bizarre-unity/${screenshots[lightboxIndex]}`}
                        alt={`Screenshot ${lightboxIndex + 1}`}
                    />
                    <button
                        className="lightbox-arrow right"
                        onClick={() => setLightboxIndex((lightboxIndex + 1) % screenshots.length)}
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    )
}
