import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';

import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Profile'>;
};

export const ProfileScreen = ({ navigation }: Props) => {
  return <></>;
};
