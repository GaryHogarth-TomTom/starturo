import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { DrawerContent } from '../components/DrawerContent';
import { MainTabsNavigator } from './MainTabsNavigator';

export type RootNavigatorParams = {
  MainTabs: undefined;
};

const Stack = createDrawerNavigator<RootNavigatorParams>();

export const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="MainTabs"
    // screenOptions={{
    //   headerShown: false,
    // }}
    drawerContent={(props: DrawerContentComponentProps) => (
      <DrawerContent {...props} />
    )}
  >
    <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
  </Stack.Navigator>
);
