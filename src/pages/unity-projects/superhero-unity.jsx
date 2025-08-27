// src/pages/unity-projects/superhero-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'MagicaVoxel': 'tag-teal',
    'Blender': 'tag-amber',
    'Procedural generation': 'tag-green',
    'Shader Programming': 'tag-purple',
    '3d math': 'tag-orange',
    'Prototype': 'tag-gray'
}

export default function SuperheroUnity() {
    const title = 'Superhero Prototype in Unity | Procedural City Generation Showcase'

    const tags = [
        'C#',
        'MagicaVoxel',
        'Blender',
        'Procedural generation',
        'Shader Programming',
        '3d math',
        'Prototype'
    ]

    const description = [
        <>
            This project combines a <strong>procedural city generation</strong> system with a custom
            <strong> flight and movement controller</strong> built in Unity. The city is generated on a
            <strong> grid</strong> where each cell can contain a building block, a road, or a
            <strong> Voronoi region</strong> reserved for parks and lakes. Block placement uses
            <strong> Perlin noise</strong> to skip cells and create variation, while Voronoi logic clears
            larger irregular spaces. Neighboring blocks can merge into larger structures, and a
            <strong> zoning system</strong> blends distance from the city center with Perlin noise to
            assign blocks as either residential or urban.
        </>,
        <>
            <strong>Buildings</strong> are spawned using <strong>modular prefabs</strong> and organized
            into <strong>chunks</strong> to support runtime optimization. A
            <strong> frustum culling manager</strong> checks the camera view each frame and disables
            chunks outside the player’s vision, while throttled activation avoids performance spikes.
            Residential blocks use a <strong>subgrid system</strong> for house placement, with
            outward-facing orientation and deletion rules for interior houses. Voronoi regions are filled
            with meshes by placing <strong>quads</strong>, and adjacent regions of the same type are
            merged to avoid internal walls.
        </>,
        <>
            The <strong>player controller</strong> supports both grounded and flying states. On the ground
            the system handles walking, running, sprinting, and falling detection with
            <strong> jump buffers</strong> and <strong>coyote time</strong>. In flight mode the player
            uses <strong>thrust</strong>, <strong>pitch</strong>, <strong>yaw</strong>, and
            <strong> roll</strong> with <strong>boost mechanics</strong> and
            <strong> drift simulation</strong>. Visual feedback is added through
            <strong> particle effects</strong>, <strong>animation speed scaling</strong>, and
            <strong> camera impulses</strong>. The controller also integrates with
            <strong> Cinemachine</strong> to switch between third person and first person views depending
            on context.
        </>,
        <>
            Together, the system combines <strong>procedural generation</strong>,
            <strong> physics-driven movement</strong>, and <strong>camera control</strong> into one
            runtime pipeline. It demonstrates a prototype where procedural environments and traversal
            mechanics operate seamlessly in Unity.
        </>
    ]

    const youtubeId = 'HCLYjWXFzLw'
    const screenshots = [
        'superhero-1.png',
        'superhero-2.png',
        'superhero-3.png',
        'superhero-4.png',
        'superhero-5.png',
        'superhero-6.png'
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
                href="/src/assets/builds/superhero-unity-build.zip"
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
                            src={`/src/assets/unity/superhero-unity/${s}`}
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
                            setLightboxIndex(
                                (lightboxIndex - 1 + screenshots.length) % screenshots.length
                            )
                        }
                    >
                        ‹
                    </button>
                    <img
                        src={`/src/assets/unity/superhero-unity/${screenshots[lightboxIndex]}`}
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
