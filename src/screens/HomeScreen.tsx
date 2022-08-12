import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Box } from 'native-base';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Home'>;
};

export const HomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const navigateBack = () => {
    navigation.goBack();
  };

  return <Box>Home</Box>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
