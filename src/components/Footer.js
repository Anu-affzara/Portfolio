import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem 2rem;
  background: #78B3CE; /* Dark Teal */
  color: #AFDDE5; /* Light Blue */
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;

  p {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
