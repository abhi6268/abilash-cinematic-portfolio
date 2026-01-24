import React from "react";
import {useNavigate} from "react-router-dom";
import "./ProfileBanner.css";
import { profileBannerData } from "../data/profileBanner";
import { ProfileType } from "../types";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { track } from "@vercel/analytics";

const ProfileBanner: React.FC<{ profile: ProfileType }> = ({ profile }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    track("resume_click", { source: "profile_banner", profile });
    navigate("/resume");
  };

  const handleLinkedinClick = () => {
    track("linkedin_click", { source: "profile_banner", profile });
    window.open("https://www.linkedin.com/in/abilash-mundlur", "_blank");
  };

  const bg = profileBannerData.backgrounds[profile];

  return (
      <div
          className="profile-banner"
          style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="banner-content">
          <h1 className="banner-headline">{profileBannerData.headline}</h1>
          <p className="banner-summary">{profileBannerData.profileSummary}</p>

          <div className="banner-buttons">
            <PlayButton onClick={handlePlayClick} label="Resume" />
            <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
          </div>
        </div>
      </div>
  );
};

export default ProfileBanner;