import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '#app/core/auth/hooks/useAuth';
import { AuthScreen } from '#app/core/auth/screens/AuthScreen';
import { ProfileScreen } from '#app/screens/ProfileScreen';

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
      {!user && (
        <>
          <Stack.Screen name="SignIn">
            {props => <AuthScreen action="signin" {...props} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp">
            {props => <AuthScreen action="signup" {...props} />}
          </Stack.Screen>
        </>
      )}
      {user && <Stack.Screen name="Profile" component={ProfileScreen} />}
    </Stack.Navigator>
  );
};
