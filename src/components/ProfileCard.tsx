import React from "react";
import "./ProfileCard.css";

type Props = {
    name: string;
    image: string;
    variant: "recruiter" | "builder" | "researcher" | "explorer";
    tagline: string;
    accent: string;
    onClick: () => void;
};

const ProfileCard: React.FC<Props> = ({ name, image, variant, tagline, accent, onClick }) => {
    return (
        <button
            type="button"
            className={`profile-card ${variant}`}
            style={{ ["--accent" as any]: accent }}
            onClick={onClick}
            aria-label={`Open profile: ${name}`}
        >
            <div className="profile-art">
                <img className="profile-img" src={image} alt={name} />
                <div className="profile-vignette" />
                <div className="profile-sheen" />
            </div>

            <div className="profile-meta">
                <div className="profile-name">{name}</div>
                <div className="profile-tagline">{tagline}</div>
            </div>
        </button>
    );
};

export default ProfileCard;
