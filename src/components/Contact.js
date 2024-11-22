import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Replace FaTwitter with FaInstagram

const ContactSection = styled.section`
  padding: 6rem 2rem;
  min-height: 100vh;
  background-color: #AFDDE5; /* Light Blue */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #0FA4AF; /* Teal Blue */
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    color: #003135; /* Dark Teal */
    max-width: 600px;
    margin-bottom: 2rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    a {
      color: #003135; /* Dark Teal */
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #0FA4AF; /* Teal Blue */
      }
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background: #E5E1DA; /* Light Beige */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  input, textarea {
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background: #f1f0e8; /* Very Light Gray */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    color: #003135; /* Dark Teal */

    &:focus {
      outline: none;
      background: #d0e1f9; /* Light Grayish Teal */
    }
  }

  button {
    padding: 1rem;
    font-size: 1rem;
    color: #fff;
    background: #0FA4AF; /* Teal Blue */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #024950; /* Darker Teal */
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'd love to hear from you! Reach out to me at your.email@example.com or find me on social media.
      </motion.p>
      <motion.div 
        className="social-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </motion.div>
      <ContactForm>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
