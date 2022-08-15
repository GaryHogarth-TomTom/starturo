import { LightTheme, DarkTheme } from './default';
import {
  LightTheme as NatureLightTheme,
  DarkTheme as NatureDarkTheme,
} from './nature';

export type ThemeConfig = {
  light: Object;
  dark: Object;
};
export type ThemeLibrary = {
  [key: string]: ThemeConfig;
};

export const themeLibrary: ThemeLibrary = {
  default: {
    light: LightTheme,
    dark: DarkTheme,
  },
  nature: {
    light: NatureLightTheme,
    dark: NatureDarkTheme,
  },
};
