import React from 'react';

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { Icon } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

import { BookmarksScreen } from '#app/screens/BookmarksScreen';
import { HomeScreen } from '#app/screens/HomeScreen';
import { PreferencesScreen } from '#app/screens/PreferencesScreen';
import { ProfileScreen } from '#app/screens/ProfileScreen';

import { BottomTabBar } from './components/BottomTabBar';

export type MainTabsNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Preferences: undefined;
  Bookmarks: undefined;
};

const Tabs = createBottomTabNavigator<MainTabsNavigatorParams>();

export const MainTabsNavigator = () => {
  const { t } = useTranslation();
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      // screenOptions={{ headerShown: false }}
      tabBar={(props: BottomTabBarProps) => <BottomTabBar {...props} />}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: t('screens.home'),
          tabBarIcon: props => <Icon {...props} name="home-outline" />,
        }}
        component={HomeScreen}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: t('screens.profile'),
          tabBarIcon: props => <Icon {...props} name="person-outline" />,
        }}
        component={ProfileScreen}
      />
      <Tabs.Screen
        name="Bookmarks"
        options={{
          title: t('screens.bookmarks'),
          tabBarIcon: props => <Icon {...props} name="bookmark-outline" />,
        }}
        component={BookmarksScreen}
      />
      <Tabs.Screen
        name="Preferences"
        options={{
          title: t('screens.preferences'),
          tabBarIcon: props => <Icon {...props} name="settings-2-outline" />,
        }}
        component={PreferencesScreen}
      />
    </Tabs.Navigator>
  );
};
