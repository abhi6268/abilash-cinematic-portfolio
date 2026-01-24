import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NetflixTitle.css";

import logoImage from "../src/images/logo-2.png";
import introVideo from "./assets/Netflix-Logo-A.mp4";
import netflixSound from "./netflix-sound.mp3";

type Phase = "banner" | "playing";

export default function NetflixTitle() {
    const navigate = useNavigate();

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [phase, setPhase] = useState<Phase>("banner");

    const startIntro = async () => {
        if (phase !== "banner") return;

        const video = videoRef.current;
        const audio = audioRef.current;
        if (!video || !audio) return;

        try {
            // reset
            video.pause();
            video.currentTime = 0;

            audio.pause();
            audio.currentTime = 0;
            audio.volume = 0.9;

            await video.play();

            setPhase("playing");

            await audio.play();
        } catch (err) {
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onEnded = () => navigate("/browse");
        const onError = () => navigate("/browse");

        video.addEventListener("ended", onEnded);
        video.addEventListener("error", onError);

        return () => {
            video.removeEventListener("ended", onEnded);
            video.removeEventListener("error", onError);
        };
    }, [navigate]);

    return (
        <div className="intro-root" onClick={startIntro}>
            <video
                ref={videoRef}
                className={`intro-video ${phase === "playing" ? "is-visible" : ""}`}
                src={introVideo}
                playsInline
                preload="auto"
                muted
            />

            {phase === "banner" && (
                <img className="intro-logo" src={logoImage} alt="Logo" />
            )}

            <audio ref={audioRef} preload="auto">
                <source src={netflixSound} type="audio/mpeg" />
            </audio>
        </div>
    );
}