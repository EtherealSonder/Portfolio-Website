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

export default function BlindspotUnity() {
    const title = 'BlindSpot'

    const tags = ['C#', '2D', 'Game', 'Puzzle', 'Aesprite', 'Photoshop']

    const description = [
        <>
            <strong>BlindSpot</strong> is a <strong>2D puzzle game</strong> where the player is trapped in
            a mysterious confined environment and must <strong>connect rooms</strong> to escape.
            Progression depends on solving <strong>spatial challenges</strong> correctly, linking the
            right rooms together to create valid paths out of the structure.
        </>,
        <>
            The game uses a mix of <strong>dialogue-driven atmosphere</strong> and
            <strong> puzzle mechanics</strong>. A guiding voice provides cryptic hints about the maze and
            possible exits, while interactive elements such as <strong>notepads</strong>,
            <strong> clocks</strong>, and <strong>icons</strong> reveal fragments of the solution.
            Players must pay attention to <strong>audio</strong> and <strong>visual cues</strong> to
            uncover patterns in the environment.
        </>,
        <>
            Interaction is based on <strong>double-click recognition</strong> and
            <strong> icon management</strong>, where objects like notepads, recycle bins, or audio devices
            open when triggered under specific conditions. A <strong>camera system</strong> allows the
            player to switch views, and the UI includes <strong>dynamic notifications</strong> and
            <strong> shadow overlays</strong> to indicate puzzle states. <strong>Background music</strong>,
            <strong> sound effects</strong>, and <strong>timed voice lines</strong> reinforce the sense
            of urgency and mystery.
        </>,
        <>
            The puzzle logic centers around a <strong>sequence-based connection system</strong> where
            numbers must be aligned in the correct order. Submitting the right combination unlocks the
            escape path, while incorrect attempts can trap the player in alternate outcomes. A
            <strong> tutorial</strong> introduces players to the mechanics through
            <strong> typewriter-style text</strong> and <strong>staged dialogue</strong> before
            transitioning into the main challenge.
        </>,
        <>
            <strong>BlindSpot</strong> combines <strong>puzzle-solving</strong>, narrative voice cues,
            and <strong>environmental interaction</strong> to create a layered escape experience where
            success depends on careful observation and precise connections.
        </>
    ]

    const screenshots = [
        'blindspot-1.png',
        'blindspot-2.png',
        'blindspot-3.png',
        'blindspot-4.png'
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

            {/* Download button */}
            <a
                href="/src/assets/builds/blindspot-unity-build.zip"
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
                            src={`/src/assets/unity/blindspot-unity/${s}`}
                            alt={`Screenshot ${i + 1}`}
                            onClick={() => setLightboxIndex(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="lightbox">
                    <button
                        className="lightbox-close"
                        onClick={() => setLightboxIndex(null)}
                    >
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
                        src={`/src/assets/unity/blindspot-unity/${screenshots[lightboxIndex]}`}
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
