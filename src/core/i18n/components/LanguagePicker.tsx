import React, { useEffect } from 'react';

import { IndexPath, Select, SelectItem, Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { SUPPORTED_LANGUAGES, Language } from '../i18n';
import { getLanguage, setLanguage } from '../store/i18nSlice';
import { nativeLanguageNames } from '../utils/languageMap';

export const LanguagePicker = () => {
  const { i18n, t } = useTranslation();
  const data = React.useMemo(
    () =>
      SUPPORTED_LANGUAGES.map((language: Language) => ({
        label: nativeLanguageNames?.[language]?.nativeName ?? language,
        value: language,
      })),
    [],
  );
  const selectedLanguage = useSelector(getLanguage);
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0),
  );

  useEffect(() => {
    setSelectedIndex(
      new IndexPath(data.findIndex(item => item.value === selectedLanguage)),
    );
  }, [data, selectedLanguage]);

  return data ? (
    <>
      <Text category="label">{t('i18n.language')}</Text>
      <Select
        value={data[selectedIndex.row]?.label}
        onSelect={index => {
          if (!Array.isArray(index)) {
            dispatch(setLanguage(data[index.row]?.value));
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

// export const LanguagePicker = () => {
//   const { t } = useTranslation();
//   const dispatch = useDispatch();
//   const language = useSelector(getLanguage);
//   const languageList = useMemo(
//     () =>
//       SUPPORTED_LANGUAGES.map((locale: string) => ({
//         label: nativeLanguageNames?.[locale]?.nativeName ?? locale,
//         value: locale,
//       })),
//     [],
//   );
//   const [showDropDown, setShowDropDown] = React.useState(false);
//   return languageList ? (
//     <DropDown
//       label={t('i18n.language')}
//       mode={'outlined'}
//       visible={showDropDown}
//       showDropDown={() => setShowDropDown(true)}
//       onDismiss={() => setShowDropDown(false)}
//       value={language}
//       setValue={(value: string) => dispatch(setLanguage(value))}
//       list={languageList}
//     />
//   ) : null;
// };
