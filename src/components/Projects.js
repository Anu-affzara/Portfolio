import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E5E1DA; /* Light Beige */
  color: #003135; /* Dark Teal */

  h2 {
    font-size: 2.5rem;
    color: #0FA4AF; /* Teal Blue */
    margin-bottom: 2rem;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectItem = styled(motion.div)`
  background: #f1f0e8; /* Very Light Gray */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.5rem;
    color: #0FA4AF; /* Teal Blue */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #003135; /* Dark Teal */
    margin-bottom: 1rem;
  }

  a {
    color: #0FA4AF; /* Teal Blue */
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #024950; /* Darker Teal */
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsSection className="section">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <ProjectList>
        <ProjectItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Portfolio Website</h3>
          <p>A modern and responsive portfolio website built using React, showcasing a collection of dynamic projects and skills.</p>
          <a href="https://github.com/Anu-affzara/Portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </ProjectItem>
        <ProjectItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>Book A Doctor</h3>
          <p>An application that allows users to book doctor appointments online, featuring a user-friendly interface and real-time scheduling.</p>
          <a href="https://github.com/Anu-affzara/book-a-doctor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </ProjectItem>
        <ProjectItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>Social Media App</h3>
          <p>A social media application developed to connect users, featuring real-time interactions and a user-friendly interface.</p>
          <a href="https://github.com/Anu-affzara/Social-Media-App" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </ProjectItem>
        {/* Add more projects as needed */}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
