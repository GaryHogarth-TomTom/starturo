import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OtpVerification from '#app/screens/nativebase-starter/OTP';
import SignUp from '#app/screens/nativebase-starter/SignUp';

import { AppBar } from '../components/AppBar';
import { LeftDrawerNavigator } from './LeftDrawerNavigator';

export type RootNavigatorParams = {
  Root: undefined;
  OTP: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootNavigatorParams>();

export const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="Root"
    screenOptions={{ header: props => <AppBar {...props} /> }}
  >
    <Stack.Screen name="Root" component={LeftDrawerNavigator} />
    <Stack.Screen
      name="OTP"
      options={{
        title: 'Sample - OTP',
      }}
      component={OtpVerification}
    />
    <Stack.Screen
      name="SignUp"
      options={{ title: 'Sample - SignUp' }}
      component={SignUp}
    />
  </Stack.Navigator>
);
