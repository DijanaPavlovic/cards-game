import React, { useState } from 'react';

import { ThemeContextState, Themes } from './ThemeContext.types';

const defaultTheme: ThemeContextState = {
  theme: Themes.Green,
  dispatch: () => {},
};

export const ThemeContext = React.createContext<ThemeContextState>(defaultTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [theme, setTheme] = useState(defaultTheme.theme);

  return (
    <ThemeContext.Provider value={{ dispatch: setTheme, theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
