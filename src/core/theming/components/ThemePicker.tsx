import React from 'react';

import { useTranslation } from 'react-i18next';
import DropDown from 'react-native-paper-dropdown';
import { useSelector, useDispatch } from 'react-redux';

import { changeTheme, getTheme } from '../store/themeSlice';
import { themeLibrary, ThemeConfig } from '../themes';

export const ThemePicker = () => {
  const { t } = useTranslation();
  const themeList = React.useMemo(
    () =>
      Object.values(themeLibrary)?.map((theme: ThemeConfig) => ({
        label: t(theme.name),
        value: theme.slug,
      })),
    [],
  );
  const themeName = useSelector(getTheme);
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = React.useState(false);
  return themeList ? (
    <DropDown
      label={t('theming.theme')}
      mode={'outlined'}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={themeName}
      setValue={newValue => dispatch(changeTheme(newValue))}
      list={themeList}
    />
  ) : null;
};
