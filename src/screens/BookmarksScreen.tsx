import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

import { StackNavigationProp } from '@react-navigation/stack';

import { NavigatorParams } from '../navigation';

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
