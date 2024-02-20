import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    setAbouts([
      {title: "Web Development",description:"Turning ideas into reality on the web. I specialize in creating websites that are not only visually appealing but also easy to use and navigate. Let's make your online presence stand out!",imgUrl:images.about01},
      {title: "Frontend Development",description:"Crafting beautiful, user-friendly websites that make browsing a breeze. I turn designs into interactive experiences that keep users coming back for more.",imgUrl:images.about02},
      {title: "Backend Developement",description:"Building the backbone of websites with solid databases and efficient server-side logic. I ensure everything runs smoothly behind the scenes, so users can focus on what matters most.",imgUrl:images.about03},
      {title: "MERN Stack",description:"Bringing together MongoDB, Express.js, React, and Node.js to create dynamic web apps. I love using these tools to build responsive and modern websites that users love to explore.",imgUrl:images.about04}
    ]);
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  }, []);

  return (
    <>
      
      <h2 className="head-text">I Know that <span>Good Apps</span> <br />means  <span>Good Businesses.</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
