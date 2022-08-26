export interface IHeaderStyles {
  boxShadow: string;
}

export interface IButtonStyles {
  boxShadow: string;
}

export interface IThemeMode {
  backgroundPrimary: string;
  backgroundSecondary: string;
  textColor: string;
  header: IHeaderStyles;
  button: IButtonStyles;
  isModeDark: boolean;
}

export type ThemeMode = 'light' | 'dark';

export interface IProps {
  children: React.ReactNode;
}
