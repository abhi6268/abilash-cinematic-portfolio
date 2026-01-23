import React, { useEffect, useRef, useState } from "react";
import "./NetflixTitle.css";
import netflixSound from "./netflix-sound.mp3";
import { useNavigate } from "react-router-dom";
import logoImage from "../src/images/logo-2.png"; // adjust if needed
import NetflixAIntro from "./components/NetflixAIntro";      // adjust path

const INTRO_MS = 4200; // match your intro length

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    if (isClicked) return;

    setIsClicked(true);

    // Play sound (allowed because it comes from click)
    // Small delay helps sync with first brush motion
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.9;
      audio.currentTime = 0;
      setTimeout(() => {
        audio.play().catch(() => {});
      }, 250);
    }
  };

  useEffect(() => {
    if (!isClicked) return;
    const t = setTimeout(() => navigate("/browse"), INTRO_MS);
    return () => clearTimeout(t);
  }, [isClicked, navigate]);

  return (
      <div className="netflix-container" onClick={handleStart}>
        {!isClicked ? (
            <img src={logoImage} alt="Custom Logo" className="netflix-logo" />
        ) : (
            <NetflixAIntro start />
        )}

        <audio ref={audioRef} preload="auto">
          <source src={netflixSound} type="audio/mpeg" />
        </audio>
      </div>
  );
};

export default NetflixTitle;
