import React, { useEffect } from 'react';

import { IndexPath, Select, SelectItem, Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

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
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0),
  );

  useEffect(() => {
    setSelectedIndex(
      new IndexPath(data.findIndex(item => item.value === themeMode)),
    );
  }, [data, themeMode]);

  return data ? (
    <>
      <Text category="label">{t('theming.themeMode.label')}</Text>
      <Select
        value={data[selectedIndex.row]?.label}
        onSelect={index => {
          if (!Array.isArray(index)) {
            dispatch(setThemeMode(data[index.row]?.value));
          }
        }}
      >
        {data.map((item, i) => (
          <SelectItem key={item.value} title={item.label} />
        ))}
      </Select>
    </>
  ) : null;
};
