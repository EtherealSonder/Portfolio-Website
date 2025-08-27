import React, { useState } from 'react'
import './unitygamepage.css'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'Python': 'tag-red',
    'AI': 'tag-violet',
    'ML-Agents': 'tag-emerald',
    'Deep Reinforcement Learning': 'tag-indigo',
    'TensorBoard': 'tag-yellow',
    'MagicaVoxel': 'tag-teal',
    'Blender': 'tag-amber'
}

export default function VehicleaiUnity() {
    const title = 'Autonomous Vehicle AI for Simulated Traffic Environment'

    const tags = [
        'C#',
        'Python',
        'AI',
        'ML-Agents',
        'Deep Reinforcement Learning',
        'TensorBoard',
        'MagicaVoxel',
        'Blender'
    ]

    const description = [
        <>
            This project involved building an autonomous driving agent in Unity using
            <strong> ML-Agents</strong> and <strong>Deep Reinforcement Learning (DRL)</strong>. The system
            was first trained to complete a simple looped track, then extended to a
            <strong> traffic simulation</strong> containing modular roads, junctions,
            <strong> traffic lights</strong>, and <strong>pedestrians</strong> controlled via Unity
            <strong> NavMesh Agents</strong>.
        </>,
        <>
            The agent’s <strong>observation space</strong> captured key state information such as forward
            velocity, lane position, and obstacle detection. <strong>Reward shaping</strong> was designed
            to encourage progress, obstacle avoidance, lane-keeping, correct turning behavior, and
            compliance with rules such as wait zones and traffic signals.
        </>,
        <>
            Two reinforcement learning algorithms were evaluated:
            <strong> Proximal Policy Optimization (PPO)</strong> and
            <strong> Soft Actor-Critic (SAC)</strong>. PPO was found more stable and significantly faster
            to train (≈46.9 minutes for 2M steps) compared to SAC (≈4.9 hours), making it the preferred
            choice for training in the full traffic environment. Training progress and performance were
            monitored with <strong>TensorBoard</strong>, and efficiency was improved by running many
            <strong> parallel training environments</strong> inside Unity.
        </>,
        <>
            The project was developed with Unity and <strong>C#</strong> for agent/environment coding,
            <strong> Python</strong> for ML-Agents training, and <strong>TensorBoard</strong> for data
            visualization. Assets were created using <strong>Blender</strong> and
            <strong> MagicaVoxel</strong>, alongside open-source packs from Kenney. Version control and
            builds were managed via <strong>GitHub</strong>, with development in Visual Studio Code and
            Python environments configured through <strong>Anaconda</strong>.
        </>,
        <>
            This work was carried out as part of my Master’s dissertation for the MSc in Artificial
            Intelligence at <strong>Heriot-Watt University</strong>, focusing on the application of
            reinforcement learning to autonomous driving in <strong>simulated traffic environments</strong>.
        </>
    ]

    const youtubeId = 'r-BCadKdgLU'
    const screenshots = [
        'vehicleai-1.png',
        'vehicleai-2.png',
        'vehicleai-3.png',
        'vehicleai-4.png',
        'vehicleai-5.png'
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

            {/* Description (DM Sans; spacing handled in CSS) */}
            <div className="game-description">
                {description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

            {/* Buttons */}
            <div className="btn-row">
                <a
                    href="/builds/vehicleai-unity-build.zip"
                    download
                    className="download-btn"
                >
                    Download Build
                </a>
                <a
                    href="https://github.com/GunabalanLingam/F21MP-Autonomous-Vehicle-Traffic-Simulation"
                    target="_blank"
                    rel="noreferrer"
                    className="download-btn"
                >
                    Source Code
                </a>
            </div>

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
                            src={`/unity/vehicleai-unity/${s}`}
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
                        src={`/unity/vehicleai-unity/${screenshots[lightboxIndex]}`}
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
