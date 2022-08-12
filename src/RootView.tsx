import React from 'react';

import { NativeBaseProvider, StorageManager, ColorMode } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import { LanguageListener } from '#app/core/i18n/';
import { themeLibrary, getThemePack, setThemeMode } from '#app/core/theming';

import { NavigationView } from './NavigationView';
import { ThemeListener } from './core/theming/components/ThemeListener';
import { ALLOWED_THEME_MODES } from './core/theming/config';
import { useThemeMode } from './core/theming/hooks/useThemeMode';

export const RootView = () => {
  const themePack = useSelector(getThemePack);
  const dispatch = useDispatch();

  const themeMode = useThemeMode();

  const theme =
    themeMode === 'dark'
      ? themeLibrary[themePack].dark
      : themeLibrary[themePack].light;

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
    <NativeBaseProvider colorModeManager={colorModeManager}>
      <ThemeListener />
      <LanguageListener />
      <NavigationView />
    </NativeBaseProvider>
  );
};
