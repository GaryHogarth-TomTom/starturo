import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Title, Paragraph } from 'react-native-paper';

import { NavigatorParams } from '#app/core/navigation';

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
