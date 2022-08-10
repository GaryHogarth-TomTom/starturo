import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, ThemeType } from '@ui-kitten/components';
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

  return (
    <ApplicationProvider {...eva} theme={theme}>
      <PaperProvider>
        <ThemeListener />
        <LanguageListener />
        <NavigationView />
      </PaperProvider>
    </ApplicationProvider>
  );
};
