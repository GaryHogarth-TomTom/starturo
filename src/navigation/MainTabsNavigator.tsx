import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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
  <Tabs.Navigator
    activeColor="#f0edf6"
    inactiveColor="#fff"
    barStyle={{ backgroundColor: '#694fad' }}
  >
    <Tabs.Screen
      name="Home"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name="home" color={color} size={24} />
        ),
      }}
      component={HomeScreen}
    />
    <Tabs.Screen
      name="Profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons
            name="account-outline"
            color={color}
            size={24}
          />
        ),
      }}
      component={ProfileScreen}
    />
    <Tabs.Screen
      name="Preferences"
      options={{
        title: 'Bookmarks',
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons
            name="bookmark-outline"
            color={color}
            size={24}
          />
        ),
      }}
      component={PreferencesScreen}
    />
    <Tabs.Screen
      name="Bookmarks"
      options={{
        title: 'Preferences',
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name="tune" color={color} size={24} />
        ),
      }}
      component={BookmarksScreen}
    />
  </Tabs.Navigator>
);
