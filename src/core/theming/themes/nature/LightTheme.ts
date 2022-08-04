import merge from 'deepmerge';

import type { Theme } from '../../types';
import { LightTheme as DefaultLightTheme } from '../default/LightTheme';

export const LightTheme: Theme = merge(DefaultLightTheme, {
  colors: {
    primary: '#9ccc65',
    surface: '#6b9b37',
    accent: '#6b9b37',
    background: '#cfff95',
    text: '#000000',
  },
});
