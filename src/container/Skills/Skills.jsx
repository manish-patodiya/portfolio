import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {

    setSkills([
      {name:"Javascript",icon:images.javascript,bgColor:""},
      {name:"React JS",icon:images.react,bgColor:""},
      {name:"Java",icon:images.java,bgColor:""},
      {name:"Node JS",icon:images.node,bgColor:""},
      {name:"PHP",icon:images.php,bgColor:""},
      {name:"HTML",icon:images.html,bgColor:""},
      {name:"Flutter",icon:images.flutter,bgColor:""},
      {name:"Bootstrap",icon:images.bootstrap,bgColor:""},
      {name:"Git",icon:images.git,bgColor:""},
      {name:"CSS",icon:images.css,bgColor:""},
      {name:"API",icon:images.api,bgColor:""},
      {name:"C++",icon:images.cpp,bgColor:""},
      {name:"Python",icon:images.python,bgColor:""},
    ]);
    
    setExperiences([
      {
        year: 2021,
        works:[{name:"Frontend Development Traniee",company:"GeeksIT Data Solutions Pvt Ltd",desc:"I learnt how to develop a responsive websites using html, css and Javascript"},
        {name:"Backend Development Traniee",company:"GeeksIT Data Solutions Pvt Ltd",desc:"I learnt how to make backbone of a website using PHP script with seamless performance and learnt how to make API with a Relational Database using MySQL and SQL"}]
      },
      {
        year: 2022,
        works:[{name:"Full Stack Developer",company:"GeeksIT Data Solutions Pvt Ltd",desc:"Engineered a robust REST API in PHP and SQL/MySQL to seamlessly store data from learning management systems, enhancing data management efficiency.\nOrchestrated the development of dynamic websites from mockups, utilizing HTML5, CSS3, Javascript, JQuery, PHP7, CodeIgniter, AJAX, and JSON coding."}]
      }
    ]);

  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill,index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience,index) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year + index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work,index) => (
                  <div key={work.name + index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
