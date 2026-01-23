import React, { useEffect, useMemo, useState } from "react";
import "./ContactMe.css";
import profilePic from "../images/abilash-profile.jpg";
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from "react-icons/fa";
import { ContactMe as IContactMe } from "../types";
import { getContactMe } from "../data/getContactMe";

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe>();

  useEffect(() => {
    (async () => {
      const data = await getContactMe();
      setUserData(data);
    })();
  }, []);

  const coffeeLink = useMemo(() => {
    // Replace with your real scheduling link later (Calendly, Google calendar booking, etc.)
    return "https://calendly.com/";
  }, []);

  if (!userData) return <div className="contact-loading">Loading...</div>;

  return (
      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-bg" />

          <div className="contact-hero-content">
            <div className="contact-profile">
              <img src={profilePic} alt={userData.name} className="contact-avatar" />

              <div className="contact-profile-meta">
                <h1 className="contact-name">{userData.name}</h1>
                <div className="contact-title">{userData.title}</div>
                <p className="contact-summary">{userData.summary}</p>
                <div className="contact-sub">{userData.companyUniversity}</div>

                <div className="contact-actions">
                  <a className="btn btn-primary" href={`mailto:${userData.email}`}>
                    <FaEnvelope /> Email
                  </a>

                  <a className="btn btn-ghost" href={`tel:${userData.phoneNumber}`}>
                    <FaPhoneAlt /> Call
                  </a>

                  <a
                      className="btn btn-ghost"
                      href={userData.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>

                  <a className="btn btn-ghost" href={coffeeLink} target="_blank" rel="noopener noreferrer">
                    <FaCoffee /> Coffee chat
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-mini-row">
              <a className="mini-card" href={`mailto:${userData.email}`}>
                <FaEnvelope className="mini-ic" />
                <div className="mini-text">
                  <div className="mini-label">Email</div>
                  <div className="mini-value">{userData.email}</div>
                </div>
              </a>

              <a className="mini-card" href={`tel:${userData.phoneNumber}`}>
                <FaPhoneAlt className="mini-ic" />
                <div className="mini-text">
                  <div className="mini-label">Phone</div>
                  <div className="mini-value">{userData.phoneNumber}</div>
                </div>
              </a>
            </div>

            <div className="contact-footer-line">
              Always open to frontend or full-stack roles and collaborations.
            </div>
          </div>
        </section>
      </div>
  );
};

export default ContactMe;