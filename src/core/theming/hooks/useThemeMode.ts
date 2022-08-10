import React from 'react';

import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import { ThemeMode } from '../config';
import { getThemeMode } from '../store/themeSlice';

export const useThemeMode = (): ThemeMode => {
  const themeMode = useSelector(getThemeMode);
  const systemTheme = useColorScheme();

  return React.useMemo(() => {
    if (themeMode === 'system') {
      if (systemTheme === 'dark' || systemTheme === 'light') {
        return systemTheme;
      } else {
        return 'light';
      }
    }
    return themeMode;
  }, [systemTheme, themeMode]);
};
