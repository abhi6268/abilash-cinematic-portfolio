import React, { useEffect, useMemo, useState } from "react";
import "./BehindTheScenes.css";
import TechTrailerHero from "../components/TechTrailerHero";

const METRICS = [
    { label: "LCP", value: "1.4s", note: "Cached posters + lazy video" },
    { label: "CLS", value: "0.00", note: "Fixed tile sizing" },
    { label: "Hover start", value: "120ms", note: "Delayed play to avoid jitter" },
    { label: "UX", value: "Smooth", note: "GPU transforms, no layout shift" },
];

const CARDS = [
    {
        title: "Architecture Overview",
        bullets: [
            "React + TypeScript with config-driven tiles",
            "React Router v6 routes, ready for lazy loading",
            "Reusable Row/Tile components to avoid duplication",
            "Poster-first rendering, video only on hover",
        ],
    },
    {
        title: "Motion Posters",
        bullets: [
            "MP4 previews loop silently on hover",
            "Poster remains as fallback for fast first paint",
            "Delayed hover-play prevents glitch between tiles",
            "Preload metadata only, load full video when needed",
        ],
    },
    {
        title: "Performance Decisions",
        bullets: [
            "Fixed dimensions prevent CLS",
            "transform: translate3d + will-change for smooth scaling",
            "overflow-y visible on rows so tiles don’t clip",
            "Reduced-motion support for accessibility",
        ],
    },
    {
        title: "Quality & Maintainability",
        bullets: [
            "Strong typing for tile configs and routes",
            "Seeded progress values for realistic UI",
            "Graceful fallbacks when video fails",
            "Clear component boundaries: layout vs content",
        ],
    },
    {
        title: "Delivery Workflow",
        bullets: [
            "Lint + typecheck before merge",
            "Small PRs: one feature per change",
            "Reusable patterns for new sections",
            "Easy content updates without refactoring UI",
        ],
    },
    {
        title: "Next Up",
        bullets: [
            "Genre filtering on Music",
            "More rows: Highlights, Projects Spotlight",
            "Cinematic transitions between sections",
            "Optional dark/light theme toggle",
        ],
    },
];

const usePrefersReducedMotion = () => {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setReduced(mq.matches);
        onChange();
        mq.addEventListener?.("change", onChange);
        return () => mq.removeEventListener?.("change", onChange);
    }, []);

    return reduced;
};

const BehindTheScenes: React.FC = () => {
    const reducedMotion = usePrefersReducedMotion();

    const hero = useMemo(
        () => ({
            videoSrc: "/hero/tech-trailer.mp4",
            posterSrc: "/hero/tech-trailer-poster.png",
            title: "Behind the Scenes",
            tagline:
                "How this Netflix-style portfolio is built: motion posters, performance choices, and clean UI engineering.",
            chips: ["React", "TypeScript", "Motion Posters", "UI Performance"],
        }),
        []
    );

    return (
        <>
            {/*<TechTrailerHero />*/}
        <div className="bts-page">
            {/* TECH TRAILER HERO */}
            <header className="bts-trailer">
                <div className="bts-trailerMedia">
                    {!reducedMotion ? (
                        <video
                            className="bts-trailerVideo"
                            src={hero.videoSrc}
                            poster={hero.posterSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        />
                    ) : (
                        <img className="bts-trailerPoster" src={hero.posterSrc} alt="" />
                    )}

                    <div className="bts-trailerShade" />
                    <div className="bts-trailerVignette" />
                    <div className="bts-trailerGrain" />
                </div>

                <div className="bts-trailerContent">
                    <h1 className="bts-trailerTitle">{hero.title}</h1>
                    <p className="bts-trailerTagline">{hero.tagline}</p>

                    <div className="bts-trailerChips">
                        {hero.chips.map((c) => (
                            <span key={c} className="bts-chip">
                {c}
              </span>
                        ))}
                    </div>

                    <div className="bts-trailerActions">
                        <a className="bts-action primary" href="/resume">
                            Resume
                        </a>
                        <a className="bts-action ghost" href="/skills">Skills</a>
                        <a className="bts-action danger" href="/contact-me">
                            Hire Me
                        </a>
                    </div>
                </div>
            </header>

            {/* METRICS */}
            <div className="bts-hero">
                <div className="bts-metrics">
                    {METRICS.map((m) => (
                        <div key={m.label} className="bts-metric">
                            <div className="bts-metricTop">
                                <span className="bts-dot" />
                                <span className="bts-metricLabel">{m.label}</span>
                            </div>
                            <div className="bts-metricValue">{m.value}</div>
                            <div className="bts-metricNote">{m.note}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CONTENT GRID */}
            <div className="bts-grid">
                {CARDS.map((c) => (
                    <div key={c.title} className="bts-card">
                        <div className="bts-cardHead">
                            <span className="bts-dot" />
                            <h3>{c.title}</h3>
                        </div>
                        <ul>
                            {c.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="bts-cta">
                <div className="bts-ctaText">
                    <h3>Want the full technical walkthrough?</h3>
                    <p>Open the code, skim architecture decisions, or jump straight to the resume.</p>
                </div>

                <div className="bts-ctaBtns">
                    <a className="bts-btn ghost" href="/resume">
                        View Resume
                    </a>
                    <a className="bts-btn" href="https://github.com/" target="_blank" rel="noreferrer">
                        View Code
                    </a>
                    <a className="bts-btn danger" href="/contact-me">
                        Hire Me
                    </a>
                </div>
            </div>
        </div>
            </>

    );
};

export default BehindTheScenes;