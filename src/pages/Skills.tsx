import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';
import { skillsData, Skill } from '../data/skillsData';
import { FaNetworkWired } from "react-icons/fa";

import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiReduxsaga,
  SiNextdotjs,
  SiMui,
  SiAntdesign,
  SiBootstrap,
  SiFigma,
  SiExpress,
  SiFastapi,
  SiDotnet,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiMicrosoftazure,
  SiKubernetes,
  SiJest,
  SiMocha,
  SiCypress,
  SiWebpack,
  SiPostman,
  SiJira,
  SiGithubcopilot,
  SiVite,
  SiSwagger,
  SiGithubactions,
  SiTailwindcss,
  SiSass,
  SiDjango,
  SiNginx,
  SiTerraform,
  SiEslint,
  SiPrettier,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const iconMap: { [key: string]: JSX.Element } = {
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiPython: <SiPython />,
  SiCsharp: <SiCsharp />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  FaReact: <FaReact />,
  SiRedux: <SiRedux />,
  SiReduxsaga: <SiReduxsaga />,
  SiNextdotjs: <SiNextdotjs />,
  SiMui: <SiMui />,
  SiAntdesign: <SiAntdesign />,
  SiBootstrap: <SiBootstrap />,
  SiFigma: <SiFigma />,
  SiTailwindcss: <SiTailwindcss />,
  SiSass: <SiSass />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiFastapi: <SiFastapi />,
  SiDjango: <SiDjango />,
  SiDotnet: <SiDotnet />,
  SiGraphql: <SiGraphql />,
  SiSwagger: <SiSwagger />,
  SiRestapi: <FaNetworkWired />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiPostgresql: <SiPostgresql />,
  SiRedis: <SiRedis />,
  SiMicrosoftazure: <SiMicrosoftazure />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  VscAzureDevops: <VscAzureDevops />,
  SiGithubactions: <SiGithubactions />,
  SiNginx: <SiNginx />,
  SiTerraform: <SiTerraform />,
  SiVite: <SiVite />,
  SiJest: <SiJest />,
  SiMocha: <SiMocha />,
  SiCypress: <SiCypress />,
  FaGitAlt: <FaGitAlt />,
  SiWebpack: <SiWebpack />,
  SiPostman: <SiPostman />,
  SiJira: <SiJira />,
  SiGithubcopilot: <SiGithubcopilot />,
  SiEslint: <SiEslint />,
  SiPrettier: <SiPrettier />,
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc: { [key: string]: Skill[] }, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.keys(skillsByCategory);
  const R = 36;
  const CIRC = 2 * Math.PI * R;

  // Intersection Observer for fade-in animations
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
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });
  }, []);

  // Calculate category stats
  const getCategoryStats = (category: string) => {
    const skills = skillsByCategory[category];
    const avgProficiency = Math.round(
        skills.reduce((sum, s) => sum + s.proficiency, 0) / skills.length
    );
    const totalSkills = skills.length;
    return { avgProficiency, totalSkills };
  };

  return (
      <div className="skills-page">
        {/* Hero Section */}
        <section className="skills-hero">
          <div className="hero-grain" />
          <div className="skills-hero-content">
            <div className="skills-hero-kicker">Technical Expertise</div>
            <h1 className="skills-hero-title">
              Full-Stack
              <span className="skills-hero-accent"> Technology Arsenal</span>
            </h1>
            <p className="skills-hero-description">
              7+ years of hands-on experience with modern technologies across the entire development stack.
              From frontend frameworks to cloud infrastructure, I build scalable, production-ready solutions.
            </p>

            {/* Quick Stats */}
            <div className="skills-quick-stats">
              <div className="quick-stat">
                <div className="quick-stat-number">{skillsData.length}+</div>
                <div className="quick-stat-label">Technologies</div>
              </div>
              <div className="stat-divider" />
              <div className="quick-stat">
                <div className="quick-stat-number">{categories.length}</div>
                <div className="quick-stat-label">Categories</div>
              </div>
              <div className="stat-divider" />
              <div className="quick-stat">
                <div className="quick-stat-number">7+</div>
                <div className="quick-stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="category-nav-section">
          <div className="category-nav">
            <button
                className={`category-nav-btn ${activeCategory === null ? 'active' : ''}`}
                onClick={() => setActiveCategory(null)}
            >
              All Skills
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    className={`category-nav-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="skills-grid-section">
          {categories
              .filter(category => !activeCategory || activeCategory === category)
              .map((category) => {
                const stats = getCategoryStats(category);
                return (
                    <div key={category} className="skill-category">
                      <div className="category-header">
                        <div className="category-title-wrapper">
                          <h2 className="category-title">{category}</h2>
                          <div className="category-stats">
                      <span className="category-stat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {stats.avgProficiency}% Proficiency
                      </span>
                            <span className="category-separator">•</span>
                            <span className="category-stat">{stats.totalSkills} Skills</span>
                          </div>
                        </div>
                        <div className="category-line" />
                      </div>

                      <div className="skills-grid">
                        {skillsByCategory[category].map((skill, idx) => (
                            <article
                                key={skill.id}
                                id={`skill-${skill.id}`}
                                className={`skill-card ${visibleCards.has(`skill-${skill.id}`) ? 'visible' : ''}`}
                                style={{ '--card-index': idx } as React.CSSProperties}
                            >
                              <div className="skill-card-inner">
                                <div className="skill-icon-wrapper">
                                  <div className="skill-icon">
                                    {iconMap[skill.icon] || <FaReact />}
                                  </div>
                                  <div className="skill-proficiency-ring" style={{ '--proficiency': skill.proficiency } as React.CSSProperties}>
                                    <svg width="80" height="80" viewBox="0 0 80 80">
                                      <circle
                                          cx="40"
                                          cy="40"
                                          r="36"
                                          fill="none"
                                          stroke="rgba(255, 255, 255, 0.1)"
                                          strokeWidth="4"
                                      />
                                      <circle
                                          cx="40"
                                          cy="40"
                                          r={R}
                                          fill="none"
                                          stroke="url(#gradient)"
                                          strokeWidth="4"
                                          strokeDasharray={CIRC}
                                          strokeLinecap="round"
                                          transform="rotate(-90 40 40)"
                                          className="proficiency-circle"
                                          style={
                                            {
                                              "--circ": `${CIRC}`,
                                              "--stroke-offset": `${CIRC * (1 - skill.proficiency / 100)}`,
                                            } as React.CSSProperties
                                          }
                                      />
                                      <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor="#e50914" />
                                          <stop offset="100%" stopColor="#ff6b6b" />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>

                                <div className="skill-content">
                                  <h3 className="skill-name">{skill.name}</h3>
                                  <p className="skill-description">{skill.description}</p>

                                  <div className="skill-meta">
                                    <div className="skill-meta-item">
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                      </svg>
                                      <span>{skill.proficiency}%</span>
                                    </div>
                                    <div className="skill-meta-item">
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                      </svg>
                                      <span>{skill.yearsOfExperience} yrs</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </article>
                        ))}
                      </div>
                    </div>
                );
              })}
        </section>
      </div>
  );
};

export default Skills;