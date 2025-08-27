import React from 'react'
import './construct.css'
import { CONSTRUCT_GAMES } from '../../data/games.construct'

export default function Construct() {
    return (
        <section className="construct-wrap" aria-label="Construct projects">
            <p className="construct-description">
                Developed as part of my work at Mastree, these interactive Construct games
                were designed to teach mathematical concepts in an engaging way.
            </p>

            <div className="construct-grid">
                {CONSTRUCT_GAMES.map(game => (
                    <a
                        key={game.id}
                        className="construct-card"
                        href={game.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="thumb">
                            <img src={game.cover} alt={game.title} loading="lazy" />
                        </div>
                        <div className="title">{game.title}</div>
                    </a>
                ))}
            </div>
        </section>
    )
}
