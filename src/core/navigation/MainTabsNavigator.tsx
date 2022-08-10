import React from 'react';

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUXLibrary } from '#app/core/theming';
import { UXLibrary } from '#app/core/theming/config';
import { BookmarksScreen } from '#app/screens/BookmarksScreen';
import { HomeScreen } from '#app/screens/HomeScreen';
import { PreferencesScreen } from '#app/screens/PreferencesScreen';
import { ProfileScreen } from '#app/screens/ProfileScreen';

import { BottomTabBar } from './components/BottomTabBar/BottomTabBar.kitten';

export type MainTabsNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Preferences: undefined;
  Bookmarks: undefined;
};

const BottomTabs = createBottomTabNavigator<MainTabsNavigatorParams>();
const MaterialTabs =
  createMaterialBottomTabNavigator<MainTabsNavigatorParams>();

export const MainTabsNavigator = () => {
  const uxLibrary: UXLibrary = useSelector(getUXLibrary);
  const { t } = useTranslation();
  const Tabs = uxLibrary === 'paper' ? MaterialTabs : BottomTabs;
  if (uxLibrary === 'paper') {
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
  } else {
    return (
      <BottomTabs.Navigator
        initialRouteName="Home"
        // screenOptions={{ headerShown: false }}
        tabBar={(props: BottomTabBarProps) => <BottomTabBar {...props} />}
      >
        <BottomTabs.Screen
          name="Home"
          options={{
            title: t('screens.home'),
            tabBarIcon: props => <Icon {...props} name="home-outline" />,
          }}
          component={HomeScreen}
        />
        <BottomTabs.Screen
          name="Profile"
          options={{
            title: t('screens.profile'),
            tabBarIcon: props => <Icon {...props} name="person-outline" />,
          }}
          component={ProfileScreen}
        />
        <BottomTabs.Screen
          name="Bookmarks"
          options={{
            title: t('screens.bookmarks'),
            tabBarIcon: props => <Icon {...props} name="bookmark-outline" />,
          }}
          component={BookmarksScreen}
        />
        <BottomTabs.Screen
          name="Preferences"
          options={{
            title: t('screens.preferences'),
            tabBarIcon: props => <Icon {...props} name="settings-2-outline" />,
          }}
          component={PreferencesScreen}
        />
      </BottomTabs.Navigator>
    );
  }
};
