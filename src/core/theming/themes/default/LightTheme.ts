import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import merge from 'deepmerge';
import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

import type { Theme } from '../../types';

export const LightTheme: Theme = merge(
  merge(PaperDefaultTheme, NavigationDefaultTheme),
  {},
);
