import React from 'react'
import '../styles/Resume.css'

export default function Resume() {
    return (
        <div className="resume-page">
            <div className="resume-frame">
                {/* Embedded PDF */}
                <object
                    className="resume-viewer"
                    data="/Gunabalan-Lingam-Resume.pdf"
                    type="application/pdf"
                    aria-label="Resume PDF"
                >
                    {/* Fallback if the browser cannot render PDFs */}
                    <div className="resume-fallback">
                        <p>Your browser can’t display the PDF. You can download it below.</p>
                        <a className="resume-download" href="/Gunabalan-Lingam-Resume.pdf" download>
                            Download Resume
                        </a>
                    </div>
                </object>
            </div>

            {/* Bottom download button */}
            <div className="resume-actions">
                <a className="resume-download" href="/Gunabalan-Lingam-Resume.pdf" download>
                    Download Resume
                </a>
            </div>
        </div>
    )
}
