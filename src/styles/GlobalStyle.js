import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #E5E1DA; /* Light Beige */
    color: #003135; /* Dark Teal */
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  .section {
    padding: 6rem 2rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
  }

  .section:nth-child(even) {
    background-color: #AFDDE5; /* Light Blue */
  }

  .section:nth-child(odd) {
    background-color: #E5E1DA; /* Light Beige */
  }
`;

export default GlobalStyle;
