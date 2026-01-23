import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../data/getSkills';

import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiReduxsaga,
  SiNextdotjs,
  SiMui,
  SiAntdesign,
  SiBootstrap,
  SiFigma,
  SiExpress,
  SiFastapi,
  SiDotnet,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiMicrosoftazure,
  SiKubernetes,
  SiJest,
  SiMocha,
  SiWebpack,
  SiPostman,
  SiJira,
  SiGithubcopilot,
} from "react-icons/si";
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiPython: <SiPython />,
  SiCsharp: <SiCsharp />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,

  FaReact: <FaReact />,
  SiRedux: <SiRedux />,
  SiReduxsaga: <SiReduxsaga />,
  SiNextdotjs: <SiNextdotjs />,
  SiMui: <SiMui />,
  SiAntdesign: <SiAntdesign />,
  SiBootstrap: <SiBootstrap />,
  SiFigma: <SiFigma />,

  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiFastapi: <SiFastapi />,
  SiDotnet: <SiDotnet />,
  SiGraphql: <SiGraphql />,

  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,

  SiMicrosoftazure: <SiMicrosoftazure />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,

  SiJest: <SiJest />,
  SiMocha: <SiMocha />,
  FaGitAlt: <FaGitAlt />,
  SiWebpack: <SiWebpack />,
  SiPostman: <SiPostman />,
  SiJira: <SiJira />,

  SiGithubcopilot: <SiGithubcopilot />,
};



const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
