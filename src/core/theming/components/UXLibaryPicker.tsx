import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { Dropdown } from '#app/components/Dropdown';

import { ALLOWED_UX_LIBRARIES, UXLibrary } from '../config';
import { getUXLibrary, setUXLibrary } from '../store/themeSlice';

export const UXLibraryPicker = () => {
  const { i18n, t } = useTranslation();
  const data = React.useMemo(
    () =>
      ALLOWED_UX_LIBRARIES.map((library: UXLibrary) => ({
        label: t(`theming.ux.${library}`),
        value: library,
      })),
    [i18n.language],
  );
  const uxLibrary = useSelector(getUXLibrary);
  const dispatch = useDispatch();
  return (
    <Dropdown
      label={t('theming.ux.label')}
      onSelect={(value: UXLibrary) => dispatch(setUXLibrary(value))}
      selectedValue={uxLibrary}
      data={data}
    />
  );
};
