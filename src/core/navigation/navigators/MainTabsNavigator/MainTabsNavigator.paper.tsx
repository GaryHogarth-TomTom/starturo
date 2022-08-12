import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTranslation } from 'react-i18next';

import { BookmarksScreen } from '#app/screens/BookmarksScreen';
import { HomeScreen } from '#app/screens/HomeScreen';
import { PreferencesScreen } from '#app/screens/PreferencesScreen';
import { ProfileScreen } from '#app/screens/ProfileScreen';

export type MainTabsNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Preferences: undefined;
  Bookmarks: undefined;
};

const MaterialTabs =
  createMaterialBottomTabNavigator<MainTabsNavigatorParams>();

export const MainTabsNavigator = () => {
  const { t } = useTranslation();
  return (
    <MaterialTabs.Navigator initialRouteName="Home">
      <MaterialTabs.Screen
        name="Home"
        options={{
          title: t('screens.home'),
          tabBarIcon: 'home-outline',
        }}
        component={HomeScreen}
      />
      <MaterialTabs.Screen
        name="Profile"
        options={{
          title: t('screens.profile'),
          tabBarIcon: 'account-outline',
        }}
        component={ProfileScreen}
      />
      <MaterialTabs.Screen
        name="Bookmarks"
        options={{
          title: t('screens.bookmarks'),
          tabBarIcon: 'bookmark-outline',
        }}
        component={BookmarksScreen}
      />
      <MaterialTabs.Screen
        name="Preferences"
        options={{
          title: t('screens.preferences'),
          tabBarIcon: 'tune',
        }}
        component={PreferencesScreen}
      />
    </MaterialTabs.Navigator>
  );
};
