import React, { useState } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { Checkbox, FormControl, Text, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getShowAds, setShowAds } from '#app/core/auth/store/userSlice';
import { LanguagePicker } from '#app/core/i18n/components/LanguagePicker';
import { NavigatorParams } from '#app/core/navigation';
import { ThemeModePicker } from '#app/core/theming/components/ThemeModePicker';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Preferences'>;
};

export const PreferencesScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const showAds = useSelector(getShowAds);
  return (
    <VStack p="2" space="2" alignItems="center">
      <LanguagePicker />
      <ThemeModePicker />
      <FormControl>
        <FormControl.Label>Show Ads</FormControl.Label>
        <Checkbox
          value="showAds"
          isChecked={showAds}
          onChange={() => dispatch(setShowAds(!showAds))}
        >
          <Text ml={2}>Show adverts in the app</Text>
        </Checkbox>
      </FormControl>
    </VStack>
  );
};
