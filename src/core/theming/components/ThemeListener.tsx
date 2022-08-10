import React from 'react';

import { useColorMode } from 'native-base';
import { useSelector } from 'react-redux';

import { useThemeMode } from '../hooks/useThemeMode';
import { getThemeMode } from '../store/themeSlice';

export const ThemeListener = () => {
  const { setColorMode } = useColorMode();
  const themeMode = useThemeMode();
  React.useEffect(() => {
    setColorMode(themeMode);
  }, [themeMode]);
  return null;
};
