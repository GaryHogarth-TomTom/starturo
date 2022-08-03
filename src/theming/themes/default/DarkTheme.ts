import { DarkTheme as PaperDarkTheme } from 'react-native-paper';

import merge from 'deepmerge';

import type { Theme } from '../types';

export const DarkTheme: Theme = merge(PaperDarkTheme, {});
