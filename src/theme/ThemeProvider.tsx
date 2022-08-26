import { useState } from 'react';
import { ThemeProvider as Theme, createGlobalStyle } from 'styled-components';
import ThemeContext from './ThemeContext';
import { IProps, IThemeMode, ThemeMode } from './types';

declare module 'styled-components' {
  export interface DefaultTheme {
    themeMode: IThemeMode;
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Signika Negative', sans-serif;
  }
`;

export const darkMode: IThemeMode = {
  isModeDark: false,
  backgroundPrimary: '#202020',
  backgroundSecondary: '#2c2c2c',
  textColor: '#ffffff',
  header: {
    boxShadow: '0 3px 5px #141414',
  },
  button: {
    boxShadow: '0 3px 5px #141414;',
  },
};

export const lightMode: IThemeMode = {
  isModeDark: false,
  backgroundPrimary: '#e7e7e7',
  backgroundSecondary: '#ffffff',
  textColor: '#000',
  header: {
    boxShadow: '0 3px 5px #cfcfcf',
  },
  button: {
    boxShadow: '0 3px 5px #cfcfcf;',
  },
};

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const localTheme = localStorage.getItem('theme') as ThemeMode;
  const [themeMode, setThemeMode] = useState<ThemeMode>(localTheme ?? 'light');
  const isModeDark = themeMode === 'dark';
  const theme = { themeMode: isModeDark ? darkMode : lightMode, isModeDark };

  const toggleThemeMode = () => {
    const nextTheme = isModeDark ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    setThemeMode(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ themeMode, setThemeMode, toggleThemeMode, isModeDark }}
    >
      <GlobalStyle />
      <Theme theme={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
