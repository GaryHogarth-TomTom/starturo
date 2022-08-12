import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import { useTranslation } from 'react-i18next';

import { BookmarksScreen } from '#app/screens/BookmarksScreen';
import { HomeScreen } from '#app/screens/HomeScreen';
import { PreferencesScreen } from '#app/screens/PreferencesScreen';
import { ProfileScreen } from '#app/screens/ProfileScreen';

import { MainTabsNavigatorParams } from '.';

const BottomTabs = createBottomTabNavigator<MainTabsNavigatorParams>();

export const MainTabsNavigator = () => {
  const { t } = useTranslation();
  return (
    <BottomTabs.Navigator initialRouteName="Home">
      <BottomTabs.Screen
        name="Home"
        options={{
          title: t('screens.home'),
          tabBarIcon: props => <Icon name="home" />,
        }}
        component={HomeScreen}
      />
      <BottomTabs.Screen
        name="Profile"
        options={{
          title: t('screens.profile'),
          tabBarIcon: props => <Icon name="person" />,
        }}
        component={ProfileScreen}
      />
      <BottomTabs.Screen
        name="Bookmarks"
        options={{
          title: t('screens.bookmarks'),
          tabBarIcon: props => <Icon name="bookmark" />,
        }}
        component={BookmarksScreen}
      />
      <BottomTabs.Screen
        name="Preferences"
        options={{
          title: t('screens.preferences'),
          tabBarIcon: props => <Icon name="settings" />,
        }}
        component={PreferencesScreen}
      />
    </BottomTabs.Navigator>
  );
};
