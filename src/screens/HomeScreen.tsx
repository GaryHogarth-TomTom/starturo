import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Card, Title, Paragraph } from 'react-native-paper';

import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Home'>;
};

export const HomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <Card onPress={() => navigation?.push('List')}>
        <Card.Content>
          <Title>{t('common.hello')}</Title>
          <Paragraph>Home Screen</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};
