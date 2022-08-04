import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { i18nConfig } from '#app/core/i18n';
import { RootNavigator } from '#app/core/navigation/RootNavigator';
import { themeLibrary } from '#app/core/theming';

import { LanguageListener } from './core/i18n/components/LanguageListener';
import {
  getIsDarkModeEnabled,
  getTheme,
} from './core/theming/store/themeSlice';

export const RootView = () => {
  const isDarkModeEnabled = useSelector(getIsDarkModeEnabled);
  const themeName = useSelector(getTheme);

  let theme = isDarkModeEnabled
    ? themeLibrary?.[themeName].dark
    : themeLibrary?.[themeName].light;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <LanguageListener />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
