import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'MagicaVoxel': 'tag-teal',
    'Blender': 'tag-amber',
    'Prototype': 'tag-gray'
}

export default function DogfatherUnity() {
    const title = 'Dogfather'

    const tags = ['C#', 'MagicaVoxel', 'Blender', 'Prototype']

    const description = [
        <>
            <strong>Dogfather</strong> is a <strong>drone infiltration stealth prototype</strong> developed
            in Unity where the player controls a drone to photograph specific NPC targets while avoiding
            detection. The drone uses <strong>physics-based movement</strong> with smooth
            <strong> force application</strong>, <strong>vertical lift</strong>, <strong>strafing</strong>,
            and <strong>rotation</strong>, and can switch between <strong>movement</strong> and
            <strong> camera states</strong> to capture photos within a defined
            <strong> field of view</strong>.
        </>,
        <>
            Guards and NPCs use <strong>NavMesh pathfinding</strong> and
            <strong> finite state machines (FSMs)</strong> for patrol and detection behavior, relying on
            <strong> field-of-view calculations</strong> with <strong>overlap spheres</strong>,
            <strong> angle checks</strong>, and <strong>raycasts</strong> for line of sight. Patrols
            follow <strong>waypoint paths</strong> or randomized routes, while some NPCs trigger
            <strong> alert states</strong> when spotting the drone. Hazards such as moving
            <strong> lasers</strong> are implemented through <strong>oscillation functions</strong> to
            create predictable yet challenging patterns.
        </>,
        <>
            A <strong>dynamic camera system</strong> follows the drone with
            <strong> collision-aware smoothing</strong> and transitions into
            <strong> photo capture mode</strong> for evidence gathering, with captured images processed in
            real time and stored in the <strong>mission UI</strong>. The game integrates
            <strong> objectives</strong>, <strong>photo albums</strong>, and
            <strong> mission progress tracking</strong> through an interactive interface, combining
            <strong> stealth navigation</strong>, <strong>AI-driven patrols</strong>, and
            <strong> photo-based objectives</strong> into a complete gameplay loop.
        </>
    ]

    const youtubeId = '_iEW30ffv1k'
    const screenshots = [
        'dogfather-1.png',
        'dogfather-2.png',
        'dogfather-3.png',
        'dogfather-4.png',
        'dogfather-5.png',
        'dogfather-6.png',
        'dogfather-7.png',
        'dogfather-8.png',
        'dogfather-9.png',
        'dogfather-10.png',
        'dogfather-11.png',
        'dogfather-12.png'
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
                href="/src/assets/builds/dogfather-unity-build.zip"
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
                            src={`/src/assets/unity/dogfather-unity/${s}`}
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
                        src={`/src/assets/unity/dogfather-unity/${screenshots[lightboxIndex]}`}
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
