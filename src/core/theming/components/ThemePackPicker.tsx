import React, { useEffect } from 'react';

import { IndexPath, Select, SelectItem, Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

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
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0),
  );

  useEffect(() => {
    setSelectedIndex(
      new IndexPath(data.findIndex(item => item.value === themePack)),
    );
  }, [data, themePack]);

  return data ? (
    <>
      <Text category="label">{t('i18n.language')}</Text>
      <Select
        value={data[selectedIndex.row]?.label}
        onSelect={index => {
          if (!Array.isArray(index)) {
            dispatch(setThemePack(data[index.row]?.value));
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
