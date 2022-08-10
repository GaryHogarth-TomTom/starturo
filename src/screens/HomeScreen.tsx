import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Layout, Text, Button, TopNavigation } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { NavigatorParams } from '#app/core/navigation';
import { setThemeMode } from '#app/core/theming';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Home'>;
};

export const HomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={styles.container}>
        <Text category="h1">DETAILS</Text>
        <Button onPress={() => dispatch(setThemeMode('light'))}>
          Light Mode
        </Button>
        <Button onPress={() => dispatch(setThemeMode('dark'))}>
          Dark Mode
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
