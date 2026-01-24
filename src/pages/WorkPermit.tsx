import React, { useEffect, useState } from "react";
import "./WorkPermit.css";
import { getWorkPermit } from "../data/getWorkPermit";
import { WorkPermit as IWorkPermit } from "../types";
import { useNavigate } from "react-router-dom";

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div className="work-permit-loading">Loading…</div>;

  return (
      <section className="work-permit-hero">
        <div className="work-permit-vignette" />
        <div className="work-permit-content">
          <div className="work-permit-kicker">Work Authorization</div>

          <h1 className="work-permit-title">
            Authorized to work in the U.S.
            <span className="work-permit-title-accent"> No sponsorship required.</span>
          </h1>

          <div className="work-permit-meta">
            <span className="chip chip-red">No Sponsorship</span>
            <span className="chip">U.S. Authorized</span>
            <span className="chip">{workPermitData.visaStatus}</span>
          </div>

          <p className="work-permit-summary">
            I’m currently <strong>{workPermitData.visaStatus}</strong> and fully eligible to work in the United States
            with <strong>no employer sponsorship</strong>. That means I can start contributing immediately and focus on
            shipping impact long-term.
          </p>

          {workPermitData.additionalInfo && (
              <div className="work-permit-note">
                <div className="note-label">Details</div>
                <div className="note-text">{workPermitData.additionalInfo}</div>
              </div>
          )}

          <div className="work-permit-cta">
            <button className="btn btn-primary" onClick={() => navigate("/resume")}>
              View Resume
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/contact-me")}>
              Contact
            </button>
          </div>
        </div>
      </section>
  );
};

export default WorkPermit;