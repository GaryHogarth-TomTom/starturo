import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { Dropdown } from '#app/components/Dropdown';

import { ALLOWED_THEME_MODE_OPTIONS, ThemeModeOption } from '../config';
import { getThemeMode, setThemeMode } from '../store/themeSlice';

export const ThemeModePicker = () => {
  const { i18n, t } = useTranslation();
  const data = React.useMemo(
    () =>
      ALLOWED_THEME_MODE_OPTIONS.map((theme: ThemeModeOption) => ({
        label: t(`theming.themeMode.${theme}`),
        value: theme,
      })),
    [i18n.language],
  );
  const themeMode = useSelector(getThemeMode);
  const dispatch = useDispatch();

  return (
    <Dropdown
      label={t('theming.themeMode.label')}
      onSelect={(value: ThemeModeOption) => dispatch(setThemeMode(value))}
      selectedValue={themeMode}
      data={data}
    />
  );
};
