import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  min-height: 100vh;
  background-color: #E5E1DA; /* Light Beige */
  color: #003135; /* Dark Teal */

  h1 {
    font-size: 3rem;
    color: #0FA4AF; /* Teal Blue */
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    color: #003135; /* Dark Teal */
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1rem;
    color: #fff;
    background: #0FA4AF; /* Teal Blue */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #024950; /* Darker Teal */
    }
  }

  .features {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }

  .feature {
    background-color: #F1F0E8; /* Very Light Gray */
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
    max-width: 800px;
  }

  .feature-title {
    font-size: 2rem;
    color: #003135; /* Dark Teal */
    margin-bottom: 1rem;
  }

  .feature-desc {
    font-size: 1.2rem;
    color: #003135; /* Dark Teal */
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate('/projects');
  };

  return (
    <HomeSection>
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover my projects, skills, and experience. Let's make amazing things together!
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={navigateToProjects}
      >
        Explore More
      </motion.button>
      <div className="features">
        <motion.div 
          className="feature"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h3 className="feature-title">Full Stack Developer</h3>
          <p className="feature-desc"> A motivated fresher with hands-on experience in developing dynamic websites,  I bring creativity and technical expertise to every project.</p>
        </motion.div>
        <motion.div 
          className="feature"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <h3 className="feature-title">Innovative Solutions</h3>
          <p className="feature-desc">I strive to develop innovative solutions that not only meet but exceed client expectations. My goal is to create user-friendly and engaging digital experiences.</p>
        </motion.div>
        <motion.div 
          className="feature"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <h3 className="feature-title">Collaborative Approach</h3>
          <p className="feature-desc">I believe in a collaborative approach, working closely with clients to understand their needs and deliver solutions that perfectly align with their vision.</p>
        </motion.div>
      </div>
    </HomeSection>
  );
};

export default Home;
