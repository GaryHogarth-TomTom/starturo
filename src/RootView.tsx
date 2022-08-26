import React from 'react';

import {
  NativeBaseProvider,
  StorageManager,
  ColorMode,
  extendTheme,
} from 'native-base';
import { useDispatch } from 'react-redux';

import { LanguageListener } from '#app/core/i18n/';
import { setThemeMode } from '#app/core/theming';
import { ThemeListener } from '#app/core/theming/components/ThemeListener';
import { useThemeMode } from '#app/core/theming/hooks/useThemeMode';
import { theme as defaultTheme } from '#app/core/theming/themes/default';

import { NavigationView } from './NavigationView';

export const RootView = () => {
  const dispatch = useDispatch();

  const themeMode = useThemeMode();

  const theme = extendTheme(defaultTheme);

  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        return themeMode === 'dark' ? 'dark' : 'light';
      } catch (e) {
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        dispatch(setThemeMode(value === 'dark' ? 'dark' : 'light'));
      } catch (e) {
        console.log(e);
      }
    },
  };

  return (
    <NativeBaseProvider colorModeManager={colorModeManager} theme={theme}>
      <ThemeListener />
      <LanguageListener />
      <NavigationView />
    </NativeBaseProvider>
  );
};
