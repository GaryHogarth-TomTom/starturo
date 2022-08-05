import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { MapSearchScreen } from '#app/screens/MapSearchScreen';

import { MainTabsNavigator } from './MainTabsNavigator';

export type RootNavigatorParams = {
  MapSearch: undefined;
  MapSearchResults: undefined;
};

const Stack = createStackNavigator<RootNavigatorParams>();

export const BottomSheetNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="MapSearch" component={MapSearchScreen} />
  </Stack.Navigator>
);
