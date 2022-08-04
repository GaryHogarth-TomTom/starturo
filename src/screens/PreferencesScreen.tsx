import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

import { LanguagePicker } from '#app/core/i18n/components/LanguagePicker';
import { NavigatorParams } from '#app/core/navigation';
import { ThemeModePicker } from '#app/core/theming/components/ThemeModePicker';
import { ThemePackPicker } from '#app/core/theming/components/ThemePackPicker';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Preferences'>;
};

export const PreferencesScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const styles = useStyles();
  return (
    <>
      <List.Section>
        <List.Subheader>{t('preferences.main.heading')}</List.Subheader>
        <View style={styles.container}>
          <LanguagePicker />
        </View>
        <View style={styles.container}>
          <ThemeModePicker />
        </View>
        <View style={styles.container}>
          <ThemePackPicker />
        </View>
      </List.Section>
    </>
  );
};

const useStyles = () =>
  React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 12,
        },
      }),
    [],
  );
