import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Center } from 'native-base';

import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Home'>;
};

export const HomeScreen = ({ navigation }: Props) => {
  return <Center flex={1}>Home</Center>;
};
