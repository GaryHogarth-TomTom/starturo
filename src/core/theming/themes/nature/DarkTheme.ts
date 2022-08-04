import merge from 'deepmerge';

import type { Theme } from '../../types';
import { DarkTheme as DefaultDarkTheme } from '../default/DarkTheme';

export const DarkTheme: Theme = merge(DefaultDarkTheme, {
  colors: {
    primary: '#9ccc65',
    surface: '#3e2723',
    accent: '#3e2723',
    background: '#3e2723',
    text: '#ffffff',
  },
});
