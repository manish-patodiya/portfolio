import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    let data = [
      {
        title: "RAAH (Rajasthan Arts and Handicrafts)",
        description: "E-commerce platform for the Artisans in rajasthan.",
        projectLink: "",
        codeLink: "https://github.com/manish-patodiya/raah",
        imgUrl: images.project01,
        tags: ["Web App", "All"],
      },
      {
        title: "Invento",
        description: "Inventory management system for businesses.",
        projectLink: "",
        codeLink: "https://github.com/manish-patodiya/Invento",
        imgUrl: images.project11,
        tags: ["Web App"],
      },
      {
        title: "E-vaidyak",
        description:
          "Healthcare service for patients where they can make appointment and consult with the doctors.",
        projectLink: "https://evaidyak.com/clinic",
        codeLink: "",
        imgUrl: images.project04,
        tags: ["Web App"],
      },
      {
        title: "Jangir Samaaj",
        description:
          "Platform for the jangir society to connect with the society members and keep a track of members in a region",
        projectLink: "",
        codeLink: "https://github.com/manish-patodiya/JangirSamaj",
        imgUrl: images.project06,
        tags: ["Web App"],
      },
      {
        title: "CVtae",
        description:
          "Data mining project for shortlisting resume based on the job role",
        projectLink: "",
        codeLink: "https://github.com/manish-patodiya/CVtae",
        imgUrl: images.project07,
        tags: ["Web App"],
      },
      {
        title: "Modern UI/UX Website",
        description: "A Modern UI/UX Portfolio Website.",
        projectLink: "https://manish-patodiya.github.io/portfolio/",
        codeLink: "https://github.com/manish-patodiya/portfolio",
        imgUrl: images.project08,
        tags: ["UI/UX", "React JS"],
      },
      {
        title: "Calc",
        description:
          "Calculator clone made using Java AWT and Swing Components",
        projectLink: "",
        codeLink: "",
        imgUrl: images.project09,
        tags: ["UI/UX"],
      },
      {
        title: "Story club",
        description: "Frontend UI in react",
        projectLink: "https://manish-patodiya.github.io/storyclub/",
        codeLink: "https://github.com/manish-patodiya/storyclub",
        imgUrl: images.project10,
        tags: ["UI/UX", "React JS"],
      },
    ];

    setWorks(data);
    setFilterWork(data);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {work.projectLink ? (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                ) : (
                  ""
                )}

                {work.codeLink ? (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                ) : (
                  ""
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
