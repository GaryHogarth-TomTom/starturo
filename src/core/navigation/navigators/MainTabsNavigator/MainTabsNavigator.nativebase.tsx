import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
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
          tabBarIcon: props => (
            <Icon
              as={Ionicons}
              name="home-outline"
              size={6}
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          ),
        }}
        component={HomeScreen}
      />
      <BottomTabs.Screen
        name="Profile"
        options={{
          title: t('screens.profile'),
          tabBarIcon: props => (
            <Icon
              as={Ionicons}
              name="person-outline"
              size={6}
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          ),
        }}
        component={ProfileScreen}
      />
      <BottomTabs.Screen
        name="Bookmarks"
        options={{
          title: t('screens.bookmarks'),
          tabBarIcon: props => (
            <Icon
              as={Ionicons}
              name="bookmarks-outline"
              size={6}
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          ),
        }}
        component={BookmarksScreen}
      />
      <BottomTabs.Screen
        name="Preferences"
        options={{
          title: t('screens.preferences'),
          tabBarIcon: props => (
            <Icon
              as={Ionicons}
              name="settings-outline"
              size={6}
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          ),
        }}
        component={PreferencesScreen}
      />
    </BottomTabs.Navigator>
  );
};
