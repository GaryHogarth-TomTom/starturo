import React from 'react';

import { Switch } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { setDarkMode, getIsDarkModeEnabled } from '../store/themeSlice';

export const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkModeEnabled = useSelector(getIsDarkModeEnabled);
  return (
    <Switch
      value={isDarkModeEnabled}
      onValueChange={(value: boolean) => {
        dispatch(setDarkMode(value));
      }}
    />
  );
};
