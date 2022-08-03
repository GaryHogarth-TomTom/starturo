import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Preferences'>;
};

export const PreferencesScreen = ({ navigation }: Props) => {
  const { i18n } = useTranslation();
  return (
    <>
      <Card onPress={() => navigation?.push('List')}>
        <Card.Content>
          <Title>Preferences</Title>
          <Paragraph>Preferences Screen</Paragraph>
        </Card.Content>
      </Card>
      <Button onPress={() => i18n.changeLanguage('es')}>Test</Button>
    </>
  );
};
