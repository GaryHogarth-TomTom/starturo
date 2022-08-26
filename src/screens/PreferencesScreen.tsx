import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { VStack } from 'native-base';
import { useTranslation } from 'react-i18next';

import { LanguagePicker } from '#app/core/i18n/components/LanguagePicker';
import { NavigatorParams } from '#app/core/navigation';
import { ThemeModePicker } from '#app/core/theming/components/ThemeModePicker';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Preferences'>;
};

export const PreferencesScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  return (
    <VStack p="2" space="2" alignItems="center">
      <LanguagePicker />
      <ThemeModePicker />
    </VStack>
  );
};
