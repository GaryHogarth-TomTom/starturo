import React from 'react';

import { useColorMode } from 'native-base';

import { useThemeMode } from '../hooks/useThemeMode';

export const ThemeListener = () => {
  const { setColorMode } = useColorMode();
  const themeMode = useThemeMode();
  React.useEffect(() => {
    setColorMode(themeMode);
  }, [themeMode]);
  return null;
};
