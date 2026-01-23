import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./ContinueWatching.css";
import { ProfileType } from "../types";

interface ContinueWatchingProps {
  profile: ProfileType;
}

type Item = {
  title: string;
  posterSrc: string;
  link: string;
  progress: number; // 0..1
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

const hashToUnit = (str: string) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
};

const seededProgress = (key: string) => {
  const u = hashToUnit(key);
  const shaped = Math.pow(u, 0.55);
  return clamp01(0.08 + shaped * 0.86);
};

const continueWatchingConfig: Record<ProfileType, Omit<Item, "progress">[]> = {
  recruiter: [
    { title: "Music", posterSrc: "/posters/music.png", link: "/music" },
    { title: "Behind the Scenes", posterSrc: "/posters/behind-scenes.png", link: "/behind-the-scenes" },
    { title: "Work Stories", posterSrc: "/posters/work-stories.png", link: "/work-stories" },
    { title: "Contact Me", posterSrc: "/posters/contact-me.png", link: "/contact-me" },
  ],
  builder: [
    { title: "Behind the Scenes", posterSrc: "/posters/behind-scenes.png", link: "/behind-the-scenes" },
    { title: "Work Stories", posterSrc: "/posters/work-stories.png", link: "/work-stories" },
    { title: "Music", posterSrc: "/posters/music.png", link: "/music" },
    { title: "Contact Me", posterSrc: "/posters/contact-me.png", link: "/contact-me" },
  ],

  researcher: [
    { title: "Behind the Scenes", posterSrc: "/posters/behind-scenes.png", link: "/behind-the-scenes" },
    { title: "Work Experience", posterSrc: "/posters/experience.jpg", link: "/work-experience" },
    { title: "Skills", posterSrc: "/posters/skills.jpg", link: "/skills" },
    { title: "Contact Me", posterSrc: "/posters/contact-me.png", link: "/contact-me" },
  ],

  explorer: [
    { title: "Music", posterSrc: "/posters/music.png", link: "/music" },
    { title: "Projects", posterSrc: "/posters/projects.jpg", link: "/projects" },
    { title: "Work Stories", posterSrc: "/posters/work-stories.png", link: "/work-stories" },
    { title: "Contact Me", posterSrc: "/posters/contact-me.png", link: "/contact-me" },
  ],

};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const navigate = useNavigate();

  const items: Item[] = useMemo(() => {
    return continueWatchingConfig[profile].map((x) => ({
      ...x,
      progress: seededProgress(`${profile}:${x.title}:${x.link}`),
    }));
  }, [profile]);

  return (
      <div className="cw-row">
        <h2 className="cw-title">Continue Watching for {profile}</h2>

        <div className="cw-track">
          {items.map((item) => (
              <div
                  key={item.title}
                  className="cw-card"
                  onClick={() => navigate(item.link)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") navigate(item.link);
                  }}
              >
                <img className="cw-poster" src={item.posterSrc} alt={item.title} />

                <div className="cw-overlay">
                  <div className="cw-play" aria-hidden="true">▶</div>
                  <div className="cw-label">{item.title}</div>
                </div>

                <div className="cw-progress">
                  <div
                      className="cw-progressFill"
                      style={{ width: `${Math.round(clamp01(item.progress) * 100)}%` }}
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default ContinueWatching;