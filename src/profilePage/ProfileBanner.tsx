import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import "./ProfileBanner.css";
import { profileBannerData } from "../data/profileBanner";
import { PROFILE_LIST, ProfileType } from "../types";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";

const ProfileBanner: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/resume");
  };

  const handleLinkedinClick = () => {
    window.open(
        'https://www.linkedin.com/in/abilash-mundlur',
        '_blank'
    );
  };

  const profile: ProfileType = PROFILE_LIST.includes(profileName as ProfileType)
      ? (profileName as ProfileType)
      : "recruiter";

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