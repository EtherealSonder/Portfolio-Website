// src/pages/unity-projects/stack-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'Hypercasual': 'tag-rose',
    'Prototype': 'tag-gray'
}

export default function StackUnity() {
    const title = 'Stack - Prototype'

    const tags = ['C#', 'Hypercasual', 'Prototype']

    const description = [
        <>
            <strong>Stack</strong> is a Unity prototype where the player builds a tower by placing
            moving blocks on top of each other. Each block must be aligned with the one below it,
            and any <strong>misalignment</strong> causes the overhanging part to be <strong>cut off</strong>,
            reducing the size of the next block.
        </>,
        <>
            The game gradually becomes harder as the stack narrows, and precision is rewarded with
            <strong> combo bonuses</strong> that can slightly restore block size. A dynamic
            <strong> gradient background</strong> and shifting block colors provide visual feedback,
            while <strong>rubble physics</strong> simulate discarded pieces.
        </>,
        <>
            The game ends when the stack becomes too small to continue, and the final score is recorded
            with <strong>PlayerPrefs</strong>.
        </>
    ]

    // If you later add a YouTube video or screenshots, follow the same pattern as other pages
    const youtubeId = null
    const screenshots = []

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

            {/* WebGL embed (no download button for this page) */}
            <div className="webgl-embed">
                <iframe
                    src="/webgl/Stack-Prototype%20Build/index.html"
                    title="Stack Prototype WebGL"
                    allow="fullscreen; autoplay; gamepad *; xr-spatial-tracking"
                />
            </div>

            {/* Optional: YouTube */}
            {youtubeId && (
                <div className="video-embed">
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title="YouTube video"
                        allowFullScreen
                    />
                </div>
            )}

            {/* Optional: Screenshots */}
            {screenshots.length > 0 && (
                <div className="screenshots">
                    <h2>Screenshots</h2>
                    <div className="screenshot-grid">
                        {screenshots.map((s, i) => (
                            <img
                                key={i}
                                src={`/src/assets/unity/stack-unity/${s}`}
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
                        src={`/src/assets/unity/stack-unity/${screenshots[lightboxIndex]}`}
                        alt={`Screenshot ${lightboxIndex + 1}`}
                    />
                </div>
            )}
        </div>
    )
}
