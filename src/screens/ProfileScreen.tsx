import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Center, Text } from 'native-base';

import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Profile'>;
};

export const ProfileScreen = ({ navigation }: Props) => {
  return <Center flex={1}>Profile</Center>;
};
