import React, { useEffect, useMemo, useState } from "react";
import "./Recommendations.css";

type ViewMode = "grid" | "spotlight";

type Rec = {
  id: string;
  displayName: string; // keep anonymous
  title: string; // "Former Manager"
  verifiedRole: string; // "Engineering Manager"
  org: string; // "Enterprise SaaS Platform"
  year: string; // "2023"
  relationship: string; // "Direct manager"
  bullets: string[];
  quote: string;
};

const RECS: Rec[] = [
  {
    id: "mgr",
    displayName: "Anonymous",
    title: "Former Manager",
    verifiedRole: "Engineering Manager",
    org: "Enterprise SaaS Platform",
    year: "2023",
    relationship: "Direct manager",
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

const FADE_MS = 260;
const AUTO_MS = 6000;

const Recommendations: React.FC = () => {
  const [view, setView] = useState<ViewMode>("grid");

  // Spotlight state
  const [activeIndex, setActiveIndex] = useState(0);

  // Crossfade support
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);

  // Expand/collapse state
  const [expandedId, setExpandedId] = useState<string | null>(RECS[0]?.id ?? null);

  // Autoplay pause (hover)
  const [isPaused, setIsPaused] = useState(false);

  const active = useMemo(() => RECS[activeIndex], [activeIndex]);
  const prevRec = useMemo(() => (prevIndex !== null ? RECS[prevIndex] : null), [prevIndex]);

  const goTo = (i: number) => {
    if (i === activeIndex) return;

    setPrevIndex(activeIndex);
    setActiveIndex(i);
    setExpandedId(RECS[i].id);

    setIsFading(true);
    window.setTimeout(() => {
      setPrevIndex(null);
      setIsFading(false);
    }, FADE_MS);
  };

  const next = () => goTo((activeIndex + 1) % RECS.length);
  const prev = () => goTo((activeIndex - 1 + RECS.length) % RECS.length);

  const toggleExpanded = (id: string) => {
    setExpandedId((cur) => (cur === id ? null : id));
  };

  // Keyboard left/right for spotlight
  useEffect(() => {
    if (view !== "spotlight") return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, activeIndex]);

  // Autoplay spotlight every 6s, pause on hover
  useEffect(() => {
    if (view !== "spotlight") return;
    if (isPaused) return;

    const id = window.setInterval(() => next(), AUTO_MS);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, activeIndex, isPaused]);

  const SpotlightCard = ({ rec }: { rec: Rec }) => {
    const open = expandedId === rec.id;

    return (
        <article className="recs-card open spotlight">
          <div className="recs-cardTop">
            <div className="recs-avatar" aria-hidden="true">
              <span className="recs-avatarIcon">👤</span>
            </div>

            <div className="recs-meta">
              <div className="recs-nameRow">
                <h3 className="recs-name">
                  {rec.displayName} <span className="recs-muted">({rec.title})</span>
                </h3>

                <button
                    type="button"
                    className="recs-expandBtn"
                    onClick={() => toggleExpanded(rec.id)}
                    aria-expanded={open}
                    aria-label={open ? "Collapse recommendation" : "Expand recommendation"}
                >
                  {open ? "−" : "+"}
                </button>
              </div>

              <div className="recs-badgeRow">
              <span className="recs-verifiedBadge" title="Verified by role">
                <span className="recs-verifiedDot" aria-hidden="true" />
                Verified by role: <b>{rec.verifiedRole}</b>
              </span>
              </div>

              <div className="recs-submeta">
                <span>{rec.org}</span>
                <span className="recs-dotSep">•</span>
                <span>{rec.year}</span>
                <span className="recs-dotSep">•</span>
                <span className="recs-muted">{rec.relationship}</span>
              </div>
            </div>
          </div>

          <ul className="recs-bullets">
            {rec.bullets.map((b) => (
                <li key={b}>{b}</li>
            ))}
          </ul>

          <div className={`recs-quoteWrap ${open ? "show" : ""}`}>
            <blockquote className="recs-quote">“{rec.quote}”</blockquote>
          </div>
        </article>
    );
  };

  return (
      <div className="recs-page">
        {/* Page header */}
        <div className="recs-header">
          <h1 className="recs-title">Recommendations</h1>
          <p className="recs-subtitle">
            Feedback from people I’ve worked closely with across engineering and product teams.
          </p>

          <div className="recs-toggle">
            <button
                type="button"
                className={`recs-pill ${view === "grid" ? "active" : ""}`}
                onClick={() => setView("grid")}
            >
              Grid
            </button>
            <button
                type="button"
                className={`recs-pill ${view === "spotlight" ? "active" : ""}`}
                onClick={() => setView("spotlight")}
            >
              Spotlight
            </button>
          </div>
        </div>

        {/* GRID VIEW */}
        {view === "grid" && (
            <div className="recs-grid">
              {RECS.map((r, idx) => {
                const open = expandedId === r.id;
                return (
                    <article
                        key={r.id}
                        className={`recs-card ${open ? "open" : ""}`}
                        style={{ animationDelay: `${0.08 + idx * 0.08}s` }}
                    >
                      <div className="recs-cardTop">
                        <div className="recs-avatar" aria-hidden="true">
                          <span className="recs-avatarIcon">👤</span>
                        </div>

                        <div className="recs-meta">
                          <div className="recs-nameRow">
                            <h3 className="recs-name">
                              {r.displayName} <span className="recs-muted">({r.title})</span>
                            </h3>

                            <button
                                type="button"
                                className="recs-expandBtn"
                                onClick={() => toggleExpanded(r.id)}
                                aria-expanded={open}
                                aria-label={open ? "Collapse recommendation" : "Expand recommendation"}
                            >
                              {open ? "−" : "+"}
                            </button>
                          </div>

                          <div className="recs-badgeRow">
                      <span className="recs-verifiedBadge" title="Verified by role">
                        <span className="recs-verifiedDot" aria-hidden="true" />
                        Verified by role: <b>{r.verifiedRole}</b>
                      </span>
                          </div>

                          <div className="recs-submeta">
                            <span>{r.org}</span>
                            <span className="recs-dotSep">•</span>
                            <span>{r.year}</span>
                            <span className="recs-dotSep">•</span>
                            <span className="recs-muted">{r.relationship}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="recs-bullets">
                        {r.bullets.map((b) => (
                            <li key={b}>{b}</li>
                        ))}
                      </ul>

                      {/* Expandable quote */}
                      <div className={`recs-quoteWrap ${open ? "show" : ""}`}>
                        <blockquote className="recs-quote">“{r.quote}”</blockquote>
                      </div>
                    </article>
                );
              })}
            </div>
        )}

        {/* SPOTLIGHT VIEW */}
        {view === "spotlight" && (
            <div className="recs-spotlight">
              <div
                  className="recs-spotCard"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
              >
                <button type="button" className="recs-navBtn left" onClick={prev} aria-label="Previous">
                  ‹
                </button>

                <div className="recs-spotlightStage">
                  {prevRec && (
                      <div className="recs-spotLayer recs-fadeOut" aria-hidden="true">
                        <SpotlightCard rec={prevRec} />
                      </div>
                  )}

                  <div
                      key={active.id}
                      className={`recs-spotLayer ${isFading ? "recs-fadeIn" : ""}`}
                  >
                    <SpotlightCard rec={active} />
                  </div>
                </div>

                <button type="button" className="recs-navBtn right" onClick={next} aria-label="Next">
                  ›
                </button>
              </div>

              {/* Thumbnails (stable, no overflow bugs) */}
              <div className="recs-thumbs" role="tablist" aria-label="Recommendation picks">
                {RECS.map((r, i) => (
                    <button
                        key={r.id}
                        type="button"
                        className={`recs-thumb ${i === activeIndex ? "active" : ""}`}
                        onClick={() => goTo(i)}
                        role="tab"
                        aria-selected={i === activeIndex}
                    >
                <span className="recs-thumbTop">
                  <span className="recs-thumbAvatar" aria-hidden="true">
                    👤
                  </span>
                  <span className="recs-thumbTitle">
                    {r.title} <span className="recs-thumbYear">{r.year}</span>
                  </span>
                </span>
                      <span className="recs-thumbSub">{r.verifiedRole}</span>
                    </button>
                ))}
              </div>
            </div>
        )}
      </div>
  );
};

export default Recommendations;