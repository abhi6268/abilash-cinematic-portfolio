import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../data/getTimeline';


const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);


  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData)

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
          {timeLineData.map((item, index) => {
              const isFeatured = item.timelineType === "work" && index === 0;

              return (
                  <VerticalTimelineElement
                      key={index}
                      className={`vertical-timeline-element--${item.timelineType} ${
                          isFeatured ? "featured-role" : ""
                      }`}
                      contentStyle={
                          item.timelineType === "work"
                              ? isFeatured
                                  ? { background: "transparent", color: "#000" } // let CSS handle the gradient
                                  : { background: "rgb(240, 240, 240)", color: "#000" }
                              : { background: "rgb(255, 224, 230)", color: "#000" }
                      }
                      contentArrowStyle={
                          item.timelineType === "work"
                              ? {
                                  borderRight: isFeatured
                                      ? "7px solid rgba(255, 60, 120, 0.35)"
                                      : "7px solid rgb(240, 240, 240)"
                              }
                              : { borderRight: "7px solid rgb(255, 224, 230)" }
                      }
                      date={item.dateRange}
                      iconStyle={
                          item.timelineType === "work"
                              ? { background: "rgb(33, 150, 243)", color: "#fff" }
                              : { background: "rgb(255, 160, 200)", color: "#fff" }
                      }
                      icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
                  >
                      {item.timelineType === "work" ? (
                          <div className="timeline-content">
                              <div className="timeline-header-row">
                                  <div>
                                      <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                      <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                                  </div>
                                  {isFeatured && <span className="featured-badge">Featured</span>}
                              </div>

                              {/* Tech pills */}
                              <div className="tech-pills">
                                  {String(item.techStack)
                                      .split(",")
                                      .map(t => t.trim())
                                      .filter(Boolean)
                                      .map((t, i) => (
                                          <span
                                              key={`${t}-${i}`}
                                              className={`tech-pill ${isFeatured ? "tech-pill-featured" : ""}`}
                                          >
                  {t}
                </span>
                                      ))}
                              </div>

                              <ul className="timeline-bullets">
                                  {Array.isArray(item.summaryPoints) &&
                                      item.summaryPoints.map((point, i) => <li key={i}>{point}</li>)}
                              </ul>
                          </div>
                      ) : (
                          <div className="timeline-content">
                              <h3 className="vertical-timeline-element-title">{item.name}</h3>
                              <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                              <ul className="timeline-bullets">
                                  {Array.isArray(item.summaryPoints) &&
                                      item.summaryPoints.map((point, i) => <li key={i}>{point}</li>)}
                              </ul>
                          </div>
                      )}
                  </VerticalTimelineElement>
              );
          })}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
