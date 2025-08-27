// src/pages/unity-projects/monster-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'Horror': 'tag-turquoise',
    'QTE': 'tag-strawberry',
    'Game': 'tag-brown',
    'MagicaVoxel': 'tag-teal',
    'GameJam': 'tag-periwinkle'
}

export default function MonsterUnity() {
    const title = 'Monster'

    const tags = ['C#', 'Horror', 'QTE', 'Game', 'MagicaVoxel', 'GameJam']

    const description = [
        <>
            <strong>Monster</strong> is a <strong>narrative-driven</strong> prototype about
            <strong> sleep paralysis</strong>. The player lies trapped in bed, unable to move, as a
            looming monster manifests in the room. The experience builds tension through
            <strong> atmosphere</strong> and sudden <strong>visual</strong> and <strong>audio cues</strong>,
            leading to <strong>quick-time events (QTEs)</strong> where the player must fight to regain
            control of their body and escape the paralysis.
        </>,
        <>
            The game uses a combination of <strong>environmental storytelling</strong> and
            <strong> cinematic effects</strong> to create immersion. <strong>Flickering lights</strong>,
            rotating fans, and <strong>background audio loops</strong> simulate the uncanny stillness of
            a night terror episode. <strong>Camera shake</strong> and <strong>animation sequences</strong>
            heighten the impact of the monster’s presence. <strong>Dialogue</strong> is presented with a
            <strong> typewriter effect</strong>, pausing at key points to require input, and branching
            into different narrative beats depending on the player’s responses.
        </>,
        <>
            Core gameplay revolves around two phases of <strong>QTEs</strong>. In
            <strong> body movement QTEs</strong>, the player must press specific keys quickly and
            accurately to fill a <strong>progress bar</strong> while incorrect inputs drain it. In
            <strong> breathing QTEs</strong>, the player alternates between mouse clicks and key presses,
            timed against <strong>visual prompts</strong>, with <strong>radial bars</strong> depleting if
            they hesitate. Both systems create escalating pressure; failure triggers a
            <strong> game-over sequence</strong> where the paralysis overwhelms the player, while success
            progresses the narrative to a final release.
        </>,
        <>
            The interface is supported by <strong>fade-in/fade-out systems</strong>,
            <strong> radial bar tracking</strong>, and <strong>animated UI feedback</strong>.
            <strong> Sound design</strong> plays a key role, with inhaling/exhaling audio tied to
            breathing sequences, unsettling <strong>ambient loops</strong>, and monster-related
            <strong> stingers</strong>. Persistent elements like <strong>menus</strong> and
            <strong> transitions</strong> ensure flow between game states while maintaining atmosphere.
        </>,
        <>
            <strong>Monster</strong> demonstrates how <strong>environmental effects</strong>,
            <strong> UI-driven QTEs</strong>, and <strong>audiovisual design</strong> combine to simulate
            the fear and struggle of sleep paralysis in an interactive format. Submission to
            <strong> GMTK Game Jam 2020</strong>.
        </>
    ]

    const screenshots = ['monster-1.png', 'monster-2.png', 'monster-3.png']
    const [lightboxIndex, setLightboxIndex] = useState(null)

    return (
        <div className="unitygamepage">
            {/* Header */}
            <div className="page-header">
                <h1>{title}</h1>
                <div className="engine-badge">
                    <img src="/unity-logo.png" alt="Unity logo" className="engine-logo" />
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
                    href="/builds/monster-unity-build.zip"
                    download
                    className="download-btn"
                >
                    Download Build
                </a>
                <a
                    href="https://itch.io/jam/gmtk-2020/rate/699828"
                    target="_blank"
                    rel="noreferrer"
                    className="download-btn"
                >
                    Game Jam
                </a>
            </div>

            {/* (No YouTube for this page) */}

            {/* Screenshots */}
            <div className="screenshots">
                <h2>Screenshots</h2>
                <div className="screenshot-grid">
                    {screenshots.map((s, i) => (
                        <img
                            key={i}
                            src={`/unity/monster-unity/${s}`}
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
                        src={`/unity/monster-unity/${screenshots[lightboxIndex]}`}
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
