import React from 'react';

import { useTranslation } from 'react-i18next';
import DropDown from 'react-native-paper-dropdown';
import { useSelector, useDispatch } from 'react-redux';

import { ALLOWED_THEME_MODES } from '../config';
import { getThemeMode, setThemeMode } from '../store/themeSlice';

export const ThemeModePicker = () => {
  const { i18n, t } = useTranslation();
  const themeList = React.useMemo(
    () =>
      ALLOWED_THEME_MODES.map((theme: string) => ({
        label: t(`theming.themeMode.${theme}`),
        value: theme,
      })),
    [i18n.language, ALLOWED_THEME_MODES],
  );
  const themeMode = useSelector(getThemeMode);
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = React.useState(false);
  return themeList ? (
    <DropDown
      label={t('theming.themeMode.label')}
      mode={'outlined'}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={themeMode}
      setValue={newValue => dispatch(setThemeMode(newValue))}
      list={themeList}
    />
  ) : null;
};
