import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resume.css";

export default function Resume() {
    const navigate = useNavigate();

    return (
        <div className="resume-page">
            <div className="resume-topbar">
                <button className="resume-back" onClick={() => navigate(-1)}>
                    ← Back
                </button>

                <div className="resume-actions">
                    <a
                        className="resume-btn"
                        href="/resume/Abilash_Mundlur_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open in new tab
                    </a>

                    <a
                        className="resume-btn resume-btn-primary"
                        href="/resume/Abilash_Mundlur_Resume.pdf"
                        download
                    >
                        Download
                    </a>
                </div>
            </div>

            <div className="resume-frame-wrap">
                <iframe
                    className="resume-frame"
                    src="/resume/Abilash_Mundlur_Resume.pdf#zoom=100"
                    title="Abilash Mundlur Resume"
                />
            </div>
        </div>
    );
}
