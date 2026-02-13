import React, { useEffect, useState } from "react";
import "./WorkPermit.css";
import { useNavigate } from "react-router-dom";

interface WorkPermitData {
  visaStatus: string;
  additionalInfo: string;
}

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<WorkPermitData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated data - replace with your actual data fetching
    const data: WorkPermitData = {
      visaStatus: "U.S. Permanent Resident",
      additionalInfo: "Green card holder. Authorized to work for any employer in the United States with no restrictions or time limits. Ready to start immediately and contribute long-term."
    };
    setWorkPermitData(data);

    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  if (!workPermitData) {
    return (
        <div className="work-permit-loading">
          <div className="loading-spinner"></div>
          <div>Loading...</div>
        </div>
    );
  }

  return (
      <div className="work-permit-page">
        {/* Hero Section */}
        <section className={`work-permit-hero ${isVisible ? 'visible' : ''}`}>
          {/* Background Elements */}
          <div className="hero-bg-grid" />
          <div className="hero-grain" />
          <div className="hero-gradient-orb hero-gradient-orb-1" />
          <div className="hero-gradient-orb hero-gradient-orb-2" />

          <div className="work-permit-content">
            {/* Badge */}
            <div className="permit-badge-wrapper">
              <div className="permit-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Work Authorization</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="permit-title">
              Authorized to work in the U.S.
              <span className="permit-title-highlight"> No sponsorship required.</span>
            </h1>

            {/* Status Cards */}
            <div className="permit-status-grid">
              <div className="status-card status-card-primary">
                <div className="status-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <div className="status-content">
                  <div className="status-label">Status</div>
                  <div className="status-value">{workPermitData.visaStatus}</div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                </div>
                <div className="status-content">
                  <div className="status-label">Sponsorship</div>
                  <div className="status-value">Not Required</div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="status-content">
                  <div className="status-label">Availability</div>
                  <div className="status-value">Immediate</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="permit-description">
              <p>
                I'm <strong>{workPermitData.visaStatus}</strong> and fully eligible to work
                in the United States with <strong>no employer sponsorship</strong>. That means I can
                start contributing immediately and focus on shipping impact long-term.
              </p>
            </div>

            {/* Details Box */}
            {workPermitData.additionalInfo && (
                <div className="permit-details-box">
                  <div className="details-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </div>
                  <div className="details-content">
                    <h3 className="details-title">Additional Details</h3>
                    <p className="details-text">{workPermitData.additionalInfo}</p>
                  </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="permit-actions">
              <button className="btn btn-primary" onClick={() => navigate("/resume")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                View Resume
              </button>
              <button className="btn btn-secondary" onClick={() => navigate("/contact-me")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Get in Touch
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="permit-trust-indicators">
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Verified Documentation</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Background Check Ready</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>I-9 Compliant</span>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default WorkPermit;