import { Theme } from '../types';
import { LightTheme, DarkTheme } from './default';
import {
  LightTheme as NatureLightTheme,
  DarkTheme as NatureDarkTheme,
} from './nature';

export type ThemeConfig = {
  slug: string;
  name: string;
  light: Theme;
  dark: Theme;
};
export type ThemeLibrary = {
  [key: string]: ThemeConfig;
};

export const themeLibrary: ThemeLibrary = {
  default: {
    slug: 'default',
    name: 'theme.default',
    light: LightTheme,
    dark: DarkTheme,
  },
  nature: {
    slug: 'nature',
    name: 'theme.nature',
    light: NatureLightTheme,
    dark: NatureDarkTheme,
  },
};
