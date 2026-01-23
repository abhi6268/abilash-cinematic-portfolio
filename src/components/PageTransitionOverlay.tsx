import React from "react";
import "./PageTransitionOverlay.css";

type Props = {
    active: boolean;
};

const PageTransitionOverlay: React.FC<Props> = ({ active }) => {
    return (
        <div className={`page-transition ${active ? "active" : ""}`} aria-hidden="true">
            <div className="page-transition__vignette" />
            <div className="page-transition__flash" />
        </div>
    );
};

export default PageTransitionOverlay;
