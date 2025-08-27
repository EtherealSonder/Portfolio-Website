// src/pages/unity-projects/introvert-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'MagicaVoxel': 'tag-teal',
    'Blender': 'tag-amber',
    'Game': 'tag-brown',
    'Stealth': 'tag-darkgreen'
}

export default function IntrovertUnity() {
    const title = 'Introvert'

    const tags = ['C#', 'MagicaVoxel', 'Blender', 'Game', 'Stealth']

    const description = [
        <>
            <strong>Introvert</strong> is a <strong>stealth prototype</strong> set inside a school where
            the player must sneak out without being caught in conversations. The player can
            <strong> walk</strong>, <strong>crouch</strong>, <strong>sprint</strong>, or
            <strong> hide</strong> inside lockers to avoid being noticed. NPCs patrol the school using
            <strong> NavMesh pathfinding</strong>, while extrovert characters actively seek the player by
            questioning nearby NPCs and chasing if detected. A <strong>detection system</strong> tracks
            <strong> visibility</strong> and <strong>sound</strong>, with the player’s actions affecting
            how quickly suspicion builds.
        </>,
        <>
            To progress, the player can <strong>distract NPCs</strong> by throwing objects, lowering
            their guard long enough to slip past. <strong>Keys</strong> and <strong>locked doors</strong>
            create progression objectives, and being spotted leads to humorous social
            “game over” states.
        </>
    ]

    const youtubeId = 'rolThS3Fa2o'
    const screenshots = [
        'introvert-1.png',
        'introvert-2.png',
        'introvert-3.png',
        'introvert-4.png',
        'introvert-5.png',
        'introvert-6.png',
        'introvert-7.png',
        'introvert-8.png',
        'introvert-9.png',
        'introvert-10.png',
        'introvert-11.png'
    ]

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

            {/* Download button */}
            <a
                href="/builds/introvert-unity-build.zip"
                download
                className="download-btn"
            >
                Download Build
            </a>

            {/* YouTube */}
            <div className="video-embed">
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title="YouTube video"
                    allowFullScreen
                />
            </div>

            {/* Screenshots */}
            <div className="screenshots">
                <h2>Screenshots</h2>
                <div className="screenshot-grid">
                    {screenshots.map((s, i) => (
                        <img
                            key={i}
                            src={`/unity/introvert-unity/${s}`}
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
                            setLightboxIndex(
                                (lightboxIndex - 1 + screenshots.length) % screenshots.length
                            )
                        }
                    >
                        ‹
                    </button>
                    <img
                        src={`/unity/introvert-unity/${screenshots[lightboxIndex]}`}
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
