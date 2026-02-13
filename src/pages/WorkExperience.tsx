import React, { useEffect, useRef, useState } from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE, EDUCATION } from '../data/getWorkExperienceData';

const WorkExperience: React.FC = () => {
    const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        return () => observerRef.current?.disconnect();
    }, []);

    useEffect(() => {
        const cards = document.querySelectorAll('.experience-card');
        cards.forEach((card) => {
            observerRef.current?.observe(card);
        });
    }, []);

    return (
        <div className="work-experience-page">
            {/* Hero Section */}
            <section className="experience-hero">
                <div className="hero-grain" />
                <div className="hero-content">
                    <div className="hero-kicker">Career Journey</div>
                    <h1 className="hero-title">
                        7+ Years Building
                        <span className="hero-title-accent"> Production Systems</span>
                    </h1>
                    <p className="hero-description">
                        From frontend architecture to full-stack microservices, I've shipped scalable solutions
                        across enterprise platforms, mobile apps, and high-traffic web applications.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">500k+</div>
                            <div className="stat-label">Transactions/Day</div>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <div className="stat-number">100k+</div>
                            <div className="stat-label">Active Users</div>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <div className="stat-number">35%</div>
                            <div className="stat-label">API Improvement</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Experience Timeline */}
            <section className="experience-timeline">
                <div className="timeline-header">
                    <h2 className="timeline-title">Professional Experience</h2>
                    <div className="timeline-line" />
                </div>

                {WORK_EXPERIENCE.map((job, index) => (
                    <article
                        key={job.id}
                        id={`card-${job.id}`}
                        className={`experience-card ${job.isFeatured ? 'featured' : ''} ${
                            visibleCards.has(`card-${job.id}`) ? 'visible' : ''
                        }`}
                        style={{ '--accent-color': job.color } as React.CSSProperties}
                    >
                        {/* Card Header */}
                        <div className="card-header">
                            <div className="card-header-left">
                                <div className="card-date">{job.dateRange}</div>
                                {job.isCurrent && <div className="current-badge">Current Role</div>}
                                {job.isFeatured && !job.isCurrent && <div className="featured-badge">Featured</div>}
                            </div>
                            <div className="card-index">{String(index + 1).padStart(2, '0')}</div>
                        </div>

                        {/* Card Content */}
                        <div className="card-content" style={{ background: job.gradient }}>
                            <div className="card-company">{job.company}</div>
                            <h3 className="card-title">{job.title}</h3>
                            <div className="card-location">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                {job.location}
                            </div>

                            {/* Tech Stack */}
                            <div className="card-tech-stack">
                                {job.techStack.slice(0, 8).map((tech) => (
                                    <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                                ))}
                                {job.techStack.length > 8 && (
                                    <span className="tech-more">+{job.techStack.length - 8} more</span>
                                )}
                            </div>

                            {/* Highlights */}
                            <div className="card-highlights">
                                <h4 className="highlights-title">Key Achievements</h4>
                                <ul className="highlights-list">
                                    {job.highlights.slice(0, 6).map((highlight, idx) => (
                                        <li key={idx} className="highlight-item">
                                            <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                                {job.highlights.length > 6 && (
                                    <button className="show-more-btn">
                                        View {job.highlights.length - 6} more achievements
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7 10l5 5 5-5z"/>
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            {/* Education Section */}
            <section className="education-section">
                <div className="section-header">
                    <h2 className="section-title">Education</h2>
                    <div className="section-line" />
                </div>

                <div className="education-grid">
                    {EDUCATION.map((edu) => (
                        <div key={edu.id} className="education-card">
                            <div className="education-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                                </svg>
                            </div>
                            <div className="education-content">
                                <h3 className="education-degree">{edu.title}</h3>
                                <div className="education-school">{edu.company}</div>
                                <div className="education-year">{edu.dateRange}</div>
                                {edu.highlights.length > 0 && (
                                    <div className="education-focus">
                                        {edu.highlights.map((focus, idx) => (
                                            <span key={idx} className="focus-tag">{focus}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Summary Stats */}
            <section className="summary-section">
                <div className="summary-content">
                    <h2 className="summary-title">Tech Stack Summary</h2>
                    <div className="tech-summary-grid">
                        <div className="tech-category">
                            <h4>Frontend</h4>
                            <p>React, TypeScript, Next.js, Redux, Material UI, Tailwind CSS</p>
                        </div>
                        <div className="tech-category">
                            <h4>Backend</h4>
                            <p>Node.js, Express, Python, FastAPI, Django, REST APIs, GraphQL</p>
                        </div>
                        <div className="tech-category">
                            <h4>Databases</h4>
                            <p>MongoDB, PostgreSQL, MySQL, Azure Blob Storage</p>
                        </div>
                        <div className="tech-category">
                            <h4>Cloud & DevOps</h4>
                            <p>Azure, Docker, Kubernetes, CI/CD, Azure Functions</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkExperience;