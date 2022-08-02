import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

import { StackNavigationProp } from '@react-navigation/stack';

import { NavigatorParams } from '../navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Home'>;
};

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <>
      <Card onPress={() => navigation?.push('List')}>
        <Card.Content>
          <Title>Home</Title>
          <Paragraph>Home Screen</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};
