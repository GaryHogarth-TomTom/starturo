import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getLanguage } from '../store/i18nSlice';

export const LanguageListener = () => {
  const { i18n } = useTranslation();
  const language = useSelector(getLanguage);
  React.useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [i18n.language, language]);
  return null;
};
