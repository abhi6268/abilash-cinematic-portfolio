import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Recommendations.css";

type ViewMode = "grid" | "spotlight";

type Rec = {
  id: string;
  displayName: string;
  title: string;
  verifiedRole: string;
  org: string;
  year: string;
  relationship: string;
  bullets: string[];
  quote: string;
  photo?: string;
};

const RECS: Rec[] = [
  {
    id: "mgr",
    displayName: "Surya Rao",
    title: "Former Director",
    verifiedRole: "Head of the Enterprise - Director",
    org: "Enterprise SaaS Platform",
    year: "2025",
    relationship: "Direct manager",
    photo: "/posters/recommendation-Surya.jpeg",
    bullets: [
      "Consistently shipped UI features under tight deadlines without regressions.",
      "Drove clean component architecture and improved performance on critical flows.",
      "Owned complex debugging end-to-end across config, data, and UI layers.",
    ],
    quote:
        "Abhi is the kind of engineer you can trust with business-critical work. He moves fast, stays calm under pressure, and communicates tradeoffs clearly. He consistently delivered polished UI while keeping code maintainable and testable.",
  },
  {
    id: "pm",
    displayName: "Anonymous",
    title: "Product Partner",
    verifiedRole: "Senior Product Manager",
    org: "Customer-facing Web Platform",
    year: "2024",
    relationship: "Cross-functional partner",
    bullets: [
      "Translated ambiguous requirements into clear UX and shipped iteratively.",
      "Balanced product needs with technical constraints and explained tradeoffs.",
      "Improved stakeholder confidence by demoing early and validating edge cases.",
    ],
    quote:
        "Abhi is extremely reliable when requirements are messy. He quickly turns ambiguity into a plan, communicates risks early, and delivers with a high bar for UX and quality.",
  },
  {
    id: "tl",
    displayName: "Anonymous",
    title: "Tech Lead",
    verifiedRole: "Technical Lead",
    org: "Public Sector Digital Services",
    year: "2023",
    relationship: "Technical lead on adjacent team",
    bullets: [
      "Strong ownership of frontend architecture and component design patterns.",
      "Mentored teammates through code reviews and pragmatic refactoring.",
      "Quickly adapted to new tools, domains, and constraints.",
    ],
    quote:
        "Abhi operates like an owner. He anticipates failure modes, keeps systems clean, and helps others level up with thoughtful reviews and guidance.",
  },
];

const FADE_MS = 400;
const AUTO_MS = 7000;

