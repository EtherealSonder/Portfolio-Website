// src/pages/unity-projects/bullethell-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    '2D': 'tag-canary',
    'Game': 'tag-brown',
    'Top-Down': 'tag-khakhi',
    'Aesprite': 'tag-mint',
    'Photoshop': 'tag-fawn'
}

export default function BulletHellUnity() {
    const title = 'Bullet Hell'

    const tags = ['C#', '2D', 'Game', 'Top-Down', 'Aesprite', 'Photoshop']

    const description = [
        <>
            A fast-paced <strong>top-down 2D bullet hell</strong> built in Unity, where the player must
            <strong> shoot</strong>, <strong>dash</strong>, and weave through dense
            <strong> enemy barrages</strong>. The player has <strong>stamina-based dashes</strong> for
            quick escapes and can <strong>restore health</strong> through offensive play.
        </>,
        <>
            Enemies feature varied <strong>movement</strong> and <strong>attack patterns</strong>, from
            <strong> spread fire</strong> to <strong>circular bullet storms</strong>, forcing the player
            to adapt on the fly. The challenge is to survive waves of increasingly complex encounters
            while balancing <strong>offense</strong>, <strong>defense</strong>, and
            <strong> mobility</strong>.
        </>
    ]

    const screenshots = ['bullethell-1.png', 'bullethell-2.png']
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

            {/* Description (DM Sans + paragraph spacing via CSS) */}
            <div className="game-description">
                {description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

            {/* Download button */}
            <a
                href="/src/assets/builds/bullethell-unity-build.zip"
                download
                className="download-btn"
            >
                Download Build
            </a>

            {/* Screenshots */}
            <div className="screenshots">
                <h2>Screenshots</h2>
                <div className="screenshot-grid">
                    {screenshots.map((s, i) => (
                        <img
                            key={i}
                            src={`/src/assets/unity/bullethell-unity/${s}`}
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
                        src={`/src/assets/unity/bullethell-unity/${screenshots[lightboxIndex]}`}
                        alt={`Screenshot ${lightboxIndex + 1}`}
                    />
                    <button
                        className="lightbox-arrow right"
                        onClick={() =>
                            setLightboxIndex((lightboxIndex + 1) % screenshots.length)
                        }
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    )
}
