import { createContext, Dispatch, SetStateAction } from 'react';

type ThemeMode = 'light' | 'dark';

interface IContext<T> {
  themeMode: T;
  setThemeMode: Dispatch<SetStateAction<T>>;
  toggleThemeMode: () => void;
  isModeDark: boolean;
}

const context = createContext<IContext<ThemeMode>>({
  themeMode: 'light',
  setThemeMode: () => null,
  toggleThemeMode: () => null,
  isModeDark: false,
});

export default context;
