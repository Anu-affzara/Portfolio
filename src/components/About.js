import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  min-height: 100vh;
  background-color: #E5E1DA; /* Light Beige */
  color: #003135; /* Dark Teal */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #0FA4AF; /* Teal Blue */
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #003135; /* Dark Teal */
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .about-img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 8px;
    margin-top: 2rem;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hi! I'm a creative developer who loves to bring ideas to life with code and design. With a passion for innovation and a keen eye for detail, I strive to create engaging and user-friendly digital experiences. Whether it's building responsive websites, developing dynamic web applications, or exploring new technologies, I enjoy every step of the process. Let's create something amazing together!
      </motion.p>
      <motion.img 
        src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1" 
        alt="About Me"
        className="about-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </AboutSection>
  );
};

export default About;
