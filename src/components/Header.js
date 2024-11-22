import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #78B3CE; /* Dark Teal */
  color: #fff;
  position: fixed;
  width: 97%;
  top: 0;
  z-index: 10;

  h1 {
    font-size: 2rem;
    color: #AFDDE5; /* Light Blue */
  }

  .nav-links {
    display: flex;
    gap: 1rem;

    a {
      color: #fff;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: #0FA4AF; /* Light Teal */
      }
    }
  }
`;

const Header = () => {
  return (
    <Navbar>
      <h1>My Portfolio</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </Navbar>
  );
};

export default Header;
