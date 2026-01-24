import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ProfilePage.css";

import ProfileBanner from "./ProfileBanner";
import TopPicksRow from "./TopPicksRow";
import ContinueWatching from "./ContinueWatching";
import { PROFILE_LIST, ProfileType } from "../types";

const BG_BY_PROFILE: Record<ProfileType, string> = {
    recruiter: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NpcDVicHlhOWtuaHBzeHF2MzI3ZW5iN2wxcmgzNWRmZGExZGp4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/rjXO2H5gBcysUCcp83/giphy.gif",
    builder: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTgwaXo1cndqeHJ1eTFweTk5bnVjeTB3OHBua3dmMmpsdHI3ZjdpcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zOvBKUUEERdNm/giphy.gif",
    researcher: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXQ5b2dlOWp1NHd1MXU3YWRua3o2d2ZreHpha2wwMWh4d2F2MmFtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/DSegqXluO4ZN8vc4xQ/giphy.gif",
    explorer: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NmRvcmYyZnc5b3V0YmE5ejdoZWwzMmsxdW5ucnRybXRibmQweW96eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Vww6NlC3ifjX52dzGn/giphy.gif",
};

type Props = {
    setTransitionOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfilePage: React.FC<Props> = ({ setTransitionOn }) => {
    const { profileName } = useParams<{ profileName: string }>();
    const location = useLocation();

    const profile: ProfileType = PROFILE_LIST.includes(profileName as ProfileType)
        ? (profileName as ProfileType)
        : "recruiter";

    const backgroundGif = useMemo(() => {
        const state = location.state as { backgroundGif?: string } | null;
        return state?.backgroundGif || BG_BY_PROFILE[profile];
    }, [location.state, profile]);

    return (
        <>
            <img
                src={backgroundGif}
                alt=""
                style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
                onLoad={() => requestAnimationFrame(() => setTransitionOn(false))}
                onError={() => setTransitionOn(false)}
            />

            <div className="profile-page" style={{ backgroundImage: `url(${backgroundGif})` }}>
                <ProfileBanner profile={profile} />
            </div>

            <TopPicksRow profile={profile} />
            <ContinueWatching profile={profile} />
        </>
    );
};

export default ProfilePage;