import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'native-base';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BookmarksScreen } from '#app/screens/BookmarksScreen';
import { HomeScreen } from '#app/screens/HomeScreen';
import { PreferencesScreen } from '#app/screens/PreferencesScreen';
import { ProfileScreen } from '#app/screens/ProfileScreen';

const BottomTabs = createMaterialTopTabNavigator<MainTabsNavigatorParams>();

export type MainTabsNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Preferences: undefined;
  Bookmarks: undefined;
};
export const MainTabsNavigator = () => {
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      // tabBar={props => <TabBar {...props} />}
      screenOptions={{
        tabBarStyle: {
          paddingBottom: bottom / 2,
          borderBottomWidth: 0,
        },
        tabBarIconStyle: {
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: 'none',
          textAlign: 'center',
          marginHorizontal: 0,
        },
        tabBarIndicatorStyle: { top: 0 },
        // tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        options={{
          title: t('screens.home'),
          tabBarIcon: props => (
            <Icon
              as={Ionicons}
              name="home-outline"
              size={5}
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
              size={5}
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
              size={5}
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
              size={5}
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
