import { createGlobalStyle } from 'styled-components';

import { device } from 'breakpoints';

const GlobalStyles = createGlobalStyle`
  *:focus {
    outline: none;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0125em;

    background: var(--background);
    background-image: var(--background-image);

    --primary: #365b5b;
    --primary-dark: #2f4f4f;
    --primary-light: #C4DDD9;
    --primary-focus: #365b5b;
    --white: #ffffff;

    --shadow-card: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    --shadow-element: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    --shadow-focus: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    --spacing-l: 48px;
    --spacing-m: 32px;
    --spacing-s: 24px;
    --spacing-xs: 16px;
    --spacing-xxs: 12px;
    --spacing-tiny: 8px;

    --border-radius-s: 24px;
    --border-radius-xs: 4px;

    --background: rgb(47, 79, 79);
    --background-image: linear-gradient(to right top, #2f4f4f, #305654, #325d59, #34645e, #366b62);
  }

  #root {
    display: flex;
    height: 100%;
  }

  p {
    font-size: 0.75rem;

    @media ${device.tablet} {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
