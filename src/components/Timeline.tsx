import React, { useEffect, useMemo, useState } from "react";
import "./Timeline.css";
import { getTimeline } from "../data/getTimeline";
import { TimelineItem } from "../types";

const Timeline: React.FC = () => {
    const [items, setItems] = useState<TimelineItem[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getTimeline();
            setItems(data);
        })();
    }, []);

    const work = useMemo(() => items.filter(i => i.timelineType === "work"), [items]);
    const education = useMemo(() => items.filter(i => i.timelineType === "education"), [items]);

    if (items.length === 0) return <div className="timeline-loading">Loading...</div>;

    return (
        <div className="timeline-wrap">
            <div className="timeline-hero">
                <h2 className="timeline-title">Career Seasons</h2>
                <p className="timeline-subtitle">
                    Think of it like Netflix. Each role is a season. Each bullet is an episode highlight.
                </p>
            </div>

            <section className="timeline-section">
                <h3 className="timeline-section-title">Season 1–{work.length}: Work</h3>

                <div className="season-grid">
                    {work.map((item, idx) => (
                        <article key={`${item.name}-${idx}`} className="season-card">
                            <div className="season-top">
                                <div className="season-badge">Season {idx + 1}</div>
                                <div className="season-dates">{item.dateRange}</div>
                            </div>

                            <div className="season-main">
                                <h4 className="season-role">{item.title}</h4>
                                <div className="season-company">{item.name}</div>
                                <div className="season-tech">{item.techStack}</div>

                                <div className="episode-list">
                                    {item.summaryPoints.map((p, i) => (
                                        <div key={i} className="episode">
                                            <div className="episode-num">E{i + 1}</div>
                                            <div className="episode-text">{p}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="timeline-section">
                <h3 className="timeline-section-title">Bonus Season: Education</h3>

                <div className="season-grid">
                    {education.map((item, idx) => (
                        <article key={`${item.name}-${idx}`} className="season-card season-edu">
                            <div className="season-top">
                                <div className="season-badge">Edu</div>
                                <div className="season-dates">{item.dateRange}</div>
                            </div>

                            <div className="season-main">
                                <h4 className="season-role">{item.title}</h4>
                                <div className="season-company">{item.name}</div>
                                <div className="season-tech">{item.techStack}</div>

                                <div className="episode-list">
                                    {item.summaryPoints.map((p, i) => (
                                        <div key={i} className="episode">
                                            <div className="episode-num">E{i + 1}</div>
                                            <div className="episode-text">{p}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Timeline;
