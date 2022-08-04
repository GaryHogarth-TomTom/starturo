import React from 'react';
import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import DropDown from 'react-native-paper-dropdown';
import { useSelector, useDispatch } from 'react-redux';

import { SUPPORTED_LANGUAGES } from '../i18n';
import { getLanguage, setLanguage } from '../store/i18nSlice';
import { nativeLanguageNames } from '../utils/languageMap';

export const LanguagePicker = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const languageList = useMemo(
    () =>
      SUPPORTED_LANGUAGES.map((locale: string) => ({
        label: nativeLanguageNames?.[locale]?.nativeName ?? locale,
        value: locale,
      })),
    [],
  );
  const [showDropDown, setShowDropDown] = React.useState(false);
  return languageList ? (
    <DropDown
      label={t('i18n.language')}
      mode={'outlined'}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={language}
      setValue={(value: string) => dispatch(setLanguage(value))}
      list={languageList}
    />
  ) : null;
};
