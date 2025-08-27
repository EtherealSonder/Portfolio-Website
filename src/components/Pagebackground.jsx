import React from 'react'
import '../styles/PageBackground.css'
import { useLocation } from 'react-router-dom'

export default function PageBackground() {
    const location = useLocation()

    // Hide background on landing page
    if (location.pathname === '/') return null

    return <div className="animated-bg" />
}
