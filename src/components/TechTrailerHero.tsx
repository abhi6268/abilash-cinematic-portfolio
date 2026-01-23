import React from "react";
import "./TechTrailerHero.css";

const TechTrailerHero: React.FC = () => {
    return (
        <section className="tech-hero">
            {/* Background video */}
            <video
                className="tech-hero-video"
                src="/hero/tech-trailer.mp4"
                poster="/hero/tech-trailer-poster.png"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Dark cinematic overlay */}
            <div className="tech-hero-overlay" />

            {/* Content */}
            <div className="tech-hero-content">
                <h1 className="tech-hero-title">Behind the Scenes</h1>

                <p className="tech-hero-subtitle">
                    Engineering a Netflix-style portfolio with performance, motion,
                    and clean architecture in mind.
                </p>

                <div className="tech-hero-tags">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>UI Performance</span>
                    <span>Motion Posters</span>
                    <span>Frontend Architecture</span>
                </div>
            </div>
        </section>
    );
};

export default TechTrailerHero;