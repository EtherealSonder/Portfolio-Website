// src/pages/unity-projects/birdphysics-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'Blender': 'tag-amber',
    'Procedural generation': 'tag-green',
    'Prototype': 'tag-gray',
    'Object-Oriented Programming': 'tag-navy',
    'Perlin Noise': 'tag-cyan',
    'Mesh Generation': 'tag-lime'
}

export default function BirdphysicsUnity() {
    const title = 'Bird Physics Prototype | Tiling Procedural Terrain Generation'

    const tags = [
        'C#',
        'Blender',
        'Procedural generation',
        'Prototype',
        'Object-Oriented Programming',
        'Perlin Noise',
        'Mesh Generation'
    ]

    const description = [
        <>
            This Unity prototype is a <strong>procedurally generated</strong> open terrain system combined
            with a <strong>physics-driven</strong> bird flight controller. The core of the terrain
            generation pipeline is built on a <strong>global heightmap</strong> system powered by
            <strong> multi-octave Perlin noise</strong>, enhanced with <strong>biome-aware shaping</strong>,
            <strong> erosion simulation</strong>, and <strong>real-time streaming</strong>. The terrain is
            constructed from a <strong>seamless, wraparound global heightmap</strong>, where each chunk is
            generated based on consistent noise offsets to avoid seams and discontinuities. Height values
            are shaped using customizable <strong>AnimationCurve</strong> profiles and further modulated
            with a region-based <strong>peakNoisePower</strong> system, which applies high-exponent noise
            masking to control the rarity and prominence of high-altitude features like
            <strong> mountain peaks</strong>.
        </>,
        <>
            The heightmap also incorporates <strong>regional biome blending</strong>, where a secondary
            <strong> low-frequency noise</strong> map adjusts <strong>thresholds</strong> for biome
            classification (water, plains, mountain) to reflect large-scale environmental variation.
            A <strong>radial falloff mask</strong> is applied to shape the world into a natural island or
            continent-like layout. Once generated, the heightmap is normalized and optionally passed
            through <strong>thermal erosion</strong> algorithms that simulate sediment redistribution
            across slopes. Terrain meshes are created chunk-wise with <strong>vertex-based elevation</strong>
            and <strong>UVs</strong>, while lake areas are detected using a height <strong>threshold</strong>
            and overlaid with procedurally generated flat <strong>water meshes</strong>.
        </>,
        <>
            Chunks are streamed in and out of memory at runtime using a <strong>chunk pooling</strong>
            system controlled by player position. This system supports <strong>asynchronous generation</strong>
            with <strong>edge-wrapping</strong> to give the illusion of <strong>infinite terrain</strong>
            while maintaining performance. <strong>Fog</strong> settings are exposed in the
            <strong> TerrainManager</strong> to visually mask chunk pop-in at long distances, enhancing
            immersion.
        </>,
        <>
            On top of this dynamic landscape, a <strong>physics-based bird flight system</strong> is
            implemented with multiple flight states including idle, takeoff, flapping, gliding, and
            diving. The bird controller uses <strong>hinge joints</strong> for articulated wing simulation
            and physically driven forces for realistic motion. <strong>Flapping</strong> is achieved
            through <strong>sinusoidal wing motion</strong> and <strong>force application curves</strong>,
            while gliding incorporates custom <strong>drag</strong> and <strong>lift</strong> models tied
            to bird velocity and orientation. <strong>Auto-leveling</strong> and dynamic shoulder joint
            control ensure responsive stabilization, with a custom <strong>input layer</strong> and
            <strong> animation controller</strong> driving wing flaps and turn direction.
        </>,
        <>
            Together, the terrain and bird systems form a sandbox-like prototype where players can explore
            vast, naturalistic environments through the perspective of a gliding creature. The design
            demonstrates <strong>procedural worldbuilding</strong>, <strong>GPU-friendly mesh generation</strong>,
            <strong> real-time physics integration</strong>, and <strong>natural motion modeling</strong>
            using mathematical and biomechanical principles.
        </>
    ]

    const youtubeId = '3G9yiMXeIG4'
    const screenshots = [
        'birdphysics-1.png',
        'birdphysics-2.png',
        'birdphysics-3.png',
        'birdphysics-4.png',
        'birdphysics-5.png'
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

            {/* Description (DM Sans, paragraph spacing handled in CSS) */}
            <div className="game-description">
                {description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

            {/* Download button */}
            <a
                href="/src/assets/builds/birdphysics-unity-build.zip"
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
                            src={`/src/assets/unity/birdphysics-unity/${s}`}
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
                        src={`/src/assets/unity/birdphysics-unity/${screenshots[lightboxIndex]}`}
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
