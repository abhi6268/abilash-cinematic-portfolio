import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import { PROJECTS, PROJECT_CATEGORIES, TECH_COLORS } from "../data/projectsData";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate hero carousel every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 10000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentHeroIndex]);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentHeroIndex((prev) => (prev + 1) % PROJECTS.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentHeroIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentHeroIndex) return;
    setIsTransitioning(true);
    setCurrentHeroIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const currentProject = PROJECTS[currentHeroIndex];

  const categorizedProjects = PROJECT_CATEGORIES.map(category => ({
    ...category,
    projects: PROJECTS.filter(p =>
        p.category.toLowerCase().includes(category.id) ||
        (category.id === 'featured' && p.featured)
    ),
  }));

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
      <div className="projects-page">
        {/* Hero Carousel Section */}
        <div className="projects-hero-carousel">
          <div
              className="projects-hero"
              style={{ backgroundImage: `url(${currentProject.thumbnail})` }}
              key={currentHeroIndex}
          >
            <div className="projects-hero-overlay" />
            <div className="projects-hero-content">
              <div className="projects-badge">
                <Sparkles className="badge-icon" size={14} strokeWidth={1.75} />
                {currentProject.featured ? 'Featured Project' : 'Project Showcase'}
              </div>

              <h1 className="projects-hero-title">{currentProject.title}</h1>
              <p className="projects-hero-tagline">{currentProject.tagline}</p>
              <p className="projects-hero-description">{currentProject.description}</p>

              <div className="projects-hero-tech">
                {currentProject.tech.slice(0, 4).map(tech => (
                    <span
                        key={tech}
                        className="tech-badge"
                        style={{
                          backgroundColor: TECH_COLORS[tech] || '#666',
                          color: tech === 'JavaScript' ? '#000' : '#fff'
                        }}
                    >
                  {tech}
                </span>
                ))}
              </div>

              <div className="projects-hero-actions">
                <button
                    className="btn-primary"
                    onClick={() => currentProject.liveUrl && openLink(currentProject.liveUrl)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  View Live
                </button>
                <button
                    className="btn-secondary"
                    onClick={() => openLink(currentProject.githubUrl)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </button>
              </div>

              {currentProject.stars !== undefined && (
                  <div className="projects-hero-stats">
                <span className="stat">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                  {currentProject.stars} stars
                </span>
                    <span className="stat-separator">•</span>
                    <span className="stat">{currentProject.language}</span>
                  </div>
              )}
            </div>

            {/* Carousel Navigation */}
            <button
                className="carousel-nav carousel-prev"
                onClick={goToPrev}
                disabled={isTransitioning}
                aria-label="Previous project"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
            <button
                className="carousel-nav carousel-next"
                onClick={goToNext}
                disabled={isTransitioning}
                aria-label="Next project"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {PROJECTS.map((_, index) => (
                  <button
                      key={index}
                      className={`indicator ${index === currentHeroIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to project ${index + 1}`}
                  />
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Project Cards */}
        {categorizedProjects.map(category => (
            category.projects.length > 0 && (
                <div key={category.id} className="projects-row">
                  <h2 className="row-title">
                    {(() => {
                      const Icon = category.icon;
                      return <Icon className="row-icon" size={18} strokeWidth={1.75} />;
                    })()}
                    {category.label}
                  </h2>

                  <div className="projects-horizontal">
                    {category.projects.map(project => (
                        <div
                            key={project.id}
                            className={`project-card ${hoveredCard === project.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div
                              className="card-thumbnail"
                              style={{ backgroundImage: `url(${project.thumbnail})` }}
                          >
                            <div className="card-gradient" style={{ background: project.gradient }} />

                            <div className="card-status">
                              <span className={`status-dot ${project.status}`} aria-hidden="true" />
                              {project.status === "live"
                                  ? "Live"
                                  : project.status === "development"
                                      ? "In Development"
                                      : "Archived"}
                            </div>
                          </div>

                          <div className="card-content">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">{project.description}</p>

                            <div className="card-tech">
                              {project.tech.slice(0, 3).map(tech => (
                                  <span
                                      key={tech}
                                      className="tech-tag"
                                      style={{
                                        backgroundColor: `${TECH_COLORS[tech] || '#666'}20`,
                                        borderColor: TECH_COLORS[tech] || '#666',
                                        color: TECH_COLORS[tech] || '#666'
                                      }}
                                  >
                          {tech}
                        </span>
                              ))}
                              {project.tech.length > 3 && (
                                  <span className="tech-more">+{project.tech.length - 3}</span>
                              )}
                            </div>

                            <div className="card-actions">
                              {project.liveUrl && (
                                  <button
                                      className="card-btn primary"
                                      onClick={() => openLink(project.liveUrl!)}
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                    Demo
                                  </button>
                              )}
                              <button
                                  className="card-btn secondary"
                                  onClick={() => openLink(project.githubUrl)}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Code
                              </button>
                            </div>

                            {project.stars !== undefined && (
                                <div className="card-footer">
                        <span className="footer-stat">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                          </svg>
                          {project.stars}
                        </span>
                                  <span className="footer-separator">•</span>
                                  <span className="footer-lang">{project.language}</span>
                                </div>
                            )}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            )
        ))}

        {/* Back Navigation */}
        <div className="projects-footer">
          <button className="btn-back" onClick={() => navigate(-1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Profile
          </button>
        </div>
      </div>
  );
};

export default Projects;