import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import { PROJECTS, PROJECT_CATEGORIES, TECH_COLORS } from "../data/projectsData";
import { Sparkles } from "lucide-react";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const featuredProject = PROJECTS.find(p => p.featured);
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
        {/* Featured Hero Section */}
        {featuredProject && (
            <div className="projects-hero" style={{ backgroundImage: `url(${featuredProject.thumbnail})` }}>
              <div className="projects-hero-overlay" />
              <div className="projects-hero-content">
                <div className="projects-badge">
                  <Sparkles className="badge-icon" size={14} strokeWidth={1.75} />
                  Featured Project
                </div>

                <h1 className="projects-hero-title">{featuredProject.title}</h1>
                <p className="projects-hero-tagline">{featuredProject.tagline}</p>
                <p className="projects-hero-description">{featuredProject.description}</p>

                <div className="projects-hero-tech">
                  {featuredProject.tech.slice(0, 4).map(tech => (
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
                      onClick={() => featuredProject.liveUrl && openLink(featuredProject.liveUrl)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    View Live
                  </button>
                  <button
                      className="btn-secondary"
                      onClick={() => openLink(featuredProject.githubUrl)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </button>
                </div>

                {featuredProject.stars !== undefined && (
                    <div className="projects-hero-stats">
                <span className="stat">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                  {featuredProject.stars} stars
                </span>
                      <span className="stat-separator">•</span>
                      <span className="stat">{featuredProject.language}</span>
                    </div>
                )}
              </div>
            </div>
        )}

        {/* Project Rows */}
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

                  <div className="projects-grid">
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