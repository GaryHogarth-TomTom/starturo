import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { MapScreen } from '#app/screens/MapScreen';

import { MainTabsNavigator } from './MainTabsNavigator';
import { DrawerContent } from './components/DrawerContent';

export type RootNavigatorParams = {
  MainTabs: undefined;
  Map: undefined;
};

const Stack = createDrawerNavigator<RootNavigatorParams>();

export const RootNavigator = () => (
  <Stack.Navigator
    drawerContent={(props: DrawerContentComponentProps) => (
      <DrawerContent {...props} />
    )}
  >
    <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
    <Stack.Screen name="Map" component={MapScreen} />
  </Stack.Navigator>
);
