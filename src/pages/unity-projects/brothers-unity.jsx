// src/pages/unity-projects/brothers-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    '2D': 'tag-canary',
    'Game': 'tag-brown',
    'Platformer': 'tag-avacado',
    'Aesprite': 'tag-mint',
    'Photoshop': 'tag-fawn',
    'GameJam': 'tag-periwinkle'
}

export default function BrothersUnity() {
    const title = 'The Brothers'

    const tags = ['C#', '2D', 'Game', 'Platformer', 'Aesprite', 'Photoshop', 'GameJam']

    const description = [
        <>
            <strong>The Brothers</strong> is a <strong>2D two-player platformer</strong> where players
            control Keller “Vamp” Hermann and his brother Joey Hermann. Keller has turned into a vampire,
            and Joey must stop him to protect the humans, creating an <strong>asymmetrical duel</strong>
            between family members.
        </>,
        <>
            <strong>Player 1</strong> controls <strong>Keller the Vampire</strong> using
            <strong> WASD</strong>, with abilities such as <strong>double jump</strong>,
            <strong> wall jump</strong>, <strong>bat transformation</strong>, and
            <strong> feeding on humans</strong> to regain strength. <strong>Player 2</strong> controls
            <strong> Joey the Hero</strong> with the <strong>arrow keys</strong>, using a
            <strong> grapple hook</strong> for traversal and relying on agility to hunt Keller down and
            save the people.
        </>,
        <>
            The game emphasizes <strong>competitive platforming mechanics</strong>, where each
            character’s unique <strong>movement abilities</strong> and objectives create contrasting
            playstyles. One focuses on <strong>evasion</strong> and predatory <strong>feeding</strong>,
            while the other uses <strong>pursuit</strong> and <strong>precision</strong> to counter.
            Submission to <strong>Vampire Jam</strong>.
        </>
    ]

    const screenshots = ['brothers-1.png', 'brothers-2.png', 'brothers-3.png']
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
                    href="/src/assets/builds/brothers-unity-build.zip"
                    download
                    className="download-btn"
                >
                    Download Build
                </a>
                <a
                    href="https://itch.io/jam/vampire-jam/rate/402407"
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
                            src={`/src/assets/unity/brothers-unity/${s}`}
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
                        src={`/src/assets/unity/brothers-unity/${screenshots[lightboxIndex]}`}
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
