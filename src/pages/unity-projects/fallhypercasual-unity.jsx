import React, { useState } from 'react'
import './unitygamepage.css'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'MagicaVoxel': 'tag-teal',
    'Aesprite': 'tag-mint',
    'Prototype': 'tag-gray',
    'Hypercasual': 'tag-rose'
}

export default function FallhypercasualUnity() {
    const title = 'Fall-Hypercasual Prototype'

    const tags = ['C#', 'MagicaVoxel', 'Aesprite', 'Prototype', 'Hypercasual']

    const description = [
        <>
            <strong>Fall-Hypercasual</strong> is a Unity prototype where the player controls a falling
            object and navigates through a stream of coins and obstacles. The player moves by
            <strong> tapping and dragging</strong> on the screen, with a <strong>physics-driven</strong>
            system applying relative forces to adjust direction. <strong>Score</strong> increases over
            time and with every coin collected, while <strong>total coins</strong> are tracked across
            sessions.
        </>,
        <>
            The game features multiple <strong>obstacle types</strong> with different effects: some cause
            instant <strong>game over</strong>, others <strong>reduce coins</strong>, and some
            temporarily <strong>lower movement speed</strong>. These are implemented using
            <strong> ScriptableObject</strong> properties, allowing speed, effect time, and reduction
            values to scale with the player’s <strong>score level</strong>. Both coins and obstacles are
            managed through <strong>object pooling</strong> and continuously spawned in randomized
            positions, rotations, and scales to maintain variety.
        </>,
        <>
            The <strong>user interface</strong> displays score, coin count, and effect states in real
            time. <strong>Collisions</strong> trigger particle effects, sound effects, and updates to the
            HUD. A <strong>slowdown panel</strong> and <strong>progress bar</strong> visually indicate
            temporary debuffs like speed reduction. <strong>Game over</strong> activates a results screen
            that shows the player’s score and coins earned, while persistent values such as
            <strong> high score</strong> and <strong>total coins</strong> are stored with
            <strong> PlayerPrefs</strong>.
        </>,
        <>
            This prototype demonstrates <strong>hypercasual gameplay</strong> built around
            <strong> procedural spawning</strong>, <strong>object pooling</strong>,
            <strong> physics-based control</strong>, <strong>UI feedback</strong>, and
            <strong> scalable obstacle properties</strong>, all wrapped into a simple loop of avoiding
            hazards, collecting coins, and pushing for a higher score.
        </>
    ]

    const youtubeId = null // add if you have one later
    const screenshots = [] // add if you have screenshots later

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

            {/* Description (DM Sans + paragraph spacing via CSS) */}
            <div className="game-description">
                {description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

            {/* WebGL embed (no download button for this page) */}
            <div className="webgl-embed">
                <iframe
                    src="/webgl/Fall-Hypercasual Build/index.html"
                    title="Fall-Hypercasual WebGL"
                    allow="fullscreen; autoplay; gamepad *; xr-spatial-tracking"
                />
            </div>

            {/* Optional: YouTube if you add one later */}
            {youtubeId && (
                <div className="video-embed">
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title="YouTube video"
                        allowFullScreen
                    />
                </div>
            )}

            {/* Optional: Screenshots if/when you add them */}
            {screenshots.length > 0 && (
                <div className="screenshots">
                    <h2>Screenshots</h2>
                    <div className="screenshot-grid">
                        {screenshots.map((s, i) => (
                            <img
                                key={i}
                                src={`/unity/fallhypercasual-unity/${s}`}
                                alt={`Screenshot ${i + 1}`}
                                onClick={() => setLightboxIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {lightboxIndex !== null && (
                <div className="lightbox">
                    <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>
                        ✕
                    </button>
                    <img
                        src={`/unity/fallhypercasual-unity/${screenshots[lightboxIndex]}`}
                        alt={`Screenshot ${lightboxIndex + 1}`}
                    />
                </div>
            )}
        </div>
    )
}
