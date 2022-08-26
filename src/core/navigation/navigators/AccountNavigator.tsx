import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '#app/core/auth/hooks/useAuth';
import { SignIn } from '#app/core/auth/screens/SignIn';
import { ProfileScreen } from '#app/screens/ProfileScreen';
import { SignUp } from '#app/screens/nativebase-starter/SignUp';

export type AccountNavigatorParams = {
  SignIn: undefined;
  SignUp: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<AccountNavigatorParams>();

export const AccountNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user && <Stack.Screen name="SignIn" component={SignIn} />}
      {!user && <Stack.Screen name="SignUp" component={SignUp} />}
      {user && <Stack.Screen name="Profile" component={ProfileScreen} />}
    </Stack.Navigator>
  );
};
