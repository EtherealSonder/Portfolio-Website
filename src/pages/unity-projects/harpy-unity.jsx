import React, { useState } from 'react'
import './unitygamepage.css'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'Stealth': 'tag-darkgreen',
    'Game': 'tag-brown',
    'MagicaVoxel': 'tag-teal',
    'Aesprite': 'tag-mint'
}

export default function HarpyUnity() {
    const title = 'H.A.R.P.Y'

    const tags = ['C#', 'Stealth', 'Game', 'MagicaVoxel', 'Aesprite']

    const description = [
        <>
            <strong>H.A.R.P.Y</strong> is a <strong>stealth-based espionage prototype</strong> set in a
            simulated training program where the player controls a newly developed spy bot. The objective
            is to infiltrate <strong>procedurally generated rooms</strong>, collect
            <strong> encrypted data blobs</strong>, and avoid detection by patrolling
            <strong> security bots</strong>. If the overall <strong>threat level</strong> reaches its
            maximum, the mission ends in failure.
        </>,
        <>
            The game is presented from a <strong>3D isometric perspective</strong> with
            <strong> point-and-click movement controls</strong>. The player can craft and deploy
            <strong> gadgets</strong> such as distraction bombs, invisibility modules, and hacking tools,
            consuming <strong>resources</strong> gathered by looting crates or evading enemies. The
            <strong> procedural generation</strong> of rooms and item crates adds randomness to each
            session, ensuring varied playthroughs.
        </>,
        <>
            <strong>Enemy types</strong> include a range of <strong>security bots</strong> with distinct
            behaviors and states. Basic bots patrol in loops with <strong>patrol</strong>,
            <strong> alert</strong>, and <strong>suspicion</strong> states. Advanced bots patrol with
            greater speed, larger vision cones, and can even <strong>destroy cover objects</strong> over
            time. <strong>Stationary vantage bots</strong> survey large areas from elevated positions,
            while <strong>drones</strong> patrol with wide fields of view. <strong>Mines</strong> trigger
            alert states if the player remains within range, while <strong>Watchers</strong> guard
            critical data and require hacking or invisibility to bypass.
        </>,
        <>
            The player’s survival depends on <strong>resource management</strong>,
            <strong> pathfinding</strong>, and <strong>tactical evasion</strong>. A custom
            <strong> A* pathfinding algorithm</strong> was implemented to overcome performance limits of
            Unity’s <strong>NavMesh system</strong>, providing smoother and more flexible enemy patrols.
            <strong> Visual and audio effects</strong> reinforce stealth mechanics: vision cones,
            detection indicators, and <strong>shader-based visual cues</strong> (invisibility, glow,
            wireframe effects) enhance player feedback during infiltration.
        </>,
        <>
            The <strong>art style</strong> is voxel-based, created using <strong>MagicaVoxel</strong> and
            <strong> Blender</strong>, with additional 2D icons made in <strong>Hexels 3</strong>.
            <strong> Gameplay flow</strong> is supported by camera controls that allow zooming, panning,
            and rotating around the bot for tactical planning.
        </>,
        <>
            <strong>H.A.R.P.Y</strong> demonstrates the integration of
            <strong> procedural level generation</strong>, <strong>AI-driven enemy states</strong>,
            <strong> custom pathfinding</strong>, <strong>resource-based gadget systems</strong>, and
            <strong> voxel art design</strong> to deliver a compact stealth infiltration experience.
        </>
    ]

    const screenshots = ['harpy-1.png', 'harpy-2.png', 'harpy-3.png']
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
                href="/builds/harpy-unity-build.zip"
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
                            src={`/unity/harpy-unity/${s}`}
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
                        src={`/unity/harpy-unity/${screenshots[lightboxIndex]}`}
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
