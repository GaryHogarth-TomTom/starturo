import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { List } from 'react-native-paper';

import { LanguagePicker } from '#app/core/i18n/components/LanguagePicker';
import { NavigatorParams } from '#app/core/navigation';
import { DarkModeSwitch } from '#app/core/theming/components/DarkModeSwitch';
import { ThemePicker } from '#app/core/theming/components/ThemePicker';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Preferences'>;
};

export const PreferencesScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <List.Section>
        <List.Subheader>{t('preferences.main.heading')}</List.Subheader>
        <View style={{ paddingHorizontal: 12 }}>
          <LanguagePicker />
        </View>
      </List.Section>
      <List.Section>
        <List.Subheader>{t('preferences.theming.heading')}</List.Subheader>
        <View style={{ paddingHorizontal: 12 }}>
          <ThemePicker />
        </View>
        <List.Item
          title={t('preferences.theming.darkMode')}
          right={() => <DarkModeSwitch />}
        />
      </List.Section>
    </>
  );
};
