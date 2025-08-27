// src/pages/unity-projects/kimgsburger-unity.jsx
import React, { useState } from 'react'
import './unitygamepage.css'
import unityLogo from '../../assets/unity-logo.png'

const TAG_COLORS = {
    'C#': 'tag-blue',
    'Game': 'tag-brown',
    'QTE': 'tag-strawberry',
    'MagicaVoxel': 'tag-teal',
    'Prototype': 'tag-gray',
    'GameJam': 'tag-periwinkle'
}

export default function KimgsburgerUnity() {
    const title = "Kimg's Burger"

    const tags = ['C#', 'Game','QTE','MagicaVoxel', 'Prototype', 'GameJam']

    const description = [
        <>
            <strong>Kimg’s Burger</strong> is a fast-paced <strong>restaurant management</strong> prototype
            where the player prepares burgers based on <strong>customer orders</strong>. Each customer
            arrives with specific requirements for <strong>bun</strong>, <strong>patty</strong>, and
            <strong> veggie sizes</strong>, and the player must quickly assemble the correct combination
            to satisfy them.
        </>,
        <>
            The system tracks <strong>resources</strong> such as buns, patties, and veggies, along with
            the player’s <strong>money</strong>. Assembling a burger consumes resources and earns money
            only if the order matches the customer’s requirements. Incorrect or wasteful actions reduce
            profits and risk running out of ingredients, leading to a <strong>deadlock</strong> where the
            shop can no longer serve customers.
        </>,
        <>
            <strong>Customers</strong> are spawned at intervals, each with randomized
            <strong> names</strong>, <strong>avatars</strong>, and unique burger requirements. They are
            represented both in the scene and in the <strong>UI order icons</strong>. Matching orders
            correctly not only rewards money but also influences <strong>customer satisfaction</strong>,
            represented through <strong>emoticons</strong> (happy, neutral, or sad).
        </>,
        <>
            The gameplay loop is supported by <strong>drag-and-drop</strong> interactions for ingredients,
            <strong> UI popups</strong> for order details, and <strong>warnings</strong> when resources
            run low. <strong>High scores</strong> are measured by the total number of customers served and
            the final rating achieved before the shop closes.
        </>,
        <>
            This prototype highlights <strong>resource management</strong>, timed
            <strong> customer interactions</strong>, and precise <strong>order-matching</strong> mechanics,
            combining speed and accuracy into a simple but engaging burger shop simulation. Submission to
            <strong> MashUp Game Jam</strong>.
        </>
    ]

    const screenshots = [
        'kimgsburger-1.png',
        'kimgsburger-2.png',
        'kimgsburger-3.png'
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

            {/* Buttons */}
            <div className="btn-row">
                <a
                    href="/src/assets/builds/kimgsburger-unity-build.zip"
                    download
                    className="download-btn"
                >
                    Download Build
                </a>
                <a
                    href="https://itch.io/jam/mashup-game-jam/rate/665747"
                    target="_blank"
                    rel="noreferrer"
                    className="download-btn"
                >
                    Game Jam
                </a>
            </div>

            {/* Screenshots */}
            <div className="screenshots">
                <h2>Screenshots</h2>
                <div className="screenshot-grid">
                    {screenshots.map((s, i) => (
                        <img
                            key={i}
                            src={`/src/assets/unity/kimgsburger-unity/${s}`}
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
                        src={`/src/assets/unity/kimgsburger-unity/${screenshots[lightboxIndex]}`}
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
