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

import { MainTabsNavigatorParams } from '.';
import { BottomTabBar } from '../../components/BottomTabBar';

const BottomTabs = createBottomTabNavigator<MainTabsNavigatorParams>();

export const MainTabsNavigator = () => {
  const { t } = useTranslation();
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
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
};
