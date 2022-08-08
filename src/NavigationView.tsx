import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@ui-kitten/components';

import { RootNavigator } from '#app/core/navigation';
import { useThemeMode } from '#app/core/theming';

export const NavigationView = () => {
  const themeMode = useThemeMode();
  const theme = useTheme();
  return (
    <NavigationContainer
      theme={{
        dark: themeMode === 'dark',
        colors: {
          primary: theme['color-primary-500'],
          background: theme['background-basic-color-1'],
          card: theme['background-basic-color-1'],
          text: theme['text-basic-color'],
          border: theme['color-basic-default-border'],
          notification: theme['color-info-500'],
        },
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