const Recommendations: React.FC = () => {
  const [view, setView] = useState<ViewMode>("grid");
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  const active = useMemo(() => RECS[activeIndex], [activeIndex]);
  const prevRec = useMemo(() => (prevIndex !== null ? RECS[prevIndex] : null), [prevIndex]);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(entry.target.id));
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('.rec-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [view]);

  const goTo = useCallback((i: number) => {
    setActiveIndex((cur) => {
      if (i === cur) return cur;

      setPrevIndex(cur);
      setExpandedId(RECS[i].id);
      setIsFading(true);

      window.setTimeout(() => {
        setPrevIndex(null);
        setIsFading(false);
      }, FADE_MS);

      return i;
    });
  }, []);

  const next = useCallback(() => {
    setActiveIndex((cur) => {
      const i = (cur + 1) % RECS.length;

      setPrevIndex(cur);
      setExpandedId(RECS[i].id);
      setIsFading(true);

      window.setTimeout(() => {
        setPrevIndex(null);
        setIsFading(false);
      }, FADE_MS);

      return i;
    });
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((cur) => {
      const i = (cur - 1 + RECS.length) % RECS.length;

      setPrevIndex(cur);
      setExpandedId(RECS[i].id);
      setIsFading(true);

      window.setTimeout(() => {
        setPrevIndex(null);
        setIsFading(false);
      }, FADE_MS);

      return i;
    });
  }, []);

  const toggleExpanded = (id: string) => {
    setExpandedId((cur) => (cur === id ? null : id));
  };

  // Keyboard navigation
  useEffect(() => {
    if (view !== "spotlight") return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [view, next, prev]);

  // Autoplay
  useEffect(() => {
    if (view !== "spotlight" || isPaused) return;
    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [view, isPaused, next]);

  const SpotlightCard = ({ rec }: { rec: Rec }) => {
    const open = expandedId === rec.id;

    return (
        <article className="rec-card rec-spotlight-card">
          <div className="rec-header">
            <div className="rec-avatar-wrapper">
              <div className="rec-avatar">
                {rec.photo ? (
                    <img
                        src={rec.photo}
                        alt={rec.displayName}
                        className="rec-avatar-img"
                        loading="lazy"
                    />
                ) : (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                )}
              </div>
              <div className="rec-verified-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                </svg>
                Verified
              </div>
            </div>

            <div className="rec-meta">
              <h3 className="rec-name">
                {rec.displayName}
                <span className="rec-role-tag">{rec.title}</span>
              </h3>
              <div className="rec-info">
                <span className="rec-verified-role">{rec.verifiedRole}</span>
                <span className="rec-separator">•</span>
                <span>{rec.org}</span>
                <span className="rec-separator">•</span>
                <span className="rec-year">{rec.year}</span>
              </div>
              <div className="rec-relationship">{rec.relationship}</div>
            </div>
          </div>

          <div className="rec-content">
            <h4 className="rec-section-title">Key Contributions</h4>
            <ul className="rec-bullets">
              {rec.bullets.map((b, idx) => (
                  <li key={idx}>
                    <svg className="rec-check" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>{b}</span>
                  </li>
              ))}
            </ul>

            <div className={`rec-quote-wrapper ${open ? 'expanded' : ''}`}>
              <button
                  className="rec-expand-btn"
                  onClick={() => toggleExpanded(rec.id)}
              >
                <span>{open ? 'Hide' : 'Read'} Full Recommendation</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              <blockquote className="rec-quote">
                <svg className="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                {rec.quote}
              </blockquote>
            </div>
          </div>
        </article>
    );
  };

  return (
      <div className="recommendations-page">
        {/* Hero Section */}
        <section className="rec-hero">
          <div className="hero-grain" />
          <div className="rec-hero-content">
            <div className="rec-hero-kicker">What Others Say</div>
            <h1 className="rec-hero-title">
              Trusted By
              <span className="rec-hero-accent"> Industry Leaders</span>
            </h1>
            <p className="rec-hero-description">
              Feedback from engineering managers, product partners, and technical leads
              I've collaborated with across multiple organizations and high-impact projects.
            </p>

            <div className="rec-view-toggle">
              <button
                  className={`rec-toggle-btn ${view === "grid" ? "active" : ""}`}
                  onClick={() => setView("grid")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"/>
                </svg>
                Grid View
              </button>
              <button
                  className={`rec-toggle-btn ${view === "spotlight" ? "active" : ""}`}
                  onClick={() => setView("spotlight")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Spotlight
              </button>
            </div>
          </div>
        </section>

        {/* Grid View */}
        {view === "grid" && (
            <section className="rec-grid-section">
              <div className="rec-grid">
                {RECS.map((rec, idx) => {
                  const open = expandedId === rec.id;
                  return (
                      <article
                          key={rec.id}
                          id={`rec-${rec.id}`}
                          className={`rec-card ${visibleCards.has(`rec-${rec.id}`) ? 'visible' : ''}`}
                          style={{ '--card-index': idx } as React.CSSProperties}
                      >
                        <div className="rec-header">
                          <div className="rec-avatar-wrapper">
                            <div className="rec-avatar">
                              {rec.photo ? (
                                  <img
                                      src={rec.photo}
                                      alt={rec.displayName}
                                      className="rec-avatar-img"
                                      loading="lazy"
                                  />
                              ) : (
                                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                  </svg>
                              )}
                            </div>
                            <div className="rec-verified-badge">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                              </svg>
                              Verified
                            </div>
                          </div>

                          <div className="rec-meta">
                            <h3 className="rec-name">
                              {rec.displayName}
                              <span className="rec-role-tag">{rec.title}</span>
                            </h3>
                            <div className="rec-info">
                              <span className="rec-verified-role">{rec.verifiedRole}</span>
                              <span className="rec-separator">•</span>
                              <span>{rec.org}</span>
                              <span className="rec-separator">•</span>
                              <span className="rec-year">{rec.year}</span>
                            </div>
                            <div className="rec-relationship">{rec.relationship}</div>
                          </div>
                        </div>

                        <div className="rec-content">
                          <h4 className="rec-section-title">Key Contributions</h4>
                          <ul className="rec-bullets">
                            {rec.bullets.map((b, bidx) => (
                                <li key={bidx}>
                                  <svg className="rec-check" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                  </svg>
                                  <span>{b}</span>
                                </li>
                            ))}
                          </ul>

                          <div className={`rec-quote-wrapper ${open ? 'expanded' : ''}`}>
                            <button
                                className="rec-expand-btn"
                                onClick={() => toggleExpanded(rec.id)}
                            >
                              <span>{open ? 'Hide' : 'Read'} Full Recommendation</span>
                              <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                              >
                                <path d="M7 10l5 5 5-5z"/>
                              </svg>
                            </button>
                            <blockquote className="rec-quote">
                              <svg className="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                              </svg>
                              {rec.quote}
                            </blockquote>
                          </div>
                        </div>
                      </article>
                  );
                })}
              </div>
            </section>
        )}

        {/* Spotlight View */}
        {view === "spotlight" && (
            <section className="rec-spotlight-section">
              <div
                  className="rec-spotlight-container"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
              >
                <button
                    className="rec-nav-btn rec-nav-prev"
                    onClick={prev}
                    aria-label="Previous recommendation"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>

                <div className="rec-spotlight-stage">
                  {prevRec && (
                      <div className="rec-spotlight-layer rec-fade-out" aria-hidden="true">
                        <SpotlightCard rec={prevRec} />
                      </div>
                  )}
                  <div className={`rec-spotlight-layer ${isFading ? 'rec-fade-in' : ''}`}>
                    <SpotlightCard rec={active} />
                  </div>
                </div>

                <button
                    className="rec-nav-btn rec-nav-next"
                    onClick={next}
                    aria-label="Next recommendation"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="rec-thumbnails">
                {RECS.map((rec, idx) => (
                    <button
                        key={rec.id}
                        className={`rec-thumb ${idx === activeIndex ? 'active' : ''}`}
                        onClick={() => goTo(idx)}
                    >
                      <div className="rec-thumb-avatar">
                        {rec.photo ? (
                            <img
                                src={rec.photo}
                                alt={rec.displayName}
                                className="rec-thumb-avatar-img"
                                loading="lazy"
                            />
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                        )}
                      </div>
                      <div className="rec-thumb-info">
                        <div className="rec-thumb-title">{rec.title}</div>
                        <div className="rec-thumb-role">{rec.verifiedRole}</div>
                      </div>
                      {idx === activeIndex && <div className="rec-thumb-indicator" />}
                    </button>
                ))}
              </div>
            </section>
        )}
      </div>
  );
};

export default Recommendations;