import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { List } from '#app/screens/List';

import { MainTabsNavigator } from './MainTabsNavigator';
import { DrawerContent } from './components/DrawerContent';

export type RootNavigatorParams = {
  MainTabs: undefined;
  List: undefined;
};

const Stack = createDrawerNavigator<RootNavigatorParams>();

export const RootNavigator = () => (
  <Stack.Navigator
    drawerContent={(props: DrawerContentComponentProps) => (
      <DrawerContent {...props} />
    )}
  >
    <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
    <Stack.Screen name="List" component={List} />
  </Stack.Navigator>
);
