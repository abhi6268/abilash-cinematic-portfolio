import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../data/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
const WorkPermit: React.FC = () => {

  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);
  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
      <div className="work-permit-container">
        <div className="work-permit-card">
          <h2 className="work-permit-headline">🪪 Work Authorization</h2>

          <p className="work-permit-summary">
            I am a <strong>{workPermitData.visaStatus}</strong>, fully authorized to work in the United States 🇺🇸
            with <strong>no sponsorship required</strong>. This allows me to focus entirely on delivering impact,
            growing professionally, and contributing long-term. 🚀
          </p>

          {workPermitData.additionalInfo && (
              <p className="additional-info">{workPermitData.additionalInfo}</p>
          )}
        </div>
      </div>
  );
};

export default WorkPermit;
