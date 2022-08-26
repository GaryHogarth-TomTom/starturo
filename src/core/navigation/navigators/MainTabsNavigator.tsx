import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'native-base';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BookmarksScreen } from '#app/screens/BookmarksScreen';
import { HomeScreen } from '#app/screens/HomeScreen';
import ProductScreen from '#app/screens/nativebase-starter/ProductScreen';

const BottomTabs = createMaterialTopTabNavigator<MainTabsNavigatorParams>();

export type MainTabsNavigatorParams = {
  Home: undefined;
  Diary: undefined;
  Product: undefined;
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
      }}
    >
      <BottomTabs.Screen
        name="Home"
        options={{
          title: t('screens.home'),
          tabBarIcon: props => (
            <Icon as={Ionicons} name="home-outline" size={5} />
          ),
        }}
        component={HomeScreen}
      />
      <BottomTabs.Screen
        name="Product"
        component={ProductScreen}
        options={{
          title: t('screens.shop'),
          tabBarIcon: props => (
            <Icon as={Ionicons} name="basket-outline" size={5} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Bookmarks"
        options={{
          title: t('screens.bookmarks'),
          tabBarIcon: props => (
            <Icon as={Ionicons} name="bookmarks-outline" size={5} />
          ),
        }}
        component={BookmarksScreen}
      />
    </BottomTabs.Navigator>
  );
};
