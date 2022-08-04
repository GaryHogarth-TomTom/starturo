import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import merge from 'deepmerge';
import { DarkTheme as PaperDarkTheme } from 'react-native-paper';

import type { Theme } from '../../types';

export const DarkTheme: Theme = merge(
  merge(PaperDarkTheme, NavigationDarkTheme),
  {},
);
