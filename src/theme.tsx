import { useContext } from 'react';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';

import { ThemeContext } from 'contexts/ThemeContext/ThemeContext';
import { device } from 'breakpoints';

interface Themes {
  [key: string]: DefaultTheme;
}

export const themes: Themes = {
  green: {
    primary: '#365b5b',
    primaryDark: '#2f4f4f',
    primaryLight: '#c4ddd9',
    backgroundImage: 'linear-gradient(to right top, #2f4f4f, #305654, #325d59, #34645e, #366b62)',
  },
  pink: {
    primary: '#cf5200',
    primaryDark: '#9c3e00',
    primaryLight: '#ffc29b', // ffd2b4
    backgroundImage: 'linear-gradient(to right top, #9c3e00, #a84300, #b54800, #c24d00, #cf5200);',
  },
};

const GlobalStyles = createGlobalStyle`
  *:focus {
    outline: none;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    transition: all 0.5s;
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

    background-image: ${({ theme }) => theme.backgroundImage};

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

const Theme = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
