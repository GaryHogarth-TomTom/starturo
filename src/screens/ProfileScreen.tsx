import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Center, Text } from 'native-base';
import { useSignOut } from 'react-supabase';

import { useAuth } from '#app/core/auth/hooks/useAuth';
import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Profile'>;
};

export const ProfileScreen = ({ navigation }: Props) => {
  const [{ error, fetching }, signOut] = useSignOut();
  const { user } = useAuth();
  return (
    <Center flex={1}>
      <Text>Profile</Text>
      {user ? (
        <Button onPress={signOut}>Sign Out</Button>
      ) : (
        <Button onPress={() => navigation.navigate('SignIn')}>Sign In</Button>
      )}
    </Center>
  );
};
