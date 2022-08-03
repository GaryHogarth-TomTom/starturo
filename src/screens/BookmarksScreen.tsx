import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Title, Paragraph } from 'react-native-paper';

import { NavigatorParams } from '#app/features/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Bookmarks'>;
};

export const BookmarksScreen = ({ navigation }: Props) => {
  return (
    <>
      <Card onPress={() => navigation?.push('List')}>
        <Card.Content>
          <Title>Bookmarks</Title>
          <Paragraph>Bookmarks Screen</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};
