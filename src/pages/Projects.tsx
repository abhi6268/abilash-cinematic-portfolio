import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const LINES = [
  "This title is currently in post-production.",
  "The trailer is rendered. The features are buffering.",
  "Our engineers have entered the montage phase.",
  "The build is compiling. Dramatic music intensifies.",
  "We’re filming the ‘it works on my machine’ scene right now.",
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(18);

  const line = useMemo(() => LINES[lineIndex], [lineIndex]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLineIndex((i) => (i + 1) % LINES.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => {
        // keep it realistic: creep forward, never hits 100
        const bump = 1 + Math.floor(Math.random() * 4);
        return Math.min(92, p + bump);
      });
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
      <div className="projects-page">
        <div className="projects-hero">
          <div className="projects-shade" />

          <div className="projects-content">
            <div className="projects-badge">New • Coming Soon</div>

            <h1 className="projects-title">Projects</h1>
            <p className="projects-tagline">
              A Netflix-style portfolio is only as good as its next season.
            </p>

            <div className="projects-line" aria-live="polite">
              {line}
            </div>

            <div className="projects-progress">
              <div className="projects-progressTrack">
                <div
                    className="projects-progressFill"
                    style={{ width: `${progress}%` }}
                />
              </div>
              <div className="projects-progressMeta">
                <span>{progress}%</span>
                <span className="dot">•</span>
                <span>Preparing the lineup</span>
              </div>
            </div>

            <div className="projects-actions">
              <button
                  type="button"
                  className="projects-btn primary"
                  onClick={() => navigate(-1)}
              >
                Go Back
              </button>

              <button
                  type="button"
                  className="projects-btn ghost"
                  onClick={() => navigate("/contact-me")}
              >
                Notify Me
              </button>
            </div>

            <div className="projects-fineprint">
              Hint: check back after the “shipping without breaking things” episode.
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;