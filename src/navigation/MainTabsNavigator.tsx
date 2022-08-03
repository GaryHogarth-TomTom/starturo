import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from '@react-navigation/native';

import { BookmarksScreen } from '../screens/BookmarksScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { PreferencesScreen } from '../screens/PreferencesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

export type MainTabsNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Preferences: undefined;
  Bookmarks: undefined;
};

const Tabs = createMaterialBottomTabNavigator<MainTabsNavigatorParams>();

export const MainTabsNavigator = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Home"
      options={{
        title: 'Home',
        tabBarIcon: 'home',
      }}
      component={HomeScreen}
    />
    <Tabs.Screen
      name="Profile"
      options={{
        title: 'Profile',
        tabBarIcon: 'account-outline',
      }}
      component={ProfileScreen}
    />
    <Tabs.Screen
      name="Bookmarks"
      options={{
        title: 'Bookmarks',
        tabBarIcon: 'bookmark-outline',
      }}
      component={BookmarksScreen}
    />
    <Tabs.Screen
      name="Preferences"
      options={{
        title: 'Preferences',
        tabBarIcon: 'tune',
      }}
      component={PreferencesScreen}
    />
  </Tabs.Navigator>
);
