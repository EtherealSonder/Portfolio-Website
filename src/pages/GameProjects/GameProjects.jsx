import React, { useState } from 'react'
import '../../styles/GameProjects.base.css'

import Unity from './Unity'
import Unreal from './Unreal'
import Construct from './Construct'
import Godot from './Godot'

const ENGINES = [
    { key: 'Unity', logo: '/unity-logo.png' },
    { key: 'Unreal', logo: '/unreal-logo.png' },
    { key: 'Construct', logo: '/construct-logo.png' },
    { key: 'Godot', logo: '/godot-logo.png' },
];

export default function GameProjects() {
    const [selected, setSelected] = useState('Unity')

    return (
        <div className="projects-page">
            {/* Tabs */}
            <div className="engine-tabs">
                {ENGINES.map(e => (
                    <button
                        key={e.key}
                        className={`engine-btn ${selected === e.key ? 'active' : ''}`}
                        onClick={() => setSelected(e.key)}
                        aria-pressed={selected === e.key}
                    >
                        <img src={e.logo} alt={`${e.key} logo`} />
                        {e.key}
                    </button>
                ))}
            </div>

            {/* Body */}
            <div className="engine-body">
                {selected === 'Unity' && <Unity />}
                {selected === 'Unreal' && <Unreal />}
                {selected === 'Construct' && <Construct />}
                {selected === 'Godot' && <Godot />}
            </div>
        </div>
    )
}
