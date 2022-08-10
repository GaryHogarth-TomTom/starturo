import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Divider, Layout } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { LanguagePicker } from '#app/core/i18n/components/LanguagePicker';
import { NavigatorParams } from '#app/core/navigation';
import { ThemeModePicker } from '#app/core/theming/components/ThemeModePicker';
import { ThemePackPicker } from '#app/core/theming/components/ThemePackPicker';
import { UXLibraryPicker } from '#app/core/theming/components/UXLibaryPicker';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Preferences'>;
};

export const PreferencesScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <View style={styles.row}>
          <LanguagePicker />
        </View>
        <Divider />
        <View style={styles.row}>
          <UXLibraryPicker />
        </View>
        <View style={styles.row}>
          <ThemePackPicker />
        </View>
        <View style={styles.row}>
          <ThemeModePicker />
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    paddingHorizontal: 16,
  },
  row: {
    marginVertical: 16,
  },
});
