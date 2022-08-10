import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { Dropdown } from '#app/components/Dropdown';

import { ALLOWED_THEME_PACKS, ThemePack } from '../config';
import { setThemePack, getThemePack } from '../store/themeSlice';

export const ThemePackPicker = () => {
  const { i18n, t } = useTranslation();
  const data = React.useMemo(
    () =>
      ALLOWED_THEME_PACKS.map((theme: ThemePack) => ({
        label: t(`theming.themePack.${theme}`),
        value: theme,
      })),
    [i18n.language],
  );
  const themePack = useSelector(getThemePack);
  const dispatch = useDispatch();
  return (
    <Dropdown
      label={t('theming.themePack.label')}
      onSelect={(value: ThemePack) => dispatch(setThemePack(value))}
      selectedValue={themePack}
      data={data}
    />
  );
};
