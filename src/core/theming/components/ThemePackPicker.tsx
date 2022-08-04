import React from 'react';

import { useTranslation } from 'react-i18next';
import DropDown from 'react-native-paper-dropdown';
import { useSelector, useDispatch } from 'react-redux';

import { ALLOWED_THEME_PACKS } from '../config';
import { setThemePack, getThemePack } from '../store/themeSlice';

export const ThemePackPicker = () => {
  const { i18n, t } = useTranslation();
  const themeList = React.useMemo(
    () =>
      ALLOWED_THEME_PACKS.map((theme: string) => ({
        label: t(`theming.themePack.${theme}`),
        value: theme,
      })),
    [i18n.language],
  );
  const themePack = useSelector(getThemePack);
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = React.useState(false);
  return themeList ? (
    <DropDown
      label={t('theming.themePack.label')}
      mode={'outlined'}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={themePack}
      setValue={newValue => dispatch(setThemePack(newValue))}
      list={themeList}
    />
  ) : null;
};
