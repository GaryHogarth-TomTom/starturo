import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

import { StackNavigationProp } from '@react-navigation/stack';

import { NavigatorParams } from '../navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Profile'>;
};

export const ProfileScreen = ({ navigation }: Props) => {
  return (
    <>
      <Card onPress={() => navigation?.push('List')}>
        <Card.Content>
          <Title>Profile</Title>
          <Paragraph>Profile Screen</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};
