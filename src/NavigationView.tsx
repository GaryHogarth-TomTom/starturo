import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { Box, Center, useTheme } from 'native-base';

import { RootNavigator } from '#app/core/navigation';
import { AppBar } from '#app/core/navigation/components/AppBar';
import { useThemeMode } from '#app/core/theming';

const prefix = Linking.createURL('/');

export const NavigationView = () => {
  const themeMode = useThemeMode();
  const theme = useTheme();
  const isDark = themeMode === 'dark';
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        OTP: 'otp',
        Root: {
          screens: {
            Tabs: {
              screens: {
                Profile: 'user',
                Home: 'home',
                Bookmarks: 'bookmarks',
                Preferences: 'user/settings',
              },
            },
            SignIn: 'sign-in',
            SignUp: 'register',
            Product: 'product',
          },
        },
      },
    },
  };
  return (
    <NavigationContainer
      //@ts-ignore
      linking={linking}
      theme={{
        dark: isDark,
        colors: {
          primary: isDark ? theme.colors.primary[50] : theme.colors.dark[50],
          background: isDark ? theme.colors.dark[50] : theme.colors.primary[50],
          card: isDark ? theme.colors.dark[50] : theme.colors.primary[50],
          text: isDark ? theme.colors.primary[50] : theme.colors.dark[50],
          border: 'transparent',
          notification: isDark
            ? theme.colors.dark[50]
            : theme.colors.primary[50],
        },
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
