import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Title, Paragraph } from 'react-native-paper';

import { NavigatorParams } from '#app/features/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Preferences'>;
};

export const PreferencesScreen = ({ navigation }: Props) => {
  return (
    <>
      <Card onPress={() => navigation?.push('List')}>
        <Card.Content>
          <Title>Preferences</Title>
          <Paragraph>Preferences Screen</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};
