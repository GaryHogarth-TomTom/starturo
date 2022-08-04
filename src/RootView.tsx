import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { LanguageListener } from '#app/core/i18n/';
import { RootNavigator } from '#app/core/navigation';
import { themeLibrary, getThemePack } from '#app/core/theming';

import { useThemeMode } from './core/theming/hooks/useThemeMode';

export const RootView = () => {
  const themePack = useSelector(getThemePack);

  const themeMode = useThemeMode();

  const theme =
    themeMode === 'dark'
      ? themeLibrary?.[themePack].dark
      : themeLibrary?.[themePack].light;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <LanguageListener />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
