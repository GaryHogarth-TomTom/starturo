import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AppBar } from '../components/AppBar';
import { LeftDrawerNavigator } from './LeftDrawerNavigator';

export type RootNavigatorParams = {
  Root: undefined;
};

const Stack = createStackNavigator<RootNavigatorParams>();

export const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="Root"
    screenOptions={{ header: props => <AppBar {...props} /> }}
  >
    <Stack.Screen name="Root" component={LeftDrawerNavigator} />
  </Stack.Navigator>
);
