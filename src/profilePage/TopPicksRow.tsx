import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TopPicksRow.css";
import {
  FaPassport,
  FaCode,
  FaBriefcase,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaCertificate,
  FaMusic,
} from "react-icons/fa";

import { ProfileType } from "../types";

interface TopPicksRowProps {
  profile: ProfileType;
}

type Pick = {
  title: string;
  route: string;
  icon: JSX.Element;
  posterSrc: string;
  videoSrc: string;
  progress?: number;
};

const topPicksConfig: Record<ProfileType, Pick[]> = {
  recruiter: [
    { title: "Work Permit", icon: <FaPassport />, route: "/work-permit", posterSrc: "/posters/work-permit.jpg", videoSrc: "/videos/work-permit.mp4", progress: 0.9 },
    { title: "Skills", icon: <FaCode />, route: "/skills", posterSrc: "/posters/skills.jpg", videoSrc: "/videos/skills.mp4", progress: 0.65 },
    { title: "Experience", icon: <FaBriefcase />, route: "/work-experience", posterSrc: "/posters/experience.jpg", videoSrc: "/videos/experience.mp4", progress: 0.5 },
    { title: "Recommendations", icon: <FaHandsHelping />, route: "/recommendations", posterSrc: "/posters/recommendations.jpg", videoSrc: "/videos/recommendations.mp4", progress: 0.25 },
    { title: "Projects", icon: <FaProjectDiagram />, route: "/projects", posterSrc: "/posters/projects.jpg", videoSrc: "/videos/projects.mp4", progress: 0.4 },
    { title: "Contact Me", icon: <FaEnvelope />, route: "/contact-me", posterSrc: "/posters/contact-me.jpg", videoSrc: "/videos/contact-me.mp4", progress: 0.15 },
  ],
  builder: [
    { title: "Skills", icon: <FaCode />, route: "/skills", posterSrc: "/posters/skills.jpg", videoSrc: "/videos/skills.mp4", progress: 0.7 },
    { title: "Projects", icon: <FaProjectDiagram />, route: "/projects", posterSrc: "/posters/projects.jpg", videoSrc: "/videos/projects.mp4", progress: 0.55 },
    { title: "Behind the Scenes", icon: <FaCertificate />, route: "/behind-the-scenes", posterSrc: "/posters/behind-scenes.png", videoSrc: "/videos/behind-the-scenes.mp4", progress: 0.5 },
    { title: "Work Stories", icon: <FaBriefcase />, route: "/work-stories", posterSrc: "/posters/work-stories.png", videoSrc: "/videos/work-stories.mp4", progress: 0.35 },
    { title: "Contact Me", icon: <FaEnvelope />, route: "/contact-me", posterSrc: "/posters/contact-me.jpg", videoSrc: "/videos/contact-me.mp4", progress: 0.15 },
  ],
  researcher: [
    { title: "Behind the Scenes", icon: <FaCertificate />, route: "/behind-the-scenes", posterSrc: "/posters/behind-scenes.png", videoSrc: "/videos/behind-the-scenes.mp4", progress: 0.65 },
    { title: "Experience", icon: <FaBriefcase />, route: "/work-experience", posterSrc: "/posters/experience.jpg", videoSrc: "/videos/experience.mp4", progress: 0.5 },
    { title: "Skills", icon: <FaCode />, route: "/skills", posterSrc: "/posters/skills.jpg", videoSrc: "/videos/skills.mp4", progress: 0.4 },
    { title: "Projects", icon: <FaProjectDiagram />, route: "/projects", posterSrc: "/posters/projects.jpg", videoSrc: "/videos/projects.mp4", progress: 0.35 },
    { title: "Contact Me", icon: <FaEnvelope />, route: "/contact-me", posterSrc: "/posters/contact-me.jpg", videoSrc: "/videos/contact-me.mp4", progress: 0.15 },
  ],
  explorer: [
    { title: "Music", icon: <FaMusic />, route: "/music", posterSrc: "/posters/music.png", videoSrc: "/videos/music.mp4", progress: 0.4 },
    { title: "Projects", icon: <FaProjectDiagram />, route: "/projects", posterSrc: "/posters/projects.jpg", videoSrc: "/videos/projects.mp4", progress: 0.25 },
    { title: "Behind the Scenes", icon: <FaCertificate />, route: "/behind-the-scenes", posterSrc: "/posters/behind-scenes.png", videoSrc: "/videos/behind-the-scenes.mp4", progress: 0.2 },
    { title: "Work Stories", icon: <FaBriefcase />, route: "/work-stories", posterSrc: "/posters/work-stories.png", videoSrc: "/videos/work-stories.mp4", progress: 0.15 },
    { title: "Contact Me", icon: <FaEnvelope />, route: "/contact-me", posterSrc: "/posters/contact-me.jpg", videoSrc: "/videos/contact-me.mp4", progress: 0.1 },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  // Track which images have loaded
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Track which cards are in viewport (for lazy loading videos)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Setup Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.1, rootMargin: '100px' }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  // Observe cards when they mount
  useEffect(() => {
    const cards = document.querySelectorAll('.pick-card');
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });
  }, [topPicks]);

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

  const play = (card: HTMLDivElement) => {
    const v = card.querySelector("video") as HTMLVideoElement | null;
    if (!v) return;

    if (v.readyState < 2) {
      v.load();
    }

    v.play().catch(() => {});
  };

  const stop = (card: HTMLDivElement) => {
    const v = card.querySelector("video") as HTMLVideoElement | null;
    if (!v) return;

    v.pause();
  };

  let hoverTimer: number | null = null;

  const playDelayed = (card: HTMLDivElement) => {
    if (hoverTimer) window.clearTimeout(hoverTimer);
    hoverTimer = window.setTimeout(() => play(card), 120);
  };

  const stopImmediate = (card: HTMLDivElement) => {
    if (hoverTimer) window.clearTimeout(hoverTimer);
    hoverTimer = null;
    stop(card);
  };

  return (
      <div className="top-picks-row">
        <h2 className="row-title">Today's Top Picks for {profile}</h2>

        <div className="card-row">
          {topPicks.map((pick, index) => {
            const isImageLoaded = loadedImages.has(pick.posterSrc);
            const isVisible = visibleCards.has(index);

            return (
                <div
                    key={index}
                    data-index={index}
                    className={`pick-card ${isImageLoaded ? 'loaded' : 'loading'}`}
                    onClick={() => navigate(pick.route)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={(e) => isImageLoaded && playDelayed(e.currentTarget)}
                    onMouseLeave={(e) => stopImmediate(e.currentTarget)}
                >
                  {/* Skeleton loader */}
                  {!isImageLoaded && <div className="pick-skeleton" />}

                  {/* Poster image with lazy loading */}
                  <img
                      src={pick.posterSrc}
                      alt={pick.title}
                      className="pick-poster"
                      loading="lazy"
                      onLoad={() => handleImageLoad(pick.posterSrc)}
                      style={{ opacity: isImageLoaded ? 1 : 0 }}
                  />

                  {/* Video only loads when card is in viewport and image is loaded */}
                  {isVisible && isImageLoaded && (
                      <video
                          className="pick-video"
                          src={pick.videoSrc}
                          muted
                          loop
                          playsInline
                          preload="none"
                      />
                  )}

                  <div className="pick-overlay">
                    <div className="pick-icon">{pick.icon}</div>
                    <div className="pick-label">{pick.title}</div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
  );
};

export default TopPicksRow;