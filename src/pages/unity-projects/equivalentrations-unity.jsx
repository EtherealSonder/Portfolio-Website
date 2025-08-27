// src/pages/unity-projects/equivalentrations-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    '2D': 'tag-canary',
    'Prototype': 'tag-gray',
    'Educational': 'tag-black',
    'Aesprite': 'tag-mint',
    'Photoshop': 'tag-fawn'
}

export default function EquivalentRatiosUnity() {
    const title = 'Equivalent Ratios'

    const tags = ['C#', '2D', 'Prototype', 'Educational', 'Aesprite', 'Photoshop']

    const description = [
        <>
            This is a playful <strong>puzzle prototype</strong> where players experiment with
            <strong> mixing colors</strong> by <strong>drag-and-drop</strong> of paint bags into a mixer.
            Each bag changes the <strong>ratio</strong> of colors, and the goal is to discover perfect
            blends by finding the correct combinations.
        </>,
        <>
            The game provides instant <strong>visual feedback</strong> as colors combine, along with
            <strong> animations</strong>, <strong>sounds</strong>, and <strong>star rewards</strong> for
            correct matches. A <strong>hint system</strong> guides players as they explore different
            ratios, and <strong>progression</strong> unlocks new stages once enough mixes are attempted.
            Designed with interactive <strong>drag-and-drop mechanics</strong> and simple
            <strong> ratio logic</strong>, the prototype makes learning proportions fun and intuitive
            while keeping the experience light and rewarding.
        </>
    ]

    // WebGL build exported to: public/webgl/EquivalentRatios Build/
    // Iframe will load its own Unity index.html
    const webglSrc = '/webgl/EquivalentRatios%20Build/index.html'

    // (Optional) add screenshots later if you have them
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
                {tags.map(tag => (
                    <span key={tag} className={`tag ${TAG_COLORS[tag] || 'tag-default'}`}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Description (DM Sans + paragraph spacing via CSS) */}
            <div className="game-description">
                {description.map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>

            {/* WebGL embed */}
            <div className="webgl-embed">
                <iframe
                    src={webglSrc}
                    title="Equivalent Ratios WebGL"
                    allow="fullscreen; autoplay; gamepad *; xr-spatial-tracking"
                />
            </div>

            {/* Optional screenshots block */}
            {screenshots.length > 0 && (
                <div className="screenshots">
                    <h2>Screenshots</h2>
                    <div className="screenshot-grid">
                        {screenshots.map((s, i) => (
                            <img
                                key={i}
                                src={`/src/assets/unity/equivalentrations-unity/${s}`}
                                alt={`Screenshot ${i + 1}`}
                                onClick={() => setLightboxIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {lightboxIndex !== null && (
                <div className="lightbox">
                    <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>✕</button>
                    <img
                        src={`/src/assets/unity/equivalentrations-unity/${screenshots[lightboxIndex]}`}
                        alt={`Screenshot ${lightboxIndex + 1}`}
                    />
                </div>
            )}
        </div>
    )
}
