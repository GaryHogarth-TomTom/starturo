import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { LanguagePicker } from '#app/core/i18n/components/LanguagePicker';
import { NavigatorParams } from '#app/core/navigation';
import { ThemeModePicker } from '#app/core/theming/components/ThemeModePicker';
import { ThemePackPicker } from '#app/core/theming/components/ThemePackPicker';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Preferences'>;
};

export const PreferencesScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <LanguagePicker />
      <ThemePackPicker />
      <ThemeModePicker />
    </>
  );
};
