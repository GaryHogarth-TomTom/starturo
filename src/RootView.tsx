import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, ThemeType } from '@ui-kitten/components';
import {
  NativeBaseProvider,
  Text,
  Box,
  StorageManager,
  ColorMode,
} from 'native-base';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { LanguageListener } from '#app/core/i18n/';
import { themeLibrary, getThemePack } from '#app/core/theming';

import { NavigationView } from './NavigationView';
import { ThemeListener } from './core/theming/components/ThemeListener';
import { useThemeMode } from './core/theming/hooks/useThemeMode';

export const RootView = () => {
  const themePack = useSelector(getThemePack);

  const themeMode = useThemeMode();

  const theme: ThemeType =
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
        // await AsyncStorage.setItem('@my-app-color-mode', value);
      } catch (e) {
        console.log(e);
      }
    },
  };

  return (
    <ApplicationProvider {...eva} theme={theme}>
      <PaperProvider>
        <NativeBaseProvider colorModeManager={colorModeManager}>
          <ThemeListener />
          <LanguageListener />
          <NavigationView />
        </NativeBaseProvider>
      </PaperProvider>
    </ApplicationProvider>
  );
};
