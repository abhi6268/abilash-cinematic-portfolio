import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import blueImage from "../images/blue.png";
import greyImage from "../images/grey.png";
import redImage from "../images/red.png";
import yellowImage from "../images/yellow.png";
import "./browse.css";

const preloadImage = (url: string) =>
    new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = url;
    });

type Variant = "recruiter" | "builder" | "researcher" | "explorer";

type Profile = {
  name: string;
  image: string;
  backgroundGif: string;
  variant: Variant;
  tagline: string;
  accent: string;
};

type Props = {
  setTransitionOn: (v: boolean) => void;
};

const PROFILES: Profile[] = [
  {
    name: "Recruiter",
    image: blueImage,
    backgroundGif:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXR4M2M2aG16b3ZxY2VkZXpqejZuZmN3bjY1amh5cHEzMXhlZTk2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lXo8uSnIkaB9e/giphy.gif",
    variant: "recruiter",
    tagline: "Hiring View",
    accent: "#00C2FF",
  },
  {
    name: "Builder",
    image: greyImage,
    backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif",
    variant: "builder",
    tagline: "Engineering Cut",
    accent: "#BDBDBD",
  },
  {
    name: "Researcher",
    image: redImage,
    backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif",
    variant: "researcher",
    tagline: "Deep Dive",
    accent: "#E50914",
  },
  {
    name: "Explorer",
    image: yellowImage,
    backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif",
    variant: "explorer",
    tagline: "Story Mode",
    accent: "#FFB300",
  },
];

const Browse: React.FC<Props> = ({ setTransitionOn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    PROFILES.forEach((p) => {
      const img = new Image();
      img.src = p.backgroundGif;
    });
  }, []);

  const handleProfileClick = async (profile: Profile) => {
    setTransitionOn(true);

    await preloadImage(profile.backgroundGif);

    window.setTimeout(() => {
      navigate(`/profile/${profile.variant}`, {
        state: { profileImage: profile.image, backgroundGif: profile.backgroundGif },
      });

      window.setTimeout(() => setTransitionOn(false), 200);
    }, 120);
  };

  return (
      <div className="browse-container">
        <p className="who-is-watching">Who's Watching?</p>
        <div className="profiles">
          {PROFILES.map((profile) => (
              <ProfileCard
                  key={profile.variant}
                  name={profile.name}
                  image={profile.image}
                  variant={profile.variant}
                  tagline={profile.tagline}
                  accent={profile.accent}
                  onClick={() => handleProfileClick(profile)}
              />
          ))}
        </div>
      </div>
  );
};

export default Browse;