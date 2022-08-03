import React from 'react';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { StatusBar } from 'expo-status-bar';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider as PaperProvider } from 'react-native-paper';

import { i18nConfig } from '#app/core/i18n';
import { RootNavigator } from '#app/core/navigation/RootNavigator';
import {
  ThemingContext,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from '#app/core/theming';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark, setIsThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(i18nConfig);

  return (
    <ThemingContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <NavigationContainer theme={theme}>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ThemingContext.Provider>
  );
}
